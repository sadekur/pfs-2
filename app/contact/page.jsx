import React from 'react'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Imput } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+880 1234 5678",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "O2T0M@example.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "123 Main Street, City, Country",
  },
];


const Contact = () => {
  return (
    <div>
      services
    </div>
  )
}

export default Contact
