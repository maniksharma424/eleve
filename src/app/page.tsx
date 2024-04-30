"use client";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Footer from "@/components/Footer";
import Image from "next/image";
import Section5 from "@/components/Section5";
import SignUp from "@/components/SignModal"
import { useState } from "react";

export default function Home() {

  // Connect modal
  const [showModal,setShowModal]= useState(true);
  
  // Modal handling
 const handleModal = ()=>{
  setShowModal(!showModal)
};
  
  return (
    <main className="min-h-screen">
      <Header />
      <SignUp showModal={showModal} handleModal={handleModal}/>
      <Section1 handleModal={handleModal}/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  );
}
