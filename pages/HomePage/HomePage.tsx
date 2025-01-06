import styles from './HomePage.module.css'
import {services, Service } from '../../data/data'

const HomePage = () => {
  const renderService = (service: Service) => (
    <div className={styles.service}>
      <div className="flex-spread align-center">
        <h2>{service.name}</h2>
        <span className={styles.price}>{service.price}</span>
      </div>
      <p className={styles.shortDescription}>
        {service.shortDescription}
      </p>
    </div>
  )

  return (
    <div>
      <div className={styles.header} />
      {services.map(renderService)}
    </div>
  )
}
export default HomePage
