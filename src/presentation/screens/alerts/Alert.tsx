

import { Alert, View } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import { globalStyles } from '../../../config/theme/themes';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';
import { showPrompt } from '../../../config/apadters/prompt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const AlertScreen = () => {
    const { isDark } = useContext(ThemeContext);

    const createTwoButtonAlert = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light',
            }
        );
    };

    const createThreeButtonAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed'),
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
                onDismiss() {
                    console.log('onDismiss');
                },
                userInterfaceStyle: isDark ? 'dark' : 'light',
            },
        );

    const onShowPrompt = () => {
        //coidgo nativo
        // Alert.prompt(
        //     'Alert Title',
        //     'My Alert Msg',
        //     (value: string) => console.log({ value }),
        //     'secure-text',
        //     'Spy el mapsingue',
        //     'number-pad'
        // )
        // prompt(
        //     'Enter password',
        //     'Enter your password to claim your $1.5B in lottery winnings',
        //     [
        //         { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        //         { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
        //     ],
        //     {
        //         type: 'secure-text',
        //         cancelable: false,
        //         defaultValue: 'test',
        //         placeholder: 'placeholder'
        //     }
        // );
        showPrompt(
            {
                title: 'Lorem Ipsum',
                subTitle: 'Nostrud qui duis officia dolor enim.',
                buttons: [
                    { text: 'Ok', onPress: () => console.log('ok') }
                ],
                placeholder: 'Placeholder'

            })
    }

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title safe text="Alertas" />

            <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />

            <View style={{ height: 10 }} />

            <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />

            <View style={{ height: 10 }} />

            <Button text="Prompt - Input" onPress={onShowPrompt} />
        </CustomView>
    )
}

export default AlertScreen;
