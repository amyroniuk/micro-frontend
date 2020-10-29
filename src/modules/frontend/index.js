import React from 'react';
import {View, Text, Button} from 'react-native';

const Frontend = ({navigation}) => {
    return (
        <>
            <View>
                <Text>Micro Frontend Content</Text>
                <Button
                    title="Micro Frontend Child Page"
                    onPress={() => navigation.navigate('FrontendChild')}
                />
            </View>
        </>
    );
};

const FrontendChildScreen = () => {
    return (
        <>
            <View>
                <Text>Frontend Content</Text>
            </View>
        </>
    );
};

const Routes = [
    {
        name: 'Micro Frontend Home',
        route: 'Frontend',
        component: Frontend,
    },
    {
        name: 'Micro Frontend Child',
        route: 'FrontendChild',
        component: FrontendChildScreen,
    },
];

export default Routes;
