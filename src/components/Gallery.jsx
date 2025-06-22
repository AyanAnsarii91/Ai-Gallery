import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/images.json')
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, []);

    return (
        <div className="gallery-grid">
            {images.length === 0 ? (
                <p className="loading-text">Loading AI images... 🚀</p>
            ) : (
                images.map((url, index) => (
                    <ImageCard key={index} url={url} />
                ))
            )}
        </div>
    );
};

export default Gallery;
