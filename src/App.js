import React, { Component } from 'react'
import Ninjas from './Ninjas'
import AddNewNinja from './AddNewNinja'

class App extends Component {
  state = {
    ninjas: []
  }

  onAddNinja = e => {
    e.preventDefault()
    const name = e.target.name.value
    const age = e.target.age.value
    const belt = e.target.belt.value

    if (name == false || age == false || belt == false) {
      alert('Plz fill in all the fields')
    } else {
      let presentNinjas = [...this.state.ninjas]
      presentNinjas.unshift({
        id: presentNinjas.length + 1,
        name: name,
        age: age,
        belt: belt
      })
      this.setState({
        ninjas: presentNinjas
      })
      e.target.name.value = ''
      e.target.age.value = null
      e.target.belt.value = ''
    }
  }
  deleteNinja = id => {
    const prevNinjas = [...this.state.ninjas]
    const newNinjas = prevNinjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: newNinjas
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>My first React App</h1>
        <AddNewNinja addNinja={this.onAddNinja}></AddNewNinja>
        <Ninjas ninjas={this.state.ninjas} del={this.deleteNinja}></Ninjas>
      </div>
    )
  }
}

export default App
