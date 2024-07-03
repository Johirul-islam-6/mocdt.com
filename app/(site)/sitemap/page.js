import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="page_title_64 text-center">Sitemap</h2>
      <div className="flex flex-wrap md:flex-row gap-x-40 gap-y-20 justify-center  mt-[60px]">
         <ul className="text-white underline list-disc flex flex-col  gap-5">
        <li className=" hover:translate-x-1">
          <Link href="/">Home</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/about">About Company</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/newsroom">News</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/career">Career</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/investor">Investor</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/founder-story">Founder story</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/moki">moki</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/story">Our Story</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/mission">Mission</Link>
        </li>
       
      </ul>

      {/* --- product ---- */}
       <ul className="text-white underline list-disc flex flex-col  gap-5">
      
        <li className=" hover:translate-x-1">
          <Link href="https://email.mocdt.com/">Mocdt mail</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://authenticator.mocdt.com/">Mocdt authenticator</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://file.mocdt.com/">Mocdt file</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://cdo.mocdt.com/">Mocdt cdo</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://explore.mocdt.com/">Mocdt Explore</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://calendar.mocdt.com/">Mocdt Calendar</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://dns.mocdt.com/">Mocdt dns</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://analytics.mocdt.com/">Mocdt Analytics</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://workspace.mocdt.com/">Mocdt Workspace</Link>
        </li>
       
      </ul>


        {/* -----conectivity ------- */}
         <ul className="text-white underline list-disc flex flex-col  gap-5">
        <li className=" hover:translate-x-1">
          <Link href="/contact">Contact</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://mocdt.typeform.com/join-waitlist">Waitlist</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://mocdt.typeform.com/to/RaWbdtFM">Request Early Access</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="https://mocdt.typeform.com/to/sP50jwkJ">Report</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/gdpr">GDPR</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/policy">Privacy Policy</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/terms">Terms of Use</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/coming">Startup program</Link>
        </li>
        <li className=" hover:translate-x-1">
          <Link href="/coming">Creator program</Link>
        </li>
      
       
      </ul>
        {/* -----conectivity 02 ------- */}
         <ul className="text-white underline list-disc flex flex-col  gap-5">
        
        <li className=" hover:translate-x-1">
          <Link href="https://mocdt.typeform.com/to/Ag7xhOUl">Developer program</Link>
        </li>
       
      </ul>

      </div>
      
     
    </div>
  );
};

export default page;
