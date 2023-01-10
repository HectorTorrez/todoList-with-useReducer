export const todoReducer = ( initialState = [], action) =>{
    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ action.playload, ...initialState ];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.playload );
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if( todo.id === action.playload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })   
        default:

            return initialState;
    }
}