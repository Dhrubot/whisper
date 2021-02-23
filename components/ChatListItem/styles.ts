import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    leftContainer: {
        flexDirection: 'row'
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
    },
    timeStamp: {
        fontSize: 14,
        color: 'grey'
    },
})

export default styles