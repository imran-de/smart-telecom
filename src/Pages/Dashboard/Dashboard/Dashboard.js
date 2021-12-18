import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logOut } = useAuth();
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/purchase" style={{ textDecoration: 'none', color: 'blue' }}><Button color="inherit" sx={{ marginTop: 3, fontFamily: 'Georgia', fontWeight: 500 }}>Purchase Page</Button></Link>
      <Divider />
      <Link to={`${url}`} style={{ textDecoration: 'none', color: 'blue' }}><Button color="inherit" sx={{ fontFamily: 'Georgia', fontWeight: 500 }}>Dashboard</Button></Link>
      <Divider />
      {
        admin && <Box>
          <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: '#F08080' }}><Button color="inherit" sx={{ fontFamily: 'Georgia', fontWeight: 500 }}>Make Admin</Button></Link>
          <Divider />
          <Link to={`${url}/add-product`} style={{ textDecoration: 'none', color: '#F08080' }}><Button color="inherit" sx={{ fontFamily: 'Georgia', fontWeight: 500 }}>Add Product</Button></Link>
          <Divider />
        </Box>
      }
      {
        !admin && <Link to="/payment" style={{ textDecoration: 'none', color: 'blue' }}><Button color="inherit" sx={{ fontFamily: 'Georgia', fontWeight: 500 }}>Payment System</Button></Link>
      }
      <Divider />
      <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}><Button color="inherit" sx={{ fontFamily: 'Georgia', fontWeight: 500 }} onClick={logOut}>Log Out</Button></Link>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            <Button color="inherit">Dashboard</Button>
          </Typography>
          <Typography variant="h6" noWrap component="div">
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/add-product`}>
            <AddProduct></AddProduct>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {

  window: PropTypes.func,
};

export default Dashboard;