import { Component } from 'react';
import shareScreen from '../../pictures/sharescreen.png';
import stopShare from '../../pictures/stopshare.png';



class Page4 extends Component {
    
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
  }
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p>I think it would be fun to get to know more about each other. </p>

                    <div id="instruction_box_number_1_page_4_script_2" className="ital custom_svg demo_box container_for_small_margin">
                        <img src={shareScreen} alt="Share Screen" id="share_your_screen_page_4_script_2" />
                        <p className="top_line_in_instruction_box">
                            Click on the [link to be inserted] and<br/><br/>
                            share your screen.<br/><br/>
                            Take turns picking question to ask each other in the XXX game. 
                        </p>
                    </div>
                    <div className='container_for_small_margin'>
                        <p>
                            We will click on the boxes. A question will show up in the box and we will both answer it.<br/>
                            If you also have a question that isn't in game, but you really want to ask me, just let me know!<br/>
                        </p>
                    </div>
                    
                    <div id="instruction_box_number_2_page_4_script_2" className="ital custom_svg demo_box container_for_small_margin">
                        <p className="top_line_in_instruction_box">When you are done with the game, stop screen sharing</p>
                        <img src={stopShare} alt="Stop share" id="stop_sharing_screen_page_4_script_2" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Page4;
