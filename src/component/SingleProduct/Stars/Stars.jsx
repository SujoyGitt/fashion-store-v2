import React from 'react'
import "./Stars.css";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export const Stars = ({stars = 0, reviews = 0}) => {
  const ratingstars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <StarIcon />
        ) : stars >= number ? (
          <StarHalfIcon />
        ) : (
          <StarOutlineIcon />
        )}
      </span>
    );
  });

  return (
    <div className="icon-style">
      {ratingstars} <span>({reviews} Customer reviews)</span>
    </div>
  );
};
