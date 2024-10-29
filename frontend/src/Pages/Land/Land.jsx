import React, { useState } from "react";
import hero from "../../assests/Land/Hero.png";
import { FaHome } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropertySearch from "../../Components/PropertySearch";
import img1 from "../../assests/Land/land1.jpeg";
import img2 from "../../assests/Land/land2.jpeg";
import img3 from "../../assests/Land/land3.jpeg";
import img4 from "../../assests/Land/land4.png";
import img5 from "../../assests/Land/land5.png";
import img6 from "../../assests/Land/land6.jpeg";
import Footer from "../../Components/Footer";

const Land = () => {
  const allProperties = [
    {
      img: img1,
      propertyType: "Land",
      province: "Southern Province",
      town: "21 Acres Perches Land for Sale in Ella",
      purches: "15 Purches",
      price: 55000000,
      city: "Ella",
    },
    {
      img: img2,
      propertyType: "Land",
      province: "Western Province",
      town: "Malabe Town - Land for Sale",
      purches: "10 Purches",
      price: 65000000,
      city: "Malabe",
    },
    {
      img: img3,
      propertyType: "Land",
      province: "Central Province",
      town: "19.55 Perches Land for Sale in Madiwela",
      purches: "12 Purches",
      price: 45000000,
      city: "Madiwela",
    },
    {
      img: img4,
      propertyType: "Land",
      province: "Eastern Province",
      town: "Land for Sale in Padukka Watareka",
      purches: "8 Purches",
      price: 35000000,
      city: "Padukka",
    },
    {
      img: img5,
      propertyType: "Land",
      province: "Northern Province",
      town: "Most valuable land for sale in Watareka",
      purches: "20 Purches",
      price: 75000000,
      city: "Watareka",
    },
    {
      img: img6,
      propertyType: "Land",
      province: "North Western Province",
      town: "Most valuable land for sale in Watareka",
      purches: "18 Purches",
      price: 50000000,
      city: "Watareka",
    },
  ];

  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const handleSearch = (searchFilters) => {
    const { propertyType, selectedProvince, selectedCity, minPrice, maxPrice } = searchFilters;
    const minPriceNum = minPrice ? parseInt(minPrice) : 0;
    const maxPriceNum = maxPrice ? parseInt(maxPrice) : Number.MAX_SAFE_INTEGER;

    const filtered = allProperties.filter((property) => {
      return (
        (propertyType === "" || property.propertyType === propertyType) &&
        (selectedProvince === "" || property.province === selectedProvince) &&
        (selectedCity === "" || property.city === selectedCity) &&
        property.price >= minPriceNum &&
        property.price <= maxPriceNum
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white" /* This ensures smooth blending */
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto w-full sm:px-24 lg:px-8 lg:py-20">
          <div className="relative w-full max-w-2xl mx-auto text-center">
            <h2 className="mt-20 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Transform Your Dreams into
              <br className="hidden md:block" />
              Reality with our Land Options.{" "}
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg mt-3">
              Finding the home, commercial, or office you’ll love to rent or buy just got easier.
            </p>

            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* PropertySearch Component */}
        <PropertySearch onSearch={handleSearch} />
      </div>

      {/* Filtered Properties Section */}
      <div className="m-20">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-1xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center mb-3 uppercase m-10">
            Our Properties
          </h1>
          <p className="text-m font-normal font-poppins text-[#6F97FF] text-center mb-10">
            Best Properties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <Card className="w-full rounded-[1.5rem] p-2" key={index}>
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="relative shadow-xl h-96 rounded-[1.5rem]"
                >
                  <img
                    src={property.img}
                    alt={`${property.town} image`}
                    className="h-full w-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-sm font-semibold rounded-lg">
                    Popular
                  </div>
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="gray"
                    className="opacity-75 font-semibold mb-2"
                  >
                    {property.province}
                  </Typography>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography
                      color="blue-gray"
                      className="!text-2xl !font-semibold mb-2"
                    >
                      Land for Sale in {property.town}
                    </Typography>
                  </div>

                  <hr className="border-t-2 border-[#E5E5E5] mb-4" />

                  <div className="flex items-center">
                    <FaHome className="mr-2 text-[#69727D]" />
                    <Typography color="blue-gray" className="font-normal">
                      {property.purches}
                    </Typography>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="p-3 bg-blue-500 text-white shadow-none hover:bg-blue-600 hover:scale-105 hover:shadow-none focus:bg-blue-600 focus:scale-105 focus:shadow-none active:bg-blue-700 active:scale-100 rounded-none normal-case flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center sm:flex-row sm:items-center">
                      <span className="text-base sm:text-lg">Total Price</span>
                      <span className="text-2xl sm:ml-2 sm:mt-0 mt-1">
                        Rs {property.price.toLocaleString()}
                      </span>
                    </div>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No properties found.</p>
          )}
        </div>

        <div className="mt-20 relative">
          <hr className="border-t-2 border-[#8B8B8B] w-full" />
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
            <Button className="bg-[#424242] text-white rounded-full px-6 py-2 text-sm">
              See All
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Land;
