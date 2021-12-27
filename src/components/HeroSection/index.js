import React from 'react'
import Hero from './HeroSection'

export default function HeroSection() {
  return (
    <Hero id="home">
    <div>
      <h1>
        <span style={{ color: "Black" }}>Every Child </span>
        <br />
        <span style={{ color: "Black" }}>Needs an Opportunity</span>
        <br />
        <span style={{ color: "Black" }}>To Grow.</span>
        <br />
      </h1>
      <h2 style={{ color: "white" }}>
        <span style={{ color: "Black" }}>
          The Royalty Learning Center{" "}
        </span>
        <span style={{ color: "Black" }}>Is Here </span>
        <span style={{ color: "Black" }}>to Provide It.</span>
      </h2>
    </div>
  </Hero>
  )
}
