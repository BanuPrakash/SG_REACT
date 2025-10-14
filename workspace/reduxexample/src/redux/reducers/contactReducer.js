export default function contactReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            // take a copy of state and push payload to array
            return [...state, action.payload];
        case 'REMOVE_CONTACT':
            return state.filter(contact => contact.email !== action.payload);
        case 'CLEAR_CONTACTS':
            return [];
        default: // @@INIT
            return state;
    }
}

