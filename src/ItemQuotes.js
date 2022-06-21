import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom: '1.5rem',
}));


const ItemQuotes = ({text, author}) => {
  return (
    <div>
        <Item>
          {text}
          <p>{author}</p>
        </Item>
        
    </div>
  )
}

export default ItemQuotes