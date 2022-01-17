import { Component } from 'react';

import shareScreen from "../pictures/sharescreen.png";
import stopShare from "../pictures/stopshare.png";




class SharingAboutMentoring extends Component {

  
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Sharing about mentoring</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        You have the option of sharing information about what we did in mentoring with someone who supports you. <br/><br/>
                        Do you think you want to do that this week? It's your choice if you would like to share about what you're learning, or not, with someone who you really trust like a family member, teacher, or counselor. If you do want to share, then I'll have you fill out a short worksheet!  If you don't want to share, that's okay too! 
                    </p>

                    <div id="instruction_box_number_1_sharing_about_mentoring" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box">If they want to share, click the link for the worksheet</p>
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <div id="instruction_box_number_2_sharing_about_mentoring" className="custom_svg demo_box container_for_large_margin" >
                            <p className="top_line_in_instruction_box">Share your screen</p>
                        </div>
                        <img src={shareScreen} alt="Share your screen" id="share_screen_sharing_about_mentoring" />
                    </div>
                
                    <div className='container_for_extra_large_margin'>
                        <div id="instruction_box_number_3_sharing_about_mentoring" className="custom_svg demo_box" >
                            <p className="top_line_in_instruction_box">When you are finished, stop sharing your screen</p>
                        </div>
                        <img src={stopShare} alt="Stop sharing" id="stop_share_sharing_about_mentoring" />
                    </div>
                </div>
            </div>
        )
    }
}
export default SharingAboutMentoring;
