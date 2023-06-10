import React from 'react'

const SearchBar = () => {

  return (

        <nav className='Navbar'>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" />
                        <label className="label-icon" htmlFor="search" ><i className="material-symbols-outlined srch-btn">search</i></label>
                        {/* <i className="material-symbols-outlined close-btn">close</i> */}
                    </div>
                </form>
            </div>
        </nav>

    )
}

export default SearchBar;