import { connect } from "react-redux";
import { postComments } from '../../../actions/comment';
import { useState } from "react";

//Need to make it so it only takes up the side of the screen and animates (using ReactCSSTransitionGroup)

const Sidebar = (props) => {

    const [commentContent, setCommentContent] = useState("");

    const handleCommentChange = (evt) => {
        setCommentContent(evt.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.postComments({content: commentContent, id_tag: props.id_tag, script: props.script, page_number: props.page_number})
    }

    return(
        <div className="sidebar">
            <textarea className="sidebar_text_box" id={`comment_text_page_${props.page_number}_script_${props.script}_${props.id_tag}`} onChange={handleCommentChange} /><br/><br/>
            <button className="sidebar_submit_button" onClick={event => handleSubmit(event)} >Submit Comment</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        script: state.texts.currentScript,
        page_number: state.pages.pageNumber,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postComments: (data) => dispatch(postComments(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)