import { Field, Input, Label } from "@headlessui/react"
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import styles from "./ServiceOrderPage.module.css"

const ServiceOrderPage = () => {
  const { id } = useParams()
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" })

  return (
    <div className={styles.wrapper}>
      Service Order Page, id: {id}
      <Field>
        <Label className={styles.label}>Name</Label>
        <Input
          className={styles.input}
          {...register("ownerName", { required: true })}
        />
        {errors.ownerName && <p>Owner name is required.</p>}
      </Field>
    </div>
  )
}

export default ServiceOrderPage
