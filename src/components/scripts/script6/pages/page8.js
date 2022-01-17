import { Component } from 'react';



import axios from 'axios';


class Page8 extends Component {
    
    state = {
        text: {}
    }
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
   

    componentDidMount = () => {
        this.handleScroll();
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "6"){
                    this.setState({
                        text: {...this.state.text, [txt.id_tag]: txt}
                    })
                }
            }      
        })
    }

    handleChange = (event) => {
        this.setState({text: {...this.state.text, [event.target.id]: {value: event.target.value, id_tag: event.target.id}}})
        if (event.target.id in this.state.text){
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "6"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "6" })
        }
    }
    

    getValue = (id) => {
        for (const i in this.state.text){
            if (this.state.text[i].id_tag === id){
                return this.state.text[i].value;
            }
        }
        return ""
    }
        

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Review</h1>
                <div className="left container_for_medium_margin">
                    <p>
                        We did a lot today! <br/>
                        We practiced a coping strategy and we thought about things that might get in the way. <br/><br/>
                        This week, you will practice using your strategy, [the one they practiced].<br/><br/>  
                        You said you would practice your strategy this week [the time/place they said they would practice]
                    </p>
                </div>
            </div>
        )
    }
}



export default Page8;
