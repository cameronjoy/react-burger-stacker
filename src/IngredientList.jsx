import React, { Component } from "react"

export default class Ingredient extends
Component {
    render() {
        return(
            <div>
                <h3>{this.props.name}</h3> 
                <button >Add</button>
                <p>{this.props.color}</p>
            </div>
        )
    }
}