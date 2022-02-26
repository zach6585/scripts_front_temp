import { connect } from 'react-redux';

import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


const Page4 = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");    
    const [words_that_appear_when_you_click_green_check, setCheckWords] = useState(null);
    const [words_that_appear_when_you_click_red_x, setXWords] = useState(null);                     


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
                setCheckWords(<GreenCheckClicked props={props} />);
                setXWords(null);
            }
            else if (letter === 'x'){
                setCheckWords(null);
                setXWords(<RedXClicked props={props} />);
            }
        }
        
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleClick(event, "")}>Icebreaker game/fun activity</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} id="p_1" onClick={event => handleClick(event, "")}>Would you like to do another scavenger hunt show and tell? </p>
                    <div className="container_for_medium_margin">
                        <img className={`check ${props.commentMode}`} id="img_1" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_2" onClick={event => handleClick(event, "")}>Your mentee says yes</p>
                        <br/>
                        <div className="choicePicked">{words_that_appear_when_you_click_green_check}</div>
                        <br/><br/>
                        <img className={`redX ${props.commentMode}`} id="img_2" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_3" onClick={event => handleClick(event, "")}>Your mentee says no</p>
                        <br/>
                        <div className="choicePicked">{words_that_appear_when_you_click_red_x}</div>
                    </div>
                </div>
            </div>
            {sideBar}
        </div>
    )
}

const GreenCheckClicked = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState(""); 

    const handleCommentClick = (event) => {
        //Here is where you render the sidebar
        if (props.props.commentMode === 'commentModeOn'){
            if (blur === ""){
                setBlur("blur");
            }
            else {
                setBlur("");
            }
            if (sideBar === null){
                setSidebar(<Sidebar id_tag={event.target.id} />)
            }
            props.props.toggleCommentMode();
        }
    }

    const handleChange = (event) => {
        const object_outcome = getObject(event.target.id)
        object_outcome === "" ? 
        props.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: props.props.mentee_id, script: props.script})
        :
        props.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: props.props.mentee_id, script: props.script})

    }
    
    const getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    const getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }

    return(
        <div>
            <div>
                <p className={`what_does_your_mentor_say ${props.props.commentMode}`} id="p_4" onClick={event => handleCommentClick(event)}>
                    Can you find something in your house that you worked really hard to make?<br />
                    If you can't find something that you made, can you find something that you worked hard to earn or to save up to buy?<br/>
                    I'll put my timer on for 5 minutes and I'll call out when our time is up.  If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time! <br/>
                </p>
                <div id="instruction_box_number_1_page_4_script_4" className={`custom_svg demo_box container_for_medium_margin ${props.props.commentMode}`} onClick={event => handleCommentClick(event)}>
                    <p className='top_line_in_instruction_box'>
                        Before sharing your idea, wait to see if the mentee is come up with an example on their own. Then share:  Here is what I made.  This is a <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_4_script_4" defaultValue={getValue("text_box_number_1_page_4_script_4")} />  
                        and I made it in / for / when <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_4_script_4" defaultValue={getValue("text_box_number_2_page_4_script_4")} />. <br/>
                        When mentee shows you their item, validate them. <br/>
                        You can also ask them question to learn more about the item they showed you 
                    </p>
                </div>
            </div>
            {sideBar}
        </div>
    )
}

const RedXClicked = props => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState(""); 

    const handleCommentClick = (event) => {
        //Here is where you render the sidebar
        if (props.props.commentMode === 'commentModeOn'){
            if (blur === ""){
                setBlur("blur");
            }
            else {
                setBlur("");
            }
            if (sideBar === null){
                setSidebar(<Sidebar id_tag={event.target.id} />)
            }
            props.props.toggleCommentMode();
        }
    }

    return(
        <div>
            <div>
                <p className={`what_does_your_mentor_say ${props.props.commentMode}`} id="p_5" onClick={event => handleCommentClick(event)}>
                    Ok! <br/>
                    Let's share our thumbs up and thumbs down for the week. Does that sound good? Or, do you have another idea for a short game? <br/>
                </p>
                <div id="instruction_box_number_2_page_4_script_4" className={`custom_svg demo_box container_for_medium_margin ${props.props.commentMode}`} onClick={event => handleCommentClick(event)}>
                    <p>
                        If they have an idea for another short game, you can do that. <br/>
                        If they do not, explain: <br/>

                        Thumbs up is something that made you happy, or something about the week that you enjoyed/ that felt good.  <br/> 

                        A thumbs down can be any stress or anything that's upsetting about this week.<br/>

                        Remember to show understanding when your mentee shares.<br/>
                    </p>  
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
 