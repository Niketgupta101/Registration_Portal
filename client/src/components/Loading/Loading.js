import React from 'react';
import './styles.css';
import loading from '../../Images/spinner.gif';

const Loading = ({ sentence }) => {
    return (
        <div className='loading'>
            <div className="loadingContent">
                <h2>Please wait for a moment</h2>
                <img src={loading} alt="loading" />
                <h3>{sentence? sentence: 'While we are processing...'}</h3>
                <h6>Please keep patience, it might take some time.</h6>
            </div>
        </div>
    )
}

export default Loading
