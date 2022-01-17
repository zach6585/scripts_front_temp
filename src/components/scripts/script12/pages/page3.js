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
                    <p>Today's plan is:</p>
                    <ol>
                        <li>Icebreaker game</li>
                        <li>Work on your third coping strategy</li>
                        <li>Talking about your supports and asking for help</li>
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


