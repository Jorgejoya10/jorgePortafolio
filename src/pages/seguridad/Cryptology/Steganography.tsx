import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

type ABChannelProps = {
  label?: string;      
  topText?: string;    
  overlayLeftPx?: number;  
  arrowWidthPx?: number;   
  className?: string;
};

function Circle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-neutral-400 bg-white flex items-center justify-center font-semibold text-lg">
      {children}
    </div>
  );
}

function Arrow({ widthPx = 110 }: { widthPx?: number }) {
  return (
    <div className="relative" style={{ width: widthPx }}>
      <div className="h-[3px] bg-neutral-900 rounded-full" />
      <span className="absolute right-0 -top-[6px] w-3 h-3 border-t-[3px] border-r-[3px] border-neutral-900 rotate-45" />
    </div>
  );
}

function ABChannel({
  label,
  topText,
  overlayLeftPx = 40,
  arrowWidthPx = 110,
  className = "",
}: ABChannelProps) {
  const showOverlay = Boolean(label || topText);

  return (
    <div className={`w-full flex items-center justify-center gap-4 py-8 ${className}`}>
      <Circle>A</Circle>

      <div className="relative flex-1 max-w-4xl">
        {/* Overlay (arriba de la línea, como en Figma) */}
        {showOverlay && (
          <div
            className="absolute -top-12 left-0"
            style={{ transform: `translateX(${overlayLeftPx}px)` }}
          >
            {topText && (
              <div className="text-2xl md:text-3xl font-semibold leading-none mb-2 text-neutral-900">
                {topText}
              </div>
            )}

            <div className="flex items-center gap-3">
              {label && (
                <div className="text-xl md:text-2xl font-extrabold text-neutral-900">
                  {label}
                </div>
              )}
              <Arrow widthPx={arrowWidthPx} />
            </div>
          </div>
        )}

        {/* Línea principal */}
        <div className="h-2 bg-neutral-900 rounded-full" />
      </div>

      <Circle>B</Circle>
    </div>
  );
}

function Callout({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-200 bg-white">
      <div className="mt-0.5">{icon}</div>
      <div className="text-neutral-800 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Steganography() {
  const { t } = useTranslation();

  const secretMessage = t("steganography.secretMessage");

  return (
    <div className="max-w-5xl mx-auto px-2 py-2">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        {t("steganography.title")}
      </h1>

      <p className="mt-4 text-lg text-neutral-700 max-w-4xl">
        {t("steganography.intro")}
      </p>

      {/* Modelo Alice / Bob */}
      <div className="mt-10">
        <ol className="mt-8 space-y-4 list-decimal pl-6">
          <li>
            <div className="leading-relaxed">
              <Trans
                i18nKey="steganography.steps.1"
                components={{ strong: <strong className="font-semibold" /> }}
              />
            </div>

            {/* Figma: M + flecha arriba */}
            <ABChannel label="M" />

            <div className="text-neutral-800 font-semibold">
              {t("steganography.mLabel", { message: secretMessage })}
            </div>

            <div className="mt-1 text-sm text-neutral-600">
              <Trans
                i18nKey="steganography.steps.1Note"
                components={{
                  link: (
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://www.iso.org/standard/27001"
                      target="_blank"
                      rel="noreferrer"
                    />
                  ),
                }}
              />
            </div>
          </li>

          <li>
            <div className="font-semibold">{t("steganography.steps.2")}</div>

            <ol className="mt-2 space-y-3 list-[lower-alpha] pl-6">
              {/* a) texto claro */}
              <li>
                <div className="leading-relaxed">
                  {t("steganography.steps.a")}
                </div>

                <div className="mt-4">
                  {/* Figma: mensaje arriba + flecha arriba */}
                  <ABChannel topText={secretMessage} />

                  {/* Si quieres conservar este texto centrado también, lo dejamos */}
                  <div className="text-center font-semibold text-neutral-900">
                    {secretMessage}
                  </div>
                </div>

                <div className="mt-4">
                  <Callout icon={<span className="text-red-600 text-xl">✕</span>}>
                    {t("steganography.steps.aResult")}
                  </Callout>
                </div>
              </li>

              {/* b) esteganografía */}
              <li>
                <div className="leading-relaxed">
                  <Trans
                    i18nKey="steganography.steps.b"
                    components={{
                      strong: <strong className="font-semibold" />,
                    }}
                  />
                </div>

                <div className="mt-4">
                  {/* Figma: M + flecha arriba */}
                  <ABChannel label="M" />
                </div>

                <div className="mt-6 font-medium">
                  {t("steganography.steps.bobReceives")}
                </div>

                <div className="mt-3">
                  <Callout icon={<span className="text-yellow-500 text-xl">?</span>}>
                    <p className="font-normal">
                      {t("steganography.steps.coverMessage")}
                    </p>
                  </Callout>
                </div>

                <p className="mt-4 text-neutral-800 leading-relaxed">
                  {t("steganography.steps.hint")}
                </p>

                <div className="mt-4 p-4 rounded-2xl border border-neutral-200 bg-neutral-50">
                  <div className="font-semibold mb-2">
                    {t("steganography.steps.extractionTitle")}
                  </div>
                  <div className="text-sm text-neutral-700">
                    {t("steganography.steps.extraction", {
                      message: secretMessage,
                    })}
                  </div>
                </div>

                <p className="mt-6 text-neutral-800 leading-relaxed">
                  <Trans
                    i18nKey="steganography.steps.obscurity"
                    components={{
                      strong: <strong className="font-semibold" />,
                    }}
                  />
                </p>

                <p className="mt-4 text-neutral-800 leading-relaxed">
                  <Trans
                    i18nKey="steganography.steps.modern"
                    components={{
                      strong: <strong className="font-semibold" />,
                    }}
                  />
                </p>

                <p className="mt-6 text-neutral-800 leading-relaxed">
                  <Trans
                    i18nKey="steganography.steps.cryptoOutro"
                    components={{
                      strong: <strong className="font-semibold" />,
                    }}
                  />
                </p>

                <div className="mt-4 flex justify-end">
                  <Link
                    to="/security/Cryptography"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {t("steganography.steps.cryptoLink")}
                  </Link>
                </div>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
