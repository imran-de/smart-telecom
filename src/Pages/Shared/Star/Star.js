import React from 'react';

const Star = ({ star }) => {
    let disStar = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= star) {
            disStar = disStar + '★'
        } else {
            disStar = disStar + '☆';
        }
    }
    return (
        <div>
            {/* {disStar}: {star} */}
            <span style={{ color: 'goldenrod', fontSize: '24px' }}>{disStar}</span>
        </div>
    );
};

export default Star;