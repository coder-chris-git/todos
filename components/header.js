import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";

export default function Header() {
  return (

    <View style={styles.header}>
      <Text style={styles.content}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    height: 80,
    paddingTop: 38,
    height: 80,

  },
  content: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
