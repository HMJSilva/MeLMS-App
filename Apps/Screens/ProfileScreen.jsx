import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useContext } from "react";
import { UserDetailContext } from "../../App";
import { Ionicons } from "@expo/vector-icons";
//import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { client } from "../Utils/KindConfig";
export default function ProfileScreen() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const navigation = useNavigation();
  const menu = [
    {
      id: 1,
      name: "Explore",
      path: "Home",
      icon: "search",
    },
    {
      id: 2,
      name: "My Course",
      path: "MyCourse",
      icon: "book",
    },
    {
      id: 3,
      name: "Marketplace",
      icon: "bag-handle",
      url: "",
    },
    {
      id: 4,
      name: "Youtube Catalog",
      url: "https://youtube.com/",
      icon: "logo-youtube",
    },
    {
      id: 5,
      name: "Purchase Pro Membership",
      url: "https://buy.stripe.com/test_00gbJb5nG6j73Oo9AA",
      icon: "logo-usd",
    },
    {
      id: 6,
      name: "Logout",
      icon: "exit-outline",
    },
  ];

  /* const handleLogout = async () => {
    const loggedOut = await client.logout(true);
    if (loggedOut) {
      // User was logged out
    }
  }; */

  const onMenuClick = async (item) => {
    if (item?.url) {
      Linking.openURL(item.url);
    } else if (item.path) {
      navigation.navigate(item.path);
    } else if (item.name == "Logout") {
      const loggedOut = await client.logout();
      if (loggedOut) {
        navigation.navigate("Login");
        // User was logged out
      }
    }
  };
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 27,
        }}
      >
        My Profile
      </Text>

      {userDetail && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            source={{ uri: userDetail?.picture }}
            style={{ width: 100, height: 100, borderRadius: 99 }}
          />
          <Text style={{ fontFamily: "outfit-bold", fontSize: 26 }}>
            {userDetail?.given_name} {userDetail?.family_name}
          </Text>
          <Text style={{ fontFamily: "outfit", fontSize: 18 }}>
            {userDetail?.email}
          </Text>
        </View>
      )}

      {/* Menu Section  */}
      <View style={{ marginTop: 75 }}>
        <FlatList
          data={menu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onMenuClick(item)}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 15,
                alignItems: "center",
                marginBottom: 25,
                paddingHorizontal: 30,
              }}
            >
              <Ionicons name={item.icon} size={34} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: "outfit", fontSize: 22 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
