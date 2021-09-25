import React from 'react'
import styles from './TodoList.scss'

type FilterProps = {
  filterDoneTodo: boolean
  switchFilterDoneTodo: () => void
}

const Filter = (props: FilterProps) => {
  return (
    <div className={styles.filter}>
      <input
        type="checkbox"
        checked={props.filterDoneTodo}
        onChange={
          props.switchFilterDoneTodo
        }
      />
      隱藏已完成事項
    </div>
  )
}

export default Filter
