import React from "react"
import { Hero } from "@/components"
import {CustomTitle} from "@/components";
import {MainSection} from "@/components";
import {ProjectsPreview} from "@/components";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <CustomTitle text='What We Do?' float=''/>
      <MainSection/>
      <ProjectsPreview/>
    </div>
  )
}
