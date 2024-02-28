import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@src/screens/homeScreen";
import { StatsScreen } from "@src/screens/statsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from "@src/styles/theme";
import { NotificationScreen } from "@src/screens/notificationScreen";
import { SettingsScreen } from "@src/screens/settingsScreen";
import { Platform, View } from "react-native";

export type TabParamlist = {
  homeScreen: undefined;
  statsScreen: undefined;
  notificationScreen: undefined;
  settingsScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamlist>();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === "homeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "statsScreen") {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          } else if (route.name === "notificationScreen") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "settingsScreen") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: Platform.OS === "ios" ? 25 : 0,
              }}
            >
              <Ionicons name={iconName!} size={size} color="white" />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.COLORS.PURPLEDARK3,
          position: "absolute",
          bottom: 40,
          left: 30,
          right: 30,
          height: 80,
          borderRadius: 30,
        },
      })}
    >
      <Tab.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="statsScreen"
        component={StatsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="notificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="settingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
