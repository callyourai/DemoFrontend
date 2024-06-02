import { AIVideoCall, Event } from 'aivideocall';
import 'aivideocall/dist/style.css';
import React, { useRef } from 'react';

function App() {
  const videoCallRef = useRef(null);
  const event = new Event('speak', { userId: "1bb02726-d0dc-47d3-b235-8e666e87c87b", agentId: "1bb02726-d0dc-47d3-b235-8e666e87c87b" }, "1bb02726-d0dc-47d3-b235-8e666e87c871", "1", "en-US", "this is a test")
  if (videoCallRef.current) {
    videoCallRef.current.sendEvent(event);
  } else {
    console.warn('videoCallRef is not available');
  }

  return (
    <div style={{ height: '100%', display: '', width: '100%' }}>
      <AIVideoCall 
        ref={videoCallRef}
        callSession={{ userId: "1bb02726-d0dc-47d3-b235-8e666e87c87b", agentId: "1bb02726-d0dc-47d3-b235-8e666e87c87b" }} 
      />
    </div>
  );
}

export default App;
