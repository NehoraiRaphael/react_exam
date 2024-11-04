
import './App.css';
import * as React from 'react';
import MainNavBar from './components/MainNavBar';


import { styled } from '@mui/material/styles';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const products = [
  { id: 1, name: "Laptop", description: "A powerful laptop for professionals.", price: 1200, creationDate: new Date("2023-10-01") },
  { id: 2, name: "Smartphone", description: "Latest model with high-end features.", price: 800, creationDate: new Date("2023-09-15") },
  { id: 3, name: "Headphones", description: "Noise-cancelling over-ear headphones.", price: 250, creationDate: new Date("2023-10-05") },
  { id: 4, name: "Monitor", description: "27-inch 4K UHD monitor.", price: 450, creationDate: new Date("2023-08-25") },
  { id: 5, name: "Keyboard", description: "Mechanical keyboard with RGB lighting.", price: 100, creationDate: new Date("2023-07-10") },
];

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function App() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div className="App">
      


      <div className=''>

      </div>

      <div className='left-list'>
        <List dense={dense}>
          {products.map((product) => (
            <ListItem
              key={product.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${product.name} - $${product.price}`}
                secondary={product.description}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default App;
