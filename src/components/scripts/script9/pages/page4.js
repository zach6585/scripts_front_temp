import { Component } from 'react';



import axios from 'axios';


class Page4 extends Component {
    
    state = {
        text: {}
    }

    componentDidMount = () => {
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "9"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "9"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "9" })
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
                <h1 className="bold center">Icebreaker game/fun activity</h1>
                <div className="left container_for_medium_margin">
                    <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_4_script_9" defaultValue={this.getValue("text_box_number_1_page_4_script_9")} />
                </div>
            </div>
        )
    }
}



export default Page4;
