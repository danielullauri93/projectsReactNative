import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import data from "@/assets/data.json";
import { Ionicons } from "@expo/vector-icons";
import { useCartStore } from "@/store/cartStore";

export default function TabOneScreen() {
  const { addProduct, reduceProduct, products, items, clearCart } =
    useCartStore();

  const renderItem: ListRenderItem<any> = ({ item }) => (
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
          <Ionicons name='remove' size={24} color={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => addProduct(item)}
        >
          <Ionicons name='add' size={24} color={"#000"} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
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
