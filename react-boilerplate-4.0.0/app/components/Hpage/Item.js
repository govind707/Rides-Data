import React from 'react';
import { ItemCon } from './skins';

const Item = props => {
    return (
        <ItemCon onClick={() => props.onClick(props.Name)}>
            <span>{props.Name}</span>
        </ItemCon>
    );
}

export default Item;