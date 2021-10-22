import { Selector } from 'tescafe'

class LoginPage {
	constructor() {
		this.emailInput = Selector(`#email`)
		this.PasswordInput = Selector(`#password`)
		this.submitButton = Selector(`.submit_btn`)
	}
}

export default new LoginPage()
