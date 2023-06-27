import {
  AppBar,
  Badge,
  Button,
  InputBase,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Amazon from "./Amazon-logo.png";
import { useSelector } from "react-redux";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import AuthService from "../../services/auth-service";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#131a22",
    minHeight: "1rem",
  },
  logo: {
    // background: url("https://ik.imagekit.io/q7q7dn72y/amazon-image/amazon-image/sprite_350x.png?updatedAt=1681129184635")
    height: "31px",
    // backgroundColor: 'white'
  },
  search: {
    position: "relative",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderTopLeftRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
    marginLeft: "2%",
    width: "30%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchTwoToneIcon: {
    backgroundColor: "#febe68",
    height: "32px",
    borderRadius: "0px 5px 5px 0px",
  },
  footer: {
    width: "100vw",
    height: "30px",
    backgroundColor: "#22303e",
    color: "white",
    // display: "flex",
  },
  text: {
    margin: "5px 10px",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    marginLeft: "2%",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  let user;
  const nav = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { item } = useContext(CartContext);
  const logout = () => {
    AuthService.logout();
  };

  if (isLoggedIn) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="">
            <img src={Amazon} alt="Amazon Logo" className={classes.logo} />
          </Link>
          <LocationOnOutlinedIcon />
          <span>Hyderabad</span>
          <div className={classes.search}>
            <div className={classes.searchIcon}></div>
            <InputBase placeholder="Search..." />
          </div>
          <div className={classes.searchTwoToneIcon}>
            <SearchTwoToneIcon />
          </div>
          <Button
            color="inherit"
            onClick={() => {
              nav("/display/phone");
            }}
          >
            Mobiles
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              nav("/display/electronics");
            }}
          >
            Electronics
          </Button>
          <Button color="inherit">Registry</Button>
          <Button color="inherit">Orders</Button>
          <Typography variant="button">
            Hello,
            {isLoggedIn ? (
              <Typography variant="button">
                {user.username}
              </Typography>
            ) : (
              <Typography variant="button">Sign in.</Typography>
            )}
          </Typography>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "#FFF", marginLeft: "2%" }}
          >
            <Typography variant="h6" component="h3">
              Account
            </Typography>
          </Link>
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "#FFF", marginLeft: "2%" }}
          >
            <Badge badgeContent={item.length} color="primary">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>
          </Link>
          <LogoutIcon sx={{ marginLeft: "2%" }} />
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className={classes.footer}>
        {/* <div className={classes.text}>
          <Typography variant="subtitle1">Account</Typography>
       
          <Typography variant="subtitle1">Account</Typography>
          <Typography variant="subtitle1">Account</Typography>
        </div>
        <div className={classes.text}>
          <Typography variant="subtitle1">Account</Typography>
       
          <Typography variant="subtitle1">Account</Typography>
          <Typography variant="subtitle1">Account</Typography>
        </div> */}
      </AppBar>
    </>
  );
};

export default NavBar;
