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
                <h1 className="bold center">Explain what will happen next</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        Next week we will talk more about coping strategies.<br/><br/>
                        This week pay attention if you have any symptoms and if you use any strategies to help with the symptoms. 
                    </p>
                </div>
            </div>
        )
    }
    
}

export default Page7;



