import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { toggleCommentMode } from '../../../../actions/comment';

import Sidebar from '../../general pages/sidebar';

const Page3 = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");                         


    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);

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
                <h1 className={`bold center ${props.commentMode}`} id="h1_1" onClick={event => handleCommentClick(event)}>Plan for the day</h1>
                <div className='left container_for_medium_margin'>
                    <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>
                        For every peer mentoring session we will have a plan for today. I can read it out loud to you or would you prefer to read it to yourself?<br />
                        Today's plan is: 
                    </p>
                    <ol>
                        <li className={`${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}>Icebreaker game</li>
                        <li className={`${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}>Reviewing symptoms</li>
                        <li className={`${props.commentMode}`} id="li_3" onClick={event => handleCommentClick(event)}>Learning about self-monitoring</li>
                        <li className={`${props.commentMode}`} id="li_4" onClick={event => handleCommentClick(event)}>Time for questions</li>
                        <li className={`${props.commentMode}`} id="li_5" onClick={event => handleCommentClick(event)}>Reminders about mentoring</li>
                        <li className={`${props.commentMode}`} id="li_6" onClick={event => handleCommentClick(event)}>Make a plan for practice</li>
                    </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
