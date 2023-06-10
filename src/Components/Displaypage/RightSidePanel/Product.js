import React, { useContext, useEffect } from "react";
import "./RightSidePanel.css";
import Rating from "@material-ui/lab/Rating";
import getSymbolFromCurrency from "currency-symbol-map";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { CartContext } from "../../CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 345,
    marginTop: theme.spacing(2),
  },
  //   media: {
  //     width: 228,
  //     margin: 30,
  //     marginRight: theme.spacing(2),
  //   },
  media: {
    width: "52%",
    display: "flex",
  },
  content: {
    flex: 1,
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Product = (props) => {
  const classes = useStyles();
  const { increment } = useContext(CartContext);

  const addTOCart = function () {
    increment(props.definition);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image={props.definition.imageURL}
        title="Product Image"
      />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {props.definition.name}
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          {getSymbolFromCurrency("INR")}
          {props.definition.price}
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          <Rating
            name="read-only"
            value={props.definition.rating}
            style={{ fontSize: "20px" }}
            readOnly
          />
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}
        onClick={addTOCart}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
