import React, { useState }  from 'react';
import Toast from 'light-toast';


function Star({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: '#0087C5' }} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
}

export default function StarRating(props) {
  const [rating, setRating] = useState(typeof props.rating === 'number' ? props.rating : 0);
  const [selection, setSelection] = useState(0);

  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('star-id')) {val = event.target.getAttribute('star-id');}
    setSelection(val);
  };

  const fireNotification = () => {
    Toast.info('To use this feature, You have to be logged in', 2000, () => {
      setRating(0);
    });
  };

  return (
    <div
      style={{ transform: 'scale(1.3)' }}
      onMouseOut={() => hoverOver(null)}
      onClick={event => [setRating(event.target.getAttribute('star-id') || rating), props.isLoggedIn ? null : fireNotification()]}
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1} `}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
}
