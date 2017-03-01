import Actions from '../actions/index';

const initialRepositoryState = [];

export default function repositoryReducer(state, action) {
    state = state || initialRepositoryState;
    if (action.type === Actions.ADD_REPOSITORY) {
        return state.concat({
            name: action.repository,
            rating: null
        });
    } else if (action.type === Actions.RATE_REPOSITORY) {
        // Find the index of the matching repository
        const index = -1;
        for (let i = 0; i < state.length; i++) {
            const repository = state[i];

        }
    }
    return state;
};

