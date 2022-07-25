import React from 'react'

class Location extends React.Component {

    constructor(props){
        super(props);
        this.state = {lat: this.props.lat, long: this.props.long};
        console.log(this.state);
    }

    render() {
        return(
            <div className="loc-div">
                <h1 className="loc-header">ISS Location</h1>
                <h3 className="loc-lat">Lat: {this.props.lat}</h3>
                <h3 className="loc-long">Long: {this.props.long}</h3>
            </div>

        )
    }
}

export {Location};