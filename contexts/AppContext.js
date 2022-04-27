import { createContext } from "react";
import { useState} from "react";
import { useRouter } from "next/router";
import ru from "../locales/ru";
import ro from "../locales/ro";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const router = useRouter();
  const {locale} = router;
  const t = locale === 'ro' ? ro : ru;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <AppContext.Provider value={
      {
        cart: [cart, setCart],
        tab: [activeTab, setActiveTab],
        lang: [t, locale, changeLanguage]
      }
    }>
      {props.children}
    </AppContext.Provider>
  );
};
