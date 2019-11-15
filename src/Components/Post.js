import React from 'react';
export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props.props,
            bgColor: 'white',
            isVisible: 'block'
        };
    }
    selectPost() {
        this.setState({
            bgColor: 'red'
        });
    }
    hidePost(event) {
        console.log(event);
        this.setState({
            isVisible: 'none'
        });
    }
    render() {
        return (
            <section
                style={{
                    background: this.state.bgColor,
                    display: this.state.isVisible
                }}
                onClick={(this.selectPost.bind(this), this.hidePost.bind(this))}
            >
                <p>{this.state.props.id}</p>
                <p>{this.state.props.title}</p>
                <p>{this.state.props.body}</p>
                <p>{this.state.props.userId}</p>
            </section>
        );
    }
}
