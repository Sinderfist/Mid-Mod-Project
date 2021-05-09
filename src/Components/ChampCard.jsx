import React, { Component } from 'react'

class ChampCard extends Component {
    render() {
        return (
            <div className='container'>

                <div className='imageBox'>
                    {/* <img src={this.props.champData.data[this.props.name].image.full}></img> */}
                </div>

                <div className='nameBox'>
                    <h1>
                        {this.props.champData.data[this.props.name].id}
                    </h1>
                </div>

                <div className='titleBox'>
                    <h2>
                        {this.props.champData.data[this.props.name].title}
                    </h2>
                </div>

                <div className='blurbBox'>
                    <h2>
                        {this.props.champData.data[this.props.name].blurb}
                    </h2>
                </div>

                <div className='tagBox'>
                    <h3>{this.props.champData.data[this.props.name].tags[0]}</h3>
                    <h3>{this.props.champData.data[this.props.name].tags[1]}</h3>
                    <h3>{this.props.champData.data[this.props.name].tags[2]}</h3>
                </div>

            </div>
        );
    }
}

export default ChampCard;