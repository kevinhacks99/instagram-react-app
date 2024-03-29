import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'

function Post({username, caption, imageUrl}) {
    return (
        <div className='post'>

            <div className="post_header">
                <Avatar className = "post_avatar"> 
                    alt = 'Kevin'
                    src="/static/images/avatar/1.jpg"
                </Avatar>
                <h3> {username} </h3>
            </div>

            {/* header -> avatar + username */}
            
            <img className="post_image" src={imageUrl} alt=""/>
            {/* image */}
            
            <h4 className='post_text'> <strong> {username} </strong> {caption} </h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
