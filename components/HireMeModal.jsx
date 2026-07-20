"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CustomSelect } from "@/components/ui/CustomSelect";

const serviceOptions = [
  { value: "wp-plugin", label: "WordPress Plugin Development" },
  { value: "mern", label: "MERN Stack Development" },
  { value: "frontend", label: "Frontend Development" },
  { value: "api", label: "REST API Development" },
  { value: "devops", label: "CI/CD & Deployment" },
];

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const HireMeModal = () => {
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

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Hire Me</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Modal panel */}
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-[580px] max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#1a1a2e] p-8 shadow-2xl ring-1 ring-accent/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">

          {/* Close button */}
          <Dialog.Close className="absolute right-5 top-5 outline-none">
            <IoMdClose className="text-2xl text-accent hover:text-white transition-colors" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {/* Header */}
          <div className="mb-6">
            <Dialog.Title className="text-3xl font-bold text-gradient mb-2">
              Let's Work Together
            </Dialog.Title>
            <Dialog.Description className="text-white/60 text-sm">
              Fill out the form and I'll get back to you as soon as possible.
            </Dialog.Description>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone" />
            </div>

            <CustomSelect
              name="service"
              placeholder="Select a service"
              groupLabel="Services"
              options={serviceOptions}
            />

            <Textarea className="h-[140px]" placeholder="Tell me about your project..." />

            <Button type="submit" size="md" className="w-full">
              Send Message
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default HireMeModal;
