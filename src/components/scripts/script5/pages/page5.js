import { connect } from 'react-redux';


import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';


const Page5 = props => {
 
    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");   
    const [remembers, setRemembers] = useState(null);
    const [no_remembers, setNoRemembers] = useState(null); 

    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);


    

    const handleClick = (event, choice) => {
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
        else{
            if (choice === 1){
                setRemembers(<p>That's great!<br/>Thanks for sharing.</p>);
                setNoRemembers(null);
            }
            else if (choice === 2){
                setRemembers(null);
                setNoRemembers(<p>That's ok! Coping strategies are what people do to deal with stress.  We take care of our mental health by using coping tools that help us notice our emotions, find ways to relax, and ways to make peace with upsetting feelings and thoughts.  Different people have different types of coping strategies. </p>);
            }
        }
        /* Determines the outcome of the button press. If it's 2 then we do a scavenger hunt and render that component */
        
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
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleClick(event, "")}>Reviewing coping strategies</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} id="p_1" onClick={event => handleClick(event, "")}>
                        Last week we talked about coping strategies.<br/>
                        What do you remember about our conversation? 
                    </p>
                    <br />
                    <img className={`pause ${props.commentMode}`} id="img_1" onClick={event => handleClick(event, "")} src={pause} alt="Pause" />
                    <img className={`allEars ${props.commentMode}`} id="img_2" onClick={event => handleClick(event, "")} src={allEars} alt="Listen" />
                    <p className={props.commentMode} id="p_2" onClick={event => handleClick(event, "")}>It's ok if you don't remember a lot! I just want to know so I don't repeat too much information. </p>
                    <br/>
                    <ul>
                        <li className={`${props.commentMode}`} id="li_1" onClick={event => handleClick(event, "")}><button onClick={event => handleClick(event, 1)}>press</button>My mentee remembers a lot about coping strategies</li>
                        {remembers}
                        <li className={`${props.commentMode}`} id="li_2" onClick={event => handleClick(event, "")}><button onClick={event => handleClick(event, 2)}>press</button>My mentee doesn't remember a lot about coping strategies</li>
                        {no_remembers}
                    </ul>
                    <p className={props.commentMode} id="p_3" onClick={event => handleClick(event, "")}>
                        Today we're going to think about a coping strategy that will work well for you. 
                        We have been talking about how sometimes you feel <textarea onChange={event => handleChange(event)} id="text_box_number_1_page_5_script_5" defaultValue={getValue("text_box_number_1_page_5_script_5")} /> 
                        and want to feel more/less <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_5_script_5" defaultValue={getValue("text_box_number_2_page_5_script_5")} />.
                        <br/><br/>
                        Let's look at the coping strategy activity from last week to figure out what may work as a coping strategy for you. 
                    </p>
                        <div id="instruction_box_number_1_page_5_script_5" className="custom_svg demo_box container_for_large_margin">
                            <p className="top_line_in_instruction_box">
                                Send your mentee the coping strategy sort link.
                                <br/><br/>
                                Link: <textarea onChange={event => handleChange(event)} id="text_box_number_4_page_5_script_5" defaultValue={getValue("text_box_number_4_page_5_script_5")} />
                                <br/><br/>
                                Ask them to screen share
                            </p>
                        </div>
                        <p className={props.commentMode} id="p_4" onClick={event => handleClick(event, "")}>
                            <br/><br/>
                            A good coping strategy is something that makes you feel good, you know how to do, you can do anywhere, and takes 15 minutes or less to do.
                            <br/><br/><br/>
                            Let's think about each of the activities that make you feel good to figure out if they would be good coping strategies. Today, we'll pick one to focus on. But as we continue mentoring you will pick more activities to use as coping strategies.
                            <br/><br/><br/>
                            First, let's look at all the strategies that you like. 
                            <br/><br/>
                            We will move ones that help you feel good to a new pile. What do you want to call that pile?  
                        </p>
                        <div id="instruction_box_number_2_page_5_script_5" className={`custom_svg demo_box container_for_large_margin ${props.commentMode}`} onClick={event => handleClick(event, "")}>
                            <p className="top_line_in_instruction_box">
                                Help your mentee make new piles in the cards sort.
                                <br/><br/>
                                The piles should describe how the activities make them feel.
                                <br/><br/>
                                You can ask them questions and give them encouragement.
                            </p>
                        </div>
                        <p className={props.commentMode} id="p_5" onClick={event => handleClick(event, "")}>
                            <br/><br/><br/>
                            Great, now let's think about which of the activities that make you feel good are activities you can do in 15 minutes or less. 
                            <br/><br/>
                            Let's make a new pile for the activities you think you can do in 15 minutes or less.
                        </p>
                        <div id="instruction_box_number_3_page_5_script_5" className={`ital custom_svg demo_box container_for_large_margin ${props.commentMode}`} onClick={event => handleClick(event, "")}>
                            <p className="top_line_in_instruction_box">Help your mentee think about how long each activity takes and  help them move them to a new pile for “I can do in 15 minutes or less.”</p>
                        </div>
                        <p className={props.commentMode} id="p_6" onClick={event => handleClick(event, "")}>
                            <br/><br/><br/>    
                            We will now pick one of the activities that makes you feel good and you can do in 15 minutes or less to be your first coping strategy. 
                            <br/><br/>
                            Which activity do you want to work on for the next few weeks? 
                            <br/><br/><br/>
                            Write your mentee's first coping strategy: <textarea onChange={event => handleChange(event)} id="text_box_number_3_page_5_script_5" defaultValue={getValue("text_box_number_3_page_5_script_5")} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page5);
