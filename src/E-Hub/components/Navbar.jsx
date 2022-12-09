// import React, {useState} from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Logo from "../Assets/img/logo.png";
// import { FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import styled from "styled-components";

// import ElevationScroll from "./ElevateScroll";

// // Utils
// const LogoCont = styled(Typography)`
//   & img {
//     width: 4rem;
//   }
// `;

// const Menucont = styled(Menu)`

// }

// `

// const Parentcont = styled.div`



// `

// const drawerWidth = 240;

// const navItems = [
//   {
//     id: 1,
//     navLink: '/',
//     navName: 'Home'
//   },
//   {
//     id: 2,
//     navLink: '/about',
//     navName: 'About'
//   },
//   {
//     id:3,
//     navLink: '/pricing',
//     navName: 'Membership'
//   },
//   {
//     id:4,
//     navLink: '/contact',
//     navName: 'Contact'
//   }
  
// ];

// function NavBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [auth, setAuth] = useState(true);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };


//   // handles login

//   const handleLogin = () => {
//     setAuth(true);
//   }

//   // handles logout
//   const handleLogout = () =>{
//     setAuth(false)
//   }

//   // handles closing  of login info
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   //handles showing of login info
//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // Mobile navBar
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{}}>
//       <Typography
//         component="div"
//         sx={{ my: 2, ml: "2rem", cursor: "pointer", width: "10%" }}
//       >
//         <FaTimes size={20} />
//       </Typography>
//       <Divider />
//       <List sx={{ mt: "1rem" }}>
//         {navItems.map((Links) => (
//           <ListItem key={Links.id} disablePadding>
//             <ListItemButton component={Link} to={Links.navLink}sx={{ ml: "2rem" }}>
//               <ListItemText primary={Links.navName} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;
    

//   return (
//     <Box sx={{ display: "flex" }}>
//       <ElevationScroll {...props}>
//       <AppBar component="nav" sx={{backgroundColor: 'whitesmoke'}}>
//         <Toolbar>
//           {/* menu icon container */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon sx={{color: 'black', ml: 2}}/>
//           </IconButton>

//           {/* logo container */}
//           <LogoCont
//             component="div"
//             sx={{ flexGrow: 1, display: { sm: "block" } }}
//           >
//             <img src={Logo} alt="logo" />
//           </LogoCont>

//           {/* Nabar on Destop */}
//           <Box sx={{ display: { xs: "none", sm: "block" }, mr: '2rem' }}>
//             {navItems.map((Links) => (
//               <Button key={Links.id} sx={{}}>
//                 <Link style={{color: "#862828", fontWeight: 'bold'}} to={Links.navLink}>{Links.navName}</Link>
//               </Button>
//             ))}
//           </Box>
          
//             {auth && (<Parentcont>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle className='avater' sx={{color: 'rgba(100, 92, 92, 0.62)', fontSize: '30'}} />
//               </IconButton>
//               <Menucont
//                 id="menu-appbar"
//                 // anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Membership</MenuItem>
//                 <MenuItem onClick={handleClose}>LogOut</MenuItem>
//               </Menucont>
//             </Parentcont>) }
        
//         </Toolbar>
//       </AppBar>
//       </ElevationScroll>
      
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// }

// export default NavBar;
