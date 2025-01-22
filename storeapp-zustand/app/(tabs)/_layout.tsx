import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, TouchableOpacity, Text } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useCartStore } from "@/store/cartStore";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { items } = useCartStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerRight: () => (
            <Link href='/modal' asChild>
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
                  {items}
                </Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerRight: () => (
            <Link href='/modal' asChild>
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
                  {items}
                </Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
