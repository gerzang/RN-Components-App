

import { useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme/themes';
import FadeInImage from '../../components/ui/FadeInImage';


const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
    const loadMore = () => {
        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 3000);
    };
    return (
        <View style={{ backgroundColor: 'black' }}>
            <FlatList
                data={numbers}
                onEndReached={loadMore}
                keyExtractor={(item) => item.toString()}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => <ListItem number={item} />}
                ListFooterComponent={() => <View style={{ height: 150, justifyContent: 'center' }}>
                    <ActivityIndicator size={40} color={colors.primary} />
                </View>}
            />
        </View>
    )
}

interface ListItemProps {
    number: number;
}
const ListItem = ({ number }: ListItemProps) => {
    return (
          <FadeInImage
            uri={`https://picsum.photos/id/${number}/500/400`}
            style={{
              height: 400,
              width: '100%',
            }}
          />
        // <Image
        //     source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
        //     style={{
        //         height: 400,
        //         width: '100%'
        //     }}

        // />
    );
};

export default InfiniteScrollScreen;
