import { Box } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    let today = new Date();
  return (
    <Box>
        © {today.getFullYear()} Real State Herrera, Inc.
    </Box>
  )
}

export default Footer