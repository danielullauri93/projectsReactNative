import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCartStore } from "@/store/cartStore";
import { Product } from "../../store/interfaces";

export default function TabTwoScreen() {
  const { addProduct, reduceProduct, products } = useCartStore((state) => state);

  console.log("Productos en el carrito:", products); // Verifica los productos

  const renderItem: ListRenderItem<Product & { quantity: number }> = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{ uri: item.image }} />
      <View style={styles.itemContainer}>
        <Text style={styles.cartItemTitle}>{item.title}</Text>
        <Text>Price: {item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => reduceProduct(item)}
        >
          <Ionicons name="remove" size={24} color={"#000"} />
        </TouchableOpacity>
        <Text style={{ paddingHorizontal: 10 }}>{item.quantity}</Text>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => addProduct(item)}
        >
          <Ionicons name="add" size={24} color={"#000"} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No hay productos en el carrito
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartItemContainer: {
    marginBottom: 10,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cartItemImage: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
