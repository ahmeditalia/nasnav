import { Box, Typography } from "@mui/material";
import { Component } from "react";

class Home extends Component{
    render(){
        return(
            <Box padding={10}>
                <Typography variant="h2">Welcome</Typography>
            </Box>
        )
    }
}

export default Home;