// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorageState = (itemName, initializer) => {
  if (!itemName) throw new Error('You must provide an itemName')
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(`${itemName}`) ?? initializer,
  )

  const setLocalStorageState = value => {
    window.localStorage.setItem(`${itemName}`, value)
    setState(value)
  }

  return [state, setLocalStorageState]
}

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = useLocalStorageState()

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  //   React.useEffect(() => {
  //     window.localStorage.setItem('name', name)
  //   }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="James" />
}

export default App
