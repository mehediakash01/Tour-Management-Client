import React, { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() => {
  document.title = `TripEase | ${title}`;
}, [title]);
        
};

export default useTitle;