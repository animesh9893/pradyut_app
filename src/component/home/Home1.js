import styled from 'styled-components'
import {home} from './context'

function Home1() {
  return (
      <Home>
        <div>{home['name']}</div>
      </Home>
  );
}

export default Home1;


const Home = styled.div`
  width: auto;
  height: 100vh;

  background-image: url(${home['background-image']});
  background-repeat: no-repeat;
  & > div{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 100px;
      background-color: red;
      background-image: linear-gradient(to right top, #000000, #15080e, #200f1a, #281428, #2d1a38, #2d2546, #2a3154, #243d60, #2c4d66, #3e5c69, #56696e, #6f7676);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
  }
`


