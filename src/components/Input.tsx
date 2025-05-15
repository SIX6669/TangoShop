import {TextInput} from 'react-native';
import { StyleProp, TextStyle } from 'react-native';
interface Input {
    value: string;
    placeholder?: string;
    className?: string;
    style?: StyleProp<TextStyle>;
    onChangeText: (value: string) => void;
}
const Input = ({value, style, onChangeText, placeholder, className}: Input) => {
    return (
        <TextInput
            style={style}
            className={className}
            placeholderTextColor="#fff"
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />
    )
}

export default Input;