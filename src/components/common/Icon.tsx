import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withTheme} from 'styled-components';
import React from 'react';
type Props = {
  color?: string;
  theme: Object;
  name: string;
  size: number;
};

const Icon = ({color, theme, name, size}: Props) => (
  <MaterialCommunityIcons
    color={color || theme.colors.textColor}
    name={name}
    size={size}
  />
);

export default withTheme(Icon);
