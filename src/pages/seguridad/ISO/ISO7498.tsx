import { useTranslation } from 'react-i18next'

const ISO7498 = () => {
  const { t } = useTranslation()

  return (
    <section className={`p-3 md:p-10 max-w-5xl mx-auto`}>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">ISO 7498-2</h1>

      <p className="text-lg md:text-xl mb-4 leading-relaxed">
        {t('iso7498.intro')}
      </p>

      <div className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold">{t('iso7498.securityDefinitionTitle')}</h2>
        <p>{t('iso7498.securityDefinition')}</p>

        <h3 className="text-xl font-semibold">{t('iso7498.questionsTitle')}</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>{t('iso7498.questions.1')}</li>
          <li>{t('iso7498.questions.2')}</li>
          <li>{t('iso7498.questions.3')}</li>
          <li>{t('iso7498.questions.4')}</li>
          <li>{t('iso7498.questions.5')}</li>
          <li>{t('iso7498.questions.6')}</li>
        </ul>

        <h3 className="text-xl font-semibold">{t('iso7498.systemDefinition')}</h3>
        <p>{t('iso7498.systemInfo')}</p>

        <div className="border p-4 rounded-md  mt-4">
          <strong>{t('iso7498.systemComponents.title')}</strong>
          <ul className="list-disc list-inside ml-4">
            <li>{t('iso7498.systemComponents.items.1')}</li>
            <li>{t('iso7498.systemComponents.items.2')}</li>
            <li>{t('iso7498.systemComponents.items.3')}</li>
            <li>{t('iso7498.systemComponents.items.4')}</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mt-6">{t('iso7498.answersTitle')}</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>{t('iso7498.answers.1.q')}</strong> {t('iso7498.answers.1.a')}</li>
          <li><strong>{t('iso7498.answers.2.q')}</strong> {t('iso7498.answers.2.a')}</li>
          <li><strong>{t('iso7498.answers.3.q')}</strong> {t('iso7498.answers.3.a')}</li>
          <li><strong>{t('iso7498.answers.4.q')}</strong> {t('iso7498.answers.4.a')}</li>
          <li><strong>{t('iso7498.answers.5.q')}</strong> {t('iso7498.answers.5.a')}</li>
          <li><strong>{t('iso7498.answers.6.q')}</strong> {t('iso7498.answers.6.a')}</li>
        </ol>
      </div>
    </section>
  )
}

export default ISO7498





