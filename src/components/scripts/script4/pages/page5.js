import { connect } from 'react-redux';

import checkButSmaller from "../../pictures/checkbutsmaller.png";
import redXButSmaller from "../../pictures/redxbutsmaller.png";
import pause from "../../pictures/pause.png";
import allEars from "../../pictures/allears.png";

import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';




const Page5 = props => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState(""); 
    const [checkStuff, setCheckStuff] = useState(null);
    const [xStuff, setXStuff] = useState(null);
    
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
                setCheckStuff(<GreenCheckOrRedXClicked props={props} x_or_check_picked={"check"} />);
                setXStuff(null);
            }
            else if (letter === 'x'){
                setCheckStuff(null);
                setXStuff(<GreenCheckOrRedXClicked props={props} x_or_check_picked={"x"} />);
            }
        }
        
    }

    const handleChange = (event) => {
        const object_outcome = getObject(event.target.id)
        object_outcome === "" ? 
        props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: props.mentee_id, script: props.script})
        :
        props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: props.mentee_id, script: props.script})

    }
    
    const getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    const getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleClick(event, "")}>Learning about coping strategies</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} id="p_1" onClick={event => handleClick(event, "")}>
                        Last time we talked about mental health symptoms. 
                        Symptoms are the things that get in the way of your mood, thoughts, or behavior.  
                        You also mentioned that symptoms are: <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_5_script_4" defaultValue={getValue("text_box_number_1_page_5_script_4")} /> 
                    </p>
                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} id="p_2" onClick={event => handleClick(event, "")}>
                            You also worked on knowing how your body feels when you're having symptoms.  
                            What are some of the feelings you have been noticing in your body?
                        </p>
                    </div>
                    
                    <div id='instruction_box_number_1_page_5_script_4' className={`ital custom_svg demo_box container_for_medium_margin ${props.commentMode}`} onClick={event => handleClick(event, "")}>
                        <p className='top_line_in_instruction_box'>If your mentee has a hard time identifying feelings you can:</p>
                        <ul>
                            <li>share an example from your life </li>
                            <li>ask them questions about different body parts</li>
                        </ul>
                    </div>

                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} id="p_3" onClick={event => handleClick(event, "")}>
                            Today we will talk about coping strategies to help you feel better when you have symptoms. <br/> 
                            Lowering stress in life is a really important part of mental health.  That means finding ways to keep your stress low as possible at home, at school or work, in the community, and when you are around other people.<br/><br/> 
                            We are going to work together to find activities that make you feel good or help lower stress. These are called “coping strategies.” <br/><br/>
                            Coping strategies are what people do to deal with stress.  We take care of our mental health by using coping tools that help us notice our emotions, find ways to relax, and ways to make peace with upsetting feelings and thoughts.  
                        </p>
                    </div>

                    <div className='container_for_large_margin'>
                        <p className={props.commentMode} id="p_4" onClick={event => handleClick(event, "")}>
                            Have you ever heard of a coping strategy? If not, it's okay. It is a new idea.
                        </p>
                    </div>
                    <div className='container_for_small_margin'>
                        <img className={`check ${props.commentMode}`} id="img_1" src={checkButSmaller} alt="Check" onClick={(event) => handleClick(event, 'c')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_5" onClick={event => handleClick(event, "")}>Your mentee has heard of coping strategies</p>
                        <br/>
                        <div className="choicePicked">{checkStuff}</div>
                        <br/><br/>
                        <img className={`redX ${props.commentMode}`} id="img_2" src={redXButSmaller} alt="Red X" onClick={(event) => handleClick(event, 'x')} /><p className={`what_does_your_mentor_say ${props.commentMode}`} id="p_6" onClick={event => handleClick(event, "")}>Your mentee has not heard of coping strategies.</p>
                        <br/>
                        <div className="choicePicked">{xStuff}</div>
                    </div>
                </div>
            </div>
            {sideBar}
        </div>
    )

}   

