import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { toggleCommentMode } from '../../../../actions/comment';

import Sidebar from '../../general pages/sidebar';

const Page1 = (props) => {

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
                <h1 className={`bold center ${props.commentMode}`} id="h1_1" onClick={event => handleCommentClick(event)}>Peer mentoring session 2</h1>
                <div className="left container_for_medium_margin">
                    <div>
                        <h1 className={`bold ${props.commentMode}`} id="h1_2" onClick={event => handleCommentClick(event)}>Purpose</h1>
                        <ul>
                            <li className={`${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}>Help your mentee learn more about their mental health condition</li>
                            <li className={`${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}>Help your mentee learn more about self-monitoring</li>
                        </ul>
                    </div>
                    <div className='container_for_medium_margin'>
                        <h1 className={`bold ${props.commentMode}`} id="h1_3" onClick={event => handleCommentClick(event)}>Materials</h1>
                        <ul>
                            <li className={`${props.commentMode} square_bullets`} id="li_3" onClick={event => handleCommentClick(event)}>Peer mentor session 2 script</li>
                            <li className={`${props.commentMode} square_bullets`} id="li_4" onClick={event => handleCommentClick(event)}>Mental health worksheet</li>
                            <li className={`${props.commentMode} square_bullets`} id="li_5" onClick={event => handleCommentClick(event)}>Symptom card sort</li>
                            <li className={`${props.commentMode} square_bullets`} id="li_6" onClick={event => handleCommentClick(event)}>Audio recorder</li>
                            <li className={`${props.commentMode} square_bullets`} id="li_7" onClick={event => handleCommentClick(event)}>Body scan worksheets</li>
                                <ul>
                                    <li className={`${props.commentMode} open_circles_bullets`} id="li_8" onClick={event => handleCommentClick(event)}>Blank worksheets for your mentee</li>
                                    <li className={`${props.commentMode} open_circles_bullets`} id="li_9" onClick={event => handleCommentClick(event)}>1 you filled out</li>
                                </ul>
                        </ul>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page1);