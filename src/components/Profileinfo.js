import React,{useState} from 'react'
import { Container, Button } from 'reactstrap'
import Axios from './axios';
import '../styles/profileinfo.css'
export default function Profileinfo() {
    const userData = JSON.parse(sessionStorage.getItem('myuser'));

    const [pic, setpic] = useState('');

    const [bio, setbio] = useState('');

    const handleClick = e=>{
        e.preventDefault();
        
        let body = {
            profilePic:pic,
            addBio:bio,
            userInfo:userData._id
        }
        Axios.post('/addprofilepic', body).then(res=>{
            console.log('added successfully');
            alert("profile Pic updated");
            //const userData = JSON.parse(sessionStorage.getItem('myuser'));
            //console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <Container fluid className="profilePicChange">
            <form onSubmit={handleClick} className="profilePicForm">
            <h1>Update Profile</h1>
                <input type="text" placeholder="pic url" className="inputFields" value={pic} onChange={e=>setpic(e.target.value)} /> <br/>
                <textarea className="inputFields" placeholder="add Bio" rows="4" cols="50" value={bio} onChange={e=>setbio(e.target.value)}/><br/>
                <Button>save</Button>
            </form>
        </Container>
    )
}
