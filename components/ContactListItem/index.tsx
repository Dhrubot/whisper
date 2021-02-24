import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import { User } from "../../types";
import styles from './styles'

export type ContactListItemProps = {
    user: User;
  };
  

const ContactListItem = (props: ContactListItemProps) => {

    const { user } = props;

    const navigation = useNavigation()

    const onClick = () => {
        //navigate to chatroom of this user
    }


    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
            <View style={styles.midContainer}>
              <Text style={styles.userName}>{user.name}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
}

export default ContactListItem
