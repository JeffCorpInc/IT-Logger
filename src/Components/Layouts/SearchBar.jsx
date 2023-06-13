import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { searchLog } from '../Actions/logActions';
import PropTypes from 'prop-types';


const SearchBar = ({searchLog}) => {

    const text = useRef('');

    const onChange = (e) => {
        searchLog(text.current.value);
    }

  return (

        <nav className='Navbar'>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" placeholder='Search Developer Logs'
                        
                            ref={text}
                            onChange={onChange}
                        />
                        <label className="label-icon" htmlFor="search" ><i className="material-symbols-outlined srch-btn">search</i></label>
                        {/* <i className="material-symbols-outlined close-btn">close</i> */}
                    </div>
                </form>
            </div>
        </nav>

    )
}

SearchBar.prototype = {
    searchLog: PropTypes.func.isRequired,
}

export default connect(null, {searchLog})(SearchBar);