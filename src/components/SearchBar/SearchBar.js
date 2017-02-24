import React , { PropTypes } from 'react';
import './main.less';

const SearchBar = props => {
    const {
        searchText, isPublicOnly, onPublicChange, onSearchTextChange } = props;
    return (
        <form className='channels_search_bar'>
                <input className='search_input' 
                       type='text' placeholder='Search field' 
                       value={searchText}
                       onChange={onSearchTextChange}/>
                <p className='search_box_options'>
                    <input type='checkbox' 
                           value={isPublicOnly} 
                           onClick={onPublicChange}/>
                    {' '} Only show public channels
                </p>
        </form>
    )
}

SearchBar.propTypes = {
    isPublicOnly:PropTypes.bool,
    onPublicChange:PropTypes.func,
    onSearchTextChange:PropTypes.func,
    searchText:PropTypes.string
}

export default SearchBar;