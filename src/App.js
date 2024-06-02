import { AIVideoCall, Event } from 'aivideocall';
import 'aivideocall/dist/style.css';
import React, { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const videoCallRef = useRef(null);
  const userId = "1bb02726-d0dc-47d3-b235-8e666e87c87b";
  const agentId = "11111111-d0dc-47d3-b235-8e666e87c87b";
  // random messageid
  const spokenMessageId = uuidv4();
  const lipsyncMessageId = uuidv4();
  const confidence = "1";
  const lang_locale = "en-US";
  const spokenMessage = "this is a test";
  const lipsyncMessage = "this is a longer test where i can see the lipsync in action";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoCallRef.current) {
        const event = new Event('speak', { userId: userId, agentId: agentId }, spokenMessageId, confidence, lang_locale, spokenMessage);
        console.log('Sending speak event', event);
        videoCallRef.current.sendEvent(event);
      } else {
        console.warn('videoCallRef is not available');
      }
    }, 5000); // 5 second delay

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, [videoCallRef, spokenMessageId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoCallRef.current) {
        const event = new Event('lipsync', { userId: userId, agentId: agentId }, lipsyncMessageId, confidence, lang_locale, lipsyncMessage);
        console.log('Sending lipsync event', event);
        videoCallRef.current.sendEvent(event);
      } else {
        console.warn('videoCallRef is not available');
      }
    }, 10000); // 10 second delay

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, [videoCallRef, lipsyncMessageId]);

  return (
    <div style={{ height: '100%', display: '', width: '100%' }}>
      <AIVideoCall
        ref={videoCallRef}
        callSession={{ userId: userId, agentId: agentId }}
      />
    </div>
  );
}

export default App;
