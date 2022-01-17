import { Component } from 'react';

class Page13 extends Component {

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
                <div className="left">
                    <div className='container_for_medium_margin'>
                        <p>
                            Today we talked about anxiety and your second coping strategy. We also worked on your toolkit. 
                        </p>
                    </div>
                    
                    <div className='container_for_medium_margin'>
                        <p>
                            This week, you will practice using your new strategy, [the one they picked].<br/>
                            You said you would practice your strategy this week [the time/place they said they would practice]
                        </p>
                    </div>

                    <div className='container_for_medium_margin'>
                        <p>You can use your toolkit to help you remember your coping strategies and solve challenges.</p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Page13;
