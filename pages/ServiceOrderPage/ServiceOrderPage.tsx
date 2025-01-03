import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceOrderPage = () => {
  const { id } = useParams()
  return <div>Service Order Page, id: {id}</div>
}

export default ServiceOrderPage
