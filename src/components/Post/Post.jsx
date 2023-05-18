import './Post.css'
import {MoreVert} from '@material-ui/icons'

function Post() {
  return (
    <div className='Post'>
    <div className="Postwraper">
        <div className="Posttop">
        <div className="postleft">
        <img className='postleftimg' src="/assets/person/1.jpg" alt="" />
            <span className="postusername">viswa</span>
            <span className="postdate">5mint ago</span>
        </div>
        <div className="postRight">
        <MoreVert/>
        </div>
        </div>
        <div className="Postcenter">
        <span className="post">its my first post</span>
        <img className='postImage' src="/assets/post/1.jpg" alt="" />
        </div>
        <div className="Postbottom">
            <div className="postbottomleft">
            <img className='likeIcon' src="/assets/post/like.png" alt="" />
            <img className='heartIcon' src="/assets/post/heart.png" alt="" />
            <span className="postlikeCounter">32 people like it</span>
            </div>
            <div className="postbottomright">
                <span className="postcommentText">9 comments</span>
            </div>
        </div>
    </div>
    
    
    </div>
  )
}

export default Post