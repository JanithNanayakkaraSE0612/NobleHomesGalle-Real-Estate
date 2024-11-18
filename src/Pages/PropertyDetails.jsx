import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase'; // Firebase Firestore config
import { doc, getDoc } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const PropertyDetails = () => {
  const { propertyId } = useParams();
  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch property data from Firebase
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const propertyDoc = doc(db, "homes", propertyId); // 'homes' is your collection
        const docSnap = await getDoc(propertyDoc);

        if (docSnap.exists()) {
          setProperty(docSnap.data());
        } else {
          setError('Property not found!');
        }
      } catch (err) {
        setError('Error fetching property details!');
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  if (loading) {
    return <div className="text-center text-gray-600 text-2xl font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 text-2xl font-semibold">{error}</div>;
  }

  if (!property) {
    return <div className="text-center text-red-600 text-2xl font-semibold">Property not found!</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 md:p-12 bg-white shadow-xl rounded-lg mt-8 space-y-10">
      {/* Property Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{property.title}</h1>

      {/* Property Images / Slider */}
      <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        >
          {property.imageUrls && property.imageUrls.length > 0 ? (
            property.imageUrls.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Property Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center py-16 text-gray-500">No images available</div>
          )}
        </Swiper>
      </div>

      {/* Property Description */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Property Description</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{property.description}</p>
      </div>

      {/* Property Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Information</h3>
          <ul className="space-y-3 text-lg text-gray-700">
            <li><strong>Address:</strong> {property.address}</li>
            <li><strong>City:</strong> {property.city}</li>
            <li><strong>Town:</strong> {property.town}</li>
            <li><strong>Price:</strong> Rs{property.price}</li>
            <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
            <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
            <li><strong>Floor Area:</strong> {property.floorArea} sqft</li>
            <li><strong>Furnished Status:</strong> {property.furnishedStatus}</li>
            <li><strong>Age of Building:</strong> {property.ageOfBuilding}</li>
            <li><strong>Parking Space:</strong> {property.parkingSpace} vehicles</li>
            <li><strong>Perches:</strong> {property.perches}</li>
            <li><strong>No of Floors:</strong> {property.noOfFloors}</li>
            <li><strong>Road Width:</strong> {property.roadWidth} feet</li>
          </ul>
        </div>

        {/* Property Features */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            {property.propertyFeatures && property.propertyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Map Link */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Location</h3>
        <a href={property.mapUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline transition-all">
          View on Google Maps
        </a>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h3>
        <p className="text-lg text-gray-700">For more information, please contact our real estate agent.</p>
        <p className="text-lg text-gray-700 mt-2"><strong>Agent:</strong> {property.agentName || 'N/A'}</p>
        <p className="text-lg text-gray-700"><strong>Phone:</strong> {property.agentPhone || 'N/A'}</p>
      </div>

      {/* Action Button */}
      <div className="text-center mb-12">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white py-4 px-10 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
