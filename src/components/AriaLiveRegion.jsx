import React, { useState, useEffect } from 'react';

const AriaLiveRegion = ({ message, type = 'polite' }) => {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (message) {
      setAnnouncement(message);
    }
  }, [message]);

  return (
    <div
      aria-live={type}
      aria-atomic="true"
      className="sr-only"
      style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}
    >
      {announcement}
    </div>
  );
};

export default AriaLiveRegion;
