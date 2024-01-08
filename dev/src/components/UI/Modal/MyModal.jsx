import React from 'react'
import classes from './MyModal.module.css'
import MyButton from '../Button/MyButton'

function MyModal({ children, visible, setVisible }) {

  const rootClasses = [classes.myModal]
  if (visible === true) {
    rootClasses.push(classes.active)
  }

  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <MyButton
        closeclass={classes.closeBtn}
          onClick={() => setVisible(false)}
        >
          &#10006;
        </MyButton>
      </div>
    </div>
  )
}

export default MyModal