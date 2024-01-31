import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import Home from './components/Home';
import AppFooter from './components/Footer';



function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="mainLayout">
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <Home />
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
    </Layout>
  );
};

export default App;
