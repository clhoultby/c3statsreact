import { useEffect, useState } from "react";

export default function Home() {
    const [sub, setSub] = useState(6000);

    useEffect(() => {
        debugger;
        const int = setInterval(()=> {
            setSub(sub => sub +1);
        }, 1000);

        return () =>  clearInterval(int);
    });

    return <h1>Hellow World: {sub}</h1>;
}
