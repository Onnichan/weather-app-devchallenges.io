import {Button} from './style';
import {ButtonBaseProps} from './types';

export const ButtonBase = (props:ButtonBaseProps) => {
  return <Button color={props.color}>{props.children}</Button>
}