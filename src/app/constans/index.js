import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export const CAR = [
  {
    id: 1,
    label: "Vehicles",
    name: "Cars & Minivan",
    name2: "hero",
    name3: "house",
  },
  {
    id: 2,
    label: "Shopping Tools",
    name: "car",
  },
  { id: 3, label: "Owners", name: "car1" },
  {
    id: 4,
    label: "Search Inventory",
    name: "car2",
  },
];

export const FOOT = [
  {
    lable: "Overview",
  },
  {
    lable: "Specs",
  },
  {
    lable: "Gallery",
  },
  {
    lable: "Garage",
  },
  {
    lable: "Features",
  },
  {
    lable: "Trims",
  },
  {
    lable: "Offers",
  },
];

export const DATA = [
  {
    title: "3.0L 6-CYL. ENGINE",
    description: "382 HP/368 Lb.-Ft. *",
  },
  {
    title: "PERFORMANCE",
    description: "0-60 in 3.9 Seconds *",
  },
  {
    title: "DRIVETRAIN",
    description: "Rear-Wheel Drive",
  },
  {
    title: "AVS",
    description: "Adaptive Variable Suspension",
  },
  {
    title: "TRANSMISSION",
    description: "6-Speed iMT or 8-SPeed AT",
  },
  {
    title: "NATIONAL AUTO SPORT ASSOCIATION",
    description: "Complimentary 1-Year Membership *",
  },
];

export const STYLE = [
  {
    img: (
      <Image
        src="/supra2.jpg"
        width={400}
        height={400}
        className="w-full rounded-xl"
      />
    ),
  },
  {
    img: (
      <Image
        src="/supra1.jpg"
        width={400}
        height={400}
        className="w-full rounded-xl"
      />
    ),
  },
  {
    img: (
      <Image
        src="/supra3.jpg"
        width={400}
        height={400}
        className="w-full rounded-xl"
      />
    ),
  },
];
export const STYLE1 = [
  {
    img: (
      <Image
        src="/inside.jpg"
        width={400}
        height={400}
        className="w-full rounded-xl"
      />
    ),
  },
  {
    img: (
      <Image
        src="/inside2.jpg"
        width={400}
        height={400}
        className="w-full rounded-xl"
      />
    ),
  },
  {
    img: (
      <Image
        src="/inside3.jpg"
        width={400}
        height={400}
        className="w-full rounded-xl"
      />
    ),
  },
];

export const STYLE2 = ["/show.jpg", "/show1.jpg", "/show3.jpg"];

export const features = [
  {
    title: "A Sensuous Silhouette",
    description:
      "Each and every aspect of GR Supra’s design is defined by its contribution to driving performance. Generous curves and daring shapes come together in a silhouette that provides optimum aerodynamics.",
    imgSrc: "/supra.jpg",
  },
  {
    title: "19-In. Forged Alloy Wheels",
    description:
      "Sleek, strong and lightweight 19-in. forged-aluminum wheels are wrapped in Michelin® Pilot® Super Sport tires, to help further optimize acceleration, cornering and braking capabilities.",
    imgSrc: "/supra1.jpg",
  },
  {
    title: "LED Headlights",
    description:
      "GR Supra’s sculpted front end is punctuated by its signature headlights. Each housing features a two-level, 6-lens LED light cluster to bring optimal brightness and clarity to your drives.",
  },
  {
    title: "Dynamic Rear LED Taillights",
    description:
      "Chiseled into GR Supra’s rear, LED taillights are designed to clearly illuminate turn, tail and stop functions.",
  },
];

export const HERO = [
  {
    label: "Safety & Convenience",
    img: "/supra8.jpg",
  },
  {
    label: "GR Family",
    img: "/supra9.jpg",
  },
];

export const INFO = [
  {
    label: "Build Your Toyota",
    dis: "Customize and find your GR Supra.",
    button: "Start Your Build",
    img: "/supra9.jpg",
  },
  {
    label: "Payment Estimator",

    button: "See Payment Options",
    img: "/supra8.jpg",
  },
  {
    label: "Specs & Details",

    button: "View Specs",
    img: "/show3.jpg",
  },
  {
    label: "NASA Partnership",

    button: "Learn More",
    img: "/supra14.jpg",
  },
];
export const SCICAL = [
  {
    icon: <CiFacebook size={35} />,
  },
  {
    icon: <CiInstagram size={35} />,
  },
  {
    icon: <FaYoutube size={35} />,
  },
  {
    icon: <FaXTwitter size={35} />,
  },
  {
    icon: <FaTiktok size={35} />,
  },
];

export const FOOTER = [
  {
    data: "Trade-In Value",
  },
  {
    data: "Build Your Toyota",
  },
  {
    data: "Search Inventory",
  },
  {
    data: "Find a Dealer",
  },
  {
    data: "Shop Online With SmartPath",
  },
  {
    data: "Local Specials",
  },
  {
    data: "What Fits My Budget",
  },
  {
    data: "Payment Estimator",
  },
  {
    data: "Request a Quote",
  },
  {
    data: "Toyota Certified Used Vehicles",
  },
  {
    data: "Buy Parts & Accessories",
  },
];
export const FOOTER1 = [
  {
    data: "All Toyota Vehicles",
  },
  {
    data: "SUVs",
  },
  {
    data: "SUVs",
  },
  {
    data: "Cars",
  },
  {
    data: "Crossovers",
  },
  {
    data: "Electrified Vehicles",
  },
  {
    data: "Hybrids",
  },
  {
    data: "Hybrid Cars",
  },
  {
    data: "Hybrid SUVs",
  },
  {
    data: "TRD Pro Series",
  },
  {
    data: "Nightshade Series",
  },
];

export const FOOTER2 = [
  {
    data: "Dealers",
  },
  {
    data: "Deals and Incentives",
  },
  {
    data: "Audio Multimedia & Connected Services",
  },
  {
    data: "Mobility",
  },
  {
    data: "Toyota Fleet",
  },
  {
    data: "Rent a Toyota",
  },
  {
    data: "Toyota Financial Services",
  },
  {
    data: "Toyota Insurance",
  },
  {
    data: "Email Updates",
  },
];
export const FOOTER3 = [
  {
    data: "Owners Home",
  },
  {
    data: "Safety Recalls & Service Campaigns",
  },
  {
    data: "Service Centers",
  },
  {
    data: "Service Specials",
  },
  {
    data: "Safety Hub",
  },
  {
    data: "Warning Lights",
  },
  {
    data: "Manuals & Warranties",
  },
  {
    data: "Service Coupons Discounts",
  },
];
export const FOOTER4 = [
  {
    data: "Careers",
  },
  {
    data: "About Us",
  },
  {
    data: "Our Company",
  },
  {
    data: "Toyota Outfitters",
  },
  {
    data: "Newsroom",
  },
  {
    data: "Toyota Worldwide",
  },
  {
    data: "Toyota Racing",
  },
  {
    data: "TRD USA",
  },
  {
    data: "Plant Tours",
  },
];
