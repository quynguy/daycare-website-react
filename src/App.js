import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/Header';



function App() {
  const { Header } = Layout;

  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
      
    </Header>
    </Layout>
  );
}

export default App;
