import { Role } from "testcafe";
import { URLS, CREDENTIALS } from "./Constants";
import LoginPage from "../pages/LoginPage";
import FirstPage from "../pages/FirstPage";

export const MYUSER = Role(URLS.MAINURL, async t => { 
  await t.click(FirstPage.loginButton);
  await LoginPage.submitLoginForm(CREDENTIALS.MYUSER.USERNAME, CREDENTIALS.MYUSER.PASSWORD );
  },
  { preserveUrl: true }
);
