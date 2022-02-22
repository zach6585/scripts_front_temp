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
                <h1 className={`bold center ${props.commentMode}`} id="h1_1" onClick={event => handleCommentClick(event)}>Session 3</h1>
                <div className="left container_for_small_margin">
                    <h1 className={`bold ${props.commentMode}`} id="h1_2" onClick={event => handleCommentClick(event)}>Purpose</h1>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}>Help your mentee learn more about self-monitoring</li>
                    </ul>

                    <div className='container_for_medium_margin'>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li className={`${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}>Symptom card sort link </li>
                            <li className={`${props.commentMode}`} id="li_3" onClick={event => handleCommentClick(event)}>Body scan worksheets link</li>
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
