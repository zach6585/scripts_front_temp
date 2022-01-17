import { Component } from 'react';
import axios from 'axios';


class Page2 extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            text: props.allTexts
        }
    }

    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }
    componentDidMount() {
        axios.get("http://localhost:3001/pages")
        .then(res => {
            const sheets = res.data;
            let flag = false;
            for (const sht of sheets){
                if (sht.script === "dummy" && sht.page_number === "2"){
                    flag = true;
                }
            }
            if (flag === false){
                console.log('here');
                const cntnt = document.getElementById("bigboy");
                axios.post("http://localhost:3001/pages", {
                    content: cntnt.innerHTML, 
                    script: "dummy", page_number: "2" })
            }
              
    })
}

handleTextChange = (event) => {
    //When the texts change, this is where it goes
    this.props.postOrPatchTexts({text: this.state.texts, current_text: event.target})
}
getValue = (id) => {
    //Gets the value of the textbox.
    for (const i in this.state.texts){
        if (this.state.texts[i].id_tag === id){
            return this.state.texts[i].value;
        }
    }
    return ""
}

    // handleChange = (event) => {
    //     this.setState({text: {...this.state.text, [event.target.id]: {value: event.target.value, id_tag: event.target.id}}})
    //     if (event.target.id in this.state.text){
    //         axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "dummy"})
    // }
    //     else {
    //         axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "dummy" })
    //     }
    // }

    // getValue = (id) => {
    //     for (const i in this.state.text){
    //         if (this.state.text[i].id_tag === id){
    //             return this.state.text[i].value;
    //         }
    //     }
    //     return ""
    // }

    render() {
        return (
            <div id="bigboy">
            <div className="sheet">
                <h1 className="bold center">Learning about mental health conditions</h1>
                <div className="left container_for_small_margin">
                    <p>
                        Last week, we talked about the big topic of mental health.<br/>
                        Mental health is all about how we think, feel, and act.  Mental health is about how we handle stress.<br/><br />
                        A mental health condition is when a person is having a hard time with how they think, feel, and act.<br/><br/>
                        You mentioned that mental health is <textarea onChange={event => this.handleTextChange(event)} id="text_box_number_1_page_2_script_dummy" defaultValue={this.getValue("text_box_number_1_page_2_script_dummy")} />
                    </p>
                </div>
            </div>
            </div>
        )
    }
}
export default Page2;
