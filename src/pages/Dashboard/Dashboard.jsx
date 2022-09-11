import { Box, Grid } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { fetchProducts } from '../../services/productService';
const ProductCard = lazy(() => import('./components/ProductCard'));

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        const products = await fetchProducts();
        this.setState({ products: products });
    }

    render() {
        const { addtoCart, removeFromCart } = this.props;
        const { products } = this.state;
        return (
            <Box paddingY={{xs: 5, md:10}} paddingX={{xs: 0 , md:20}}>
                <Grid container spacing={6} justifyContent="center">{
                    products.map((item) => {
                        return (
                            <Suspense key={item.id} fallback={<div>loading</div>}>
                                <Grid item >
                                    <ProductCard addtoCart={addtoCart} removeFromCart={removeFromCart} product={item} />
                                </Grid>
                            </Suspense>

                        )
                    })
                }
                </Grid>
            </Box>
        )
    }
}
export default Dashboard;