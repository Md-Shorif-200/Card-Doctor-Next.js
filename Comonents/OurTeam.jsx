import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const team_1 = "/assets/images/team/1.jpg";
const team_2 = "/assets/images/team/2.jpg";
const team_3 = "/assets/images/team/3.jpg";

const teamData = [
  {
    id: 1,
    name: "Car Engine Plug",
    designation: "Engine Expert",
    image: team_1,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Car Engine Plug",
    designation: "Engine Expert",
    image: team_2,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Car Engine Plug",
    designation: "Engine Expert",
    image: team_3,
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

export default function OurTeam() {
  return (
    <div className=" py-10 ">
      <SectionTitle
        title="team"
        subTitle="Meet Our Team"
        paragraph="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionTitle>
      <Container>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-100 rounded-lg shadow-md p-4 "
            >
              <div className="w-full h-72 rounded-lg overflow-hidden mb-4 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-md text-red-500 mb-4">
                  {member.designation}
                </p>
                <div className="flex justify-center space-x-6">
                  <Link href={member.social.facebook}>
                    <FaFacebook className="text-blue-600 text-xl "></FaFacebook>
                  </Link>
                  <Link href={member.social.twitter}>
                    <FaTwitter className="text-sky-400 text-xl "></FaTwitter>
                  </Link>
                  <Link href={member.social.linkedin}>
                    <FaLinkedinIn className="text-blue-600 text-xl "></FaLinkedinIn>
                  </Link>
                  <Link href={member.social.instagram}>
                    <FaInstagram className="text-pink-500 text-xl " />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
