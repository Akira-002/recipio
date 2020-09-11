import React from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListIcon from '@material-ui/icons/List';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function SideMenue() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="sideMenuePane">
      <CssBaseline/>
      <div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          {/* <Button>Show Side Menue</Button> */}
          <div className="sideMenueSetting">Side Menue</div>
        </IconButton>
      </div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className="drawerIconSetting">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          <Link to="/">
            <ListItem button key={'Add recipe page'}>
              <ListItemIcon>
                <AddBoxIcon/>
              </ListItemIcon>
              <ListItemText primary={'Add recipe page'} />
            </ListItem>
          </Link>
          <Link to="/RecipeList">
            <ListItem button key={'Show recipe list'}>
              <ListItemIcon>
                <ListIcon/>
              </ListItemIcon>
              <ListItemText primary={'Show recipe list'} />
            </ListItem>
          </Link>
        </List>

        <Divider/>
{/*
        <ListItem button key={'Add foodstuff options'}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Add foodstuff options'} />
        </ListItem>
        <ListItem button key={'Add seasoning options'}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={'Add seasoning options'} />
        </ListItem>

 */}
        <div className="sideAddOptions">
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
              <InboxIcon/>
            </Grid>
            <Grid item>
              <TextField label="Add foodstaff option" />
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="flex-end">
            <Grid item>
              <InboxIcon/>
            </Grid>
            <Grid item>
              <TextField label="Add seasoning option" />
            </Grid>
          </Grid>
        </div>
        <div className="sideAddButton">
          <Button>
              Add option
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
