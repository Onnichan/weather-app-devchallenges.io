import styled from 'styled-components';
import {ButtonBaseProps} from './types';

export const Button = styled.button<ButtonBaseProps>`
  color: white;
  border: 1px solid black;
  background-color: ${({ color }) => color};
`