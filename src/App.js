import React from 'react';
import { Layout } from 'antd';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout className="master-layout">
      <div className="header">
        <Header />
      </div>
      <Content className="main-content">
        <Main />
      </Content>
      <div className="appfooter">
      <Footer />
      </div>
    </Layout>
  );
}

export default App;
