import React from 'react'
import { Description, Field, Input, Label } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'
import styles from './ServiceOrderPage.module.css'

const ServiceOrderPage = () => {
  const { id } = useParams()
  return (
    <div className={styles.container}>
      Service Order Page, id: {id}
      <Field>
        <Label className={styles.fieldLabel}>
          Name
        </Label>
        <Description className={styles.fieldDescription}>
          Use your real name so people will recognize you.
        </Description>
        <Input
          className={clsx(styles.fieldInput)}
        />
      </Field>
    </div>
  )
}

export default ServiceOrderPage
