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
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className='text-4xl text-accent'>Lets Work Together</h3>
            <p className='text-white/60'>Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new projects and opportunities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <Input type="firstname" placeholder="First Name" />
              <Input type="lastname" placeholder="Last Name" />
              <Input type="email" placeholder="Email" />
              <Input type="phone" placeholder="Phone" />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="service1">Modern Wordpress Plugin Development</SelectItem>
                    <SelectItem value="service2">Mern Stack Development</SelectItem>
                    <SelectItem value="service3">SASS Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="type Your Message Here " />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-8">
            Here are some ways you can reach out to me.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
}

export default Contact
