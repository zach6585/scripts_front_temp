import { Component } from 'react';

class Page1 extends Component {

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
  }
    render() {
        return (
            <div className="sheet">
                 <h1 className="bold center">Peer mentoring session 8</h1>
                <div className="left container_for_small_margin">
                    <h1 className="bold">Purpose</h1>
                    <ul>
                        <li>Review everything your mentee has learned so far</li>
                        <li>Start making a coping strategy toolkit</li>
                        <li>Pick a 2<sup>nd</sup> coping strategy to work on</li>
                    </ul>
                    <br /><br />
                    <div>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li>Peer mentor script</li>
                            <li>Body scan worksheet link</li>
                            <li>Mood log</li>
                            <li>Coping strategy toolkit</li>
                            <li>Coping strategy card sort</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;
