"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamCard from "./team-card";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);

  const teamMembers = [
    { id: 1, name: "Waqas Khalid", description: "At the heart of Baltussalam USA is a team of dedicated leaders and volunteers.", image: "/teampic.png" },
    { id: 2, name: "Team Member 2", description: "Dedicated to serving humanity with compassion and commitment.", image: "/teampic.png" },
    { id: 3, name: "Team Member 3", description: "Working together to ensure every project brings hope and dignity.", image: "/teampic.png" },
    { id: 4, name: "Team Member 4", description: "Committed to positive change in communities worldwide.", image: "/teampic.png" },
     { id: 5, name: "Team Member 5", description: "At the heart of Baltussalam USA is a team of dedicated leaders and volunteers.", image: "/teampic.png" },
    { id: 6, name: "Team Member 6", description: "Dedicated to serving humanity with compassion and commitment.", image: "/teampic.png" },
    { id: 7, name: "Team Member 7", description: "Working together to ensure every project brings hope and dignity.", image: "/teampic.png" },
    { id: 8, name: "Team Member 8", description: "Committed to positive change in communities worldwide.", image: "/teampic.png" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const cards = left.querySelector(".cards");

    // Calculate how tall the cards area is compared to the section
    const scrollHeight = cards.scrollHeight - left.clientHeight;

    // ScrollTrigger for section pinning
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${scrollHeight}`, // duration of pin
      pin: true,
      pinSpacing: true,
      scrub: true,
      onUpdate: (self) => {
        gsap.to(cards, {
          y: -scrollHeight * self.progress,
          ease: "none",
        });
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#BC153F] py-4 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

         {/* RIGHT SIDE - Sticky Info (MOBILE ONLY) */}
        <div className="md:hidden block lg:pl-8 sticky top-2 self-start">
          <div className="mb-4">
            <span className="text-white font-normal text-md tracking-widest uppercase">
              Behind The Mission
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Our Team
          </h2>

          <p className="text-white text-lg leading-relaxed">
            Driven by compassion and guided by faith, the team at Baitussalam USA stands united in purpose. Our dedicated leaders and volunteers work tirelessly to create meaningful impact, ensuring that every project brings hope, dignity, and sustainable change to communities across the world.

          </p>
        </div>
        
        {/* LEFT SIDE - Scrollable Cards */}
        <div ref={leftRef} className="lg:col-span-2 h-[80vh] overflow-hidden relative">
          <div className="cards grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Sticky Info */}
        <div className="hidden md:block lg:pl-8 sticky top-24 self-start">
          <div className="mb-4">
            <span className="text-white font-normal text-md tracking-widest uppercase">
              Behind The Mission
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Our Team
          </h2>

          <p className="text-white text-lg leading-relaxed">
            Driven by compassion and guided by faith, the team at Baitussalam USA stands united in purpose. Our dedicated leaders and volunteers work tirelessly to create meaningful impact, ensuring that every project brings hope, dignity, and sustainable change to communities across the world.
          </p>
        </div>
      </div>
    </section>
  );
}
