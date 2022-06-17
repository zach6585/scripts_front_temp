import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';
import { connect } from 'react-redux';


import { toggleCommentMode } from '../../../../actions/comment';

import { useState, useEffect } from 'react';

import Sidebar from '../../general pages/sidebar';


const Page4 = (props) => {

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

    const getLink = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_link_for_value = props.links.find(link_item => {return link_item.link_id === current_id_tag})
        return current_link_for_value ? current_link_for_value.link_address : ""
    }

    return (
        <div>
            <div className={`sheet ${blur}`}>
                <h1 className={`bold center ${props.commentMode}`} id="h1" onClick={event => handleCommentClick(event)}>Icebreaker</h1>
                <div className="left container_for_small_margin">
                    <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_1">I think it would be fun to get to know more about each other. </p>

                    <div id="instruction_box_number_1_page_4_script_2" className={`ital custom_svg demo_box container_for_small_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <img src={shareScreen} alt="Share Screen" id="share_your_screen_page_4_script_2" />
                        <p className="top_line_in_instruction_box">
                            Click on the link:<a href={getLink("video_link_page_4_script_2")} id="video_link_page_4_script_2" target="_blank" rel="nopener noreferrer">Link</a>and<br/><br/>
                            share your screen.<br/><br/>    
                            Click on the link and share your screen. <br/>
                            You will talk with your mentee about which picture or type of thing you like better and why.
                        </p>
                    </div>
                    <div className='container_for_small_margin'>
                        <p className={props.commentMode} onClick={event => handleCommentClick(event)} id="p_2">
                            We will click on the boxes. A question will show up in the box and we will both answer it.<br/>
                            If you also have a question that isn't in game, but you really want to ask me, just let me know!<br/>
                        </p>
                    </div>
                    
                    <div id="instruction_box_number_2_page_4_script_2" className={`ital custom_svg demo_box container_for_large_margin ${props.commentMode}`} onClick={event => handleCommentClick(event)}>
                        <p className="top_line_in_instruction_box">When you are done with the game, stop screen sharing</p>
                        <img src={stopShare} alt="Stop share" id="stop_sharing_screen_page_4_script_2" />
                    </div>
                </div>
            </div>
            {sideBar}
        </div>
        
    )
}

const mapStateToProps = state => {
    return{
        script: state.texts.currentScript,
        commentMode: state.comments.commentMode,
        sendingComment: state.comments.sendingComment,
        links: state.links.links
    }
}

const mapDispatchToProps = dispatch => {
    return{
        toggleCommentMode: () => dispatch(toggleCommentMode())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page4);