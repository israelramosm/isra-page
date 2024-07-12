"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tooltip } from "flowbite-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaSquarePhone } from "react-icons/fa6";

import profile from '/public/images/profile.jpeg'

const phoneNumber = 3411362414;
const email = "a.ramos.israel.m@gmail.com";
const linkedin = "https://www.linkedin.com/in/israel-ramos/";
const github = "https://github.com/israelramosm";

export const contactInformation = [
  {
    name: "Gmail",
    value: email,
    link: `mailto:${email}`,
    icon: <MdEmail className="size-8 lg:size-14" />,
  },
  {
    name: "LinkedIn",
    value: linkedin,
    link: linkedin,
    icon: <FaLinkedin className="size-6 lg:size-12" />,
  },
  {
    name: "Phone Number",
    value: `+52 ${phoneNumber}`,
    link: `tel:${phoneNumber}`,
    icon: <FaSquarePhone className="size-6 lg:size-12" />,
  },
  {
    name: "Github",
    value: github,
    link: github,
    icon: <FaGithub className="size-6 lg:size-12" />,
  },
];

export default function Presentation({ title }: { title?: string }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // TODO: add animation after I develop all the components
    // TODO: Make it sticky after scroll
    // console.log(scrollY);
  }, [scrollY]);

  return (
    <section className="flex flex-col md:flex-row justify-end pb-4 md:py-6 my-5 h-96 shadow-xl shadow-black">
      <div className="order-2 flex flex-col items-center justify-center md:items-end md:justify-end w-full md:mr-8 ">
        <header className="order-2 flex flex-col items-center md:items-end md:justify-end mt-3 md:mt-0">
          <h1 className="font-bold text-base md:text-[1.25rem] lg:text-[1.5rem]">
            Arnulfo Israel Ramos Magaña
          </h1>
          <h3 className="font-semibold text-[.75rem] md:text-[1rem] lg:text-[1.25rem]">
            Fullstack Application Developer
          </h3>
        </header>
        <div className="order-3 flex items-center justify-evenly md:justify-end mt-3 w-2/4">
          {contactInformation.map((info, i) => (
            <div key={i} className="md:ml-8">
              <Tooltip content={info.value}>
                <Link href={info.link}>{info.icon}</Link>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      <div className="basis-1/4 order-1 flex items-center justify-center md:items-end w-full">
        <Image
          className="border-2 border-white rounded-full size-24 lg:size-32"
          src={profile}
          alt="Profile"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
