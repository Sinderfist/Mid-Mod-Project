import React, { Component } from 'react'

class ChampCard extends Component {
    render() {
        return (
            <div className='container'>
                {this.props.champData.data[this.props.name] == undefined
                    ? <div className='catchErr'>
                        <h1>Sorry you did not type a listed champion name. Please check your spelling or use one of the listed champion names above</h1>
                    </div>
                    : <div>
                        <div className='imageBox'>
                            <img className='champImg' src={this.props.champData.data[this.props.name].image.full} />
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
                }

            </div>
        );
    }
}

export default ChampCard;