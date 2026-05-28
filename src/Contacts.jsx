export default function Contacts() {
  return (
    <div className="contacts-page">

      <h1 className="contacts-title">Контакты</h1>

      <p className="contacts-subtitle">
        Связь с разработчиком проекта
      </p>

      <div className="contacts-grid">

        <div className="contact-card">
          <h3>Telegram</h3>
          <p>Быстрая связь и поддержка</p>

          <a
            href={`https://t.me/${import.meta.env.VITE_TELEGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram
          </a>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>Почта:</p>
<a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
  {import.meta.env.VITE_EMAIL}
</a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <p>Ссылка на профиль</p>
          <a
  href={import.meta.env.VITE_GITHUB}
  target="_blank"
  rel="noopener noreferrer"
>
  Открыть GitHub
</a>
        </div>

      </div>

    </div>
  )
}