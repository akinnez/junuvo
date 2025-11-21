import React from "react";

// Define the shape of the data the FlightCard component expects
interface FlightData {
  id: string;
  date: string; // e.g., "23 DEC"
  airlineName: string; // e.g., "EgyptAir"
  flightNumber: string; // e.g., "MS-867"
  price: number; // e.g., 95645.00
  currency: string; // e.g., "₦"
  classType: "ECONOMY" | "BUSINESS" | "FIRST";
  departureTime: string; // e.g., "19:20"
  arrivalTime: string; // e.g., "20:35"
  departureAirportCode: string; // e.g., "LOS"
  arrivalAirportCode: string; // e.g., "ABV"
  duration: string; // e.g., "1hr:15m"
  layovers: number; // e.g., 1
  logoUrl: string; // URL for the airline logo
}

// A simple utility to format the price
const formatPrice = (price: number, currency: string): string => {
  return `${currency}${price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  })}`;
};

// The core reusable component
const FlightCard: React.FC<{ flight: FlightData }> = ({ flight }) => {
  const {
    date,
    airlineName,
    flightNumber,
    price,
    currency,
    classType,
    departureTime,
    arrivalTime,
    departureAirportCode,
    arrivalAirportCode,
    duration,
    layovers,
    logoUrl,
  } = flight;

  // Function to handle the View Details click (placeholder)
  const handleViewDetails = () => {
    console.log(`Viewing details for flight ${flightNumber} on ${date}`);
    // In a real app, this would navigate to a detail page or open a modal
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 font-inter w-full max-w-sm mx-auto my-4 transform transition duration-300 hover:shadow-xl">
      <div className="p-5">
        {/* --- Header: Date and Price --- */}
        <div className="flex justify-between items-start mb-4">
          <p className="text-sm font-semibold text-gray-700">{date}</p>
          <p className="text-lg font-bold text-blue-600">
            {formatPrice(price, currency)}
          </p>
        </div>

        {/* --- Airline and Class --- */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {/* Airline Logo Placeholder */}
            <div className="w-10 h-10 flex-shrink-0">
              <img
                src={logoUrl}
                alt={`${airlineName} logo`}
                className="w-full h-full object-contain rounded-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (
                    e.target as HTMLImageElement
                  ).src = `https://placehold.co/40x40/f1f1f1/888?text=${airlineName.charAt(
                    0
                  )}`;
                }}
              />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900 leading-tight">
                {airlineName}
              </p>
              <p className="text-xs text-gray-500">{flightNumber}</p>
            </div>
          </div>
          {/* Class Tag */}
          <span
            className={`px-2 py-1 text-xs font-medium rounded-md uppercase tracking-wider ${
              classType === "ECONOMY"
                ? "bg-gray-100 text-gray-600"
                : classType === "BUSINESS"
                ? "bg-blue-100 text-blue-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {classType}
          </span>
        </div>

        {/* --- Ticket Perforation Separator --- */}
        <div className="relative my-4">
          {/* Dashed Line */}
          <div className="border-t border-dashed border-gray-300"></div>

          {/* Left Cutout */}
          <div className="absolute w-6 h-6 rounded-full bg-gray-50 -left-8 top-1/2 transform -translate-y-1/2 border-r-4 border-white"></div>

          {/* Right Cutout */}
          <div className="absolute w-6 h-6 rounded-full bg-gray-50 -right-8 top-1/2 transform -translate-y-1/2 border-l-4 border-white"></div>
        </div>

        {/* --- Times, Duration, and Airports --- */}
        <div className="flex justify-between items-center my-4">
          {/* Departure Info */}
          <div className="text-left">
            <p className="text-xl font-bold text-gray-900">{departureTime}</p>
            <p className="text-sm text-gray-500">{departureAirportCode}</p>
          </div>

          {/* Duration Indicator */}
          <div className="flex flex-col items-center text-center mx-2 flex-grow">
            {/* Simple Flight Line with plane icon */}
            <div className="relative w-full h-1">
              <div className="absolute top-0 w-full h-px bg-gray-300"></div>
              {/* Plane Icon (using lucide-react equivalent via inline SVG) */}
              <svg
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">{duration}</p>
          </div>

          {/* Arrival Info */}
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">{arrivalTime}</p>
            <p className="text-sm text-gray-500">{arrivalAirportCode}</p>
          </div>
        </div>

        {/* --- Layovers and View Details --- */}
        <div className="flex justify-between items-center pt-3 text-xs">
          <p className="text-blue-500">
            No of Layovers: <span className="font-semibold">{layovers}</span>
          </p>
          <button
            onClick={handleViewDetails}
            className="text-purple-600 font-semibold hover:text-purple-800 transition duration-150 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-sm"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Application component that renders the FlightCard example
const App: React.FC = () => {
  // Example Flight Data
  const sampleFlight: FlightData = {
    id: "F867",
    date: "23 DEC",
    airlineName: "EgyptAir",
    flightNumber: "MS-867",
    price: 95645.0,
    currency: "₦", // Using Nigerian Naira symbol
    classType: "ECONOMY",
    departureTime: "19:20",
    arrivalTime: "20:35",
    departureAirportCode: "LOS", // Lagos
    arrivalAirportCode: "ABV", // Abuja
    duration: "1hr:15m",
    layovers: 1,
    // Placeholder image for the logo
    logoUrl: "https://placehold.co/40x40/d43c3c/ffffff?text=EA",
  };

  const sampleFlightBusiness: FlightData = {
    ...sampleFlight,
    id: "F401",
    airlineName: "Turkish Airlines",
    flightNumber: "TK-401",
    price: 320500.0,
    classType: "BUSINESS",
    departureTime: "10:00",
    arrivalTime: "18:45",
    duration: "8hr:45m",
    layovers: 0,
    logoUrl: "https://placehold.co/40x40/004d9c/ffffff?text=TH",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        Flight Options
      </h1>
      <div className="w-full space-y-6">
        {/* Render the card based on the user's image */}
        <FlightCard flight={sampleFlight} />

        {/* Render a second example for reusability demonstration */}
        <FlightCard flight={sampleFlightBusiness} />
      </div>
    </div>
  );
};

export default App;
