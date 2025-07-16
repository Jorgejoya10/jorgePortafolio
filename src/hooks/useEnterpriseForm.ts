import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export type EnterpriseFormData = {
  name: string
  company: string
  companySize: string
  service: string
  email: string
}

const initialFormData: EnterpriseFormData = {
  name: '',
  company: '',
  companySize: '',
  service: '',
  email: '',
}

export function useEnterpriseForm() {
  const [formData, setFormData] = useState<EnterpriseFormData>(initialFormData)
  const { t } = useTranslation()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error(t('notifications.invalidEmail'))
      return
    }

    if (
      !formData.name ||
      !formData.company ||
      !formData.companySize ||
      !formData.service
    ) {
      toast.error(t('notifications.incompleteFields'))
      return
    }

    toast.success(t('notifications.success'))

    // ✅ Limpiar formulario
    setFormData(initialFormData)
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  }
}
