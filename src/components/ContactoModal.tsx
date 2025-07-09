import { useTranslation } from "react-i18next";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const ContactModal = ({ isOpen, onClose, darkMode }: ContactModalProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error(t("contact_modal.contact_error"));
      return;
    }

    const mensaje = `${email} quiere conectar contigo.`;
    console.log(mensaje); // enviar a backend o EmailJS

    toast.success(t("contact_modal.contact_success"));

    setEmail(""); // limpia el input
    onClose(); // cierra modal después de mostrar toast
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.currentTarget.closest("form");
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose} // ✅ Cierra el modal si se hace clic fuera
    >
      <div
        className={darkMode ? "modal-dark" : "modal-light"}
        onClick={(e) => e.stopPropagation()} // ✅ Evita que el clic interior cierre el modal
      >
        {/* Botón de cierre */}
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
            }`}
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

          <div className="flex justify-between items-center">
            <a
              href="https://t.me/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className={
                darkMode ? "telegram-link-dark" : "telegram-link-light"
              }
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
