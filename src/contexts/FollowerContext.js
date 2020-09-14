import React,{createContext, useState} from 'react'

import Followers from '../components/Followers'

import Home from '../components/Home'

export const FollowerContext = createContext();

export const FollowerProvider= props=>{
    const [follower, setfollower] = useState([]);
    const [following, setfollowing] = useState([]);
    const [notFollow, setnotFollow] = useState([]);
    return (
        <FollowerContext.Provider value={[follower,setfollower]} value={[following,setfollowing]} value={[notFollow, setnotFollow]}>
            {props.children}
        </FollowerContext.Provider>
    )
}