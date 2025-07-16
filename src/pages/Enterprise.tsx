import { useTranslation } from 'react-i18next'
import { useEnterpriseForm } from '../hooks/useEnterpriseForm'
import { useOutletContext } from 'react-router-dom'


export default function Enterprise() {
  const { t } = useTranslation()
  const { formData, handleChange, handleSubmit } = useEnterpriseForm()
  const { darkMode } = useOutletContext<{ darkMode: boolean }>()

  return (
    <section className={`max-w-4xl mx-auto p-6 mt-10 rounded-xl ${darkMode ? "sidebar-dark" : "sidebar-light"}`}>
      <h2 className="text-2xl font-bold mb-6 text-center">
        {t('enterpriseForm.title')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre */}
        <div>
          <label className="block mb-1 font-medium">
            {t('enterpriseForm.name')}
          </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder={t('enterpriseForm.placeholders.name')}
          />
        </div>

        {/* Empresa */}
        <div>
          <label className="block mb-1 font-medium">
            {t('enterpriseForm.company')}
          </label>
          <input
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder={t('enterpriseForm.placeholders.company')}
          />
        </div>

        {/* Tamaño */}
        <div>
          <label className="block mb-1 font-medium">
            {t('enterpriseForm.companySize')}
          </label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">-- Select --</option>
            <option value="Micro">{t('enterpriseForm.companySizeOptions.micro')}</option>
            <option value="Small">{t('enterpriseForm.companySizeOptions.small')}</option>
            <option value="Medium">{t('enterpriseForm.companySizeOptions.medium')}</option>
            <option value="Large">{t('enterpriseForm.companySizeOptions.large')}</option>
          </select>
        </div>

        {/* Servicio */}
        <div>
          <label className="block mb-1 font-medium">
            {t('enterpriseForm.service')}
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">-- Select --</option>
            <option value="Audit">{t('enterpriseForm.serviceOptions.audit')}</option>
            <option value="Pentest">{t('enterpriseForm.serviceOptions.pentest')}</option>
            <option value="Consulting">{t('enterpriseForm.serviceOptions.consulting')}</option>
            <option value="Readiness">{t('enterpriseForm.serviceOptions.readiness')}</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">
            {t('enterpriseForm.email')}
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder={t('enterpriseForm.placeholders.email')}
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            {t('enterpriseForm.submit')}
          </button>
        </div>
      </form>
    </section>
  )
}
