import styles from "./HomePage.module.css"
import { useServices } from "../../data/ServicesProvider"
import ServiceListElement from "../../components/ServiceList/ServiceListElement"

const HomePage = () => {
  const services = useServices()

  return (
    <div>
      <div className={styles.header} />
      <div className={styles.list}>
        {services.map((service) => (
          <ServiceListElement service={service} key={service.id} />
        ))}
      </div>
    </div>
  )
}
export default HomePage
