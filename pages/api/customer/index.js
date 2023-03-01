import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch(err) {
        console.log(err);
        res.status(500).json({ status: 'failed', message: 'unable to connect to database!' });
        return;
    }
    if(req.method === "POST") {
        const data = await req.body.data;
        if(!data.name || !data.lastName || !data.email) {
            res.status(400).json({ status: 'failed', message: 'invalid data!' });
            return;
        }
        try {
            const customer =  await Customer.create(data);
            res.status(201).json({ status: 'success', message: 'data created', data: customer })
        } catch(err) {
            console.log(err);
            res.status(500).json({ status: 'failed', message: 'unable to store data into database!' })
            return;
        }
        
    }
}