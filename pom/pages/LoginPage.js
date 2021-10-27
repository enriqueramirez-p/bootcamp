import { Selector, t } from "testcafe";

class LoginPage {
  constructor() {
    this.emailInput = Selector(`#email`);
    this.PasswordInput = Selector(`#password`);
    this.submitButton = Selector(`.submit_btn`);
    this.errorMessage = Selector(".error_msg")
    //.withText("Log in");

  }

  async submitLoginForm(username, password) {
    await t.typeText(this.emailInput, username);
    await t.typeText(this.PasswordInput, password);
    await t.click(this.submitButton);
  }
}

export default new LoginPage;
