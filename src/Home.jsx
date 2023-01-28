import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import Banner from "./components/Banner";
import Property from "./components/Property";
import useFetchDataList from "./hooks/useFetchDataList";

const Home = () => {
  const propertyRent = useFetchDataList("for-rent");
  const propertiesForRent = propertyRent?.property?.hits;

  const propertySale = useFetchDataList("for-sale");
  const propertiesForSale = propertySale?.property?.hits;
  console.log(propertiesForRent?.length);
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      {propertiesForRent?.length === undefined ? (
        <Flex flexWrap="wrap" align="center" justify="center">
          <Spinner margin="auto" marginTop="3" />
        </Flex>
      ) : (
        <Flex flexWrap="wrap" align="center" justify="center">
          {propertiesForRent?.map((hit) => (
            <Property property={hit} key={hit.id} />
          ))}
        </Flex>
      )}
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      {propertiesForSale?.length === undefined ? (
        <Flex flexWrap="wrap" align="center" justify="center">
          <Spinner margin="auto" marginTop="3" />
        </Flex>
      ) : (
        <Flex flexWrap="wrap" align="center" justify="center">
          {propertiesForSale?.map((hit) => (
            <Property property={hit} key={hit.id} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Home;
