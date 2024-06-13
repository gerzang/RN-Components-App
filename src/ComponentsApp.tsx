
import 'react-native-gesture-handler'
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import StackNavigation from './presentation/navigator/StackNavigation';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';


// const AppState = ({ children }: PropsWithChildren) => {
//     return (
//         <NavigationContainer theme={DarkTheme}>
//             <ThemeProvider>
//                 {children}
//             </ThemeProvider>
//         </NavigationContainer>
//     )
// }


const ComponentsApp = () => {
    return (

        <ThemeProvider>
            <StackNavigation />
        </ThemeProvider>

    )
}

export default ComponentsApp
