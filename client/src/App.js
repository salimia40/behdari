import "./App.css";
import { Admin, Resource, defaultTheme } from "react-admin";
import DataProvider from "ra-data-simple-rest";
import StoreList from "./components/storeList";
import DrugStoreList from "./components/drugstoreList";
import TransactionList from "./components/transactionList";
import TransactionShow from "./components/transactionsShow";
import TransactionCreate from "./components/transactionCreate";
import DrugtypeEdit from "./components/drugtypeEdit";
import DrugtypeCreate from "./components/drugtypeCreate";
import DrugtypeList from "./components/drugtypeList";
import Dashboard from "./components/Dashboard";

import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  createMuiTheme,
} from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import farsiMessages from "ra-language-farsi";
import polyglotI18nProvider from "ra-i18n-polyglot";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import RoomList from "./components/roomList";
import RoomEdit from "./components/roomEdit";
import RoomCreate from "./components/roomCreate";
import EquipmentList from "./components/equipmentList";
import EquipmentEdit from "./components/equipmentEdit";
import EquipmentCreate from "./components/equipmentCreate";
import RoomShow from "./components/roomShow";

import TitilliumWeb from "./iransans.ttf";

const titilliumWeb = {
  fontFamily: "TitilliumWeb",
  fontStyle: "semi-bold",
  fontDisplay: "swap",
  fontWeight: "600",
  src: `
   local('TitillumWeb'),
   local('TitillumWeb-SemiBold'),
   url(${TitilliumWeb}) format('ttf')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const messages = {
  fa: farsiMessages,
};
const i18nProvider = polyglotI18nProvider((locale) => messages[locale], "fa");

const dataProvider = DataProvider("http://localhost:8080");
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = {
  direction: "rtl",
  typography: {
    fontFamily: [ "TitilliumWeb", "Roboto"].join(","),
  },
  palette: {
    // type: "dark", // Switching the dark mode on is a single property value change.
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  link: {
    fontWeight: 600,
    color: deepPurple,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [titilliumWeb],
      },
    },
  },

  isRtl: true,
};
const themeWithDirection = createMuiTheme({ ...defaultTheme, ...theme });

function App() {
  return (
    <StylesProvider jss={jss}>
      <Admin
        title="دارو و تجهیزات"
        dataProvider={dataProvider}
        theme={themeWithDirection}
        i18nProvider={i18nProvider}
        disableTelemetry
        dashboard={Dashboard}
      >
        <Resource
          name="store"
          list={StoreList}
          options={{ label: "موجودی انبار دارویی" }}
        />
        <Resource
          name="drugstore"
          list={DrugStoreList}
          options={{ label: "موجودی داروخانه" }}
        />
        <Resource
          name="transaction"
          list={TransactionList}
          show={TransactionShow}
          create={TransactionCreate}
          options={{ label: "ورود و خروج دارو" }}
        />
        <Resource name="Drugs" />
        <Resource
          name="drugtype"
          list={DrugtypeList}
          edit={DrugtypeEdit}
          create={DrugtypeCreate}
          options={{ label: "اشکال دارویی" }}
        />
        <Resource
          name="room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
          options={{ label: "اتاق ها" }}
        />
        <Resource
          name="equipment"
          list={EquipmentList}
          edit={EquipmentEdit}
          create={EquipmentCreate}
          options={{ label: "تجهیزات" }}
        />
      </Admin>
    </StylesProvider>
  );
}

export default App;
