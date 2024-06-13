
import Icon from 'react-native-vector-icons/Ionicons'


interface Props {
    name: string;
    size?: number;
    color?: string;
}


const IonIcon = ({name, size=20, color= '#000'}: Props) => {
    return (
      <Icon name={name} size={size} color={color} />
    )
  }

export default IonIcon
