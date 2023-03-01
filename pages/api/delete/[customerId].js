import connectDB from '../../../utils/connectDB';
import Customer from '../../../models/Customer';

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch(err) {
        console.log(err.message);
        res.status(500).json({status: 'failed', message: 'unable to connect to the database!'});
        return;
    }
    if(req.method === "DELETE") {
        const { customerId } = req.query;
        try {
            await Customer.deleteOne({_id: customerId});
            res.status(200).json({ status:'success', message: 'data deleted' });
        } catch(err) {
            console.log(err.message);
            res.status(500).json({ status: 'failed', message: 'error in deleting data!' })
        }
    }
}