

import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { toggleCommentMode } from '../../../../actions/comment';
import { goToSpecificPage } from '../../../../actions/page';

import Sidebar from '../../general pages/sidebar';



const Page8 = (props) => {

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
                props.goToSpecificPage(10);
            }
            else if (letter === 'x'){
                props.goToSpecificPage(9);
            }
        }
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleClick(event, "")}>Learning about peer mentoring</h1>
                <div className="left">
                    <div className='container_for_medium_margin'>
                        <p className={props.commentMode} onClick={event => handleClick(event, "")} id="p_1">
                        I am excited to be your peer mentor.<br/> 
                        We will meet every week. <br/>
                        As your peer mentor, I will help you find activities that help you have better mental health. I will also help you do the activities. <br/>
                        We will talk a lot more about how peer mentoring will go later. <br/>
                        First, I want to talk more with you about mental health, because we are focusing on having better mental health during peer mentoring.

                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page8);