



import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { toggleCommentMode } from '../../../../actions/comment';

import Sidebar from '../../general pages/sidebar';

const Page4 = (props) => {
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
                <div className='left'>
                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">
                            Each time we meet, there is a plan for the day. It helps us know what to expect.  
                            Today's plan is:
                        </p>
                    </div>
                    <div className='container_for_medium_margin'>
                        <ol>
                            <li className={`${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}>Icebreaker game</li>
                            <li className={`${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}>Learning about peer mentoring</li>
                            <li className={`${props.commentMode}`} id="li_3" onClick={event => handleCommentClick(event)}>Learning about mental health conditions</li>
                            <li className={`${props.commentMode}`} id="li_4" onClick={event => handleCommentClick(event)}>Doing the peer mentoring contract</li>
                            <li className={`${props.commentMode}`} id="li_5" onClick={event => handleCommentClick(event)}>Time for questions</li>
                            <li className={`${props.commentMode}`} id="li_6" onClick={event => handleCommentClick(event)}>Reminders about mentoring</li>
                        </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page4);