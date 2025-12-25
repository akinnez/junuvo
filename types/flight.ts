export interface FlightDataInfo {
  id: string;
  departureDate: string; // e.g., "23 DEC"
  returnDate?: string; // e.g., "23 DEC"
  airlineName: string; // e.g., "EgyptAir"
  flightNumber: string; // e.g., "MS-867"
  price: number; // e.g., 95645.00
  currency: 'NGN' | 'USD'; // e.g., "₦"
  classType: "ECONOMY" | "BUSINESS" | "FIRST";
  departureTime: string; // e.g., "19:20"
  arrivalTime: string; // e.g., "20:35"
  departureAirportCode: string; // e.g., "LOS"
  arrivalAirportCode: string; // e.g., "ABV"
  duration: string; // e.g., "1hr:15m"
  layovers: number; // e.g., 1
  logoUrl: string; // URL for the airline logo
  departureAirportName?: string;
  arrivalAirportName?: string;
  plane_name?: string;
  layover_location?: string;
  layover_time?: string;
}

export interface FlightData extends Omit<FlightDataInfo, "returnDate"> {}

export interface PassengerData {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  dob?:string;
  nationality?:string;
  gender?:string;
  phone:string;
  email: string;
  city?:string;
  posterCode?:string;
  address?:string;
 type?:string;
  title?:string;
  isFilled: boolean;
}

export interface PassengerListProps {
  passengers: PassengerData[];
  onEdit: (index: number) => void;
  N: number;
}
