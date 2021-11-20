import React, { Component } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {};

  handleChange = () => {};
  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="red" textAlign="center">
            <Icon name="puzzle piece" color="red" />
            Register for Horror House Chat
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                field
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                type="text"
              />
              <Form.Input
                fluid
                field
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                type="email"
              />
              <Form.Input
                fluid
                field
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                type="password"
              />
              <Form.Input
                fluid
                field
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                type="password"
              />
              <Button color="red" fluid size="large">
                Register Now
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
