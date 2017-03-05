import React from 'react';
import Repository from './repository';

export default class RepositoryList extends React.Component {
    addRepository: function() {
        const repositoryName = this.refs.repositoryName.value;
        // TODO: Add the repository to the state
    },

    render: function() {
        const repositories = this.props.repositories.map(function(repository) {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref="repositoryName" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
}
