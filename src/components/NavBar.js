import React from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',

    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',


    },
  },
  sectionMobile: {
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      display: 'none',
      margin: 0,


    },
  },
}));

function NavBar() {
  const classes = useStyles();








  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant="h5" noWrap>
            Shoes Store
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="/">Home</Link>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">

              <Link to="/about">About</Link>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">

              <Link to="/product">Product</Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <h4>Shoes Store</h4>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="/">Home</Link>
            </IconButton>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="/about">About</Link>
            </IconButton>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="/product">Product</Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}
export default NavBar;