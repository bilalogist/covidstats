import React, { useEffect, useState } from 'react';
export const StatsContext = React.createContext();

const StatisticsCtx = (props) => {

    const [stats, setStats] = useState({});


    useEffect(async () => {
        const res = await fetch("http://localhost:3000");
        const json = await res.json();
        setStats(json.data)

    }, []);



    return <StatsContext.Provider value={stats}>{props.children}</StatsContext.Provider>

}


export default StatisticsCtx;