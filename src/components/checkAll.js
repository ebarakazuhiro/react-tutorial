import React from 'react'

class CheckAll extends React.Component {
  handleChange = () => {
    const {onChange, allCompuleted } = this.props;
    onChange(!allCompuleted)
  }

  render() {
    const { allCompuleted } = this.props;

    return(
      <div>
        <label>
          <input type="checkbox" checked={allCompuleted} onChange={this.handleChange}/>
          全て{allCompuleted ? "未完了" : "完了"}を完了する
        </label>
      </div>
    )
  }
}

export default CheckAll;