import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card, Col, Row, Icon, message } from 'antd'
import * as shoppingCarActions from '../../../../redux/actions/ShoppingCarActions'
const { Meta } = Card

class GoodsList extends Component {
  addGoods = goods => {
    this.props.shoppingCarActions.addGoods(goods)
    message.success('添加购物车成功')
  }
  render() {
    const list = this.props.goods.map(e => (
      <Col xxl={4} xl={6} lg={8} sm={12} key={e.id}>
        <Card
          hoverable
          style={{ width: 240, margin: '0 auto', marginBottom: '20px' }}
          cover={<img alt={e.name} src={e.image} />}
        >
          <Meta
            title={e.name}
            description={(
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{`¥${e.price}`}</span>
                <Icon
                  type="plus-circle"
                  style={{ fontSize: 20, color: '#1890ff' }}
                  onClick={() => this.addGoods(e)}
                />
              </div>
            )}
          />
        </Card>
      </Col>
    ))
    return (
      <div>
        <Row gutter={16}>
          {list}
        </Row>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    shoppingCarActions: bindActionCreators(shoppingCarActions, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(GoodsList)
