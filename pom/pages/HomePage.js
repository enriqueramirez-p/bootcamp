import { Selector } from "testcafe";

class HomePage {
  constructor() {
    this.leftMenu = Selector(`#left_menu`);
  }
}

export default new HomePage;
