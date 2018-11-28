import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import axios from 'axios'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 20
  },
  card: {
    maxWidth: 345,
    background: '#fafafa'
  },
  media: {
    height: 150,
    width: 300
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});



class Product extends Component {

  constructor(props) {

    super(props)

    this.state = {
      cartCounter: 0,
      products: []
    }
    this.fetchProducts()
  }

  fetchProducts() {
    let productsApiUrl = "http://localhost:8080/products/"
    axios.get(productsApiUrl).then( (response) => {
      this.setState( {products: response.data} )
    })
    .catch( (err) => {
      console.log("Api Fetchng error =>", err)
    })
  }

  render() {
    const { classes } = this.props;

    var productsView;
    if(this.state.products.length > 0) {

      productsView = this.state.products.map(
        (product, i) =>  {
          return(
            <Grid item xs>
              <Card key={i} className={classes.card} elevation={0}>
                <CardActionArea>
                  <CardContent>
                    <img className={classes.media} src={product.imageSource} alt={product.title}/>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography component="p">
                      {product.description}
                    </Typography>
                    <Typography variant="h3" color="primary" component="h2">
                      $ {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>

          )

        })
      }

      return(
        <React.Fragment>
          <div className={classes.root}>
            <Grid container spacing={24}>
              {productsView}
            </Grid>
          </div>
          <Fab className={classes.fab} color="primary">
            <ShoppingCartIcon />
          </Fab>
        </React.Fragment>

      )
    }
  }

  Product.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(Product);
