import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
// @ts-ignore
import config from './src/aws-exports.js'
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'

import { getUser } from './src/graphql/queries'
import { createUser } from './src/graphql/mutations'

Amplify.configure(config)

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  //run this snippet only when App is first mounted

  useEffect(() => {
    const fetchUser = async () => {
      //get Authenticated user from Auth
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })

      if (userInfo) {

      // get the user from Backend with the user ID(sub) from Auth
      const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))

      if (userData.data.getUser) {
        console.log("User is already registered in database")
        return;
      }

      const newUser = {
        id: userInfo.attributes.sub,
        name: userInfo.username,
        imageUri: 'https://i.pravatar.cc/300',
        status: 'Hey, I am using Whisper!'
      }

      await API.graphql(
        graphqlOperation(
          createUser,
          {input: newUser}
        )
      )

      // if there is no user in DB with the id, then create one

      }
    }

    fetchUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)