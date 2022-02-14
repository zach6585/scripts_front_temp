import { connect } from "react-redux";
import { postComments } from '../../../../actions/comments';
import { useState } from "react";

//Need to make it so it only takes up the side of the screen and animates (using ReactCSSTransitionGroup)

const Sidebar = (props) => {

    const [commentContent, setCommentContent] = useState("");

    const handleCommentChange = (evt) => {
        setCommentContent(evt.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.userLoginAndCheck({username: username, password: password})

    }

    return(
        <div className="sidebar">
            <form>
                <input type="textarea" id={`comment_text_page_${props.page_number}_script_${props.script}_${props.id_tag}`} onChange={handleCommentChange} />
                <input type="submit" value="Submit Comment" onClick={event => handleSubmit(event)} />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        script: state.script
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postComments: (data) => dispatch(postComments(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)