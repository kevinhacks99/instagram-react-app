import React from 'react'
import './Post.css'

function Post() {
    return (
        <div>
            {/* header -> avatar + username */}
            
            <img className="post-image" src="https://m.media-amazon.com/images/I/51W6duELHdL._AC_.jpg" />
            {/* image */}
            
            <h4> Username: caption </h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
