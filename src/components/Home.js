import React,{useState,useContext, useEffect} from 'react'

import { Container, Button, Row, Col } from 'reactstrap'

import {useHistory} from 'react-router-dom'

import Suggestions from './Suggestions'

import Timeline from './Timeline'

import '../styles/home.css'



import {PostContext} from '../contexts/PostContext'
import {FollowerContext} from '../contexts/FollowerContext'

import axios from 'axios';

export default function Home() {

    const[title, settitle] = useState('');

    const[image, setimage] = useState('');

    const[caption, setcaption] = useState('');

    const[suggestions, setsuggestions] = useState();

    const [show, setshow] = useState(false);

    const [posts, setposts] = useContext(PostContext);

    const[follower, setfollower] = useContext(FollowerContext);//followers data

    const[following, setfollowing] = useContext(FollowerContext);//followings data

    const [notFollow, setnotFollow] = useContext(FollowerContext);//find who doesn't follow back

    const [yourinfo, setyourinfo] = useContext(PostContext);//user's info and posts

    let history = useHistory();

    const userData = JSON.parse(sessionStorage.getItem('myuser'));

    const followings = JSON.parse(sessionStorage.getItem('following'));

    const followers = JSON.parse(sessionStorage.getItem('follower'));

    const profileInfo = JSON.parse(sessionStorage.getItem('profileInfo'));//profile pic and bio
    
    const countPost = JSON.parse(sessionStorage.getItem('numberOfposts'));

   // console.log(profileInfo);
    
    //console.log(posts);
    //console.log(userData);
    
   const getyourinfo = (e)=>{
       e.preventDefault();
       let body = {
           _id : userData._id
       }
       axios.post('/yourposts', body).then(res=>{
           //console.log(res);
           setyourinfo(res.data);
           history.push(`/${userData._id}/profileinfo`);
       }).catch(err=>{
           console.log(err);
       })
   }

    const findNotFollowBack= (e)=>{
        e.preventDefault();
        let body = {
            _id : userData._id
        }

        axios.post('/findwhodoesnotfollowback', body).then(res=>{
            console.log(res);
            setnotFollow(res.data);
            history.push(`/${userData._id}/notfollowback`);
        }).catch(err=>{
            console.log(err);
        })
    }

    const findFollower=(e)=>{
        e.preventDefault();
        let body ={
            _id:userData._id
        }
        axios.post('/theyfollowyou', body).then(res=>{
           // console.log(res);
            setfollower(res.data);
            history.push(`/${userData._id}/followers`);
        }).catch(err=>{
            console.log(err);
        })
    }

    const findFollowings=(e)=>{
        e.preventDefault();
        let body ={
            _id:userData._id
        }
        axios.post('/youfollowthem', body).then(res=>{
            //console.log(res);
            setfollowing(res.data);
            history.push(`/${userData._id}/followings`);
        }).catch(err=>{
            console.log(err);
        })
    }

    const callClick = e=>{
        e.preventDefault();
        history.push(`/profile/${userData._id}`);
    }

    const handleClick = (e)=>{
        e.preventDefault();
        let body = {
            id:userData._id
        }
        axios.post('/getsuggestions', body).then(users=>{
            //console.log(users);
            setsuggestions(users.data);
            setshow(true);
        }).catch(err=>{
            console.log(err);
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        let body = {
            title,
            image,
            caption,
            postedBy:userData._id
        }

        axios.post('/createposts', body).then(res=>{
           // console.log(res);
            setposts(
                [
                ...posts,
                 res.data
                ]
            );
            alert('posted successFully');
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
   
     <Container className="homePage">
        <Row>
        <Col xs="12" sm="12" md="4" lg="3" xl="3" className="leftPart">
          <Container fluid className="userPart">
             <img onClick={callClick} src={profileInfo?profileInfo.profilePic:""} alt="set profile pic"/>
             <Button onClick={getyourinfo} style={{marginTop:10}}>{userData.name}</Button><br/>
             <Button className="buttons"><b>Posts:{countPost}</b></Button><br/>
             <Button className="buttons" onClick={findFollower}>Followers:{followers}</Button><br/>
             <Button className="buttons" onClick={findFollowings}><b>Followings:{followings}</b></Button><br/>
             <p onClick={findNotFollowBack}><b>Find who doesn't followBack</b></p>
          </Container>
        
         <form onSubmit={handleSubmit} className="createPostForm">
         <h3>New Post</h3>
             <input type="text" className="fields1" placeholder="title" value={title} onChange={e=>settitle(e.target.value)} />
             <input type="text" className="fields1"  placeholder="image link" value={image} onChange={e=>setimage(e.target.value)} />
             <input type="text" className="fields1"  placeholder="caption" value={caption} onChange={e=>setcaption(e.target.value)} />
             <Button className="postButton">Create Post</Button>
         </form>
         </Col>
         <Col xs="12" sm="12" md="4" lg="4" xl="4" className="midPart">
             <Timeline posts={posts} />
         </Col>

         <Col xs="12" sm="12" md="4" lg="3" xl="3" className="rightPart">
         <Button onClick={handleClick} style={show?{visibility:"hidden"}:{visibility:"visible"}} className="Button">Find Accounts</Button>
           {
              show ? <Suggestions users={suggestions} /> : ''

               }
               </Col>
        </Row>
     </Container>
    )
}

