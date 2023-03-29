import { useReducer } from 'react';


const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SHERAZADE':
            return {...state, SHERAZADE: true, RADU: false}
        case 'RADU':
            return {...state, SHERAZADE: false, RADU: true}
    }
}

const SidebarReducer = () => {

    const [state, dispatch] = useReducer(reducer, {
        SHERAZADE: false,
        RADU: false
    })

  return { state, dispatch };
}

export default SidebarReducer;