import axios from "axios"

// Make a request for a user with a given ID
export const getRating = (url) => {
    return axios.get(url)
        .then(function (response) {
            // handle success
            return response.data
        })
        .catch(function (error) {
            // handle error
            return {
                averageRating: 0,
                numberOfRatings: 0
            }
        })
}
