import  Mongoose  from "mongoose";
import config from 'config';

const db = config.get('mondoURI');

const connectDatabase = async () =>
{
    try{
        await Mongoose.connect(db, 
            {useUnifiedTopology : true});
        console.log('Connected to MongoDB');   
    }catch(error)
    {
        console.error(error.message);

        process.exit(1);
    }
};

export default connectDatabase;

// const connectDatabase2 = () => {}