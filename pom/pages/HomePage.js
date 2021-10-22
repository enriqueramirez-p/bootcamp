import { Selector } from 'tescafe'

class HomePage {
	constructor() {
		this.leftMenu = Selector(`#left_menu`)
	}
}

export default new HomePage()
