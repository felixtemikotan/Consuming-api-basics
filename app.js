const https = require('https');
https.get('https://dhq.sh/ages.json', (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        let newData = JSON.parse(data).data.split(',').filter((val, index) => index % 2 !== 0).join("").match(/\d{2}/g)
            .map(x => Number(x)).filter(x => x > 25).reduce((total, value) => {
                return total + value
            }, 0)
        console.log(newData)
    })
})