import './App.css';
import * as React from 'react';
import MainNavBar from './components/MainNavBar';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemAvatar, IconButton, ListItemText, Avatar, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const products = [
  { id: 2, name: "Smartphone", description: "Latest model with high-end features.", price: 800, creationDate: new Date("2023-09-15"), img: 'https://picsum.photos/200' },
  { id: 1, name: "Laptop", description: "A powerful laptop for professionals.", price: 1200, creationDate: new Date("2023-10-01"), img: 'https://picsum.photos/200/300?grayscale' },
  { id: 3, name: "Headphones", description: "Noise-cancelling over-ear headphones.", price: 250, creationDate: new Date("2023-10-05"), img: 'https://picsum.photos/seed/picsum/200/300' },
  { id: 4, name: "Monitor", description: "27-inch 4K UHD monitor.", price: 450, creationDate: new Date("2023-08-25"), img: 'https://picsum.photos/id/237/200/300' },
  { id: 5, name: "Keyboard", description: "Mechanical keyboard with RGB lighting.", price: 100, creationDate: new Date("2023-07-10"), img: 'https://picsum.photos/200/300.webp' },
];

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function App() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortOption, setSortOption] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchChange = (event) => setSearchQuery(event.target.value);
  const handleSortChange = (event) => setSortOption(event.target.value);

  // Filter and sort products based on search query and sort option
  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "price") return a.price - b.price;
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="App">
      <MainNavBar />

      {/* Action Buttons */}
      <Grid container spacing={2} justifyContent="space-between" alignItems="center" style={{ marginBottom: '16px' }}>
        <Grid item>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
            Add Product
          </Button>
        </Grid>

        <Grid item>
          <TextField
            placeholder="Search product"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item>
          <FormControl variant="outlined" size="small">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              onChange={handleSortChange}
              label="Sort By"
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="price">Price</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Product List and Details */}
      <Grid container spacing={2}>
        {/* Left Side: Product List */}
        <Grid item xs={6}>
          <List dense>
            {filteredProducts.map((product) => (
              <ListItem
                key={product.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
                button
                onClick={() => setSelectedProduct(product)}
              >
                <ListItemAvatar>
                  <Avatar src={product.img} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${product.name} - $${product.price}`}
                  secondary={product.description}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Right Side: Selected Product Details */}
        <Grid item xs={6}>
          {selectedProduct ? (
            <div className="product-details">
              <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '100px', height: 'auto', marginBottom: '16px' }} />
              <Typography variant="h5">{selectedProduct.name}</Typography>
              <Typography variant="body1" color="text.secondary">{selectedProduct.description}</Typography>
              <Typography variant="h6" color="text.primary" style={{ marginTop: '8px' }}>Price: ${selectedProduct.price}</Typography>
              <Typography variant="caption" color="text.secondary" style={{ marginTop: '8px' }}>Created on: {selectedProduct.creationDate.toDateString()}</Typography>
            </div>
          ) : (
            <Typography variant="body1" color="text.secondary">Select a product to see details</Typography>
          )}
        </Grid>
      </Grid>

      {/* Modal for Adding a Product */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          {/* Form fields for new product details */}
          <TextField label="Product Name" fullWidth margin="dense" />
          <TextField label="Description" fullWidth margin="dense" multiline rows={4} />
          <TextField label="Price" type="number" fullWidth margin="dense" />
          <TextField label="Image URL" fullWidth margin="dense" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
