import React from 'react';
import {Button, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MicroFrontendHomeScreen = ({navigation}) => {
    return (
        <>
            <View>
                <Text>This is a MicroFrontend Home Screen</Text>
                <Button
                    title="Go to MicroFrontend Child Screen"
                    onPress={() => navigation.navigate('FrontendChild')}
                />
            </View>
        </>
    );
};

const MicroFrontendChildScreen = () => {
    return (
        <>
            <View>
                <Text>This is a MicroFrontend Child Screen</Text>
            </View>
        </>
    );
};

const Frontend = () => {
    return (
        <Stack.Navigator initialRoute="FrontendHome">
            <Stack.Screen name="FrontendHome" component={MicroFrontendHomeScreen} />
            <Stack.Screen
                name="FrontendChild"
                component={MicroFrontendChildScreen}
            />
        </Stack.Navigator>
    );
};

export default {
    name: 'MicroFrontend',
    route: 'FrontendHome',
    component: Frontend,
};
