/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Typeform from "@/Components/Typeform";



// import "./contact.css";
// import { Input } from "@material-tailwind/react";
// import Faq from "@/Components/Faqs/Faq";
// import Swal from "sweetalert2";
// import { useState } from "react";
// import swal from "sweetalert";


// const Typeform = dynamic(() => import('@/Components/Typeform'))


const page = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [message, setMessage] = useState("");

  // const submitBtn = () => {
  //   // Your submission logic here

  //   // Reset input values to empty strings
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPhoneNumber("");
  //   setMessage("");

  //   // Swal.fire({
  //   //   position: "center",
  //   //   icon: "success",
  //   //   title: "Message Sent Successfully! We will be in contact soon!",
  //   //   showConfirmButton: false,
  //   //   timer: 1500,
  //   // });
  //   swal({
  //     text: "Message Sent Successfully! We will be in contact soon!",
  //     icon: "success",
  //     button: "Ok",
  //   });
  // };

  return (
    <>
    <div className="h-[90vh]">
<Typeform />
    </div>
      
    </>
    // <div className="max-w-screen-xl mx-auto section_padding ">
    //   <div className="flex justify-between">
    //     <div className="gradient-rounded-div-left left-[0px] "></div>
    //     <div className="gradient-rounded-div-right right-[0px] "></div>
    //   </div>
    //   <div className="contact-bg  p-5 ">
    //     <h1 className="text-white text-center section_title_34">Contact Us</h1>
    //     <p className="text-center text-[14px] title_gradient_color ">
    //       Any question or remarks? Just write us a message!
    //     </p>
    //     <div className="mt-20">
    //       <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
    //         <Input
    //           variant="static"
    //           label="First Name"
    //           className="paragraph_14 "
    //           color="white"
    //           value={firstName}
    //           onChange={(e) => setFirstName(e.target.value)}
    //         />
    //         <Input
    //           variant="static"
    //           label="Last Name"
    //           className="paragraph_14 "
    //           color="white"
    //           value={lastName}
    //           onChange={(e) => setLastName(e.target.value)}
    //         />
    //       </div>
    //       <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-20">
    //         <Input
    //           variant="static"
    //           label="Email "
    //           className="paragraph_14 "
    //           color="white"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <Input
    //           variant="static"
    //           label="Phone Number"
    //           color="white"
    //           className="paragraph_14"
    //           value={phoneNumber}
    //           onChange={(e) => setPhoneNumber(e.target.value)}
    //         />
    //       </div>

    //       <div className="my-20">
    //         <Input
    //           variant="static"
    //           label="Message"
    //           placeholder="Write your message.."
    //           className="paragraph_14 "
    //           color="white"
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //         />
    //       </div>
    //     </div>
    //     <div className="flex  lg:justify-end my-10">
    //       <button
    //         onClick={submitBtn}
    //         className="send_button mx-auto lg:mx-0 outline-none"
    //       >
    //         <span className="">
    //           <span className="text-white paragraph_16">Send Message</span>
    //         </span>
    //       </button>
    //     </div>
    //   </div>

    //   <div className="mt-20">

    //   </div>
    // </div>
  );
};

export default page;
