import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { navigationBarLinks } from "../../routes/consts";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {navigationBarLinks.map((link, index) => (
          <Button key={index} color="inherit">{link.text}</Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
