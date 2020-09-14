import React,{useContext} from 'react'
import { Container} from 'reactstrap'
import '../styles/follow.css'
import {FollowerContext} from '../contexts/FollowerContext'
export default function Followings() {
    const[following, setfollowing] = useContext(FollowerContext);
    return (
        <Container className="divs">
           {
               following[0].map((user,index)=>{
                   return(
                       <Container key={index} className="follow">
                       <img src={following[1][index].profilePic} className="img"/>
                       <p><b>{user.name}</b></p>
                       <p><b>{user.email}</b></p>
                       </Container>
                   )
               })
           }
        </Container>
    )
}
