import React from 'react'
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from '@mui/material'
import {Lock, Menu} from '@mui/icons-material'

import avatarUrl from '../avatar.png'
import { useValue } from '../context/ContextProvider'
import UserIcons from './user/UserIcons'

const user = {
    name: 'John Doe',
    photoUrl: avatarUrl
}

const NavBar = () => {
    const {state:{currentUser}, dispatch} = useValue()

  return (
    <AppBar>
        <Container maxWidth='lg'>
            <Toolbar disableGutters>
                <Box sx={{mr:1}}>
                    <IconButton size='large' color='inherit'>
                        <Menu />
                    </IconButton>
                </Box>
                <Typography variant='h6' component='h1' noWrap sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}>
                    You are welcome
                </Typography>

                <Typography variant='h6' component='h1' noWrap sx={{flexGrow:1, display:{xs:'flex', md:'none'}}}>
                    YRW
                </Typography>

                {!currentUser ? 
                    <Button color='inherit' startIcon={<Lock />} onClick={()=>{dispatch({type:'OPEN_LOGIN'})}}>
                        Login
                    </Button>
                    : 
                    <UserIcons />
                }
            </Toolbar>
        </Container>
    </AppBar> 
  )
}

export default NavBar