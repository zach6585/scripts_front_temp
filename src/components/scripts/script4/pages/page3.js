import { Component } from 'react';



class Page3 extends Component {
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
  }
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Plan for the day</h1>
                <div className='left container_for_medium_margin'>
                    <p>
                        For every peer mentoring session we will have a plan for today. I can read it out loud to you or would you prefer to read it to yourself?  <br/>
                        Today's plan is: 
                    </p>
                    <ol>
                        <li>Icebreaker game</li>
                        <li>Learning about coping strategies</li>
                        <li>Picking a coping strategy</li>
                        <li>Time for questions</li>
                        <li>Reminders about mentoring</li>
                        <li>Make a plan for practice</li>
                    </ol>
                </div>
            </div>
        )
    }
}
export default Page3;