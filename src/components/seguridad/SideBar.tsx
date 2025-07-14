// src/components/seguridad/SideBar.tsx
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import { GiSecretBook } from "react-icons/gi";
import { MdOutlineSegment } from "react-icons/md";
import Section from "./Section";

interface SideBarProps {
  darkMode: boolean;
}

const SideBar = ({ darkMode }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const location = useLocation();

  const toggleSidebar = () => setCollapsed(!collapsed);

  // Collapse on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setCollapsed(true);
      }
    };

    if (!collapsed) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [collapsed]);

  // Collapse on route change
  useEffect(() => {
    setCollapsed(true);
  }, [location.pathname]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed mt-2 left-4 transition-all duration-300 h-auto z-50 ${
        collapsed ? "w-10" : "w-44"
      } ${darkMode ? "sidebar-dark" : "sidebar-light"}`}
    >
      <div className="h-full flex flex-col">
        <button
          onClick={toggleSidebar}
          className={`${
            darkMode ? "btn-dark-2" : "btn-light-2"
          } hover:cursor-pointer`}
          title={t("sidebar.toggle")}
        >
          <MdOutlineSegment size={22} />
        </button>

        <nav className="flex-1 mt-4 px-2">
          <Section
            icon={
              <img
                src="/seguridad/iso.png"
                alt="ISO"
                className="w-5 h-5 object-contain"
              />
            }
            title={t("sidebar.iso.title")}
            to="/security/ISO"
            collapsed={collapsed}
            items={[
              { label: t("sidebar.iso.services"), to: "/security/ISO" },
              { label: t("sidebar.iso.mechanisms"), to: "/security/ISO" },
            ]}
          />

          <Section
            icon={<FaShieldAlt size={20} />}
            title={t("sidebar.crypto.title")}
            to="/security/Cryptography"
            collapsed={collapsed}
            items={[
              {
                label: t("sidebar.crypto.symmetric"),
                to: "/security/Cryptography",
              },
              {
                label: t("sidebar.crypto.asymmetric"),
                to: "/security/Cryptography",
              },
              {
                label: t("sidebar.crypto.hash"),
                to: "/security/Cryptography",
              },
            ]}
          />

          <Section
            icon={<GiSecretBook size={20} />}
            title={t("sidebar.protocols.title")}
            to="/security/Protocols"
            collapsed={collapsed}
            items={[
              {
                label: t("sidebar.protocols.title"),
                to: "/security/Protocols",
              },
            ]}
          />
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
