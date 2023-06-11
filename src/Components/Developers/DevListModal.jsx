import React ,{useState, useEffect} from 'react'
import DevItems from './DevItems';

const DevListModal = () => {

    // for local state management
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect (() => {

        getDevs();
        
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    // get logs from the API
    const getDevs = async () => {

        // Set Loading
        setLoading(true);

        // getting logs from the API using fetch method | /logs is an endpoint
        const res = await fetch('/developer');
        // data is converted into json format
        const data = await res.json();

        setDevelopers(data);
        setLoading(false);
    }


  return (

    <div id="developer-list-modal" className="modal">
        <div className="modal-content">
            <h4>Developer List</h4>
            <ul className="collection">

                {!loading &&
                    // eslint-disable-next-line array-callback-return
                    developers.map( developer => (
                        
                        <DevItems developer={developer} key={developer.id}/>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default DevListModal;