import React from 'react';
import M from 'materialize-css';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../Actions/logActions';


const LogsItem = ({log,deleteLog,setCurrent}) => {

    // Delete Function
    const onDelete = () => {

        deleteLog(log.id);
        M.toast({ html: "Log Removed" });
    }

  return (

        <li className='collection-item'>

            <div>

                {/* materialize class on template literal | Log message */}
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
                    onClick={() => setCurrent(log)}
                >
                    {log.message}
                </a>

            <br />

                {/* Delete Icon */}
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className='material-symbols-outlined del-btn'> Delete</i>
                </a>

                {/* Log history */}
                <span>
                    <ul className='log-history'>
                        <li>ID: {log.id}</li>
                        <li>Last Updated by: {log.developer}</li>
                        <li>Date: <Moment format='Do MMMM YYYY' >{log.date}</Moment></li>
                        <li>Time: <Moment format='h:mm:ss a' ></Moment></li>
                    </ul>
                </span>

            </div>
        </li>
    )
}

LogsItem.propTypes = {

    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, {deleteLog, setCurrent})(LogsItem); 