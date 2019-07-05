import React from 'react';

class Todo extends React.Component {
  handleChangeCompuleted = () => {
    const {onChange, id, compuleted } = this.props;
    onChange(id, "compuleted", !compuleted)
  }

  handleClickDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id)
  }

  handleClickEdit = () => {
    const { onChange, id, editing } = this.props;
    onChange(id, "editing", !editing)
  }

  render() {
    const { text, compuleted } = this.props

    return (
      <div>
        <label>
          <input type="checkbox" checked={compuleted} onChange={this.handleChangeCompuleted} />
          {text}
        </label>
        <button onClick={this.handleClickEdit}>編集する</button>
        <button onClick={this.handleClickDelete}>削除</button>
      </div>
    )
  }
}

export default Todo;