import React ,{useEffect} from 'react';
import { connect } from 'react-redux';
import LogsItem from './LogsItem';
import Preloader from '../Layouts/Preloader';
import PropTypes from 'prop-types';
import {getLogs} from "../Actions/logActions";

const Logs = ({ log: {logs,loading}, getLogs }) => {

    useEffect (() => {

        getLogs();
        
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    // if loading is true apply preloader
    if(loading || logs === null){
         
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

Logs.prototype = {

    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

// we add this because we wanted to add state in this component from the app level state
const mapStateToProps = state => ({

    log: state.log
})


// 2 values in connect function | first properties, 2nd actions to run
export default connect( mapStateToProps, {getLogs} )(Logs);