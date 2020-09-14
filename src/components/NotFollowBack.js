import React,{useContext} from 'react'
import { Container} from 'reactstrap'
import '../styles/follow.css'
import {FollowerContext} from '../contexts/FollowerContext'
export default function NotFollowBack() {
    const[notFollow, setnotFollow] = useContext(FollowerContext);
    //console.log(notFollow);
    return (
        <Container>
           {
               notFollow[0].map((user,index)=>{
                   return(
                       <Container  key={index} className="follow">
                       <img src={notFollow[1][index].profilePic}  className="img" />
                       <p><b>{user.name}</b></p>
                       <p><b>{user.email}</b></p>
                       </Container>
                   )
               })
           }
        </Container>
    )
}
