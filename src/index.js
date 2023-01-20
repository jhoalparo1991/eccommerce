const debug = require('debug')('index');
const app = require('./app');

(async()=>{
    app.listen(app.get('PORT'),()=>{
        debug(`Server running in http://localhost:${app.get('PORT')}`)
    })
})()