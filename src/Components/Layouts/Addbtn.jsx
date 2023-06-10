import React from 'react'

const Addbtn = () => {

  return (

    <div className='fixed-action-btn'>

      {/* button to add logs */}
      <a href="#add-log-modal" className="btn-floating btn-large modal-trigger">
        <i className="large material-symbols-outlined add-btn" >add</i>
      </a>
      
      <ul>
        <li>
          {/* Developer List btn */}
          <a href="#developer-list-modal" className="btn-floating modal-trigger">
            <i className="material-symbols-outlined add-lst-dev">person</i>
          </a>
        </li>

        <li>
          {/* Developer Add btn */}
          <a href="#developer-modal" className="btn-floating modal-trigger">
            <i className="material-symbols-outlined add-dev">person_add</i>
          </a>
        </li>
        
      </ul>


    </div>
  )
}

export default Addbtn;