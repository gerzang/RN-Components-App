import { SectionList, Text, View, useWindowDimensions } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import Card from '../../components/ui/Card';
import { houses } from '../../assets/resources/characters';
import Subtitle from '../../components/ui/Subtitle';

import Separator from '../../components/ui/Separator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const CustomSectionListScreen = () => {
    const { colors } = useContext(ThemeContext);

    const { height } = useWindowDimensions();
    const { top } = useSafeAreaInsets();

    return (
        <CustomView margin>
            <Title text='Lista de personajes' safe />
            <Card>
                <SectionList
                    sections={houses}
                    keyExtractor={(item) => item}
                    renderItem={ ({ item }) => <Text style={{ color: colors.text, marginVertical: 2 }}>{ item }</Text> }
                    renderSectionHeader={ ({section})=> <Subtitle text={ section.title } backgroundColor={ colors.cardBackground } /> }
                    stickySectionHeadersEnabled
                    SectionSeparatorComponent={Separator}
                    ListHeaderComponent={() => <Title text="Personajes" />}
                    ListFooterComponent={() => <Title text={`Secciones: ${houses.length}`} />}
                    showsVerticalScrollIndicator={false}
                    style={{
                        height: height - top - 120
                    }}
                />
            </Card>
        </CustomView>
    )
}

export default CustomSectionListScreen;
