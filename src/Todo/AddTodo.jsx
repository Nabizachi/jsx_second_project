import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ onCreate }) => {
    const [value, setValue] = useState('')

    const submitHandler = (event) => {

        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
            console.log(event.target)
        }
    }

    const onChangeHandler = (event) => {
        console.log('===========================================')
        console.log(event)
        console.log('===========================================')
        setValue(event.target.value)
    }


    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
            <input style={{ marginRight: '1rem' }} value={value} onChange={onChangeHandler} />
            <button className='btn' type='submit'> Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo