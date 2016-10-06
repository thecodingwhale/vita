
import React, { Component } from 'react'
import base from '../../constants/base.css'
import style from './style.css'
// import TodoTextInput from '../TodoTextInput'

// class Header extends Component {
//   handleSave(text) {
//     if (text.length) {
//       this.props.addTodo(text)
//     }
//   }

//   render() {
//     return (
//       <header>
//         <h1>Todos</h1>
//         <TodoTextInput
//           newTodo
//           onSave={::this.handleSave}
//           placeholder="What needs to be done?" />
//       </header>
//     )
//   }
// }

class Header extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={base.content}>
            <div className={style.header}>
              <h1 className={style.title}>
                Terante, Aldren R.
              </h1>
              <div className={style.sub}>
                Frontend Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
