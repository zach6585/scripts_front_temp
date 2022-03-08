import { connect } from 'react-redux';


import { patchTexts, postTexts } from '../../../../../actions/text';
import { toggleCommentMode } from '../../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../../general pages/sidebar';
import ScavengerHunt from './scavengerhunt';
import OwnActivity from './ownactivity';
 
const Page4 = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");   
    const [own, setOwn] = useState(null);
    const [scav, setScav] = useState(null); 

    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);

    const handleButtonClick = (event, choice) => {
        /* Determines the outcome of the button press. If it's 2 then we do a scavenger hunt and render that component */
        if (choice === 2){
            setOwn(<OwnActivity />);
            setScav(null);
        }
        else if (choice === 1){
            setOwn(null);
            setScav(<ScavengerHunt />);
        }
    }

    const handleCommentClick = (event) => {
    //Here is where you render the sidebar
        if (props.commentMode === 'commentModeOn'){
            if (blur === ""){
                setBlur("blur");
            }
            else {
                setBlur("");
            }
            if (sideBar === null){
                setSidebar(<Sidebar id_tag={event.target.id} />)
            }
            props.toggleCommentMode();
        }
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>Think of an activity you want to do for about 10 minutes with your mentee.</p>
                    <ul id="button_list">
                        <li className={`li_button ${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}><button onClick={event => handleButtonClick(event, 2)}>press</button>I want to think of my own activity</li>
                        {own}
                        <li className={`li_button ${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}><button onClick={event => handleButtonClick(event, 1)}>press</button>I want to do 1 more scavenger hunt</li>
                        {scav}
                    </ul>
                </div>
            </div>
            {sideBar}
        </div>
    )
}


const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript,
        commentMode: state.comments.commentMode,
        sendingComment: state.comments.sendingComment 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data)),
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page4);