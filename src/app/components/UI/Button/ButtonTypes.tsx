import { 
    TouchableOpacityProps, 
    StyleProp,
    TextStyle,
    ViewStyle 
  } from 'react-native';
  
  // Definimos las propiedades que aceptará nuestro componente Button
  export interface ButtonProps extends TouchableOpacityProps {
    title: string;
    type?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    textColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
  }