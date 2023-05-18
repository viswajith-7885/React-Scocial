import "./sidebar.css"
import {RssFeed,Chat,Videocam,Group,Bookmarks,HelpOutline,Work,EmojiEvents,GolfCourse} from "@material-ui/icons"

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWraper">
    <ul className="sidebarllist">
    <li className="sidebarlistiem">
    <RssFeed className="sidebaricon"/>
    <span className="sidebarlistitem">feed</span>
    </li>
    <li className="sidebarlistiem">
    <Chat className="sidebaricon"/>
    <span className="sidebarlistitem">Chat</span>
    </li>
    <li className="sidebarlistiem">
    <Videocam className="sidebaricon"/>
    <span className="sidebarlistitem">Video</span>
    </li>
    <li className="sidebarlistiem">
    <Group className="sidebaricon"/>
    <span className="sidebarlistitem">group</span>
    </li>
    <li className="sidebarlistiem">
    <Bookmarks className="sidebaricon"/>
    <span className="sidebarlistitem">Bookmarks</span>
    </li>
    <li className="sidebarlistiem">
    <HelpOutline className="sidebaricon"/>
    <span className="sidebarlistitem">questions</span>
    </li>
    <li className="sidebarlistiem">
    <Work className="sidebaricon"/>
    <span className="sidebarlistitem">jobs</span>
    </li>
    <li className="sidebarlistiem">
    <EmojiEvents className="sidebaricon"/>
    <span className="sidebarlistitem">events</span>
    </li>
    <li className="sidebarlistiem">
    <GolfCourse className="sidebaricon"/>
    <span className="sidebarlistitem">course</span>
    </li>
    </ul>
    <button className="sidebarbutton">show more</button>
    <hr className="sidebarhr"/>
    <ul className="sidebarFriendlist">
      <li className="sidebarfriend">
        <img src="/assets/person/2.jpg" alt=""  className="sidebarFriendimage"/>
        <span className="sidebarFriendname">viswa</span>
      </li>
      <li className="sidebarfriend">
        <img src="/assets/person/2.jpg" alt=""  className="sidebarFriendimage"/>
        <span className="sidebarFriendname">viswa</span>
      </li>
      <li className="sidebarfriend">
        <img src="/assets/person/2.jpg" alt=""  className="sidebarFriendimage"/>
        <span className="sidebarFriendname">viswa</span>
      </li><li className="sidebarfriend">
        <img src="/assets/person/2.jpg" alt=""  className="sidebarFriendimage"/>
        <span className="sidebarFriendname">viswa</span>
      </li>
      <li className="sidebarfriend">
        <img src="/assets/person/2.jpg" alt=""  className="sidebarFriendimage"/>
        <span className="sidebarFriendname">viswa</span>
      </li>
      <li className="sidebarfriend">
        <img src="/assets/person/2.jpg" alt=""  className="sidebarFriendimage"/>
        <span className="sidebarFriendname">viswa</span>
      </li>
      <li className="sidebarfriend">
        <img src="/assets/person/2.jpg" alt=""  className="sidebarFriendimage"/>
        <span className="sidebarFriendname">viswa</span>
      </li>
    </ul>
    </div>
    </div>
  )
}

export default Sidebar