import React from 'react';
import Button, { ButtonTypeMap } from '@material-ui/core/Button';
import { ExtendButtonBase, Color } from '@material-ui/core';

type ButtonProps =  Parameters<typeof Button>[0]

interface Props{
    active?: string;
}
const SpecificButton = (props: Props & ButtonProps) => <Button {...props} style={props.active ? { color: '#343E72', borderColor: '#343E72' } : {}} />;


export default SpecificButton;
