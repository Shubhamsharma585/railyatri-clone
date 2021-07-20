import mongoose from 'mongoose';
require('dotenv').config();

const URI: string = process.env.MONGO_URI || '';

const options: mongoose.ConnectOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

const connect = (): Promise<typeof mongoose> => {
    return mongoose.connect(URI, options)
};

export default connect;