import React, { Component } from 'react'
import { List, Avatar, InputNumber, Icon, message } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as shoppingCarActions from '../../../../redux/actions/ShoppingCarActions'

class CarList extends Component {

  handleChange = (id, value) => {
    this.props.shoppingCarActions.changeGoodsCount({ id, count: value })
  }

  removeGoods = id => {
    this.props.shoppingCarActions.removeGoods(id)
    message.success('删除商品成功')
  }

  render() {
    const { carList } = this.props
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={carList}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a href="javascript:;">{item.name}</a>}
                description={item.price}
              />
              <div>
                <InputNumber size="large" min={1} max={100000} value={item.count} onChange={value => this.handleChange(item.id, value)} />
                <Icon type="close-circle" style={{ color: '#ccc', marginLeft: '10px', cursor: 'pointer' }} onClick={() => this.removeGoods(item.id)} />
              </div>
            </List.Item>
          )}
        />
        <p style={{textAlign: 'right', color: '#ff6600'}}>合计：¥{carList.length !== 0 ? carList.reduce((total, goods) => total + goods.price * goods.count, 0) : 0}</p>
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
)(CarList)
