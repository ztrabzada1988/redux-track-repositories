import React from '.react';

export default class StarRater extends React.Component {
    render: function() {
        const start = [];
        for (let i=0; i<5; i++) {
            const className;
            if (i < this.props.rating || 0) {
                className = 'fa fa-star';
            }
            else {
                className = 'fa fa-star-o';
            }

            const star = (
                <i className={className} key={i}
                    onClick={this.props.onChange.bind(null, i + 1)}>
                </i>
            );
            stars.push(star);
        }

        return (
            <span className="star-rater">
                {stars}
            </span>
        );
    }
}
