import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ButtonStyles from './ButtonStyles';
import { ButtonProps } from './ButtonTypes';

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  type = 'primary',
  size = 'medium',
  fullWidth = false,
  textStyle,
  buttonStyle,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
  borderRadius,
  icon,
  iconPosition = 'left',
  ...restProps
}) => {
  
  // Función para renderizar el icono si existe
  const renderIcon = () => {
    if (!icon) return null;
    return icon;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        ButtonStyles.button,
        ButtonStyles[type],
        ButtonStyles[size],
        fullWidth && ButtonStyles.fullWidth,
        backgroundColor && { backgroundColor },
        borderColor && { borderColor },
        borderWidth !== undefined && { borderWidth },
        borderRadius !== undefined && { borderRadius },
        disabled && ButtonStyles.disabled,
        buttonStyle,
      ]}
      activeOpacity={0.8}
      {...restProps}
    >
      {iconPosition === 'left' && renderIcon()}
      <Text
        style={[
          ButtonStyles.text,
          ButtonStyles[`${type}Text`],
          ButtonStyles[`${size}Text`],
          textColor && { color: textColor },
          textStyle,
        ]}
      >
        {title}
      </Text>
      {iconPosition === 'right' && renderIcon()}
    </TouchableOpacity>
  );
};

export default Button;