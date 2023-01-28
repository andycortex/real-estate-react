import { Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    let today = new Date();
  return (
    <Box>
        © {today.getFullYear()} Realtor, Inc.
    </Box>
  )
}

export default Footer