import { Selector } from "testcafe";

class FirstPage {
  constructor() {
    this.loginButton = Selector("._2q_cf").withText("Log in");
  }
}

export default new FirstPage;
