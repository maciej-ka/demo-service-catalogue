import styles from "./HomePage.module.css"
import { useServices } from "../../data/ServicesProvider"
import Service from "../../components/ServiceList/Service"

const HomePage = () => {
  const services = useServices()

  return (
    <div>
      <div className={styles.header} />
      <div className={styles.list}>
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  )
}
export default HomePage
