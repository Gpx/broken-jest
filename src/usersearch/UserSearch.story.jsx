import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import UserSearch from './UserSearch'
import { filter, test, prop, compose } from 'ramda'
import Promise from 'bluebird'

const policies = {1: {name: 'somePolicy'}, 2: {name: 'someOtherPolicy'}}
const users = [
  { id: 1, firstName: 'Peter', lastName: 'Smith', fullName: 'Peter Smith', policy: '1', email: 'peter@smith.com', office: 'officeOne' },
  { id: 2, firstName: 'Peter', lastName: 'Jackson', fullName: 'Peter Jackson', policy: '2', email: 'peter@jackson.com', office: 'officeTwo' },
  { id: 3, firstName: 'Frank', lastName: 'White', fullName: 'Frank White', policy: '1', email: 'frank@white.com', office: 'officeThree' },
  { id: 4, firstName: 'Annie', lastName: 'Rose', fullName: 'Annie Rose', policy: '2', email: 'annie@rose.com', office: 'officeOne' },
]
const queryUsers = (query) => {
  const regex = new RegExp(query, 'i')
  const matchFullName = compose(test(regex), prop('fullName'))
  const results = filter(matchFullName, users)
  return Promise.resolve(results)
}

storiesOf('UserSearch ', module)
  .add('basic user search', () => {
    return (
      <UserSearch
        policies={policies}
        queryUsers={queryUsers}
        onUserSelect={action('onUserSelect()')}
        onQueryChange={action('onQueryChange()')}
      />
    )
  })
  .add('with not found action', () => {
    return (
      <UserSearch
        policies={policies}
        queryUsers={queryUsers}
        onUserSelect={action('onUserSelect()')}
        onQueryChange={action('onQueryChange()')}
        onNotFoundAction={action('onNotFoundAction()')}
      />
    )
  })
  .add('with locked interaction', () => {
    return (
      <UserSearch
        policies={policies}
        queryUsers={queryUsers}
        onUserSelect={action('onUserSelect()')}
        onQueryChange={action('onQueryChange()')}
        onLockedAction={action('onLockedAction()')}
        locked
      />
    )
  })
  .add('with traveler counter (N=0)', () => {
    return (
      <UserSearch
        policies={policies}
        queryUsers={queryUsers}
        onUserSelect={action('onUserSelect()')}
        onQueryChange={action('onQueryChange()')}
        onNotFoundAction={action('onNotFoundAction')}
        travelersCount={0}
      />
    )
  })
  .add('with traveler counter (N=1)', () => {
    return (
      <UserSearch
        policies={policies}
        queryUsers={queryUsers}
        onUserSelect={action('onUserSelect()')}
        onQueryChange={action('onQueryChange()')}
        onNotFoundAction={action('onNotFoundAction')}
        travelersCount={1}
      />
    )
  })
  .add('with traveler counter (N>1)', () => {
    return (
      <UserSearch
        policies={policies}
        queryUsers={queryUsers}
        onUserSelect={action('onUserSelect()')}
        onQueryChange={action('onQueryChange()')}
        onNotFoundAction={action('onNotFoundAction')}
        travelersCount={2}
      />
    )
  })
