import * as React from 'react';
import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Jobs from '../screens/Jobs';
import Favourites from '../screens/Favourites';
import JobDetail from '../screens/Detail';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = ({ navigation }: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="JobsPage" component={Jobs} options={{
                headerLeft: () => <Entypo
                    style={{ marginLeft: 15 }} onPress={() => navigation.openDrawer()} name="menu" size={24} color="black" />,
                title: "Jobs"
            }} />
            <Stack.Screen name="JobDetail" component={JobDetail} options={{
                title: "Implementation Consultant"
            }} />
        </Stack.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Jobs">
                <Drawer.Screen name="Jobs" component={StackNavigator} options={{
                    headerShown: false
                }} />
                <Drawer.Screen name="Favourites" component={Favourites} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
