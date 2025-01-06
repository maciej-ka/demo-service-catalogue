import { Service as ServiceType } from "../../data/data"
import Svg from "../ui/Svg/Svg"
import styles from "./Service.module.css"

type Props = {
  service: ServiceType
}

const Service = ({ service }: Props) => (
  <div className={styles.service}>
    <div className={styles.content}>
      <div className="flex-spread align-center">
        <h2>{service.name}</h2>
        <span className={styles.price}>{service.price}</span>
      </div>
      <p className={styles.description}>{service.shortDescription}</p>
    </div>
    <Svg name={service.background} className={styles.background} />
  </div>
)

export default Service
