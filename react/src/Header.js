import React from 'react'
import { css } from 'glamor'

class Header extends React.Component {
  render() {
    return (
      <div {...css(styles.container)}>
        <img
          style={styles.amplifyLogo}
          src={require('./assets/amplifywhite.png')}
          alt="img"
        />
        <h2 {...css(styles.title)}>Patreon</h2>
      </div>
    )
  }
}

const styles = {
  amplifyLogo: {
    height: 30,
    marginLeft: 25
  },
  title: {
    fontWeight: 300,
    color: 'white',
    margin: 0,
    textAlign: 'left',
    marginLeft: 10
  },
  container: {
    height: '80px',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FF9900',
    display: 'flex'
  }
}

export default Header
