import './App.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="1">About</Menu.Item>
        <Menu.Item key="1">Services</Menu.Item>
      </Menu>
    </Header>
    </Layout>
  );
}

export default App;
