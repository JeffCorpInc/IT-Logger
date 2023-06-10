import React ,{useState, useEffect} from 'react'
import LogsItem from './LogsItem';
import Preloader from '../Layouts/Preloader';

const Logs = () => {

    // for local state management
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect (() => {

        getLogs();
        
    }, [])
    

    // get logs from the API
    const getLogs = async () => {

        // Set Loading
        setLoading(true);

        // getting logs from the API using fetch method | /logs is an endpoint
        const res = await fetch('/logs');
        // data is converted into json format
        const data = await res.json();

        setLogs(data);
        setLoading(false);

    }

    // if loading is true apply preloader
    if(loading){
         
        return <Preloader/>
    }

  return (

    
    <ul className="collection with-header">

        {/* heading */}
        <li className="collection-header">
            <h4 className='center'>Developer Logs</h4>
        </li>

        {/* if loading is false and logs length is zero then turnery operator */}
        { !loading && logs.length === 0 ? (

            <p className='center'>There are no Developer Logs</p>

        ) : (

            // since its a map function we need to set id for particular user
            logs.map( log => <LogsItem id={log.id} log={log}/> )
        )}
   
    </ul>

  )
}

export default Logs;