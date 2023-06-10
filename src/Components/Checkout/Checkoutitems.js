import React, { useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import getSymbolFromCurrency from "currency-symbol-map";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

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

const CheckoutItems = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image={props.definition.imageURL}
        title="CheckoutItems Image"
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
      </CardContent>
    </Card>
  );
};

export default CheckoutItems;
