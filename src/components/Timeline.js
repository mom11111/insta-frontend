import React from 'react'

import '../styles/timeline.css'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap'

export default function Timeline({posts}) {
    return (
        <div>
            {
                posts.map((post,index)=>{
                    return (
                        <div key={index} className="post">
                        <Card>
                        <CardImg top width="100%" src={post.image} alt="Card image cap" className="cardImage" />
                        <CardBody>
                        <CardTitle><b>{post.title}</b></CardTitle>
                       <CardSubtitle><b>{post.date}</b></CardSubtitle>
                       <CardText><i>{post.caption}</i></CardText>
                       <Button>Like</Button>
                      </CardBody>
                      </Card>
                        </div>
                    )
                })

            }
        </div>
    )
}
