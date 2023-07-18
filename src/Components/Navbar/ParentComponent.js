// ParentComponent.js

import React, { useState } from 'react';
import Navbar from './Navbar';

function ParentComponent() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <div>
      {/* Your other component code */}
      <Navbar setShowLoginPopup={setShowLoginPopup} />
    </div>
  );
}

export default ParentComponent;
