


import React from 'react'
import {Backdrop, CircularProgress} from '@mui/material'
import { useValue } from '../context/ContextProvider'

const Loading = () => {
    const {state:{loading}, dispatch} = useValue()
  return (
    <Backdrop open={loading} sx={{zIndex: (theme) => theme.zIndex.modal + 1}}>
        <CircularProgress sx={{color:'white'}}/>
    </Backdrop>
  )
}

export default Loading