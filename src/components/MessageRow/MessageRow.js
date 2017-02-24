import React, { PropTypes } from 'react';
import './main.less';

const MessageRow = props => {
    
    const { author, text, date } = props.msg;
    
    return (
        <div className={ author === 'Me' ? 'user_message_row ' : 'message_row' }>
            <header > <p>{author}</p> </header>
            <div className='message_text'><p>{text.trim()}</p></div>
            <div className='message_date'><p>{date}</p></div>
        </div>
    )
}

MessageRow.propTypes = {
    msg:PropTypes.shape({
        author:PropTypes.string,
        text:PropTypes.string,
        date:PropTypes.string
    })
}

export default MessageRow;
