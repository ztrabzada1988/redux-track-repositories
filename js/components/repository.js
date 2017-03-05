import Reach from 'react';
import StarRater from './star-rater';
import { connect } from 'react-redux';

export default class Repository extends react.Component {
    changeRating: function(rating) {
        this.props.dispatch(
            actions.rateRepository(this.props.repository.name, rating)
        );
    },

    render: function() {
        return (
            <div className="repository">
            {this.props.repository.name}
            &nbsp;
            <StarRater rating={this.props.repository.rating}
                       onChange={this.changeRating} />
            </div>
        );
    }
};

export const Conatiner = connect()(Repository);
