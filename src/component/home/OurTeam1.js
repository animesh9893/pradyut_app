import styled from 'styled-components'
import {OurTeam} from './context';


function OurTeam1() {
  var cardPerson = OurTeam['important-person']
  var team = OurTeam['team']
  console.log(cardPerson)
  console.log(team)
  return (
    <div style={{'background-color':'green'}}>
      <Logo>Our Team</Logo>
      <Container>
        {cardPerson.map((obj,index)=>(
          <Card>
            <Image src={obj.url}/>
            <Name>{obj.name}</Name>
            <Designation1>{obj.designation}</Designation1>
        </Card>
        ))}
        
        
        <Team>
          {team.map((obj,index)=>(
            <div><Box>{obj.name}<Designation>({obj.designation})</Designation></Box></div>            
          ))}
        </Team>
      </Container>
    </div>
  );
}

export default OurTeam1;

const Container= styled.div`
  display:flex;
  justify-content:flex-start;
  margin:40px;
  width:auto;
`


const Card = styled.div`
  background-color:white;
  border-radius:3px;
  border:1px solid black;
  padding:20px;
  height:400px;
  margin:30px;
  width:300px;
  transition:0.4s;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  :hover{
    transform:scale(1.02);
    overflow:auto;
  }
`

const Image = styled.img`
    border-radius:10px;
    width:auto;
    transition:0.2s;
    height:300px;
    :hover{
      transform:scale(1.02);
    }
`
const Name = styled.div`
  margin-top:10px;
  font-size:30px;
  transition:0.2s;
  :hover{
    transform:scale(1.01);
  }
`

const Designation = styled.div`
  font-weight:200;
  padding-left:10px;
  font-size:16px;
`
const Designation1 = styled.div`
  font-weight:200;
`

const Team = styled.div`
  background-color:white;
  border:1px solid black;
  padding:20px;
  border-radius:3px;
  height:400px;
  margin:30px;
  width: 600px;
  transition:0.4s;
  display:flex;
  // justify-content:space-evenly;
  flex-direction:column;
  flex-wrap:wrap;
  overflow:hidden;
  :hover{
    transform:scale(1.02);
    overflow:auto;
  }
  &>div{
    display:flex;
    align-items:baseline;
    padding:8px;
    justify-content:space-between;
  }
`

const Box = styled.div`
  display:flex;
  flex-direction:row;
  font-weight:500;
  font-size:18px;
`


const Logo = styled.div`
  color: white;
  font-size: 100px;
  display: flex;
  // height: 100vh;
  transition:0.4s;
  justify-content: center;
  align-items: center;
  :hover{
    transform:scale(1.02);
    overflow:auto;
  }
`