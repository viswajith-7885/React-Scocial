import "./Feed.css"
import Share from "../Share/share"
import Post from "../Post/Post"
function Feed() {
  return (
    <div className="feed">
    <div className="feedwraper">
      <Share/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
    </div>
  )
}

export default Feed