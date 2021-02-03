import React from 'react';

const Video = ({source}) => {
    return (
        <React.Fragment>
            <video
                src={source}
                autoPlay="True"
                width="100%"
            />
        </React.Fragment>
    )
}

export default Video;