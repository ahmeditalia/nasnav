import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import React from 'react';
import { Link } from "react-router-dom";
import CartButton from "./CartButton";


class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: [
                {
                    text: "Home",
                    url: "/"
                },
                {
                    text: "Dashborad",
                    url: "dashboard"
                }
            ],
        }
    }

    render() {
        const { cartItems } = this.props;
        const { pages } = this.state;
        return (
            <AppBar sx={{ paddingX: 10 }} position="fixed">
                <Toolbar>
                    <Stack flexDirection={"row"} flexGrow={1}>
                        {
                            pages.map((page) => {
                                return (
                                    <Link to={page.url} style={{ textDecoration: "none" }}>
                                        <Button
                                            key={page.text}
                                            sx={{ color: 'white' }}
                                        >
                                            {page.text}
                                        </Button>
                                    </Link>

                                )
                            })

                        }

                    </Stack>
                    <Stack>
                        <CartButton cartItems={cartItems} />
                    </Stack>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;