import React, { Component } from "react";
// Libraries
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//config
import { ratingURL, skuSample } from '../../config';
// API
import { getRating } from '../../API/API';


class SimpleRating extends Component {
    constructor(props) {
        super(props);

        this.state = {
            averageRating: 0,
            numberOfRatings: 0
        };
    }

    //Starts here
    componentDidMount = async () => {
        const responseRating = await getRating(ratingURL + skuSample)
        console.log(responseRating)
        this.setState({ averageRating: responseRating.averageRating, numberOfRatings: responseRating.numberOfRatings });
    }


    render() {
        return (
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    {this.state.numberOfRatings === 1
                        ? <Typography component="legend">( {this.state.numberOfRatings} rating)</Typography>
                        : <Typography component="legend">( {this.state.numberOfRatings} ratings)</Typography>
                    }
                    <Rating
                        value={this.state.averageRating}
                        readOnly
                    />

                </Box>
            </div >
        );
    }
}

export default SimpleRating;
