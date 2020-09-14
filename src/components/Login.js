import React,{useState, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import '../styles/signup.css'
import {PostContext} from '../contexts/PostContext'
import axios from 'axios'
export default function Login() {

    const[email, setemail] = useState('');

    const [password, setpassword] = useState('');

    const [posts, setposts] = useContext(PostContext);

    let history = useHistory();

    const handlesubmit = (e)=>{
        e.preventDefault();

        let body = {
            email,
            password
        }

        axios.post('/login', body).then(user=>{
            //console.log(user);
            sessionStorage.setItem('myuser',JSON.stringify(user.data[0]));
            sessionStorage.setItem('following',JSON.stringify(user.data[1]));
            sessionStorage.setItem('follower',JSON.stringify(user.data[2]));
            sessionStorage.setItem('profileInfo',JSON.stringify(user.data[4]));
            sessionStorage.setItem('numberOfposts',JSON.stringify(user.data[5]));
            setposts(user.data[3]);
            history.push(`/posts/${user.data[0]._id}`);
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <Container fluid className="container">
        
            <form onSubmit={handlesubmit} className="forms">
                <h1>Login</h1>
                <input type="text" className="fields" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)} /><br />
                <input type="password" className="fields" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)} /><br />
                <Button color="success" className="signup">Login</Button>
                <Button color="danger" className="login"><a href="/">SignUp</a></Button>
            </form>

            </Container>
        
    )
}