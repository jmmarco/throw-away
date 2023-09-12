/* eslint-disable react/prop-types */
import React from 'react'
import './App.css'
import { useQuery } from 'react-query'

function fetchUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) => res.json())
}

function GithubUser({ username }) {
  const userQuery = useQuery([username], () => fetchUser(username))

  const { data, isLoading, isError } = userQuery

  if (isLoading) return <p>Loading...</p>

  if (isError) {
    return <div>{userQuery.error.message}</div>
  }

  if (!username) {
    return <input type="text" placeholder="defunkt" />
  }

  return <pre style={{ fontSize: '2 rem' }}>{JSON.stringify(data, null, 2)}</pre>
}

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h2>Welcome to new app!</h2>
        <GithubUser username="" />
      </main>
    </div>
  )
}

export default App
