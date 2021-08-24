import styled from 'styled-components'

const Mod = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const main = styled.div`
  position:fixed;
  background: white;
  width: 40%;
  height: 70%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

`
Mod.main = main

export default Mod