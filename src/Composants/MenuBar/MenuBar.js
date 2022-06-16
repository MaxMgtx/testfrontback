import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from "react-router-dom";
import './menuBar.css';
import { useAuth0 } from "@auth0/auth0-react";

const MenuBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={(e)=> handleMenuClick(e)}
            >
                <MenuIcon />
            </IconButton>
            <Menu 
                id="basic-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/customers" className="linkMenu">Customers</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/products" className="linkMenu">Products</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/purchases" className="linkMenu">Purchase Orders</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/invoices" className="linkMenu">Invoices</Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/deliveries" className="linkMenu">Deliveries</Link>
                </MenuItem>
            </Menu>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className="link">Follow-up of orders and sales</Link>
            </Typography>

            { isAuthenticated ? (
                <Button variant="contained" onClick={()=>logout()}>Log Out</Button>
                ) : (
                <Button variant="contained" onClick={()=>loginWithRedirect()}>Log In</Button>
            )}
            
                

            </Toolbar>
        </AppBar>
        </Box>
    )



}
export default MenuBar;