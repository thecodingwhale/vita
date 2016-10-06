
import React, { Component } from 'react'
import base from '../../constants/base.css'
import style from './style.css'

class CareerObjective extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={base.content}>
            <div className={style.pageTitle}>
              Summary
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio inventore dicta illo eos dolor totam hic vel sit laborum saepe, ducimus veritatis iusto natus fugiat nihil nostrum itaque, eveniet assumenda!
            </p>
        </div>
      </div>
    )
  }
}

export default CareerObjective
