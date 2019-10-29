import React, { Component } from 'react'
import Select from './Select'

class Ninjas extends Component {
  state = {
    modifiedNinjas: []
  }
  componentDidMount() {
    this.setState({
      modifiedNinjas: this.props.ninjas
    })
  }
  ninjas = null
  componentDidUpdate(prevProps) {
    this.ninjas = this.props.ninjas
    if (prevProps.ninjas.length !== this.props.ninjas.length) {
      this.setState({
        modifiedNinjas: this.props.ninjas
      })
    }
  }
  handleAge = e => {
    const selected = e.target.value
    let modifiedNinjas = []
    if (selected === 'all') {
      modifiedNinjas = [...this.ninjas]
    } else if (selected === 'less18') {
      modifiedNinjas = this.ninjas.filter(ninjas => {
        return ninjas.age < 18
      })
    } else {
      modifiedNinjas = this.ninjas.filter(ninjas => {
        return ninjas.age > 18
      })
    }
    this.setState({
      modifiedNinjas: modifiedNinjas
    })
  }

  render() {
    return (
      <div>
        <Select onAgeChange={this.handleAge}></Select>
        {this.state.modifiedNinjas.length ? (
          this.state.modifiedNinjas.map(ninja => {
            return (
              <div key={ninja.id}>
                <button
                  style={{ float: 'right' }}
                  onClick={() => this.props.del(ninja.id)}>
                  X
                </button>
                <p>name : {ninja.name}</p>
                <p>age : {ninja.age}</p>
                <p>belt : {ninja.belt}</p>
                <hr></hr>
              </div>
            )
          })
        ) : (
          <p>Oops! No ninjas to show</p>
        )}
      </div>
    )
  }
}

export default Ninjas
