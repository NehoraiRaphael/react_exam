import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
export default function MainNavBar(){
return <header className="App-header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Store
              </Typography>

            </Toolbar>
          </AppBar>
        </Box>
      </header>
}