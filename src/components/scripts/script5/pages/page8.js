import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { toggleCommentMode } from '../../../../actions/comment';

import Sidebar from '../../general pages/sidebar';
import RemindersAboutMentoring from '../../general pages/remindersaboutmentoring/remindersaboutmentoring.js';


const Page8 = (props) => {

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
                <RemindersAboutMentoring />
                <div className='sheet left'>
                    <p className={`${props.commentMode}`} id="p_1" onClick={event => handleCommentClick(event)}>
                        This week, when you do your mood logs, try using the body scan worksheet first. The body scan worksheet might help you do the mood log. 
                    </p>  
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

export default connect(mapStateToProps, mapDispatchToProps)(Page8);

