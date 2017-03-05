import React from 'react';
import Repository from './repository';
import { connect } from 'react-redux';

export default class RepositoryList extends React.Component {
    addRepository: function() {
        const repositoryName = this.refs.repositoryName.value;
        this.props.dispatch(actions.addRepository(repositoryName));
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
    };
};

export default function mapStateToProps(state, props) {
    return {
        repositories: state
    };
};

export const Conatiner = connect(mapStateToProps)(RepositoryList);
