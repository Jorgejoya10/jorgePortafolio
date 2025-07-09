import { useTranslation } from "react-i18next";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const ContactModal = ({ isOpen, onClose, darkMode }: ContactModalProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className={darkMode ? "modal-dark" : "modal-light"}>
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 text-xl ${
            darkMode
              ? "text-white hover:text-red-400"
              : "text-slate-600 hover:text-red-500"
          }`}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          {t("contact_modal.title")}
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder={t("contact_modal.email_placeholder")}
            className={darkMode ? "input-dark" : "input-light"}
          />
          <textarea
            placeholder={t("contact_modal.message_placeholder")}
            className={darkMode ? "textarea-dark" : "textarea-light"}
          />
          <div className="flex justify-between items-center">
            <a
              href="https://t.me/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className={darkMode ? "telegram-link-dark" : "telegram-link-light"}
            >
              {t("contact_modal.telegram")}
            </a>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:brightness-110 transition"
            >
              {t("contact_modal.send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
