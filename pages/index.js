import React, { Component } from 'react'

import { Jumbotron } from '../components'
import { Layout } from '../containers'

class Index extends Component {
  state = {
    windowWidth: undefined
  }

  componentDidMount() {
    this.setState({ ...this.state, windowWidth: window.innerWidth })
  }

  render(){
      const { windowWidth } = this.state;

      return (
        <Layout title="Doctor Chemist - Home">
          <Jumbotron windowWidth={ windowWidth ? windowWidth : null } />
        </Layout>
      )
    }
}

export default Index