const GreenCheckOrRedXClicked = props => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState(""); 
    const [firstLine, setFirstLine] = useState("");
    const [secondLine, setSecondLine] = useState("");
    const [lastLine, setLastLine] = useState("");
    
    // eslint-disable-next-line
    useEffect(() => {textPicker()}, [])


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


    const textPicker = () => { //If props.x_or_check_picked === "check" then we go down the route of the check. If it's x then we go down the x route
        if (props.x_or_check_picked === "check"){
            setFirstLine(<div>
                <p className={props.commentMode} id="p_7" onClick={event => handleCommentClick(event)}>Ask your mentee about how they define coping strategies</p>
                <img className={`pause ${props.commentMode}`} id="img_3" onClick={event => handleCommentClick(event)} src={pause} alt="pause" /> 
                <img className={`allEars ${props.commentMode}`} id="img_4" onClick={event => handleCommentClick(event)} src={allEars} alt="All ears" />
            </div>);
            setSecondLine("That's a great way to think about it. The way I think about coping strategies, is that they are things you can do to help you have better mental health. Coping strategies can help people relax and feel better when they have upsetting thoughts or feelings.");
            setLastLine("")
        }
        else if (props.x_or_check_picked === "x"){
            setFirstLine("");
            setSecondLine("That's ok. Coping strategies are a new idea for a lot of people. Coping strategies are things you can do to help you have better mental health. ")
            setLastLine("Thanks for sharing we will work on finding more coping strategies today.");
        }
    }
    if (props.x_or_check_picked === "check"){
        return(
            <div>
            <div>
                {firstLine}
                <div className='container_for_small_margin'>
                    <p className={props.commentMode} id="p_8" onClick={event => handleCommentClick(event)}>
                        {secondLine} For example, sometimes I feel 
                    </p>
                    <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_5_script_4" defaultValue={getValue("text_box_number_2_page_5_script_4")} />. 
                    <p className={props.commentMode} id="p_9" onClick={event => handleCommentClick(event)}>When I feel </p>
                    <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_5_script_4" defaultValue={getValue("text_box_number_3_page_5_script_4")} />, 
                    <p className={props.commentMode} id="p_10" onClick={event => handleCommentClick(event)} >
                        I <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_5_script_4" defaultValue={getValue("text_box_number_4_page_5_script_4")} />. 
                    </p>
                    <p className={props.commentMode} id="p_11" onClick={event => handleCommentClick(event)}>
                        Doing this makes me feel better, so it is a coping strategy. Is there anything that you do that helps make you feel better?
                    </p>
                    <img className={`pause ${props.commentMode}`} id="img_5" onClick={event => handleCommentClick(event)} src={pause} alt="pause" /> 
                <img className={`allEars ${props.commentMode}`} id="img_6" onClick={event => handleCommentClick(event)} src={allEars} alt="All ears" />
                </div>
                <p className={props.commentMode} id="p_12" onClick={event => handleCommentClick(event)}>{lastLine}</p>
            </div>
            {sideBar}
        </div>
        )
    }
    else{
        return(
            <div>
                <div>
                    {firstLine}
                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} id="p_8" onClick={event => handleCommentClick(event)}>
                            {secondLine} For example, sometimes I feel 
                        </p>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_5_page_5_script_4" defaultValue={getValue("text_box_number_5_page_5_script_4")} />. 
                        <p className={props.commentMode} id="p_9" onClick={event => handleCommentClick(event)}>When I feel </p>
                        <textarea onChange={event => handleChange(event)} id="text_box_number_6_page_5_script_4" defaultValue={getValue("text_box_number_6_page_5_script_4")} />, 
                        <p className={props.commentMode} id="p_10" onClick={event => handleCommentClick(event)} >
                            I <textarea onChange={event => handleChange(event)} id="text_box_number_7_page_5_script_4" defaultValue={getValue("text_box_number_7_page_5_script_4")} />. 
                        </p>
                        <p className={props.commentMode} id="p_11" onClick={event => handleCommentClick(event)}>
                            Doing this makes me feel better, so it is a coping strategy. Is there anything that you do that helps make you feel better?
                        </p>
                        <img className={`pause ${props.commentMode}`} id="img_5" onClick={event => handleCommentClick(event)} src={pause} alt="pause" /> 
                    <img className={`allEars ${props.commentMode}`} id="img_6" onClick={event => handleCommentClick(event)} src={allEars} alt="All ears" />
                    </div>
                    <p className={props.commentMode} id="p_12" onClick={event => handleCommentClick(event)}>{lastLine}</p>
                </div>
                {sideBar}
            </div>
            )
    }
    
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

export default connect(mapStateToProps, mapDispatchToProps)(Page5);