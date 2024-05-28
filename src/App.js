import logo from './logo.svg';
import './App.css';
import { AIVideoCall } from 'aivideocall';

function App() {
  return (
      <div style={{ height: '100%', display: 'relative', width: '100%' }}>

      <AIVideoCall 
            callSession={{ userId:"1bb02726-d0dc-47d3-b235-8e666e87c87b", agentId:"1bb02726-d0dc-47d3-b235-8e666e87c87b" }} 
        />
    </div>
  );
}

export default App;
