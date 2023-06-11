import React, { useState } from 'react'
import M from 'materialize-css';

const EditLogBtn = () => {

  const [message , setmessage] = useState('');
  const [attention , setattention] = useState('');
  const [developer , setdeveloper] = useState('');

  // funtions || Rasing Alert
  const onSubmit =() => {

    if(message === '' || developer === '') {

      M.toast({ html: 'Please Provide Values'})
    } else{
  
      console.log(message,attention,developer);
      setmessage('');
      setattention(false);
      setdeveloper('');
    }
  }


  return (

    <div id='edit-log-modal' className='modal'>
      <div className="modal-content">
        <h4>Edit Developer Log</h4>

        {/* Add Log Modal | Row 1 */}
        <div className="row">
          <div className="input-field">
            <input type="text"
              name='message'
              value={message}
              onChange={e => setmessage(e.target.value)}
            />
            <label htmlFor="message" className='active'>Developer Log</label>
          </div>
        </div>

        {/* Add Log Modal | Row 2 */}
        <div className="row">
          <div className="input-field">
            <select type="text"
              name='developer'
              value={developer}
              className='browser-default'
              onChange={e => setdeveloper(e.target.value)}
            >
              <option value="" disabled>Select Developer</option>
              <option value="Mehdi Jaffari" >Mehdi Jaffari</option>
              <option value="Wajahat Abbas" >Wajahat Abbas</option>
              <option value="Haider Mehdi" >Haider Mehdi</option>
              <option value="Nadir Hossein" >Nadir Hossein</option>
            </select>
          </div>
        </div>

        {/* Add Log Modal | Row 3 */}
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox"
                  className='filled-in-a'
                  checked={attention}
                  value={attention}
                  onChange={e => setattention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

export default EditLogBtn;