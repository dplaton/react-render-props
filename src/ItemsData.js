import React, {Component} from 'react';
/**
 * Fetches some mock data and calls the "children" function
 */
export default class ItemsData extends Component {
    constructor() {
        super();
        this.state = {users: undefined};
    }

    componentDidMount() {
        this.fetchSomeData();
    }

    async fetchSomeData() {
        const data = await fetch('https://reqres.in/api/users').then(res =>
            res.json()
        );
        this.setState({users: data});
    }

    render() {
        return this.props.children(this.state.users);
    }
}
