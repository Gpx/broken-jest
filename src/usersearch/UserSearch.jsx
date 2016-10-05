import React from 'react'

class UserSearch extends Component {
  render () {
    switch(this.props.type) {
      case 'a':
        return <div />
      default:
        return <p />
    }
  }
}

export default UserSearch
