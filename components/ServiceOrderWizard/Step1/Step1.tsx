import { Field, Input, Label } from "@headlessui/react"
import styles from "./Step1.module.css"

const Step1 = () => (
  <div className={styles.wrapper}>
    <input type="date" />

    <Field>
      <Label className={styles.label}>Date from</Label>
      <Input type="date" className={styles.input} />
    </Field>
  </div>
)

export default Step1
