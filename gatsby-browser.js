require('typeface-roboto');
require('./src/styles/global.css');
const fetch = require('node-fetch');

export const onRouteUpdate = ({ location }) => {
    if (
        (document.readyState === 'interactive' ||
            document.readyState === 'complete') &&
        location.pathname === '/'
    ) {
        console.log('ReactDOM.render has executed');
        const src = `/.netlify/functions/google-places`;
        fetch(src, {
            headers: { accept: 'Accept: application/json' },
        })
            .then((response) => response.text())
            .then((data) => {
                const json = JSON.parse(data);
                const open_now = json.msg.result.opening_hours.open_now;
                if (open_now === true) {
                    document.querySelector('#open_now').innerHTML =
                        '<span style="color:#0cb02b">OPEN</span>';
                } else {
                    document.querySelector('#open_now').innerHTML =
                        '<span style="color:red">CLOSED</span>';
                }
            })
            .catch((res) => {
                console.log(res);
            });
    }
};
