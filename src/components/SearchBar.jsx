import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={styles.inputStyle}
        placeholder="Search"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#d3c4c1",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom:10,
    flexDirection: "row"
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: "center"
  }
});
export default SearchBar;
