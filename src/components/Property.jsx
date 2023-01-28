import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Avatar } from '@chakra-ui/avatar';
import { GoVerified } from 'react-icons/go';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import DefaultImage from '../assets/house.jpg';
import { Link } from 'react-router-dom';
const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => {
  return (
      <Link to={`/property/${externalID}`}>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer'>
          <Box>
            <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260}/>
          </Box>
          <Box w='full'>
            <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
              <Flex alignItems='center'>
                <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified/>}</Box>
                <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
              </Flex>
              <Box>
                <Avatar size='sm' src={agency?.logo.url}></Avatar>
              </Box>
            </Flex>
            <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
              {rooms}
              <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
            </Flex>
            <Text fontSize='lg'>
              {title.length > 30 ? title.substring(0,30) + '...' : title}
            </Text>
          </Box>
        </Flex>
      </Link>
  )
}

export default Property