import React from 'react'
import Card from '../../components/Cards'
import logo from '../../assets/images/sample logo.png'
import Con from './Home.style'

const cards = [
  {
    src: logo,
    description:
      'There is no one who loves pain itself, who seeks after it and want',
  },
  
  {
    src: logo,
    description:
      'There is no one who loves pain itself, who seeks after it and want',
  },
  
  {
    src: logo,
    description:
      'There is no one who loves pain itself, who seeks after it and want',
  },
  
  {
    src: logo,
    description:
      'There is no one who loves pain itself, who seeks after it and want',
  },
  {
    src: logo,
    description:
      'There is no one who loves pain itself, who seeks after it and want',
  },
  {
    src: logo,
    description:
      'There is no one who loves pain itself, who seeks after it and want',
  },
  {
    src: logo,
    description:
      'There is no one who loves pain itself, who seeks after it and want',
  },
  
]

export default function Home() {
  return (
    <Con>
      <h1>Home</h1>
      <Con.Cards>
        {cards.map((card) => (
          <Card image={card.src} description={card.description} />
        ))}
      </Con.Cards>
    </Con>
  )
}
