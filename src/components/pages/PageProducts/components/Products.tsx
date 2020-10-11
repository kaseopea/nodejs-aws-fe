import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Product} from "models/Product";
import {formatAsPrice} from "utils/utils";
import AddProductToCart from "components/AddProductToCart/AddProductToCart";
// import axios from 'axios';
// import API_PATHS from "constants/apiPaths";
import productList from "./productList.json";

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardTitle: {
    fontFamily: '\'Roboto Condensed\', sans-serif',
    fontSize: '20px',
    fontWeight: 300
  },
  cardPrice: {
    fontFamily: '\'Secular One\', sans-serif',
    fontSize: '20px'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // axios.get(`${API_PATHS.bff}/product/available/`)
    //   .then(res => setProducts(res.data));
    setProducts(productList);
  }, [])

  return (
    <Grid container spacing={4}>
      {products.map((product: Product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={`./assets/products/` + product.photo}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography className={classes.cardPrice}>
                {formatAsPrice(product.price)}
              </Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={product}/>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
