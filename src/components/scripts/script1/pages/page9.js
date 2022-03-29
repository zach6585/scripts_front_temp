import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";
import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";

import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


import { toggleCommentMode } from '../../../../actions/comment';

import Sidebar from '../../general pages/sidebar';



const Page9 = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");   
    const [checkText, setCheckText] = useState(null);                      
    const [xText, setXText] = useState(null);

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
                setXText(null);
                setCheckText(<div><div>
                        <p>
                            If you're comfortable with it, can you tell me a little bit about what you know about mental health?  That way I'll know if there are certain things you've already learned about mental health that would be boring to repeat to you, or certain parts of mental health that you really want to talk about together and learn more about. 
                        </p>
                    </div>

                    <div id="pause_listen_div">
                       <img src={pause} className={`pause`} alt="Pause" />                        
                       <img src={allEars} className={`allEars`} alt="Listen" /> 
                    </div>

                    <div id="instruction_box_number_1_page_9_script_1" className={`ital custom_svg demo_box container_for_small_margin`}>
                        <p className='top_line_in_instruction_box'>
                           Listen to your mentee's definitions of mental health and talk to them about their ideas. You can also share your own definition of mental health. 
                        </p>
                    </div></div>);
            }
            else if (letter === 'x'){
                setCheckText(null);
                setXText(<p>
                That's ok, we're going to watch a video about mental health to learn more.
                We are going to watch a video together about mental health made by young adults who have mental health conditions. Please ask me to pause if you have a question or if something makes you feel uncomfortable.
            </p>);
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
                            <br/>
                            <div>{checkText}</div>
                            <br/><br/>
                            <img className={`redX ${props.commentMode}`} id="img_2" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p  className={`what_does_your_mentor_say ${props.commentMode}`} id="p_3" onClick={(event) => handleClick(event, '')}>Your mentee says no</p>
                            <br/>
                            <div>{xText}</div>
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
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page9);