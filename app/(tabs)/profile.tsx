import { View, Text } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";

const Profile = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
    </View>
  );
};

export default Profile;
