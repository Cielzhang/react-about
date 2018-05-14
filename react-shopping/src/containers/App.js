import React from 'react'
import '../css/App.css'
import { Layout } from 'antd'
import MyHeader from '../components/MyHeader'
import MyContent from '../components/MyContent'
import MyFooter from '../components/MyFooter'

const App = () => (
  <Layout className="layout">
    <MyHeader />
    <MyContent />
    <MyFooter />
  </Layout>
)

export default App
