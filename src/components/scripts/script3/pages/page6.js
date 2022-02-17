import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { toggleCommentMode } from '../../../../actions/comment';

import Sidebar from '../../general pages/sidebar';

import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";


const Page6 = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState(""); 
    const [checkWords, setCheckWords] = useState(null);
    const [xWords, setXWords] = useState(null);                        


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
                setCheckWords(<CheckMark choice={0} />);
                setXWords(null);
            }
            else if (letter === 'x'){
                setCheckWords(null);
                setXWords(<CheckMark choice={1} />);
            }
        }
    }
    
    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1_1" onClick={event => handleClick(event, "")}>Self-monitoring</h1>
                <div className='left container_for_medium_margin'>
                    <p className={props.commentMode} id="p_1" onClick={event => handleClick(event, "")}>
                        Today we're going to talk more about noticing symptoms.<br/>
                        Sometimes it can be hard to know how you are feeling or to notice your feelings. It can take practice.  When you know how you are feeling, you can do something to feel better.<br/>
                        Figuring out how you are feeling is called “self-monitoring.”  Have you heard of this before?
                    </p>
                    <div>
                        <img className={`check ${props.commentMode}`} id="img_1" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_2" onClick={(event) => handleClick(event, '')}>Your mentee says yes</p>
                        <br/>
                        <div className={`choicePicked ${props.commentMode}`} id="choice_1" onClick={(event) => handleClick(event, '')}>{checkWords}</div>
                        <br/><br/>
                        <img className={`redX ${props.commentMode}`} id="img_2" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p  className={`what_does_your_mentor_say ${props.commentMode}`} id="p_4" onClick={(event) => handleClick(event, '')}>Your mentee says no</p>
                        <br/>
                        <div className={`choicePicked ${props.commentMode}`} id="choice_2" onClick={(event) => handleClick(event, '')}>{xWords}</div>
                        <br/><br/>
                    </div>
                   </div>
            </div>
            {sideBar}
        </div>
    )
}

const CheckMark = (props) => {

    const picker = () => {
        /* Determines what to choose as the shown text based on if you clicked on the check or the x */
        if (props.choice === 0){//The check was pressed
            return (
                <div>
                    <p>That's great! How do you describe self-monitoring?</p>
                    <div id="instruction_box_number_1_page_6_script_3" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">Give your mentee positive feedback on their definition. </p>
                    </div>

                    <p>My definition of self-monitoring is: paying attention to how you are feeling. This might mean thinking about how your body feels. It might also mean identifying the thoughts you have in your head. You might have happy thoughts, or you might have anxious or sad thoughts. </p>
                </div> 
            )
        }
        else if (props.choice === 1){//The x was pressed
            return (
                <div>
                    <p>
                        That's ok! I'll tell you about it!<br/>
                        Self-monitoring means paying attention to how you are feeling. This might mean thinking about how your body feels. It might also mean identifying the thoughts you have in your head. You might have happy thoughts, or you might have anxious or sad thoughts. 
                    </p>
                </div> 
            )
        }
    }

    return (
        <div>
            {picker()}
            <br/>
            <p>
                When you self-monitor, you can learn more about how you are feeling. This can help you change your thoughts and feelings to feel better.<br/>
                You can get really good at self-monitoring if you practice.
            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page6);

