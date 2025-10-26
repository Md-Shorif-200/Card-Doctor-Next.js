import React from "react";
import Image from "next/image";
import Container from "./Container";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const logo = "/assets/logo.svg"; // make sure logo exists in /public/assets/

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <Container>
        <div className="footer sm:footer-horizontal text-neutral-content flex flex-wrap justify-between gap-8">
          
          {/* ===== 1. Company Info Section ===== */}
          <aside className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <Image src={logo} alt="Company Logo" width={40} height={40} />
              <h2 className="text-xl font-semibold text-white">Car Doctor</h2>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Car Doctor provides top-notch car repair, maintenance, and
              inspection services. We ensure your vehicle stays safe, fast,
              and efficient on every road.
            </p>
            <div className="flex gap-3 text-lg">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </aside>

          {/* ===== 2. Services ===== */}
          <nav>
            <h6 className="footer-title text-white mb-3">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>

          {/* ===== 3. Company ===== */}
          <nav>
            <h6 className="footer-title text-white mb-3">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>

          {/* ===== 4. Legal ===== */}
          <nav>
            <h6 className="footer-title text-white mb-3">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>

  
      </Container>

            {/* ===== Bottom Copyright Bar ===== */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Car Doctor. All rights reserved.
        </div>
    </footer>
  );
}
