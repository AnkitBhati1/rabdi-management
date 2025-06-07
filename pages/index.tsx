import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Dashboard from "@/components/Dashboard";
import Gas from "@/components/Gas";
import Milk from "@/components/Milk";
import Navbar from "@/components/navbar";
import Rabdi from "@/components/Rabdi";
import GenerateBill from "@/components/GenerateBill";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("");

  return (
    <div className="flex flex-col items-center min-h-screen bg-white overflow-y-auto">

      <div className='lg:fixed top-0 left-0 right-0 z-50'>
        {/* <Navbar /> */}
        <Navbar setView={setView} />
        {view === "dashboard" && <Dashboard />}
        {view === "milk" && <Milk />}
        {view === "rabdi" && <Rabdi />}
        {view === "gas" && <Gas />}
        {view === "generateBill" && <GenerateBill />}
      </div>
    </div>
  );
}
