// src/pages/seguridad/Protocols/home.tsx

import { useTranslation } from "react-i18next";

import ProtocolsIntro from "../../../components/protocols/ProtocolsIntro";
import ProtocolCatalogSection from "../../../components/protocols/ProtocolCatalogSection";
import ProtocolTimelineSection from "../../../components/protocols/ProtocolTimelineSection";

import { protocolCatalogGroups } from "../../../components/protocols/data/catalogData";
import { protocolTimelineItems } from "../../../components/protocols/data/timelineData";

const Protocols = () => {
  const { t } = useTranslation();

  return (
    <section className="p-3 md:p-4">
      <div className="space-y-14 md:space-y-20">
        <ProtocolsIntro
          title={t("protocols.home.title")}
          intro={t("protocols.home.intro")}
        />

        <div className="space-y-12 md:space-y-16">
          {protocolCatalogGroups.map((group) => (
            <ProtocolCatalogSection
              key={group.id}
              groupId={group.id}
              title={t(`protocols.groups.${group.id}.title`)}
              description={
                group.descriptionKey
                  ? t(`protocols.groups.${group.id}.${group.descriptionKey}`)
                  : undefined
              }
              items={group.items}
            />
          ))}
        </div>

        <ProtocolTimelineSection
          title={t("protocols.timeline.title")}
          subtitle={t("protocols.timeline.subtitle")}
          items={protocolTimelineItems}
        />
      </div>
    </section>
  );
};

export default Protocols;