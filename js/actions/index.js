

// to redue errors
export const ADD_REPOSITORY = 'ADD_REPOSITORY';
export default function addRepository(repository) {
    return {
        type: ADD_REPOSITORY,
        repository: repository
    }
};

export const RATE_REPOSITORY = 'RATE_REPOSITORY';
export default function rateRepository(repository, rating) {
    return {
        type: RATE_REPOSITORY,
        repository: repository,
        rating: rating
    };
};

// adding api fetching
export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export default function fetchDescriptionSucces(repository, description) {
    return {
        type: FETCH_DESCRIPTION_SUCCESS,
        repository: repository,
        description: description
    };
};

export const FETCH_DESCRIPTION_ERROR = 'FETCH_DESCRIPTION_ERROR';
export default function fetchDescriptionError(repository, error) {
    return {
        type: FETCH_DESCRIPTION_ERROR,
        repository: repository,
        error: error
    };
};
