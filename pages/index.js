import React, { Component } from 'react'

import { Jumbotron } from '../components'
import { Layout } from '../containers'

class Index extends Component {

  render(){
      return (
        <Layout title="Doctor Chemist - Home">
          <Jumbotron />
        </Layout>
      )
    }
}

export default Index