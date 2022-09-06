import LaptopChromebookIcon from 'material-ui-icons/LaptopChromebook';
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "material-ui/Grid";
  import React from "react";

  import InfoIcon from 'material-ui-icons/Info';
  import LinkIcon from 'material-ui-icons/Link';
  
  const Sidebar = ({mode,setMode}) => {
    return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="result">
                <ListItemIcon>
                  <LaptopChromebookIcon />
                </ListItemIcon>
                <ListItemText primary="Головна" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="Schedule">
                <ListItemIcon>
                  <LaptopChromebookIcon />
                </ListItemIcon>
                <ListItemText primary="Розклад" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="MuiTable">
                <ListItemIcon>
                  <LaptopChromebookIcon />
                </ListItemIcon>
                <ListItemText primary="Результати" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="Resume">
                <ListItemIcon>
                  <LaptopChromebookIcon />
                </ListItemIcon>
                <ListItemText primary="Резюме" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="About">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Інформація" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="CodeWords">
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="Кодові слова" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Sidebar;