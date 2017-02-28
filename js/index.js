require('babel-polyfill');

var ADD_REPOSITORY = 'ADD_REPOSITORY';
export default function addRepository(repository) {
    return {
        type: ADD_REPOSITORY,
        repository: repository
    }
};

var RATE_REPOSITORY = 'RATE_REPOSITORY';
export default function rateRepository(repository, rating) {
    return {
        type: RATE_REPOSITORY,
        repository: repository,
        rating: rating
    };
};

exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
