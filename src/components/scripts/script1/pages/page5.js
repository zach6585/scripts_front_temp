import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";

import { connect } from 'react-redux';

import { toggleCommentMode } from '../../../../actions/comment';
import {goToSpecificPage} from '../../../../actions/page';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


const Page5 = (props) => {
    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");                       

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
                props.goToSpecificPage(7);
            }
            else if (letter === 'x'){
                props.goToSpecificPage(6);
            }
        }
    }

    return(
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleClick(event, "")}>Icebreaker</h1>
                <div className="left">
                    <div className="container_for_medium_margin">
                        <p className={props.commentMode} onClick={event => handleClick(event, "")} id="p_1">
                            I think it would be fun to get to know more about each other. <br/>
                            We are going to play a game called “two truths and a lie.” Have you ever played before?
                        </p>
                    </div>
                    <div>
                        <img className={`check ${props.commentMode}`} id="img_1" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_2" onClick={(event) => handleClick(event, '')}>Your mentee says yes</p>
                        <br/><br/>
                        <img className={`redX ${props.commentMode}`} id="img_2" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p  className={`what_does_your_mentor_say ${props.commentMode}`} id="p_3" onClick={(event) => handleClick(event, '')}>Your mentee says no</p>
                        <br/><br/>
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
        goToSpecificPage: (page_num) => dispatch(goToSpecificPage(page_num)), 
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page5);