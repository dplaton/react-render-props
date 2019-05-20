import React, {Component} from 'react';
import ItemsData from './ItemsData';
import styled from 'styled-components';

const ListViewStyle = styled.ul`
    list-style: none;
    div.user-details {
        display: block;
    }
`;

const ListViewItem = styled.li`
    border: 1px solid lightgray;
    display: grid;
    grid-template-columns: 150px 1fr 1fr;
    padding: 2rem;
    margin-bottom: 30px;
    text-align: left;
`;

/**
 * Displays the user data in a list view
 */
class ListView extends Component {
    render() {
        return (
            <ItemsData>
                {users => {
                    if (!users) return <p>Loading...</p>;
                    return (
                        <ListViewStyle>
                            {users.data.map(user => (
                                <ListViewItem key={user.id}>
                                    <img src={user.avatar} alt="user image" />
                                    <div className="user-details">
                                        <div>
                                            {user.first_name} {user.last_name}
                                        </div>
                                        <div>{user.email}</div>
                                    </div>
                                </ListViewItem>
                            ))}
                        </ListViewStyle>
                    );
                }}
            </ItemsData>
        );
    }
}

export default ListView;
