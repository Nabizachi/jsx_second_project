import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '2px solid #ccccff',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }


    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input style={styles.input} type='checkbox' onChange={() => onChange(todo.id)} checked={todo.completed} />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className='btn' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li >
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem