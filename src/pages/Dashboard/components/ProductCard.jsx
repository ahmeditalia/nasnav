import { Card, CardContent, CardMedia, IconButton, Slide, Stack, Typography } from "@mui/material";
import { Component } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

class ProductCard extends Component {

    constructor() {
        super();
        this.state = {
            checked: false,
            added: false
        }
    }

    setChecked = (check) => {
        this.setState({ checked: check })
    }

    addtoCart = () => {
        const {addtoCart, product} = this.props;
        addtoCart(product);
        this.setState({ added: true });
    }

    removeFromCart = () => {
        const {removeFromCart, product} = this.props;
        removeFromCart(product);
        this.setState({ added: false });
    }

    render() {
        const { checked, added } = this.state;
        const {product} = this.props;
        return (
            <Card sx={{ maxWidth: 345, position: "relative" }}
                onMouseEnter={() => this.setChecked(true)}
                onMouseLeave={() => this.setChecked(false)}
            >

                <Slide
                    style={{ position: "absolute", zIndex: 100, right: 0 }}
                    direction="left"
                    in={checked}
                >
                    <Stack padding={1}>
                        {
                            added ?
                                <IconButton size="large" onClick={this.removeFromCart}>
                                    <RemoveShoppingCartIcon />
                                </IconButton>
                                :
                                <IconButton size="large" onClick={this.addtoCart}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                        }
                    </Stack>
                </Slide>
                <CardMedia
                    component="img"
                    height="300"
                    image={require(`../../../images/${product.url}`)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{height: 65}}>
                        {product.name}
                    </Typography>
                    <Typography fontWeight={"bold"} variant="body1" color="text.secondary" >
                        {product.price}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default ProductCard;