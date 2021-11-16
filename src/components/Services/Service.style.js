import styled from "styled-components";
import ImgCon from '../../core-ui/ImgCon.style'

const Service = styled.div`
  display: grid;
  grid-template: 1fr /1fr 2fr;
  gap: 1em;
  padding: 1.5em;
  h3{
    grid-column: 1/3;
  }
  p{
    width: 60ch;
  }
`

const buttonCon = styled.div``

Service.ImgCon = ImgCon
Service.ButtonCon = buttonCon

export default Service