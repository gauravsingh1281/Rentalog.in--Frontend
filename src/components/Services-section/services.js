import iconPerson from "../../assets/Icons/icon-person.png";
import iconCalendar from "../../assets/Icons/icon-calendar.png";
import iconHome from "../../assets/Icons/icon-home.png";
import iconPencil from "../../assets/Icons/icon-pencil.png";
import services_1 from "../../assets/Images/services-1.png";
import services_2 from "../../assets/Images/services-2.png";
import services_3 from "../../assets/Images/services-3.png";
import services_4 from "../../assets/Images/services-4.jpg";
const ourServices = [
  {
    id: 1,
    bgColor: "bg-[#EBB4B6]",
    bgImg: services_1,
    title: "Tenant Management",
    description:
      "Store and access your renters' personal information like name, address, and phone number with ease.",
    icon: iconPerson,
    alt: " iconPerson",
    aos: "fade-right",
  },
  {
    id: 2,
    bgColor: "bg-[#D1F2EB]",
    bgImg: services_2,
    title: "Track Payment Records",
    description:
      "Keep a record of all your renters' monthly rent payments and have a complete overview of your rental income.",
    icon: iconCalendar,
    alt: "iconCalendar",
    aos: "fade-left",
  },
  {
    id: 3,
    bgColor: "bg-[#D1F2EB]",
    bgImg: services_3,
    title: " Rent Calculation",
    description:
      "Automatically calculate the total rent received each month and see a breakdown of payments.",
    icon: iconPencil,
    alt: "iconPencil",
    aos: "fade-right",
  },
  {
    id: 4,
    bgColor: "bg-[#EBB4B6]",
    bgImg: services_4,
    title: "Property Listing",
    description:
      " Showcase your rental properties and attract potential tenants by listing them on Rentalog.",
    icon: iconHome,
    alt: "iconHome",
    aos: "fade-left",
  },
];
export default ourServices;