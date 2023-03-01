import { CustomerDetailsPage } from "../../components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Index() {
    const [data, setData] = useState(null)
    const router = useRouter();
    const {
        query: {customerId}, 
        isReady
    } = router;
    useEffect(() => {
        if(isReady) fetch(`/api/customer/${customerId}`).then(res => res.json()).then(data => setData(data.data));
    }, [isReady, customerId])
    if(data) return <CustomerDetailsPage data={data} />
}

export default Index;