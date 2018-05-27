import React from 'react';
import styles from './UserLayout.less';
import Login from '../routes/User/Login';

export default class UserLayout extends React.Component {
    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}
