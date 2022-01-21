import { Component } from 'react';

class Page1 extends Component {

    render() {
        return (
            <div className="sheet">
                 <h1 className="bold center">Peer mentoring session 2</h1>
                <div className="left container_for_medium_margin">
                    <div>
                        <h1 className="bold">Purpose</h1>
                        <ul>
                            <li>Help your mentee learn more about their mental health condition</li>
                            <li>Help your mentee learn more about self-monitoring</li>
                        </ul>
                    </div>
                    <div className='container_for_medium_margin'>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li className="square_bullets">Peer mentor session 2 script</li>
                            <li className="square_bullets">Mental health worksheet</li>
                            <li className="square_bullets">Symptom card sort</li>
                            <li className="square_bullets">Audio recorder</li>
                            <li className="square_bullets">Body scan worksheets</li>
                                <ul>
                                    <li className="open_circles_bullets">Blank worksheets for your mentee</li>
                                    <li className="open_circles_bullets">1 you filled out</li>
                                </ul>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;