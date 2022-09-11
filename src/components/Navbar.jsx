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
            <>
                <AppBar sx={{ paddingX: { xs: 0, md: 20 } }} position="fixed">
                    <Toolbar>
                        <Stack flexDirection={"row"} flexGrow={1}>
                            {
                                pages.map((page) => {
                                    return (
                                        <Link
                                            key={page.text}
                                            to={page.url}
                                            style={{ textDecoration: "none" }}>
                                            <Button
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
                <Toolbar />
            </>

        )
    }
}

export default Navbar;