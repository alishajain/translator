import "./App.css";
import { useTranslation } from "react-i18next";
import "./footer";
//import Footer from "./footer";
import { Suspense } from "react";

const lngs = {
  en: { nativeName: "English" },
  it: { nativeName: "Italian" },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <h1>{t("Branch")}</h1>
        <ul>
          <li>{t("Phone Number Details.Verify")}</li>
          <li>{t("Phone Number Details.OTP")}</li>
          <li>{t("Personal Details.firstName")}</li>
          <li>{t("Personal Details.lastName")}</li>
          <li>{t("Personal Details.gender")}</li>
          <li>{t("Personal Details.postalCode")}</li>
          <li>{t("Personal Details.dateOfBirth")}</li>
        </ul>
      </header>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}
