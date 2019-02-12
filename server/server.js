const express = require('express');

const app = express();


app.get('/api/channels', (req, res) => {
    const channels = [
        {
            id: 1,
            key: 'PTV Sports',
            channel_name: 'PTV Sports',
            channel_thumbnail: 'https://www.dodear.info/wp-content/uploads/2018/02/ptv.jpg',
            channel_URI: 'Some URL'
        },
        {
            id: 2,
            key: 'GEO sports',
            channel_name: 'GEO Sports',
            channel_thumbnail: 'http://blazeminds.com/blog/wp-content/uploads/2015/05/Geo-Super-Live-300x166.jpg',
            channel_URI: 'Some URL'
        },
        {
            id: 3,
            key: 'TEN Sports',
            channel_name: 'TEN Sports',
            channel_thumbnail: 'http://blazeminds.com/blog/wp-content/uploads/2015/05/Geo-Super-Live-300x166.jpg',
            channel_URI: 'Some URL'
        },
    ];

    res.send(channels);
});

app.listen(8000, () => {
    console.log(`Server is up on port 8000`);
});