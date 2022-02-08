import { Component } from 'react';



class Page3 extends Component {
    
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Plan for the day</h1>
                <div className='left container_for_medium_margin'>
                    <p>
                        We have a plan for every peer mentoring session. This is our last session. <br/>
                        In our last session, our plan is to: 
                    </p>
                    <ol>
                        <li>Icebreaker/game</li>
                        <li>Review everything we did together in mentoring</li> 
                        <li>Talking about additional coping strategies</li>
                        <li>Make a plan to keep practicing</li>
                        <li>Time for questions</li>
                        <li>Say goodbye</li>
                    </ol>
                </div>
            </div>
        )
    }
}
export default Page3;


