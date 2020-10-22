import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
 const NavBar = ({children})=>{
    return(
        <div>
        <AppBar position="static">
            <Toolbar  style={{justifyContent:'center'}}>
                <Typography variant="h6"  >
                    Solver
                </Typography>
            </Toolbar>
        </AppBar>
            {children}
            </div>
    )
}

export default NavBar