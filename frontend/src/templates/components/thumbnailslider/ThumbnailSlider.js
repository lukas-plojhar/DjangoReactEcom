import React from "react";
import ImageGallery from 'react-image-gallery';
import Skeleton from "react-loading-skeleton";

const ThumbnailSlider = ({images}) => {
    return <ImageGallery
        items={images || <Skeleton/>}
        thumbnailPosition="bottom"
        lazyLoad={true}
        showNav={true}
        showPlayButton={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
    />
}

export default ThumbnailSlider;
