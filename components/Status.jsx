"use client";
import React from "react";
import CountUp from "react-countup";

const status = [
  {
    num: 4,
    title: "Year of Experience",
  },
  {
    num: 20,
    title: "Projects Completed",
  },
  {
    num: 10000,
    title: "Code Commits",
  },
];

const Status = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {status.map((item, index) => {
            return (
              <div key={index}
                className="flex-1 flex gap-4 items-center justify-centerxl:justify-start"
              >
                <p>{item.title}</p>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Status;
