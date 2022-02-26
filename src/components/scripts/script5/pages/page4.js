import { connect } from 'react-redux';


import { patchTexts, postTexts } from '../../../../actions/text';
import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


 
const Page4 = (props) => {

    const [sideBar, setSidebar] = useState(null);
    const [blur, setBlur] = useState("");   
    const [own, setOwn] = useState(null);
    const [scav, setScav] = useState(null); 

    useEffect(() => {
        setBlur("");
        setSidebar(null);
      }, [props.sendingComment]);

    const handleButtonClick = (event, choice) => {
        /* Determines the outcome of the button press. If it's 2 then we do a scavenger hunt and render that component */
        if (choice === 2){
            setOwn(<OwnActivity props={props} />);
            setScav(null);
        }
        else if (choice === 1){
            setOwn(null);
            setScav(<ScavengerHunt props={props} />);
        }
    }

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
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p className={props.commentMode} id="p_1" onClick={event => handleCommentClick(event)}>Think of an activity you want to do for about 10 minutes with your mentee.</p>
                    <ul id="button_list">
                        <li className={`li_button ${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}><button onClick={event => handleButtonClick(event, 2)}>press</button>I want to think of my own activity</li>
                        {own}
                        <li className={`li_button ${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}><button onClick={event => handleButtonClick(event, 1)}>press</button>I want to do 1 more scavenger hunt</li>
                        {scav}
                    </ul>
                </div>
            </div>
            {sideBar}
        </div>
    )
}


const ScavengerHunt = (props) => {

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
            <p className={props.commentMode} id="p_2" onClick={event => handleCommentClick(event)}>
                Today we will do one more scavenger hunt
                <br/><br/>
                This time, you will be searching for something to show me that I don't already know about you!
                <br/><br/>
                It should be a surprise to me.  It can be something you like to do that we haven't talked about yet.  It can be something you collect, something you got on a trip, or anything else I don't yet know about you!
                <br/><br/>
                For example, you don't know this about me, but I love <textarea onChange={event => handleChange(event)} id="text_box_number_2_page_4_script_5" defaultValue={getValue("text_box_number_2_page_4_script_5")} />.  So here is <textarea onChange={event => handleChange(event, "text_box_number_3_page_4_script_5")} id="text_box_number_3_page_4_script_5" defaultValue={getValue("text_box_number_3_page_4_script_5")} /> (show on screen). 
                <br/><br/>
                Once you find something in your home that will surprise me, bring it back to the screen.   I'll put my timer on for five minutes and I'll call out when our time is up.  If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time! 
            </p>
            {sideBar}
        </div>
    )
}

const OwnActivity = props => {

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
            <textarea className={props.commentMode} onClick={event => handleCommentClick(event)} onChange={event => handleChange(event)} id="text_box_number_1_page_4_script_5" defaultValue={getValue("text_box_number_1_page_4_script_5")} />
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