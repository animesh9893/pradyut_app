import '../CSS/aboutUs1.css';
import styled from 'styled-components'
import help_child_img from '../IMG/help_child.jpg';

function AboutUs1() {
  return (
    <AboutUs>
      <AboutUsBox>
        <Box>
          <Image src={help_child_img} alt="image" />
          <Heading>We are helping Childeren</Heading>
          <Discription>fjslfnslfjns fjslfnslfjxcvxvxcvxcvxcns fjslfnslfjxcvxvxcvxcvxcns</Discription>
        </Box>
        <Box>
          <Image src={help_child_img} alt="image" />
          <Heading>We are helping Childeren</Heading>
          <Discription>fjslfnslfjns fjslfnslfjxcvxvxcvxcvxcns fjslfnslfjxcvxvxcvxcvxcns</Discription>
        </Box>
      </AboutUsBox>
      <div className="AboutUs-main AboutUs-Box">
        <div className="Name gradient-text">About Us</div>
      </div>
      <AboutUsBox>
        <Box>
          <Image src={help_child_img} alt="image" />
          <Heading>We are helping Childeren</Heading>
          <Discription>fjslfnslfjns fjslfnslfjxcvxvxcvxcvxcns fjslfnslfjxcvxvxcvxcvxcns</Discription>
        </Box>
        <Box>
          <Image src={help_child_img} alt="image" />
          <Heading>We are helping Childeren</Heading>
          <Discription>fjslfnslfjns fjslfnslfjxcvxvxcvxcvxcns fjslfnslfjxcvxvxcvxcvxcns</Discription>
        </Box>
      </AboutUsBox>
    </AboutUs>
  );
}

export default AboutUs1;

const AboutUs = styled.div`
  width: auto;
  height: 100vh;
  background: #f7fbff;
  display: flex;
  z-index: 1;
  justify-content: space-around;
  flex-grow: 1;
`


const AboutUsBox=styled.div`
  display:flex;
  justify-content: space-around;
  flex-direction:column;

`

const Heading = styled.div`
  font-size:28px;
  transition:0.4s;
  :hover{
    color:grey;
  }
`

const Discription = styled.div`
  
`

const Box = styled.div`
  padding:20px;
  height:300px;
  width:370px;
  transition:0.4s;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  :hover{
    transform:scale(1.02);
  }
`

const Image = styled.img`
    border-radius:10px;
    width:auto;
    transition:0.2s;
    height:200px;
    :hover{
      transform:scale(1.02);
    }
`