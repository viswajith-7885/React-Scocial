import './share.css'
import {PermMedia,Label,LocationOn,EmojiEmotions} from "@material-ui/icons"

function Share() {
  return (
    <div className='share'>
        <div className="sharewraper">
        <div className="shareTop">
        <img className='shareprofile' src="/assets/person/1.jpg" alt="" />
            <input className='shareinput' placeholder='whats in your mind' />
        </div>
        <hr className='sharehr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                     <PermMedia htmlColor='tomato' className='shareicon'/>
                     <span className='ShareOptionText'>photo or video</span>
            </div>
            <div className="shareOption">
                     <Label  htmlColor='blue' className='shareicon'/>
                     <span className='ShareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
                     <LocationOn  htmlColor='green' className='shareicon'/>
                     <span className='ShareOptionText'>Location</span>
            </div>
            <div className="shareOption">
                     <EmojiEmotions  htmlColor='goldenrod' className='shareicon'/>
                     <span className='ShareOptionText'>Feelings</span>
            </div>
        </div>
        <button className='sharebutton'>share</button>
        </div>
    </div>
    </div>
  )
}

export default Share