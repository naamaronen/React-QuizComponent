import { map } from 'ramda'
import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{

    constructor(props){
        super(props)
        this.state = {incorrectAnswer: false}
    }

    handleClick(buttonText){
        if (buttonText == this.props.quiz_question.answer){
            this.setState({incorrectAnswer: false})
            this.props.showNextQuestionHandler()
        } else {
            this.setState({incorrectAnswer: true})
        }
    }

    render(){
        return(
            <main>
                {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {map((val, index) => <QuizQuestionButton button_text={val} key={index} clickHandler={this.handleClick.bind(this)}/>, this.props.quiz_question.answer_options)}
                //quiz question button logic goes here
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion