import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onMicPress = () => {
      console.warn('Microphone')
  }

  const onSendPress = () => {
      console.warn(`Sending ${message}`)
      // backend fnction

      setMessage('')
  }

  const onPress = () => {
      if (!message) {
          onMicPress()
      } else {
          onSendPress()
      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5
          name="laugh-beam"
          size={24}
          color="grey"
          style={styles.icons}
        />
        <TextInput
          placeholder={"Type a message"}
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icons} />
        {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icons} />}
      </View>

      <TouchableOpacity onPress={onPress}>
      <View style={styles.micContainer}>
        {!message ? (
          <MaterialCommunityIcons name="microphone" size={28} color={"white"} />
        ) : (
          <MaterialIcons name="send" size={24} color={"white"} />
        )}
      </View>
      </TouchableOpacity>
    </View>
    
  );
};

export default InputBox;
