import { Box, Typography } from "@mui/material";
import { Component } from "react";

class Home extends Component{
    render(){
        return(
            <Box display={"flex"} justifyContent={"center"} alignItems={'center'}>
                <Typography variant="h2">Welcome</Typography>
            </Box>
        )
    }
}

export default Home;