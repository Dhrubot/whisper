import React from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native'
import ContactListItem from '../components/ContactListItem';
import users from "../data/Users";

const ContactsScreen = () => {
    return (
        <View style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          data={users}
          renderItem={({ item }) => 
            <ContactListItem user={item} />}
            keyExtractor={(item) => item.id}
        />
      </View>
    )
}

export default ContactsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });