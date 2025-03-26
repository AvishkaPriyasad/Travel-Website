import React from 'react'
import LightGallery from 'lightgallery/react';

import './Css/Gallery.css'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryComp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <div className='max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10'>
        <div className=''>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>
                Our Gallery
            </h2>
            <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10'/>
        </div>

        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="/Mirissa.png">
                    <img alt="img1" src="/Mirissa.png" />
                </a>
                <a href="/sigiriya.png">
                    <img alt="img2" src="/sigiriya.png" />
                </a>
                <a href="/Hero2.png">
                    <img alt="img2" src="/Hero2.png" />
                </a>
                <a href="/NuwaraEliya.png">
                    <img alt="img2" src="/NuwaraEliya.png" />
                </a>
                <a href="/riti.png">
                    <img alt="img2" src="/riti.png" />
                </a>
                <a href="/hikkaduwa.png">
                    <img alt="img2" src="/hikkaduwa.png" />
                </a>
                <a href="/gallefort.png">
                    <img alt="img2" src="/gallefort.png" />
                </a>
                <a href="/yala.png">
                    <img alt="img2" src="/yala.png" />
                </a>
                <a href="/NineArch.png">
                    <img alt="img2" src="/NineArch.png" />
                </a>
            </LightGallery>
        </div>
    </div>
  )
}

export default GalleryComp
