"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Status = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github-stats")
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = [
    {
    //   num: githubData?.yearsOfExperience ?? 4,
      num: 4,
      title: "Years of Experience",
    },
    {
      num: githubData?.totalRepos ?? 200,
      title: "Projects Completed",
    },
    {
      num: 10,
      title: "Technologies Mastered",
    },
    {
      num: githubData?.totalCommits ?? 10000,
      title: "Code Commits",
      suffix: "+",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              {loading ? (
                <div className="text-4xl xl:text-6xl font-extrabold text-white/20 animate-pulse">
                  ---
                </div>
              ) : (
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  suffix={item.suffix ?? ""}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
              )}
              <p
                className={`${
                  item.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;