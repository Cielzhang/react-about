import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import { Layout, Menu } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as visibilityActions from '../../redux/actions/VisibilityActions'
const { Header } = Layout

const navList = ['手机', '电脑', '衣服']

class MyHeader extends Component {
  state = {
    navList
  }

  componentDidMount() {
    this.changeKeyword({ key: '手机' })
  }

  changeKeyword = ({ key }) => {
    this.props.visibilityActions.changeKeywordAsync(key)
  }

  searchFn = keyword => {
    this.changeKeyword({ key: keyword })
  }

  render() {
    const navList = this.state.navList.map((n, i) => (
      <Menu.Item key={n}>{n}</Menu.Item>
    ))

    return (
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['手机']}
          style={{ lineHeight: '64px' }}
          onSelect={this.changeKeyword}
        >
          {navList}
        </Menu>
        <SearchBar
          searchFn={this.searchFn}
        />
      </Header>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    visibilityActions: bindActionCreators(visibilityActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyHeader)
