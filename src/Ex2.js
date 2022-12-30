import React from 'react';

class FriendStatusWithCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count : 0, isOnline : null };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        console.log(`did it !!`);

    }

    componentDidUpdate() {
        console.log(`update it !!`);
        document.title = `!!!!You clicked ${this.state.count} times!!!!`;
    }

    componentWillUnmount() {
        console.log(`unmount it !!`);
        document.title = `@@@@You clicked ${this.state.count} times@@@@`;
    }

    handleStatusChange(status) {
        this.setState({
            isOnline: status.isOnline
        });
    }

    render() {
        return (
            <div>test</div>
        )
    }
}

export default FriendStatusWithCounter;
