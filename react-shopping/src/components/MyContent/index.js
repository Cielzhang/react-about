import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as visibilityActions from '../../redux/actions/VisibilityActions'
import GoodsList from './components/GoodsList'
const { Content } = Layout

class MyContent extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{this.props.state.visibility.keyword}</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <GoodsList goods={this.props.state.visibility.goodsList} />
        </div>
      </Content>
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
)(MyContent)
