import './App.css';
import { AIVideoCall } from 'aivideocall';
import 'aivideocall/dist/style.css'; // Importing the CSS from the component


function App() {
  return (
      <div style={{ height: '100%', display: '', width: '100%' }}>

      <AIVideoCall 
            callSession={{ userId:"1bb02726-d0dc-47d3-b235-8e666e87c87b", agentId:"1bb02726-d0dc-47d3-b235-8e666e87c87b" }} 
        />
    </div>
  );
}

export default App;
