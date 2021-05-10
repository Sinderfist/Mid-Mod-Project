import React, { Component } from 'react'

class ChampCard extends Component {
    render() {
        return (
            <div className='container'>

                <div className='imageBox'>
                    <img src= {this.props.champData.data[this.props.name].image.full} />
                    {console.log(this.props.champData.data[this.props.name].image.full)}
                </div>

                <div className='champCard'>
                    <h1>{this.props.champData.data[this.props.name].id}</h1>
                    <h2>{this.props.champData.data[this.props.name].title}</h2>
                    <text>{this.props.champData.data[this.props.name].blurb}</text>
                    <h3>{this.props.champData.data[this.props.name].tags[0]}</h3>
                    <h3>{this.props.champData.data[this.props.name].tags[1]}</h3>
                    <h3>{this.props.champData.data[this.props.name].tags[2]}</h3>
                </div>

            </div>
        );
    }
}

export default ChampCard;