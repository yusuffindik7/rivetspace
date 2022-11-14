import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles.ts";

import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { ProfileType } from "../../types";

export type ProfileProps = {
  profiles: ProfileType;
};

const Profile = ({ profiles }: ProfileProps) => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.container}>
      <LeftContainer user={profiles.user} />
      <MainContainer profiles={profiles} />
    </View>
  </TouchableOpacity>
);

export default Profile;
