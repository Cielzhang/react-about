import React, { Component } from 'react'
import { Input } from 'antd'
const Search = Input.Search

class SearchBar extends Component {
  state = {
    value: ''
  }

  handleSearch = value => {
    this.props.searchFn(value)
    this.setState({
      value: ''
    })
  }

  handleChange = ev => {
    this.setState({
      value: ev.target.value
    })
  }
  render() {
    return (
      <Search
        placeholder="请输入搜索内容"
        onSearch={value => this.handleSearch(value)}
        enterButton
        style={{ width: 'auto' }}
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}

export default SearchBar
