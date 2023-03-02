import React, {useState} from 'react'
import { Box,Card,CardActions,CardContent,Collapse,Button,Typography,Rating,useTheme,useMediaQuery } from '@mui/system';
import { useGetProductsQuery } from 'state/api';
import Header from 'components/Header'
const Products = () => {
  return (
    <Box>
        <Header title="PRODUCTS" subtitle="See your list of products."/>
    </Box>
  )
}

export default Products
