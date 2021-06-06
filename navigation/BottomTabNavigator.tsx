/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { DrawerParamList, TabOneParamList, TabTwoParamList } from "../types";
import { View, StyleSheet } from "react-native";
const Drawer = createDrawerNavigator<DrawerParamList>();

export default function BottomTabNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Nak Order"
      drawerContent={(props) => <CustomDrawerComp {...props} />}
    >
      {/* tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}> */}
      <Drawer.Screen name="Nak Order" component={TabOneNavigator} />
      <Drawer.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        // options={{
        //   tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        // }}
      />
    </Drawer.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}

export const CustomDrawerComp = (props: any) => {
  const { navigation } = props;
  const { background, primary, title, cardBody, text, fontFamily, bodyFont } =
    Colors[useColorScheme()];
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: background }}>
      <View style={{ flexGrow: 10, backgroundColor: background }}>
        <DrawerItem
          label="Nak Order"
          labelStyle={[
            {
              color: primary,
              fontSize: title,
              fontFamily,
              paddingLeft: 60,
            },
            Style.bodyCard,
          ]}
          onPress={() => navigation.navigate("Home")}
        />
        <DrawerItem
          label="Orders"
          labelStyle={[
            {
              color: text,
              fontSize: bodyFont,
              fontFamily,

              paddingLeft: 85,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: cardBody }}
          onPress={() => navigation.navigate("OrderPage")}
        />
        <DrawerItem
          label="Account"
          labelStyle={[
            {
              color: text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 80,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
        <DrawerItem
          label="Wallet"
          labelStyle={[
            {
              color: text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 85,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: cardBody }}
          onPress={() => navigation.navigate("Wallet")}
        />
        <DrawerItem
          label="Nak Tolong"
          labelStyle={[
            {
              color: text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 70,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
        <DrawerItem
          label="Help"
          labelStyle={[
            {
              color: text,
              fontSize: bodyFont,
              fontFamily,

              paddingLeft: 100,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
        <DrawerItem
          label="About"
          labelStyle={[
            {
              color: text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 90,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
        <DrawerItem
          label="LogOut"
          labelStyle={[
            {
              color: text,
              fontSize: bodyFont,
              fontFamily,
              paddingLeft: 85,
            },
            Style.bodyCard,
          ]}
          style={{ backgroundColor: cardBody }}
          onPress={() => navigation.navigate("Account")}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const Style = StyleSheet.create({
  bodyCard: {
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "justify",
  },
});
