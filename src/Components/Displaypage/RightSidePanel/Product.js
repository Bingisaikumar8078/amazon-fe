import React, { useContext, useEffect, useState } from "react";
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
  const [price, setprice] = useState(props.definition.price);
  let newProduct;
  function addTOCart() {
    // const productInfo ={
    //   brand:props.definition.brand,
    //   name:props.definition.name,
    //   price:props.definition.price,
    //   productId:props.definition.productId,
    //   rating:props.definition.rating,
    //   userId:user.id,
    //   imageURl:props.definition.imageURL,
    //   type:props.definition.type
    // }
    // axios.post(`http://localhost:8082/amazon/cart/addToCart`,productInfo)
    // .then(res=>alert("Your product has been added to cart"))
    // .catch(err=>alert(err))
    increment(props.definition);
  }

  useEffect(() => {
    const source = new EventSource("http://localhost:9090/amazon/products/sse");
    source.addEventListener("product-event", (event) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      newProduct = event.data;
      console.log(newProduct);
      if (newProduct) {
        console.log("New Product", JSON.stringify(newProduct));
        const value = JSON.stringify(newProduct);
        const startIndex = value.indexOf("id=") + 3;
        const startIndexForPrice = value.indexOf("price=")+6;
        const endIndex = value.indexOf(",", startIndex);
        const endIndexForPrice = value.indexOf(",", startIndexForPrice);
        const newId = value.substring(startIndex, endIndex).trim();
        const newPrice = value.substring(startIndexForPrice ,endIndexForPrice);
        console.log("newID", newId);
        console.log("newePrice", newPrice);
        console.log("old  Product", props.definition.id);
        if (newId === String(props.definition.id)) {
          console.log(newPrice);
          setprice(newPrice);
        }
      }
    });
  }, []);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image={props.definition.imageurl}
        title="Product Image"
      />
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {props.definition.name}
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          {getSymbolFromCurrency("INR")}
          {price}
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          <Rating
            name="read-only"
            value={props.definition.rating}
            style={{ fontSize: "20px" }}
            readOnly
          />
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={addTOCart}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
