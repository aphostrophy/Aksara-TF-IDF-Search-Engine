import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function ResultPage(props){

    const [searchQuery, setSearchQuery] = useState(props.location.state.searchQuery);
    const [ queryResult , setQueryResult ] = useState(null);

    useEffect(()=>{
        ( async ()=>{
            const endpoint = `${process.env.REACT_APP_URL}/search`;
            try{
                const {data : res} = await Axios.get(endpoint,{
                    params: {
                        query: searchQuery
                    }
                })
                console.log(res);
                setQueryResult(res);
            } catch(err){
                console.log(err);
            }
        })()
    },[searchQuery])
    return(
        <>
            <div>TEST</div>
        </>
    )
}