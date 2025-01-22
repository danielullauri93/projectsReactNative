import { create } from "zustand";
import { Product } from "@/store/interfaces";
import { zustandStorage } from "./mmkv";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartState {
  products: Array<Product & { quantity: number }>;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
  items: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],
      items: 0,
      addProduct: (product: Product) =>
        set((state) => {
          state.items++;
          const hasProduct = state.products.find((p) => p.id === product.id); // findIndex devuelve el índice del primer elemento que cumple con la condición dada
          if (hasProduct) {
            // si el producto ya existe
            return {
              products: state.products.map((p) => {
                // mapeamos los productos
                if (p.id === product.id) {
                  // si el id del producto es igual al id del producto que queremos agregar
                  return { ...p, quantity: p.quantity + 1 }; // ...p es el producto, quantity es la cantidad, le sumamos 1
                }
                return p;
              }),
            };
          } else {
            return {
              products: [...state.products, { ...product, quantity: 1 }],
            }; // si el producto no existe, lo agregamos con cantidad 1
          }
        }),

      reduceProduct: (product: Product) =>
        set((state) => {
          // set es una función que nos permite actualizar el estado
          return {
            products: state.products // productos
              .map((p) => {
                // mapeamos los productos
                if (p.id === product.id) {
                  // si el id del producto es igual al id del producto que queremos reducir
                  state.items--; // Reducimos la cantidad de items globalmente en el carrito
                  return { ...p, quantity: p.quantity - 1 }; // Reducimos la cantidad del producto específico
                }
                return p; // Retornamos los demás productos sin cambios
              })
              .filter((p) => p.quantity > 0), // Eliminamos del estado los productos cuya cantidad sea 0
          };
        }),

      clearCart: () =>
        set(() => {
          return {
            // limpiar el carrito
            items: 0, // cantidad de productos
            products: [], // productos
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// const updatedProducts = state.products
//         .map((p) => {
//           // Si el producto coincide, reducimos la cantidad
//           if (p.id === product.id) {
//             return { ...p, quantity: p.quantity - 1 };
//           }
//           return p; // Retornamos los productos sin cambios
//         })
//         .filter((p) => p.quantity > 0); // Filtramos los productos con cantidad mayor a 0

//       // Recalculamos la cantidad total de items en el carrito
//       const updatedItems = state.items - 1;

//       return {
//         products: updatedProducts,
//         items: updatedItems,
//       };
//     }),
