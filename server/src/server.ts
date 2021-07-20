import connect from './config/db';
import app from './index';

const start = async ()=>{
    await connect();
    app.listen(2333, ()=>{
        console.log('listening to port 2333');
    });
};

start();