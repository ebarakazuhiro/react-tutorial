import React from 'react'

class Filter extends React.Component {
  handleChange = e => {
    this.props.onChange(e.currentTarget.value)
  }

  render() {
    const { filter } = this.props;

    return (
      <select value={filter} onChange={this.handleChange}>
        <option value="all">全て</option>
        <option value="uncompuleted">未完了</option>
        <option value="compuleted">完了済み</option>
      </select>
    )
  }
}

export default Filter