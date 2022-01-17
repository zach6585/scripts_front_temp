import { Component } from 'react';

import stopShare from '../../pictures/stopshare.png';
import pause from '../../pictures/pause.png';
import allEars from '../../pictures/allears.png';

class Page7 extends Component {


    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
    }

 
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Working on challenges—mentee had a challenge</h1>
                <div className='left container_for_medium_margin'>
                    <p>
                        Today, we will think about your challenges. <br/>
                        What did you have a challenge with? 
                    </p>
                    <img src={pause} className="pause" alt="Pause" />
                    <img src={allEars} className='allEars' alt="Listen" />
                    
                    <div className='container_for_medium_margin'>
                        <p>
                            Thanks so much for sharing. That does sound like a challenge. Other people have that kind of challenge too!
                        </p>
                    </div>

                    <div id="instruction_box_number_1_page_7_script_7" className='custom_svg demo_box container_for_extra_small_margin'>
                        <p className='top_line_in_instruction_box'>
                            If you ever have had that challenge, tell your mentee about your experience having that challenge.
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>
                            Let's look at this website. What kind of challenge do you think it was? 
                        </p>
                    </div>

                    <div id="instruction_box_number_2_page_7_script_7" className='custom_svg demo_box container_for_extra_small_margin'>
                        <p className='top_line_in_instruction_box'>
                            Help your mentee figure out what to click on. <br/>
                            Then help them look at the solutions. 
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>
                            Let's read the possible solutions listed.<br/>
                            Do you think any of them would work for you? 
                        </p>
                        <img src={pause} className="pause" alt="Pause" />
                        <img src={allEars} className='allEars' alt="Listen" />
                    </div>

                    
                    <div id="instruction_box_number_3_page_7_script_7" className='custom_svg demo_box container_for_large_margin'>
                        <p className='top_line_in_instruction_box'>
                            Help your mentee brainstorm ideas about what solutions they could use. Also give ideas for doing the solution. For example, helping them make a reminder or talking to someone about what they need.<br/><br/>
                            Help them brainstorm ideas. Ask them if they feel like they could use the solutions. <br/><br/>
                            If they need help figuring out what to do, help them as much as you can. <br/><br/>
                            Give them positive feedback for their ideas. You can say things like:
                        </p>
                        <ul>
                            <li>Good job!</li>
                            <li>That's a great idea!</li>
                        </ul>
                        
                    </div>
                    <br/><br/><br/><br/>
                    <div id='image_and_instruction_box_div_page_7_sheet_7' className='container_for_large_margin'>
                        <div id="instruction_box_number_4_page_7_script_7" className='custom_svg demo_box'>
                            <p className='top_line_in_instruction_box'>
                                When you are finished, stop sharing your screen
                            </p>
                        </div>
                        <img src={stopShare} alt="Stop sharing your screen" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Page7;