import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { useState, useEffect } from "react";
// Translated messages in French with matching IDs to what you declared
const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "Dil değişim örneği {count}",
  },
  "en-US": {
    title: "Hello World",
    description: "Language exchange example {count}",
  },
};

function IntlExmp() {
  const isLocele = localStorage.getItem("language");
  const defaultLocale = isLocele ? isLocele : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);
  const localeCurrency = defaultLocale === 'tr-TR' ? 'EUR' :'USD'
  const [currency, setCurrency] = useState(localeCurrency);

  useEffect(() => {
    localStorage.setItem("language", locale);
    setCurrency(locale === 'tr-TR' ? 'EUR' :'USD')
}, [locale]);

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <h1>
        <FormattedMessage id="title" />
      </h1>
      <p>
        <FormattedMessage
          id="description"
          values={{ count: locale === "tr-TR" ? 1 : 2 }}
        />
      </p>
      <FormattedNumber value={19} style="currency" currency={currency} />

      <br />
      <br />
      <br />
      <button onClick={() => setLocale("tr-TR")}>Türkçe</button>
      <br />
      <br />
      <button onClick={() => setLocale("en-US")}>İngilizce</button>
    </IntlProvider>
  );
}
export default IntlExmp;
