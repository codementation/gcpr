const fetch = require('node-fetch');

exports.handler = async function () {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GATSBY_GOOGLE_PLACE_ID}&fields=opening_hours&key=${process.env.GATSBY_GOOGLE_API_KEY}`, {
          headers: { Accept: 'application/json' },
        })
        if (!response.ok) {
          // NOT res.status >= 200 && res.status < 300
          return { statusCode: response.status, body: response.statusText }
        }
        const data = await response.json()
    
        return {
          statusCode: 200,
          body: JSON.stringify({ msg: data }),
        }
      } catch (error) {
        // output to netlify function log
        console.log(error)
        return {
          statusCode: 500,
          // Could be a custom message or object i.e. JSON.stringify(err)
          body: JSON.stringify({ msg: error.message }),
        }
      }
};

