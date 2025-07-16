import { useTranslation } from "react-i18next";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const ContactModal = ({ isOpen, onClose, darkMode }: ContactModalProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedTerms) {
      toast.error(t("contact_modal.error_terms"));
      return;
    }

    if (!isValidEmail(email)) {
      toast.error(t("contact_modal.contact_error"));
      return;
    }

    const mensaje = `${email} quiere conectar contigo.`;
    console.log(mensaje); // enviar a backend o EmailJS

    toast.success(t("contact_modal.contact_success"));

    setEmail("");
    setAcceptedTerms(false);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.currentTarget.closest("form");
      if (form) {
        form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div
        className={darkMode ? "modal-dark" : "modal-light"}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl transition hover:scale-110"
          aria-label="Cerrar modal"
        >
          <IoIosCloseCircle
            className={`${
              darkMode
                ? "text-white hover:text-red-400"
                : "text-slate-600 hover:text-red-500"
            } hover:cursor-pointer`}
            size={28}
          />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center p-3">
          {t("contact_modal.title")}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("contact_modal.email_placeholder")}
            className={darkMode ? "input-dark" : "input-light"}
          />

          {/* Checkbox de términos */}
          <label className="flex items-start text-sm gap-2">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="accent-purple-500 mt-1"
            />
            <span>
              {t("contact_modal.accept")}{" "}
              <Link
                to="/terms"
                className="underline text-purple-400 hover:text-purple-300"
                target="_blank"
              >
                {t("contact_modal.terms")}
              </Link>
            </span>
          </label>

          <div className="flex justify-between items-center gap-2">
            <button
              type="submit"
              className="hover:cursor-pointer bg-gradient-to-r hover:scale-105 from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:brightness-110 transition"
            >
              {t("contact_modal.send")}
            </button>
            <p>{t("contact_modal.or")}</p>
            <a
              href="https://t.me/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por Telegram"
              className="text-xl p-2 rounded-full transition hover:scale-110
        bg-gradient-to-br from-sky-400 to-blue-600 text-white"
            >
              <FaTelegramPlane />
            </a>
          </div>
          <div>
             <Link
                to="/enterprise"
                className="underline text-blue-700 hover:text-blue-500"
                target="_blank"
              >
                {t("contact_modal.enterprise")}
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
