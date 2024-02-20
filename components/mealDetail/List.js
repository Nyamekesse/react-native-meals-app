import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = ({ listData }) => {
  return listData.map((data) => (
    <View key={data} style={styles.listItem}>
      <Text style={styles.itemText}>{data}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
