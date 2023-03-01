import { CustomerEditPage } from "../../components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Index() {
    const [data, setData] = useState(null);
    const router = useRouter();
    const {
        query: { customerId }, 
        isReady
    } = router;
    try {
        useEffect(() => {
            if(isReady) fetch(`/api/customer/${customerId}`).then(res => res.json()).then(data => setData(data.data));
        }, [isReady, customerId]);
        if(data) return <CustomerEditPage data={data} id={customerId} />
        return <h1>Loading...</h1>
    } catch(err) {
        console.log(err.message);
    }
}

export default Index;