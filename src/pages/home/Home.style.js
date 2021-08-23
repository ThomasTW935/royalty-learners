import styled from 'styled-components'

const Con = styled.div`
`

const cards = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: .5rem;
`

Con.Cards = cards

export default Con