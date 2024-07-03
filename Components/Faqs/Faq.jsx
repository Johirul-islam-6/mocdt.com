/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import "./Faq.css";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="padding-bottom-120 py-6">
      <div className="">
        <div className="mb-[20px] text-center">
          <h1 className="text-white text-center section_title_34">FAQs</h1>
          {/* <p className="text-center title_gradient_color ">
            Frequently Asked Questions
          </p> */}

          <span className="title_gradient_color text-center">
            Frequently Asked Questions
          </span>
        </div>

        <div className="custom-accordion">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What are your core services as a UX design and branding firm?
            </AccordionHeader>
            <AccordionBody>
              ComingSite distinguishes itself in a competitive market of All
              Software solution agencies through its holistic partnership
              approach. Beyond providing top-tier services, the agency
              prioritizes trust and shared growth, fostering enduring
              relationships. The co-founders actively oversee projects, and a
              design director ensures meticulous reviews, enhancing client
              collaboration. Transparent communication is fundamental, resulting
              in a premium client experience. ComingSite's agility, acquired
              from startup engagement, is combined with refined project
              management from enterprise-level expertise. This unique blend
              ensures adaptability and efficiency. The agency stands out by
              integrating branding and product proficiency, uniting
              cross-disciplinary teams for each project. This ensures brand
              representation and an exceptional user experience. Notably,
              ComingSite specializes in creating scalable, future-proof designs,
              with a portfolio showcasing long-lasting efficacy.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              What are your core services as a UX design and branding firm?
            </AccordionHeader>
            <AccordionBody>
              We provide Software, Web, Mobile, and Game Development, including
              Database, API, Embedded Systems, Machine Learning, and AI
              Development for comprehensive technological solutions. We provide
              Software, Web, Mobile, and Game Development, including Database,
              API, Embedded Systems, Machine Learning, and AI Development for
              comprehensive technological solutions.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              What are your core services as a UX design and branding firm?
            </AccordionHeader>
            <AccordionBody>
              Recognizing the significance of budget flexibility and client
              support, Comingsite extends adaptable solutions for design
              projects. Our pricing structure is designed to accommodate a range
              of budgets, ensuring our partnership is accessible and mutually
              beneficial. We present three engagement models: time & materials,
              fixed fee, and retainer. These models are tailored to cater to
              diverse needs. Through a series of comprehensive discussions and
              project briefings, we collaboratively determine the most suitable
              approach for your project. Subsequently, we prepare a personalized
              proposal encompassing project timelines and estimated costs. Our
              commitment lies in tailoring optimal solutions that cater to your
              unique requisites. Be it an all-encompassing suite of services or
              a bespoke strategy that aligns with financial parameters, we are
              dedicated to meeting your distinct needs. Our objective is to
              forge impactful partnerships, delivering exceptional outcomes that
              resonate with your vision and resources.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              What are your core services as a UX design and branding firm?
            </AccordionHeader>
            <AccordionBody>
              Absolutely, our services extend to startups of varying scales,
              encompassing both enterprises and emerging ventures. Our
              enthusiasm lies in propelling startup visions to fruition,
              harnessing the synergy of design and technology for impactful
              outcomes. Our capabilities also extend to facilitating your growth
              journey by expanding product reach and market penetration. A
              recurrent scenario involves equipping SaaS startups for enterprise
              engagement by revitalizing their brand, product, and marketing
              interface. Our partnership history includes renowned early-stage
              entities like Coinbase, Uber, SendGrid, and MoneyLion, all of whom
              have ascended as industry leaders through our collaboration.
              Conversely, ventures such as Earnin have flourished post app
              redesign, securing over $100M in additional venture funding,
              showcasing our transformational influence. If you're a startup
              contemplating project collaboration, we eagerly anticipate the
              conversation. Reach out to us at contact@comingsite.global to
              schedule a consultation. Together, we'll delve into your vision,
              objectives, and financial parameters, culminating in a bespoke
              approach meticulously tailored to your project's essence.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              What are your core services as a UX design and branding firm?
            </AccordionHeader>
            <AccordionBody>
              Absolutely, we specialize in rejuvenating B2B and enterprise
              software, setting us apart as a distinguished user experience
              agency. Our unique focus on enterprise UX design and the
              transformation of legacy business software stems from years of
              honed expertise. Our refined process, developed through years of
              experience, has been instrumental in revitalizing software for
              Fortune 100 giants like ADP, Amazon, VMware, and Cisco. Our forte
              lies in crafting consumer-grade user experiences tailored for
              business users, achieved through an ultra-collaborative approach
              and design thinking methodology. We place paramount importance on
              scalability and longevity, achieved by empowering our clients'
              in-house teams with robust design systems. This cultivates
              continuity and adaptability, ensuring seamless organizational
              growth and evolution. Operational independence within
              organizational structures characterizes our modus operandi.
              Functioning akin to a startup, we inject agility and novel
              perspectives into the often intricate enterprise landscape. This
              approach enables us to navigate complex hierarchies and
              decision-making processes efficiently, delivering innovative
              solutions that resonate profoundly.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(6)}>
              What are your core services as a UX design and branding firm?
            </AccordionHeader>
            <AccordionBody>
              Absolutely, we specialize in rejuvenating B2B and enterprise
              software, setting us apart as a distinguished user experience
              agency. Our unique focus on enterprise UX design and the
              transformation of legacy business software stems from years of
              honed expertise. Our refined process, developed through years of
              experience, has been instrumental in revitalizing software for
              Fortune 100 giants like ADP, Amazon, VMware, and Cisco. Our forte
              lies in crafting consumer-grade user experiences tailored for
              business users, achieved through an ultra-collaborative approach
              and design thinking methodology. We place paramount importance on
              scalability and longevity, achieved by empowering our clients'
              in-house teams with robust design systems. This cultivates
              continuity and adaptability, ensuring seamless organizational
              growth and evolution. Operational independence within
              organizational structures characterizes our modus operandi.
              Functioning akin to a startup, we inject agility and novel
              perspectives into the often intricate enterprise landscape. This
              approach enables us to navigate complex hierarchies and
              decision-making processes efficiently, delivering innovative
              solutions that resonate profoundly.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
