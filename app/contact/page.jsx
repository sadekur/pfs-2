"use client"
import React from 'react'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Imput, Input } from "@/components/ui/input";
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
  return <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
    className="py-6"
  >
    <div className="container mx-auto pt-[60px] xl:pt-[150px]">
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="space-y-6">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input placeholder="Your Email" />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={5} />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-8">
            Here are some ways you can reach out to me.
          </p>
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start mb-6">
              <div className="text-blue-500 text-xl mr-4">{info.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
}

export default Contact
