import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { loginSuccess, loginFailure } from '../../actions/login'
import login from '../../reducers/login'
import styles from './Login.less';

const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'LOGIN_REQUEST',
          payload: values,
          callback: () => {
            this.props.history.push('/')
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row style={{marginTop: 100}}>
        <Col span={6} offset={9}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

// Wrap the component to inject dispatch and state into it
export default withRouter(connect()(Login));
// export default connect(
//   state => ({
//     isAuth: login(state),
//   }),
//   { loginSuccess, loginFailure },
// )(Login)
