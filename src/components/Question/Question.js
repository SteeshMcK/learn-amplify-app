import React, { useState } from 'react'
import './Question.css'

const Question  = () => {
    const [userName, setUserName] = useState({
        name: ''
    })
    const handleInputChange = e => {
        const {name, value} = e.target
        setUserName({...userName, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userName.name)
    }
    return (
        <div className='question'>
            <form id='questionForm' onSubmit={handleSubmit}>
                <label>What is your name?
                    <br />
                    <input type='text' id='nameField' name='name' placeholder='name' value={userName.name} required onChange={handleInputChange}/>
                </label>
                <br />
                <input type="submit" id='submitBtn' value="SUBMIT NAME" />
            </form>
        </div> 
    )
}

export default Question
