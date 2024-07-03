/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./story.css";
import "../../../Components/Navbar/Navbar.css";
import "../newsroom/Button.css";
import ProductSlider from "@/Components/Products/ProductSlider";
import SubscribeButton from "@/Components/SubscribeButton/SubscribeButton";

const page = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-32 md:mt-40 mb-16 ">
        {/* ------------ gradient div------- */}
        <div className="flex justify-between">
          <div className="story-gradient-rounded-left top-[500px] left-[0px] "></div>
          <div className="story-gradient-rounded-right top-[500px]  right-[0px] "></div>
        </div>

        <button className="  story_button uppercase">
          <span className="title_gradient_color font-bold">Our Story</span>
        </button>
        <h1 className="page_title_story mt-8 mb-10">
          Unveiling the Revolution: The Epic Journey of Mocdt - Redefining Work
          and Life
        </h1>

        <div className="opacity-80">
          <p className="p_title mt-5 mb-8">
            In the dynamic years of 2020-2021, a visionary leader emerged onto
            the stage of corporate brilliance. Mocdt's CEO, the astute Fardin
            Sheikh, embarked on a quest that would not only unravel the secrets
            of people's work lives but also ignite a transformative revolution.
            Fardin was no ordinary CEO; he was a relentless explorer of human
            potential, and his journey would soon captivate the world.
          </p>
          <p className="p_title mb-8">
            With each passing day, Fardin delved deeper into the mysteries of
            the modern workplace. He was no mere observer but a diligent
            researcher who combed through the lives of countless individuals,
            seeking the hidden truths that lay beneath the surface. It was
            during these intensive months of investigation that a revelation
            dawned upon him - the true challenge didn't revolve around
            productivity alone; it was the delicate equilibrium of work and life
            that had become an elusive dream for many.
          </p>
          <p className="p_title mb-8">
            In a moment of profound clarity, Fardin redefined Mocdt's mission.
            It was no longer just about enhancing productivity; it was about
            crafting a global metamorphosis that would empower individuals to
            lead lives of harmony and fulfillment. Mocdt's vision was reborn,
            now more profound and encompassing than ever before.
          </p>
          <p className="p_title mb-8">
            The unfolding saga of Mocdt was punctuated by Fardin's realization
            that a unified suite of productivity and collaboration tools was the
            bridge needed to span the chasm between work and life. He understood
            that the disjointed, fragmented world of apps and platforms only
            exacerbated the chaos in people's lives. Mocdt, with its seamless
            ecosystem, would be the solution to this problem, redefining how
            people worked and thrived.
          </p>
          <p className="p_title mb-8">
            In the pivotal year of 2022, Mocdt took a bold step towards its
            destiny. Armed with insights drawn from an astounding 34,000
            feedback responses worldwide, Fardin and his dedicated team set out
            to construct the unified suite that would revolutionize the future
            of work. On the 12th of April, 2022, Mocdt was formally
            incorporated, heralding the dawn of a new era.
          </p>
          <p className="p_title mb-8">
            April 2023 marked the commencement of the next chapter in Mocdt's
            epic journey. Development commenced with unwavering determination,
            as the team worked tirelessly to bring their visionary concept to
            life. On the 12th of May, 2023, Mocdt extended its invitation to
            pre-users, beckoning them to join a revolution in progress.
          </p>
          <p className="p_title mb-8">
            The world stood in awe at the enormity of the response. In just five
            short months, Mocdt had garnered a staggering 175,000 pre-registered
            users, all eagerly poised for the launch of a product that promised
            to redefine work and life as they knew it. The world buzzed with
            anticipation, for it sensed that Mocdt was on the cusp of altering
            the very fabric of the modern work experience.
          </p>
          <p className="p_title mb-8">
            Thus, the captivating tale of Mocdt unfurled before the world - a
            company on a resolute mission to reimagine productivity and restore
            the delicate equilibrium between work and life. With Fardin Sheikh
            at the helm, Mocdt stood as the harbinger of change, poised to
            rewrite the rules of the contemporary workplace, one unified tool at
            a time. It was a story of vision, dedication, and a promise to
            transform the world of work into a symphony of efficiency and
            fulfillment
          </p>
        </div>
      </div>
      <ProductSlider />
      <div className="flex my-16 justify-center section_padding max-w-screen-xl mx-auto">
        <SubscribeButton />
      </div>
    </>
  );
};

export default page;
