import { connect } from 'react-redux';

const RedX = (props) => {

    const getValue = (current_id_tag) => {
        //Same as getObject but instead it returns the value
        let current_text_for_value = props.texts.find(text_item => {return text_item.id_tag === current_id_tag})
        return current_text_for_value ? current_text_for_value.value : ""
    }

    return (
        <div>
            <div>
                <p>
                    At the beginning of this worksheet, you were not sure how you were feeling.
                    <br/><br/>
                    Based on this worksheet, do you think you have a better idea of how you are feeling?
                    <br/><br/>
                    When your body feels <strong>{getValue("text_box_number_1_page_8_script_3")}</strong>
                    <br/><br/>
                    what kind of feeling is that related to? This is one example of how paying attention to your body can help you know how you are feeling. 
                    <br/><br/>
                    I will give you some body scan worksheets. You can use these to practice self-monitoring this week.
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        texts: state.texts.curatedTextsFromCurrentScript,
        mentee_id: state.mentees.current_mentee_id,
        script: state.texts.currentScript
    }
}

export default connect(mapStateToProps, null)(RedX);