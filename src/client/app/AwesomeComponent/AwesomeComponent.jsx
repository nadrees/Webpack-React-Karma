import React from 'react';

class AwesomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {likesCount: 0};

        // bind functions to this
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        this.setState({likesCount: this.state.likesCount + 1});
    }

    render() {
        return(
            <div>
                Likes: <span className="likes-count">{this.state.likesCount}</span>
                <div><button id="like" onClick={this.onLike}>Like Me</button></div>
            </div>
        );
    }
}

export default AwesomeComponent;