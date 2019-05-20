import React, {Component} from 'react';
import ItemsData from './ItemsData';
import styled from 'styled-components';

const GridViewItem = styled.div`
    padding: 2rem;
    border: 1px solid lightgray;
`;
const GridViewStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
`;

/**
 * Displays the users data in a grid view.
 */
class GridView extends Component {
    render() {
        return (
            <ItemsData>
                {users => {
                    if (!users) return <p>Loading...</p>;
                    return (
                        <GridViewStyle>
                            {users.data.map(user => {
                                return (
                                    <GridViewItem key={user.id}>
                                        <img
                                            src={user.avatar}
                                            alt="user image"
                                        />
                                        <div>
                                            {user.first_name} {user.last_name}
                                        </div>
                                        <div>{user.email}</div>
                                    </GridViewItem>
                                );
                            })}
                        </GridViewStyle>
                    );
                }}
            </ItemsData>
        );
    }
}

export default GridView;
