import { Component } from 'react';

class Page9 extends Component {

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        this.handleScroll()
  }
    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Review</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        We did a lot today! <br/>
                        We reviewed a lot of ideas about mental health, started your strategy toolkit, and picked a 2<sup>nd</sup> coping strategy. <br/><br/>
                        This week, you will practice using your new strategy, [the one they picked].<br/>
                        You said you would practice your strategy this week [the time/place they said they would practice]
                    </p>
                </div>
            </div>
        )
    }
    
}

export default Page9;
