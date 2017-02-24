import React from 'react';
import './main.less';
import Formsy from 'formsy-react';

export default props => {
    const passwordRow = props.showPwInput ?
              <label> Password  <br/> <input type='password' maxLength='20' 
                           validations={props.strongPassword} 
                           validationError='This is not a valid password'
                           className='cr_channel_pw'/> 
                </label> : null
    return (
        <Formsy.Form onValidSubmit={props.submit} 
                     onValid={props.enableButton} 
                     onInvalid={props.disableButton} 
                     className='cr_channel_form'>
            <label> Title <br/>
                <input type='text' maxLength='20' 
                       validations={props.isGoodTitle}
                       validationError='This is not a valid title'
                       className='cr_channel_title'/> 
            </label><br/>
            <label> 
                <input type='checkbox' checked={props.showPwInput}
                       onClick={props.Toggle} 
                       name="showPwInput" /> {' '} Make it private 
            </label><br/>
            { passwordRow }
                <input type='submit' disabled={!props.canSubmit}
                       className='cr_channel_button'
                       value='Create channel'/> 
            <br/>
        </Formsy.Form>
    );
}