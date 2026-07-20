"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const selectedService = serviceOptions.find((option) => option.value === formData.service)?.label;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: selectedService }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return <section className="py-6">
    <div className="container mx-auto pt-[60px] xl:pt-[150px]">
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="xl:h-[54%] order-2 xl:order-none">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#1a1a2e] rounded-xl">
            <h3 className='text-4xl text-gradient'>Lets Work Together</h3>
            <p className='text-white/60'>Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new projects and opportunities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <Input required name="firstName" type="text" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              <Input required name="lastName" type="text" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              <Input required name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="w-full">
              <CustomSelect
                name="service"
                placeholder="Select a service"
                groupLabel="Services"
                options={serviceOptions}
                value={formData.service}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
              />
            </div>
            <Textarea required name="message" className="h-[200px] w-full" placeholder="type Your Message Here " value={formData.message} onChange={handleChange} />
            <Button size="md" className="max-w-40" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
            {status === "success" && (
              <p className="text-green-400">Thanks! Your message has been sent — I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-red-400">{errorMessage || "Something went wrong. Please try again."}</p>
            )}
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
