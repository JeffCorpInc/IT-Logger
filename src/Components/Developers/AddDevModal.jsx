import React, { useState } from 'react'
import M from 'materialize-css';

const AddDevModal = () => {

  const [firstName , setFirstname] = useState('');
  const [lastName , setLastname] = useState('');

  // funtions || Rasing Alert
  const onSubmit =() => {

    if(firstName === '' || lastName === '') {

      M.toast({ html: 'Please Provide Values'})
    } else{
  
      console.log(firstName,lastName);
      setFirstname('');
      setLastname('');
    }
  }


  return (

    <div id='developer-modal' className='modal'>
      <div className="modal-content">
        <h4>New Developer</h4>

        {/* First name | Row 1 */}
        <div className="row">
            <div className="input-field">
                <input type="text"
                name='firstName'
                value={firstName}
                onChange={e => setFirstname(e.target.value)}
                />
            <label htmlFor="firstName" className='active'>First Name</label>
            </div>
        </div>

        {/* Last Name | Row 2 */}
        <div className="row">
            <div className="input-field">
                <input type="text"
                name='lastName'
                value={firstName}
                onChange={e => setLastname(e.target.value)}
                />
            <label htmlFor="lastName" className='active'>Last Name</label>
            </div>
        </div>

        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue btn-flat white-text #4a148c purple darken-4">
            submit
          </a>
        </div>

      </div>
    </div>
  )
}

export default AddDevModal;