const initialNotification = "Hello!"

const notificationReducer = (state = {message: ``, show: false}, action) => {
    switch (action.type) {
        case 'CREATE_NOTIFICATION':
            return { message: `You voted [${action.content.id}]: ${action.content.content}`, show:true}
        case 'REMOVE_NOTIFICATION':
            return ''
        default:
            return state
    }
}

export const setNotification = anecdote => {
    return {
        type: 'CREATE_NOTIFICATION',
        content: anecdote
    }
}


export default notificationReducer