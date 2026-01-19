import React from "react";
import { Button } from "@/components/ui/button";
import { FileDiffIcon } from "lucide-react";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt:8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Softwere Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Sadekur Rahman</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              I am a passionate software engineer with expertise in building web
              applications using modern technologies. I love creating efficient
              and scalable solutions that solve real-world problems.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span> <FileDiffIcon className="text-lg" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <div>socials</div>
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
