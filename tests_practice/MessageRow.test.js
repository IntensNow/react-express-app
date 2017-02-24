import React from 'react';
import renderer from 'react-test-renderer';
import MessageRow from '../src/components/MessageRow';

const msg = {
    author:'Me',
    text:'some text for message',
    date:'23.02.2027'
}

test('<MessageRow />', () => {
  
     const tree = renderer.create(
    
     <MessageRow msg={msg}/>
    
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    
});