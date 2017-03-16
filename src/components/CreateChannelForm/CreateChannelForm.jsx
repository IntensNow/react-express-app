import React from 'react';
import './main.less';

export default props => {
    return (
        <form onSubmit={props.submit} 
              className='cr_channel_form'>
            <label> Title <br/>
                <input type='text' maxLength='20' 
                       className='cr_channel_title_input'
                       onChange={props.onTitleChange}
                       value={props.titleValue}/>
            </label><br/>
                <input type='submit' disabled={!props.canSubmit}
                       className='cr_channel_button'
                       value='Create channel'
                       /> 
            <br/>
        </form>
    );
}