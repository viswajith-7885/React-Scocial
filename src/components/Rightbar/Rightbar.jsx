import "./Rightbar.css"

function Rightbar() {
  return (
    <div className="Rightbar">
    <div className="rightbarwraper">
      <div className="birthdayContainer">
        <img className="birthdayImg" src="/assets/post/gift1.png" alt="" />
        <span className="birthdayText"><b>pola fost</b>and<b>3others</b> have a birthday today</span>
      </div>
      <img className="rightbarAd" src="/assets/post/add.jpg" alt="" />
      <h4 className="rightbarTitle">Online friends</h4>
      <ul className="friendlist">
        <li className="rightbarfriends">
        <div className="rightbarprofileImageContainer">
          <img className="rightbarprofileImage" src="/assets/person/4.jpg" alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">John Carter</span>
        </li>
        <li className="rightbarfriends">
        <div className="rightbarprofileImageContainer">
          <img className="rightbarprofileImage" src="/assets/person/4.jpg" alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">John Carter</span>
        </li>
        <li className="rightbarfriends">
        <div className="rightbarprofileImageContainer">
          <img className="rightbarprofileImage" src="/assets/person/4.jpg" alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">John Carter</span>
        </li>
        <li className="rightbarfriends">
        <div className="rightbarprofileImageContainer">
          <img className="rightbarprofileImage" src="/assets/person/4.jpg" alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">John Carter</span>
        </li>
        <li className="rightbarfriends">
        <div className="rightbarprofileImageContainer">
          <img className="rightbarprofileImage" src="/assets/person/4.jpg" alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">John Carter</span>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Rightbar