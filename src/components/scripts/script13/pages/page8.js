import { Component } from 'react';

import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";
import shareScreen from "../../pictures/sharescreen.png";

class Page8 extends Component {

    render() {
        return (
            <div className="sheet">
                 <h1 className="bold center">Brainstorming additional coping strategies</h1>
                <div className="left">
                    <div className='container_for_small_margin'>
                        <p>
                            During mentoring we talked about three main coping strategies. There are probably lots of activities that will help you manage your emotions.<br/><br/>
                            Let's look at the coping strategy card sort again. 
                        </p>
                    </div>

                    <div id="instruction_box_number_1_page_8_script_13" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box"> 
                            Share your screen and send your mentee the card sort link
                         </p>
                    </div>
                    <img src={shareScreen} alt="Share screen" id="shareScreen_number_1_page_8_script_13" />
                    <div className='container_for_medium_margin'>
                        <p>Which activities make you feel calm or happy? </p>
                        <img src={pause} alt="Pause" className="pause" />
                        <img src={allEars} alt="All ears" className="allEars" />
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>
                            That's great!<br/>
                            Coping strategies should take 15 minutes or less to do.<br/> 
                            Coping strategies should be activities you can do in lots of different places. Do you feel like any of those are activities that you could do in lots of different places?<br/><br/> 
                            Do you feel like you can do the activity in 15 minutes or less?
                        </p>
                        <img src={pause} alt="Pause" className="pause" />
                        <img src={allEars} alt="All ears" className="allEars" />
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>Let's add some more possible coping strategies to your toolkit!</p>
                    </div>

                    <div id="instruction_box_number_2_page_8_script_13" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box"> 
                            Send your mentee the toolkit link [insert]<br/>
                            You can share your screen or they can share theirs. <br/>
                            They can make a new page for the coping strategies they think they might try in the future.
                         </p>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default Page8;

