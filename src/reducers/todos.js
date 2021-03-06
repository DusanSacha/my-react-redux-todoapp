

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            debugger;
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]            
        case 'TOGGLE_TODO':
            return [];
        default:
            return state;    
    }
}

export default todos;