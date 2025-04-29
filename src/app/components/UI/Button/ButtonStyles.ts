import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: '#0033CC', // Color azul como en la imagen
    borderWidth: 0,
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0033CC',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0033CC',
  },
  small: {
    paddingVertical: 8,
    minWidth: 80,
  },
  medium: {
    paddingVertical: 12,
    minWidth: 120,
  },
  large: {
    paddingVertical: 16,
    minWidth: 160,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#0033CC',
  },
  outlineText: {
    color: '#0033CC',
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
});

export default ButtonStyles;