import React,{useState, useContext} from 'react'
import { Container } from 'reactstrap'
import {PostContext} from '../contexts/PostContext'
import '../styles/yourprofile.css'
export default function Yourprofile() {
      const [yourinfo, setyourinfo] = useContext(PostContext);
      console.log(yourinfo);
    return (
    <Container className="profile">
        <Container className="profilepic">
             <img src={yourinfo[1].profilePic} />
        </Container>
        <Container className="profilename">
             <p>{yourinfo[0].name}</p>
        </Container>
        <Container className="bio">
            <code>
                <pre>
                    {yourinfo[1].addBio}
                </pre>
            </code>
        </Container>
        <Container className="posts">
           {
               yourinfo[2].map((post,index)=>{
                   return(
                       <Container key="index" className="images">
                       <img src={post.image} />
                       </Container>
                   )
               })
           } 
        </Container>

    </Container>
    )
}
