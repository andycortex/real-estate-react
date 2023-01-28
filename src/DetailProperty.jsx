import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import ImageScrollbar from "./components/ImageScrollbar";
import useFetchDataList from "./hooks/useDetailProperty";

const DetailProperty = () => {
  let { externalID } = useParams();
  const property = useFetchDataList(externalID);
  const detailProperty = property?.property;
  console.log("DetailProperty", detailProperty)
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {detailProperty?.photos && (
        <ImageScrollbar data={detailProperty?.photos} />
      )}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
          <Box paddingRight="3" color="green.400">
            {detailProperty?.isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {detailProperty?.price}{" "}
            {detailProperty?.rentFrequency &&
              `/${detailProperty?.rentFrequency}`}
          </Text>
          <Spacer />
          <Avatar size="sm" src={detailProperty?.agency?.logo?.url}></Avatar>
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {detailProperty?.rooms}
          <FaBed /> | {detailProperty?.baths} <FaBath /> |{" "}
          {millify(detailProperty?.area)} sqft <BsGridFill />
        </Flex>
      </Box>
      <Box marginTop="2">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {detailProperty?.title}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {detailProperty?.description.replaceAll("<p>", "").replaceAll("</p>", "")}
        </Text>
      </Box>
      <Flex
        flexWrap="wrap"
        textTransform="uppercase"
        justifyContent="space-between"
      >
        <Flex
          justifyContent="space-between"
          w="400px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Type</Text>
          <Text fontWeight="bold">{detailProperty?.type}</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          w="400px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Purpose</Text>
          <Text fontWeight="bold">{detailProperty?.purpose}</Text>
        </Flex>
        {detailProperty?.furnishingStatus && (
          <Flex
            justifyContent="space-between"
            w="400px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Furnishing Status</Text>
            <Text fontWeight="bold">{detailProperty?.furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {detailProperty?.amenities?.length && (
          <Text fontSize="2xl" fontWeight="black" marginTop="1">
            Facilities:
          </Text>
        )}
        <Flex flexWrap="wrap">
          {detailProperty?.amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <Text
                key={amenity.text}
                fontWeight="bold"
                color="blue.400"
                fontSize="sm"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default DetailProperty;
