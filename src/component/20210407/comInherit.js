import React from 'react'
import styles from '../../assets/comInherit.module.css'
/**
 * 组合 继承
 */


function FancyBorder(props) {
    let colorBlue = 'FancyBorder-'+props.color
    return (
        <div className={`${styles[colorBlue]} ${styles['FancyBorder']}`}>
            { props.children }
        </div>
    )
}

export default function WelcomeDialog() {
    return (
        <FancyBorder color='blue'>
            <h1>welcome</h1>
            <p>children 组件</p>
        </FancyBorder>
    )
}