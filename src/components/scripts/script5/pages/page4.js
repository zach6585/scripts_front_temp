import { Component } from 'react';

import axios from 'axios';


class Page4 extends Component {
    state = {
        own: null, scav: null
    }
    handleScroll=()=>{
        window.scroll({top:0,behavior:'smooth'})
    
    }

    handleClick = (event, choice) => {
        /* Determines the outcome of the button press. If it's 2 then we do a scavenger hunt and render that component */
        if (choice === 2){
            this.setState({own: <OwnActivity/>, scav: null })
        }
        else if (choice === 1){
            this.setState({own: null, scav: <ScavengerHunt/>})
        }
    }

    render() {
        return (
            <div className="sheet">
                <h1 className="bold center">Icebreaker</h1>
                <div className="left container_for_medium_margin">
                    <p>Think of an activity you want to do for about 10 minutes with your mentee.</p>
                    <ul id="button_list">
                        <li className="li_button"><button onClick={event => this.handleClick(event, 2)}>press</button>I want to think of my own activity</li>
                        {this.state.own}
                        <li className="li_button"><button onClick={event => this.handleClick(event, 1)}>press</button>I want to do 1 more scavenger hunt</li>
                        {this.state.scav}
                    </ul>
                </div>
            </div>
        )
    }
}


class ScavengerHunt extends Component {

    state = {
        text: {}
    }
    componentDidMount() {
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "5"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "5"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "5" })
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
        return(
            <p>
                Today we will do one more scavenger hunt
                <br/><br/>
                This time, you will be searching for something to show me that I don't already know about you!
                <br/><br/>
                It should be a surprise to me.  It can be something you like to do that we haven't talked about yet.  It can be something you collect, something you got on a trip, or anything else I don't yet know about you!
                <br/><br/>
                For example, you don't know this about me, but I love <textarea onChange={event => this.handleChange(event)} id="text_box_number_2_page_4_script_5" defaultValue={this.getValue("text_box_number_2_page_4_script_5")} />.  So here is <textarea onChange={event => this.handleChange(event, "text_box_number_3_page_4_script_5")} id="text_box_number_3_page_4_script_5" defaultValue={this.getValue("text_box_number_3_page_4_script_5")} /> (show on screen). 
                <br/><br/>
                Once you find something in your home that will surprise me, bring it back to the screen.   I'll put my timer on for five minutes and I'll call out when our time is up.  If you do need a few more minutes after the timer goes off, just tell me out loud that you're still looking so I know you need some more time! 
            </p>
        )
    }
}

class OwnActivity extends Component {
    state = {
        text: {}
    }
    componentDidMount() {
        axios.get("http://localhost:3001/texts")
        .then(res => {
            const texts = res.data;
            for (const txt of texts){
                if (txt.script === "5"){
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
            axios.patch(`http://localhost:3001/texts/${this.state.text[event.target.id].id}`, {value: event.target.value, id_tag: event.target.id, script: "5"})
    }
        else {
            axios.post("http://localhost:3001/texts", {value: event.target.value, id_tag: event.target.id, script: "5" })
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
        return(
            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_4_script_5" defaultValue={this.getValue("text_box_number_1_page_4_script_5")} />
        )
    }
}


export default Page4;
