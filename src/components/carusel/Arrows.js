import React from 'react';

export const PrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: 'block', left: '10px', zIndex: '1'}}
        onClick={onClick}
    >
        &#9664;
    </div>
);

export const NextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, display: 'block', right: '10px', zIndex: '1' }}
        onClick={onClick}
    >
        &#9654;
    </div>
);
