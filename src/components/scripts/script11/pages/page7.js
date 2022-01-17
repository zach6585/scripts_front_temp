import { Component } from 'react';



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
                <h1 className="bold center">Making a plan for practice</h1>
                <div className="left container_for_small_margin">
                   <p>When will you do this activity on your own this week?</p>
                   <div id="instruction_box_number_1_page_7_script_11" className="custom_svg demo_box">
                        <p className="top_line_in_instruction_box">
                            If they are not sure, ask:
                        </p>
                        <ul>
                            <li>What time of day would you like to try out the activity?</li>
                            <li>Is there a place you will try out the coping strategy?</li>
                            <li>Will you set a reminder to practice the coping strategy [help them to do set the reminder, if they need help]</li>
                        </ul>
                        <p>Provide encouragement:</p>
                        <ul>
                            <li>Good idea!</li>
                            <li>That sounds great!</li>
                        </ul>
                   </div>
                </div>   
            </div>
        )
    }


}
export default Page7;

