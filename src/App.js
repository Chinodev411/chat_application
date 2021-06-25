import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import ChatFeed from './components/ChatFeed';


const App = () => {
      if(!localStorage.getItem('username')) return <LoginForm />



  return (
    <ChatEngine
        height= "100vh"
        projectID= "7e4c0e18-4213-4ccf-a558-0291a35f7fca"
        userName= {localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed= {(chatAppProps) => <ChatFeed {... chatAppProps} />}
          
    />
  );
}

export default App;