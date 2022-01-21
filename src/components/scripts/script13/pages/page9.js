import { Component } from 'react';

import allEars from "../../pictures/allears.png";
import pause from "../../pictures/pause.png";

class Page9 extends Component {

   render() {
        return (
            <div className="sheet">
                 <h1 className="bold center">Where to do coping strategies</h1>
                <div className="left">
                    <div className='container_for_small_margin'>
                        <p>
                            While we are looking at the toolkit, let's think more about where you can use your different coping strategies. <br/><br/>
                            What are three of the places that you might want to use your coping strategies the most? 
                        </p>
                        <img src={pause} alt="Pause" className="pause" />
                        <img src={allEars} alt="All ears" className="allEars" />
                        <p>
                            We will make a slide for each place. <br/>
                            You can list the coping strategies that you can use in each place.<br/>
                            Which place do you want to start with?
                        </p>
                    </div>

                    <div id="instruction_box_number_1_page_9_script_13" className="custom_svg demo_box container_for_medium_margin">
                        <p className="top_line_in_instruction_box"> 
                            Help your mentee make three new slides.<br/>
                            They can write the name of the place and/or use pictures.<br/>
                            You can help them think of the coping strategies that will work best in each place.<br/>
                            To help them decide, you can ask them questions, such as:
                         </p>
                         <ul>
                            <li>Do any rules keep you from using this strategy here?</li>
                            <li>Will you have everything you need for your coping strategy here?</li>
                            <li>Is this a strategy you like to do privately? Will you have privacy here? If not, what will help you feel as comfortable as possible when using your strategy?</li>
                            <li>Is there anyone you'd need to talk to in this place about using your coping strategy? Or would you just be able to use your coping strategy when you want?</li>
                         </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

export default Page9;


