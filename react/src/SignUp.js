import React from 'react'
import { css } from 'glamor'
import { withRouter } from 'react-router-dom'
import { Auth } from 'aws-amplify'

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    authCode: '',
    showConfirmation: false,
    address: '',
    birthdate: '',
    picture: '',
    gender: '',
    phone_number: ''
  }
  onChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  signUp = () => {
    const { username, password, email, address, birthdate, picture, gender, phone_number } = this.state
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        address,
        picture,
        birthdate,
        gender,
        phone_number
      }
    })
    .then(() => this.setState({ showConfirmation: true }))
    .catch(err => console.log('error signing up: ', err))
  }
  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
    .then(() => this.props.history.push('/'))
    .catch(err => console.log('error confirming signing up: ', err))
  }
  render() {
    const { showConfirmation } = this.state
    return (
      <div {...css(styles.container)}>
        {
          !showConfirmation && (
            <div {...css(styles.formContainer)}>
              <h2 {...css(styles.signUpHeader)}>Sign Up</h2>
              <input type="file" onChange={evt => this.onChange('picture', evt.target.value)}/>
              <input
                {...css(styles.input)}
                placeholder='Username'
                type='text'
                onChange={evt => this.onChange('username', evt.target.value)}
              />
              <input
                {...css(styles.input)}
                placeholder='Password'
                type='password'
                onChange={evt => this.onChange('password', evt.target.value)}
              />
              <input
                {...css(styles.input)}
                placeholder='Email'
                type='email'
                onChange={evt => this.onChange('email', evt.target.value)}
              />
              <input
                {...css(styles.input)}
                placeholder='Phone Number'
                onChange={evt => this.onChange('phone_number', evt.target.value)}
              />
               <input
                {...css(styles.input)}
                placeholder='Address'
                type='text'
                onChange={evt => this.onChange('address', evt.target.value)}
              />
              <input type='date' onChange={evt => this.onChange('birthdate', evt.target.value)} />
          <label>
            <input type="radio" id="male" name="gender" value="male" onChange={evt => this.onChange('gender', evt.target.value)}/>
            Male
          </label>
          <label>
            <input type="radio" id="female" name="gender" value="female" onChange={evt => this.onChange('gender', evt.target.value)}/>
            Female
          </label>
          <label>
            <input type="radio" id="others" name="gender" value="others" onChange={evt => this.onChange('gender', evt.target.value)}/>
            Others
          </label>
              <div {...css(styles.button)} onClick={this.signUp}>
                <p {...css(styles.buttonText)}>Sign Up</p>
              </div>
            </div>
          )
        }
        {
          showConfirmation && (
            <div {...css(styles.formContainer)}>
              <input
                onChange={evt => this.onChange('authCode', evt.target.value)}
                {...css(styles.input)}
                placeholder='Confirmation Code'
              />
              <div {...css(styles.button)} onClick={this.confirmSignUp}>
                <p {...css(styles.buttonText)}>Confirm Sign Up</p>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

const styles = {
  signUpHeader: {
    textAlign: 'left',
    margin: '0px 0px 20px'
  },
  button: {
    padding: '10px 60px',
    backgroundColor: '#ffb102',
    cursor: 'pointer',
    borderRadius: '30px',
    marginTop: 10,
    marginBottom: 10,
    ':hover': {
      backgroundColor: '#ffbb22'
    }
  },
  buttonText: {
    margin: 0,
    color: 'white'
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '15px',
  },
  formContainer: {
    padding: 20,
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
    borderRadius: 20
  },
  input: {
    height: 40,
    marginBottom: '10px',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #ffb102',
    fontSize: '16px',
    '::placeholder': {
      color: 'rgba(0, 0, 0, .3)'
    }
  },
}

export default withRouter(SignUp)