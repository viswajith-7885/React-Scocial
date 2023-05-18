import './Topbar.css'
import {Search,Person,Chat,Notifications} from "@material-ui/icons"


function Topbar() {
  return (
    <div className="topbarcontainer">
    <div className="topbarleft">
    <span className="logo">Here me</span>
    </div>
    <div className="topbarcenter">
      <div className='searchbar'>
      <Search className='searchIcon'/>
      <input placeholder='Search for friends post or video' className='searchInput' />
      </div>
      </div>
    <div className="topbarRight">
      <div className='topbar-Links'>
        <span className='topbarLink'>Homepage</span>
        <span className='topbarLink'>TimeLine</span>
      </div>
      <div className='topbarIcons'>
        <div className="topbarIconItem">
        <Person/>
        <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
        <Chat/>
        <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
        <Notifications/>
        <span className="topbarIconBadge">1</span>
        </div> 
      </div>

      <img src="/assets/person/3.jpg" alt="" className="topbarImg" />
    </div>
    
    </div>
  )
}

export default Topbar