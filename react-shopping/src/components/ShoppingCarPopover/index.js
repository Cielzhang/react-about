import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Popover, Icon } from 'antd'
import CarList from './components/CarList'

class ShoppingCarPopover extends Component {

  handldClick = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div className="shopping-car">
        <Popover
          content={<CarList carList={this.props.state.shoppingCar} />}
          title="购物车"
          trigger="click"
          placement="leftBottom"
        >
          <div className="icon-wrapper" onClick={this.handldClick}>
            <Icon type="shopping-cart" style={{ fontSize: 32 }} />
          </div>
        </Popover>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(
  mapStateToProps,
  null
)(ShoppingCarPopover)
