"use client"
import React from 'react'
import { Button } from "@/components/ui/button";
import { Imput, Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const serviceOptions = [
  { value: "service1", label: "Modern Wordpress Plugin Development" },
  { value: "service2", label: "Mern Stack Development" },
  { value: "service3", label: "SASS Development" },
];

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+88-01780664660",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shadekur.rahman60@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Uttor Shyamoli, Dhaka, Bangladesh",
  },
];

const Contact = () => {
  return <section className="py-6">
    <div className="container mx-auto pt-[60px] xl:pt-[150px]">
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#1a1a2e] rounded-xl">
            <h3 className='text-4xl text-gradient'>Lets hmggngvh Together</h3>
            <p className='text-white/60'>Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new projects and opportunities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <Input type="firstname" placeholder="First Name" />
              <Input type="lastname" placeholder="Last Name" />
              <Input type="email" placeholder="Email" />
              <Input type="phone" placeholder="Phone" />
            </div>
            <div className="w-full">
              <CustomSelect
                name="service"
                placeholder="Select a service"
                groupLabel="Services"
                options={serviceOptions}
              />
            </div>
            <Textarea className="h-[200px] w-full" placeholder="type Your Message Here " />
            <Button size="md" className="max-w-40" type="submit">Send Message</Button>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className='flex flex-col gap-10'>
            {contactInfo.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#1a1a2e] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
}

export default Contact
