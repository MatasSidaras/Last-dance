import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { navigationBarLinks } from "../../routes/consts";
import logo from "../../assets/eventpro-logo.png"
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Typography>
        {navigationBarLinks.map((link, index) => (
          <Button
            key={index}
            component={RouterLink}
            to={link.path}
            color="inherit"
          >
            {link.text}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
