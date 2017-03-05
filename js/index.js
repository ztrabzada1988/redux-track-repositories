import React from 'react';
import ReactDOM from 'react-dom';

import RepositoryList from './components/respository-list';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<RepositoryList />, document.getElementById('app'));
});
