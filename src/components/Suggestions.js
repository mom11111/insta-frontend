import React from 'react'
import { Button } from 'reactstrap';
import Axios from 'axios';
import '../styles/suggestions.css'
import {
    Card, CardImg,CardBody,
    CardTitle
  } from 'reactstrap'

export default function Suggestions({users}) {

  const userData = JSON.parse(sessionStorage.getItem('myuser'));

  console.log(users);

  const handleClick = id=>e=>{

      e.preventDefault();

      let body = {
          followedBy :  userData._id,
          followingBy :id
      }
      Axios.post('/followtheuser', body).then(res=>{
          //console.log(res);
          let myFollowing = JSON.parse(sessionStorage.getItem('following'));
          sessionStorage.setItem('following',JSON.stringify(myFollowing+1));
          alert('followed successFully');

      }).catch(err=>{
          console.log(err);
      })
  }
    return(
        <div>
            {
                users[0].map((user,index)=>{
                    return(
                        <div key={index} className="accounts">
                        <Card className="cards">
                        <CardImg top width="100%" src={users[1][index].profilePic} alt="Card image cap" className="accountImage" />
                        <CardBody>
                        <CardTitle className="userName"><b>{user.name}</b></CardTitle>
                        <Button onClick={handleClick(user._id)}>follow</Button>
                      </CardBody>
                      </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
