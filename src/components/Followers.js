import React,{useContext} from 'react'
import { Container} from 'reactstrap'
import {FollowerContext} from '../contexts/FollowerContext'
import '../styles/follow.css'
export default function Followers() {
    const[follower, setfollower] = useContext(FollowerContext);
    return (
        <Container className="divs">
           {
               follower[0].map((user,index)=>{
                   return(
                       <Container  key={index} className="follow">
                       <img src={follower[1][index].profilePic} className="img"/>
                       <p><b>{user.name}</b></p>
                       <p><b>{user.email}</b></p>
                       </Container>
                   )
               })
           }
        </Container>
    )
}
