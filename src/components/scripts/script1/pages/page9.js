import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";

import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


import { toggleCommentMode } from '../../../../actions/comment';
import {goToSpecificPage} from '../../../../actions/page';

import Sidebar from '../../general pages/sidebar';



const Page9 = (props) => {

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
                props.goToSpecificPage(11);
            }
            else if (letter === 'x'){
                props.goToSpecificPage(10);
            }
        }
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleClick(event, "")}>Learning about mental health conditions</h1>
                <div className="left">
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} onClick={event => handleClick(event, "")} id="p_1">
                            We are going to learn a few new words about mental health today.  To give you a preview, here's what we're going to talk about: 
                        </p>
                        <ul>
                            <li className={`${props.commentMode}`} id="li_1" onClick={event => handleClick(event, "")}>mental health</li>
                            <li className={`${props.commentMode}`} id="li_2" onClick={event => handleClick(event, "")}>coping tools, or coping strategies</li>
                            <li className={`${props.commentMode}`} id="li_3" onClick={event => handleClick(event, "")}>mental health conditions, and</li>
                            <li className={`${props.commentMode}`} id="li_4" onClick={event => handleClick(event, "")}>symptoms</li>
                        </ul>
                        <p className={props.commentMode} onClick={event => handleClick(event, "")} id="p_1_indented">
                            Have you ever heard of “mental health” before? 
                        </p>
                        <div>
                            <img className={`check ${props.commentMode}`} id="img_1" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_2" onClick={(event) => handleClick(event, '')}>Your mentee says yes</p>
                            <br/><br/>
                            <img className={`redX ${props.commentMode}`} id="img_2" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p  className={`what_does_your_mentor_say ${props.commentMode}`} id="p_3" onClick={(event) => handleClick(event, '')}>Your mentee says no</p>
                            <br/><br/>
                        </div>
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
        toggleCommentMode: () => dispatch(toggleCommentMode()),
        goToSpecificPage: (pageNum) => dispatch(goToSpecificPage(pageNum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page9);