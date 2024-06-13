
import { View } from 'react-native';
import { globalStyles } from '../../../config/theme/themes';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../components/ui/Title';
import { animationMenuItems, menuItems, uiMenuItems } from '../../assets/resources/menu-items';
import MenuItem from '../../components/ui/Menu-item';
import CustomView from '../../components/ui/CustomView';


const HomeScreen = () => {


    return (
        <CustomView margin>
            <View style={globalStyles.globalMargin}>
                <ScrollView>
                    <Title text="Opciones del menu " />
                    {animationMenuItems.map((item, index) => (
                        <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === animationMenuItems.length - 1}
                        />
                    ))}
                    <View style={{ marginTop: 30 }} />
                    {uiMenuItems.map((item, index) => (
                        <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === uiMenuItems.length - 1}
                        />
                    ))}


                    <View style={{ marginTop: 30 }} />
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={item.component}
                            {...item}
                            isFirst={index === 0}
                            isLast={index === menuItems.length - 1}
                        />
                    ))}


                    <View style={{ marginTop: 30 }} />
                </ScrollView>
            </View>
        </CustomView>
    )
}

export default HomeScreen
