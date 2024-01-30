import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import Home from './components/Home';



function App() {
  const { Header, Content } = Layout;

  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <Home />
    </Content>
    </Layout>
  );
}

export default App;
