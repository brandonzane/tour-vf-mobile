import { View, Text } from "react-native";
import { Link, Tabs } from "expo-router";
import React from "react";

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/(modals)/booking"}>Bookings</Link>
      <Link href={"/listing/1996"}>Listing Details Bookings</Link>
    </View>
  );
};

export default Page;
