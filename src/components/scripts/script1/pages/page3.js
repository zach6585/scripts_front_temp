import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { toggleCommentMode } from '../../../../actions/comment';

import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';

import Sidebar from '../../general pages/sidebar';

const Page3 = (props) => {
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

   return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1_1" onClick={event => handleCommentClick(event)}>Explaining about mentoring</h1>
                <div className='left'>
                <div className='container_for_medium_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_3">
                            Sometimes people have had mentors before. Some young adults have had therapeutic mentors. A therapeutic mentor is an adult who helps with your mental health. They are usually a person without a disability and older than you. <br/>
                            A peer mentor is another person with a young adult who is about your age. Peer mentors can do lots of different things. I am a peer mentor who gets to know you and helps with mental health.  I have also worked on my mental health and it's something I care a lot about. <br/><br/>
                            <span className='underline_text'>Ask your mentee some questions to learn more about them. Some example questions are:</span>
                        </p>
                    </div>
                    <div id="image_and_ul_div_page_3_script_1">
                        <ul>
                            <li className={`${props.commentMode}`} id="li_1" onClick={event => handleCommentClick(event)}>Have you ever had a mentor before?</li>
                                <ul>
                                    <li className={`open_circles_bullets ${props.commentMode}`} id="li_2" onClick={event => handleCommentClick(event)}>Tell me more about your mentor.</li>
                                </ul>
                            <li className={`${props.commentMode}`} id="li_3" onClick={event => handleCommentClick(event)}>Tell me about yourself.</li>
                            <li className={`${props.commentMode}`} id="li_4" onClick={event => handleCommentClick(event)}>What do you like to do for fun?</li>
                            <li className={`${props.commentMode}`} id="li_5" onClick={event => handleCommentClick(event)}>Why did you want to have a mentor?</li>
                            <li className={`${props.commentMode}`} id="li_6" onClick={event => handleCommentClick(event)}>Do you have any worries about having a mentor?</li>
                        </ul>
                        <div id="images_div_page_3_script_1">
                            <img className={`${props.commentMode} pause`} onClick={event => handleCommentClick(event)} id="pause" src={pause} alt="pause" />
                            <img className={`${props.commentMode} allEars`} onClick={event => handleCommentClick(event)} id="allEars" src={allEars} alt="All ears" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
