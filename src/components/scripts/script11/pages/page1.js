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
                 <h1 className="bold center">Peer mentoring session 11</h1>
                <div className="left">
                    <div className='container_for_medium_margin'>
                        
                    </div>
                    <div>
                        <h1 className="bold">Purpose</h1>
                        <ul>
                            <li>Check in with your mentee about coping strategies and help them solve challenges they may be having</li>
                            <li>Talk about getting support from other people</li>
                            <li>Pick a 3<sup>rd</sup> coping strategy</li>
                        </ul>
                    </div>
                    <br /><br />
                    <div>
                        <h1 className="bold">Materials</h1>
                        <ul>
                            <li>Peer mentoring script</li>
                            <li>Body scan worksheet link</li>
                            <li>Mood log</li>
                            <li>Coping strategy toolkit</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page1;

