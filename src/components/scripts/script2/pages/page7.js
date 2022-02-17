import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";
import { connect } from 'react-redux';

import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

const Page7 = (props) => {
    
    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");                         
    const [checkWords, setCheckWords] = useState("");
    const [xWords, setXWords] = useState("");

    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);
 
    const handleClick = (e, letter) => {
        if (props.commentMode === 'commentModeOn'){
            if (blur === ""){
                setBlur("blur");
            }
            else {
                setBlur("");
            }
            if (sideBar === null){
                setSidebar(<Sidebar id_tag={e.target.id} />)
            }
            props.toggleCommentMode();
        }
        else{
            if (letter === 'c'){
                setCheckWords("Can you tell me more about what you know?");
                setXWords("");
            }
            else if (letter === 'x'){
                setCheckWords("");
                setXWords("That's okay because I can teach you about it!");
            }
        }
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleClick(event, "")}>Symptoms</h1>
                <div className='left container_for_medium_margin'>
                    <p className={props.commentMode} onClick={event => handleClick(event, "")} id="p_1">One way to know that a person has a mental health condition is because they have “symptoms.”  Are you familiar with that word?</p>
                    <div>
                        <img className={`check ${props.commentMode}`} id="img_1" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_2" onClick={(event) => handleClick(event, '')}>Your mentee says yes</p>
                        <br/>
                        <p className={`choicePicked ${props.commentMode}`} id="p_3" onClick={(event) => handleClick(event, '')}>{checkWords}</p>
                        <br/><br/>
                        <img className={`redX ${props.commentMode}`} id="img_2" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p  className={`what_does_your_mentor_say ${props.commentMode}`} id="p_4" onClick={(event) => handleClick(event, '')}>Your mentee says no</p>
                        <br/>
                        <p className={`choicePicked ${props.commentMode}`} id="p_5" onClick={(event) => handleClick(event, '')}>{xWords}</p>
                        <br/><br/>
                    </div>
                   <p className={props.commentMode} onClick={event => handleClick(event, "")} id="p_6">When people have a mental health condition, there are things that get in the way of their mood, thoughts, or behaviors.  These things are called <strong>symptoms</strong>. </p>
                   <p className={props.commentMode} onClick={event => handleClick(event, "")} id="p_7">Think back to a time when you had a cold.  Think about how you were feeling in your body.  Think about how your eyes, ears, nose, and throat were feeling.  Can you describe what happens to you when you have a cold?  </p>
                </div>
            </div>
            {sideBar}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        commentMode: state.comments.commentMode,
        sendingComment: state.comments.sendingComment
    }
}

const mapDispatchToProps = dispatch => {
    return{
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page7);