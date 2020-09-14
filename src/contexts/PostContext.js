import React,{createContext, useState} from 'react'

export const PostContext = createContext();



export const PostProvider= props=>{
    const [posts, setposts] = useState([]);
    const [yourinfo, setyourinfo] = useState([]);

    return (
        <PostContext.Provider value={[posts,setposts]} value={[yourinfo, setyourinfo]}>
           {props.children}
        </PostContext.Provider>
    )
}