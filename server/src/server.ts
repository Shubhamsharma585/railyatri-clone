import connect from './config/db';
import app from './index';

const start = async ()=>{
    await connect();
    app.listen(5000, ()=>{
        console.log('listening to port 5000');
    });
};

start();