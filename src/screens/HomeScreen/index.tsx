import * as React from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles.ts";
import { Logo } from "../../assets/svg";

import { Text, View } from "../../components/Themed";
import {
  PostFeed,
  StoryFeed,
  ProfileButton
} from "../../components";

export default function HomeScreen() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Profile");
  };
  const Login = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={Login}
        >
          <View style={styles.logo}>
            <Logo size={38} />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>rivetspace</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onPress}
        >
          <ProfileButton />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <StoryFeed />}
        ListFooterComponent={() => <PostFeed />}
      />
    </SafeAreaView>
  );
}
