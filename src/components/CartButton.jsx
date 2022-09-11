import { Badge, Divider, IconButton, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';

class CartButton extends React.Component {
    constructor() {
        super();
        this.state = {
            anchor: null,
            open: false
        }
    }

    handleOnClick = (event) => {
        this.setState({ anchor: event.currentTarget, open: true });
    }

    handleClose = () => {
        this.setState({ anchor: null, open: false })
    }
    render() {
        const { cartItems } = this.props;
        const { open, anchor } = this.state;
        return (
            <>
                <IconButton size="large" color="inherit" onClick={(e) => this.handleOnClick(e)}>
                    <Badge badgeContent={cartItems.length} color="info">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <Menu
                    anchorEl={anchor}
                    open={open}
                    onClose={this.handleClose}
                >
                    {cartItems.length === 0 ?
                        <MenuItem>Empty</MenuItem>
                        :
                        cartItems.map((item) => {
                            return (
                                <MenuItem key={item.id}>
                                    <ListItemText>{item.name}</ListItemText>
                                    <Typography width={60} textAlign={"right"} variant="body2" color="text.secondary">
                                        {item.price}
                                    </Typography>
                                </MenuItem>

                            )
                        })}
                    <Divider />
                    <MenuItem>
                        <ListItemText> Total </ListItemText>
                        <Typography width={60} textAlign={"right"} variant="body2" color="text.secondary">
                            {cartItems.reduce((total, item) => total + item.price, 0)}
                        </Typography>
                    </MenuItem>
                </Menu>
            </>

        )
    }
}

export default CartButton;