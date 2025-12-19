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



export const titleOptions: Option[] = [
  { label: "Mr", value: "mr" },
  { label: "Mrs", value: "mrs" },
  { label: "Miss", value: "miss" },
  { label: "Master", value: "master" },
];
export const typeOptions: Option[] = [
  { label: "Adult", value: "adult" },
  { label: "Children", value: "children" },
  { label: "Infant", value: "infant" },
];
export const nationalityOptions: Option[] = [
  { label: "Nigeria", value: "nigeria" },
  { label: "United State of America", value: "usa" },
  { label: "United Kindom", value: "uk" },
];
export const genderOptions: Option[] = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "I prefer not to say", value: "notSpecify" },
];
export const cityOptions: Option[] = [
  { label: "Ibadan", value: "ibadan" },
  { label: "Oyo", value: "oyo" },
  { label: "Iseyin", value: "iseyin" },
];