import styles from './HomePage.module.css'
import {services, Service } from '../../data/data'

const HomePage = () => {
  const renderService = (service: Service) => (
    <div>
      <div className="flex">
        <h2>{service.name}</h2>
        price
      </div>
    </div>
  )

  return (
    <div className={styles.page}>
      <div className={styles.header} />
      {services.map(renderService)}
    </div>
  )
}
export default HomePage
