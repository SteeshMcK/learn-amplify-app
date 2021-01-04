import React, { useState } from 'react'

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
                    <input type='text' name='name' placeholder='name' value={userName.name} required onChange={handleInputChange}/>
                </label>
                <br />
                <input type="submit" value="submit name" />
            </form>
        </div> 
    )
}

export default Question
