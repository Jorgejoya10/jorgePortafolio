// src/components/seguridad/SideBar.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaShieldAlt } from "react-icons/fa";
import { GiSecretBook } from "react-icons/gi";
import { MdOutlineSegment } from "react-icons/md";
import Section from "./Section";

interface SideBarProps {
  darkMode: boolean;
}

const SideBar = ({ darkMode }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside
      className={`fixed mt-2 left-4 transition-all duration-300 h-auto ${
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
            items={[t("sidebar.iso.services"), t("sidebar.iso.mechanisms")]}
            collapsed={collapsed}
          />
          <Section
            icon={<FaShieldAlt size={20} />}
            title={t("sidebar.crypto.title")}
            items={[
              t("sidebar.crypto.symmetric"),
              t("sidebar.crypto.asymmetric"),
              t("sidebar.crypto.hash"),
            ]}
            collapsed={collapsed}
          />
          <Section
            icon={<GiSecretBook size={20} />}
            title={t("sidebar.protocols.title")}
            items={[]}
            collapsed={collapsed}
          />
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
