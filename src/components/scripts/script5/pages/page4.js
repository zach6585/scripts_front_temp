import { Component } from 'react';

import { connect } from 'react-redux';

import { patchTexts, postTexts } from '../../../../actions/text';


class Page4 extends Component {
    state = {
        own: null, scav: null
    }

    handleClick = (event, choice) => {
        /* Determines the outcome of the button press. If it's 2 then we do a scavenger hunt and render that component */
        if (choice === 2){
            this.setState({own: <OwnActivity props={this.props} />, scav: null })
        }
        else if (choice === 1){
            this.setState({own: null, scav: <ScavengerHunt props={this.props} />})
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

    
    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.props.mentee_id, script: this.props.script})
        :
        this.props.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.props.mentee_id, script: this.props.script})

    }
    
    getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
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
    
    handleChange = (event) => {
        const object_outcome = this.getObject(event.target.id)
        object_outcome === "" ? 
        this.props.props.postTexts({value: event.target.value, id_tag: event.target.id, mentee_id: this.props.props.mentee_id, script: this.props.script})
        :
        this.props.props.patchTexts({value: event.target.value, id_tag: event.target.id, id: object_outcome.id, mentee_id: this.props.props.mentee_id, script: this.props.script})

    }
    
    getObject = (current_id_tag) => {
        //Returns the object that has the specific id_tag
        let current_text = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text ? current_text : ""
    }

    getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = this.props.props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }

    render() {
        return(
            <textarea onChange={event => this.handleChange(event)} id="text_box_number_1_page_4_script_5" defaultValue={this.getValue("text_box_number_1_page_4_script_5")} />
        )
    }
}


const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript
    }
}

const mapDispatchToProps = dispatch => {
    return{
        patchTexts: (text_data) => dispatch(patchTexts(text_data)),
        postTexts: (text_data) => dispatch(postTexts(text_data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page4);

