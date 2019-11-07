import React from 'react'
import * as styles from './style.module.scss'
import PropTypes from 'prop-types'

const ChartCard = ({ title }) => {
  return <div className={styles.img}>{title}</div>
}

ChartCard.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ChartCard
