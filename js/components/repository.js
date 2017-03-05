import Reach from 'react';
import StarRater from './star-rater';

export default class Repository extends react.Component {
    changeRating: function(rating) {
        // TODO: Change the rating
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
}
