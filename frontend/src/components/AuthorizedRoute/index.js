import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { getAuthority } from '../../utils/authority';


class  AuthorizedRoute extends React.Component {
    render () {
        const { component: Component, isAuth, ...rest } = this.props;
        console.log(Component)
        return (
          <Route {...rest} render={props=>{
            return getAuthority()
            ? <Component {...props} />
            : <Redirect to="/user/login" />
           }} />
        )
    }
}
const stateToProps = ({ loginState, Ownprops }) => ({
});

export default connect(stateToProps)(AuthorizedRoute);