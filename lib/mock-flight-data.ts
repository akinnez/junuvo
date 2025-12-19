import { FlightDataInfo } from "@/types/flight";

export const flightData: FlightDataInfo[] = [
  {
    id: "F8670",
    departureDate: "23 DEC, 2024",
    returnDate: "23 DEC, 2024",
    airlineName: "EgyptAir",
    flightNumber: "MS-867",
    price: 95645.0,
    currency: "NGN", // Using Nigerian Naira symbol
    classType: "BUSINESS",
    departureTime: "19:20",
    arrivalTime: "20:35",
    departureAirportCode: "LOS", // Lagos
    arrivalAirportCode: "ABV", // Abuja
    duration: "1hr:15m",
    layovers: 1,
    plane_name: "Royal Jordanian RJ611",
    arrivalAirportName: "Amman (Amman)",
    departureAirportName: "Dubai (Dubai Intl Airport)",
    layover_time: "19hr 45m",
    layover_location: "at Amman (Amman)",
    // Placeholder image for the logo
    logoUrl: "/images/ET.png",
  },
  {
    id: "F867",
    departureDate: "23 DEC, 2024",
    // returnDate: "23 DEC, 2024",
    airlineName: "EgyptAir",
    flightNumber: "MS-867",
    price: 95645.0,
    currency: "NGN", // Using Nigerian Naira symbol
    classType: "FIRST",
    departureTime: "19:20",
    arrivalTime: "20:35",
    departureAirportCode: "LOS", // Lagos
    arrivalAirportCode: "ABV", // Abuja
    duration: "1hr:15m",
    layovers: 1,
    plane_name: "Royal Jordanian RJ611",
    arrivalAirportName: "Amman (Amman)",
    departureAirportName: "Dubai (Dubai Intl Airport)",
    layover_time: "19:45",
    layover_location: "at Amman (Amman)",

    // Placeholder image for the logo
    logoUrl: "/images/ET.png",
  },
];