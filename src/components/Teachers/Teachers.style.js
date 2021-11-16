import styled from "styled-components";
import List from "../../core-ui/List.style"
import ImgCon from "../../core-ui/ImgCon.style"

const Con = styled.section``

const title = styled.h2`

`

const list = styled(List)`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
justify-content: center;
align-items:center;
gap: 1em;
width: 80%;
margin: 0 auto;
padding: 1rem;
  li{
    background: #FEFAEC;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 1em;
    padding: 1rem;
    border-radius: 5px;
  }
`

const imgCon = styled(ImgCon)`
  width: 100px;
  height: 100px;
  img{
    height: 100%;
    width: 100%;
    border-radius:50%;
    object-fit: cover;
  }
`

const button = styled.button``

Con.Title = title
Con.List = list
Con.ImgCon = imgCon
Con.Button = button

export default Con