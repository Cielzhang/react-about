import React from 'react'
import '../css/App.css'
import { Layout } from 'antd'
import MyHeader from '../components/MyHeader'
import MyContent from '../components/MyContent'
import MyFooter from '../components/MyFooter'
import ShoppingCarPopover from '../components/ShoppingCarPopover'

const App = () => (
  <Layout className="layout">
    <MyHeader />
    <MyContent />
    <MyFooter />
    <ShoppingCarPopover />
  </Layout>
)

export default App
