import  { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import PropertySearch from "../Components/PropertySearch";
import Footer from "../Components/Footer";
import Fab from "../Components/Fab";

const Land = () => {
  const [properties, setProperties] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cityList, setCityList] = useState([]);

  const navigate = useNavigate();

  // Fetch properties from Firestore
  const fetchProperties = async () => {
    try {
      const propertiesCollection = collection(db, "homes");
      const propertySnapshot = await getDocs(propertiesCollection);
      const propertyList = propertySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProperties(propertyList);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

 
  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities) {
      setCityList(storedCities);
    } else {
      setCityList([
        "Colombo",
        "Gampaha",
        "Kandy",
        "Galle",
        "Jaffna",
        "Anuradhapura",
        "Ratnapura",
        "Badulla",
        "Matara",
        "Trincomalee",
      ]);
    }
    fetchProperties();
  }, []);

  useEffect(() => {
    if (cityList.length > 0) {
      localStorage.setItem("cities", JSON.stringify(cityList));
    }
  }, [cityList]);

  const handleSearch = (filters) => {
    setPropertyType(filters.propertyType);
    setSelectedCity(filters.selectedCity);
  };

  const handleViewMore = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesPropertyType = propertyType
        ? property.propertyType === propertyType
        : true;
      const matchesCity = selectedCity ? property.city === selectedCity : true;

      return matchesPropertyType && matchesCity;
    });
  }, [properties, propertyType, selectedCity]);

  // Utility function for price formatting
  const formatPrice = (price) => {
    return price
      ? `LKR ${Number(price).toLocaleString()}.00`
      : "Price not available";
  };

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-black mt-9">
        Properties for Sale
      </h1>

      {/* PropertySearch component */}
      <div className="mb-6">
        <PropertySearch
          onSearch={handleSearch}
          cityList={cityList}
          setCityList={setCityList}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-9">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div
              key={property.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={
                  property.imageUrls
                    ? property.imageUrls[0]
                    : "/default-image.jpg"
                }
                alt={property.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">
                  {property.title}
                </h2>
                <p className="text-gray-600">{property.city}</p>
                <p className="font-bold text-black">
                  {formatPrice(property.price)}.00
                </p>

                <button
                  onClick={() => handleViewMore(property.id)}
                  className="mt-4 py-2 px-4 bg-black text-white rounded-md hover:bg-blue-700"
                >
                  View More
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            <p>No properties found matching your criteria.</p>
          </div>
        )}
      </div>
      
      <Fab />
      <Footer />
    </div>
  );
};

export default Land;
