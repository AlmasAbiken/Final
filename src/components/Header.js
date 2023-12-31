import { AppBar, Container, MenuItem, Toolbar, Typography,Select, makeStyles, createTheme,ThemeProvider } from "@material-ui/core";
import React from "react";
import {useNavigate} from "react-router-dom";//useNavigate replaced useHistory
import { CryptoState } from "../CryptoContext";

const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:'gold',
        fontFamily:'Montserrat',
        fontWeight:'bold',
        cursor:'pointer'
    }
}))


const Header=()=>{

    const classes=useStyles();

    const navigate=useNavigate();

    const {currency,setCurrency}=CryptoState();

    const darkTheme=createTheme({
        palette:{
            primary:{
                main:'#fff',
            },
            type:'dark'
        }
    })

    return(
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position="static">
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} onClick={()=>{navigate('/',{ replace: true })}} variant='h5' >
                        Cryptoverse
                        </Typography>
                        <Select variant='outlined' value={currency}
                            onChange={(e)=>{setCurrency(e.target.value)}}
                            style={{width:100,height:40,marginRight:15}}>
                        <MenuItem value={"USD"}>USD</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header;