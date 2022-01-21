import { Component } from 'react';

import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";
import stopShare from "../../pictures/stopshare.png";

class Page6 extends Component {
    
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Problem solving</h1>
                <div className='left container_for_medium_margin'>
                    <p>
                        Remember our website? We can use that to solve any challenges you have with your coping strategy. 
                    </p>
                    <div id="instruction_box_number_1_page_6_script_13" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">
                            Send your mentee the link to the website [insert link].<br/>
                            Ask if they want you to share their screen or if they want to share their screen. Help your mentee figure out what to click on. <br/>
                            Then help them look at the solutions.
                        </p>
                    </div>
                    <div className='container_for_medium_margin'>
                        <p>What kind of challenge do you think it was? </p>
                    </div>

                    <div id="instruction_box_number_2_page_6_script_13" className="custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">
                            Help your mentee figure out what to click on. <br/>
                            Then help them look at the solutions. 
                        </p>
                    </div>

                    <div className='container_for_small_margin'>
                        <p>
                            Let's read the possible solutions listed.<br/>
                            Do you think any of them would work for you? 
                        </p>
                        <img src={pause} alt="Pause" className="pause" />
                        <img src={allEars} alt="All ears" className="allEars" />
                    </div>

                    <div id="instruction_box_number_3_page_6_script_13" className="custom_svg demo_box container_for_large_margin">
                        <p className="top_line_in_instruction_box">
                            Help your mentee brainstorm ideas about what solutions they could use. Also give ideas for doing the solution. For example, helping them make a reminder or talking to someone about what they need.<br/><br/>
                            Help them brainstorm ideas. Ask them if they feel like they could use the solutions.<br/> 
                            If they need help figuring out what to do, help them as much as you can. <br/>
                            Give them positive feedback for their ideas. You can say things like:
                        </p>
                        <ul>
                            <li>Good job!</li>
                            <li>That's a great idea!</li>
                        </ul>
                    </div>

                    <div className='container_for_extra_small_margin'>
                        <div id="instruction_box_number_4_page_6_script_13" className="custom_svg demo_box container_for_large_margin">
                            <p className="top_line_in_instruction_box">When you are finished, stop sharing your screen or ask your mentee to stop sharing their screen.</p>
                        </div>
                        <img src={stopShare} alt="Stop sharing" id="stop_sharing_screen_page_6_script_13" />
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Page6;