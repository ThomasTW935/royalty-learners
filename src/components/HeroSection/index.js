import React from 'react'
import Hero from './HeroSection'

export default function HeroSection() {
  return (
    <Hero id="home">
    <div>
      <h1>
        <span style={{ color: "#294285" }}>Every Child </span>
        <br />
        <span style={{ color: "#294285" }}>Needs an Opportunity</span>
        <br />
        <span style={{ color: "#294285" }}>To Grow.</span>
        <br />
      </h1>
      <h2 style={{ color: "white" }}>
        <span style={{ color: "#212E52" }}>
          The Royalty Learning Center{" "}
        </span>
        <span style={{ color: "#212E52" }}>Is Here </span>
        <span style={{ color: "#212E52" }}>to Provide It.</span>
      </h2>
    </div>
  </Hero>
  )
}
