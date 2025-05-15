import { Pressable, Text } from "react-native";

interface ButtonProps {
    classTitle?: string;
    classButton?: string;
    title: string;
    onPress: () => void;
}

const Button = ( {classTitle, classButton, title, onPress }  : ButtonProps) => {
    return (
        <Pressable onPress={onPress} className={classButton}>
           <Text className={classTitle}>{title}</Text>
        </Pressable>
    );
};

export default Button;