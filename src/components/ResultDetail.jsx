import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Starts, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
  container: {
    marginStart: 15
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  }
});
