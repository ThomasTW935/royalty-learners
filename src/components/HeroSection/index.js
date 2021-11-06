import React from 'react'
import Hero from './HeroSection'

export default function HeroSection() {
  return (
    <Hero id="home">
    <div>
      <h1>
        <span style={{ color: "#1491CD" }}>Every Child </span>
        <br />
        <span style={{ color: "#F7AE05" }}>Needs an Opportunity</span>
        <br />
        <span style={{ color: "#223F16" }}>To Grow.</span>
        <br />
      </h1>
      <h2 style={{ color: "white" }}>
        <span style={{ color: "#1491CD" }}>
          The Royalty Learning Center{" "}
        </span>
        <span style={{ color: "#f4aa1b" }}>Is Here </span>
        <span style={{ color: "#223F16" }}>to Provide It.</span>
      </h2>
    </div>
  </Hero>
  )
}
