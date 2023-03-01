import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ status: 'failed', message: 'unable to connect to the database!' })
    }
    if(req.method === "GET") {
        const { customerId } = req.query;
        try {
            const customer = await Customer.findOne({ _id: customerId });
            res.status(200).json({ status: 'success', data: customer });
        } catch(err) {
            console.log(err.message);
            res.status(500).json({ status: 'failed', message: "unable to get specific data from database!" });
        }
    }
}