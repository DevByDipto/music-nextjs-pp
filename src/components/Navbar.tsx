"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null); //bujte hobe ??
  return (
      <div 
  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
    <Menu  setActive={setActive}> {/* bujtehobe ?? */}
            <Link href={"/"}>
      
      <MenuItem setActive={setActive} active={active} item="Home"> {/* bujtehobe ??*/}
      
      </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Our Courses">
      <div className="flex flex-col space-y-4">

     
      <HoveredLink href="/courses">All Courses</HoveredLink>
      <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
      <HoveredLink href="/courses">Advanced Composition</HoveredLink>
      <HoveredLink href="/courses">Songeriting</HoveredLink>
      <HoveredLink href="/courses">Music Production</HoveredLink>
      </div>
      </MenuItem>
      
     <Link href='/contact'>
      <MenuItem setActive={setActive} active={active} item="Contuct Us"> {/* bujtehobe */}
      
      </MenuItem>
      </Link>
    </Menu >
    </div>
  )
}

export default Navbar