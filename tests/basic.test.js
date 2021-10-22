import { Selector } from 'testcafe'
import FirstPage from '../pom/pages/FirstPage'
import LoginPage from '../pom/pages/LoginPage'
import { CREDENTIALS } from '../pom/data/Constants'

// prettier-ignore
fixture`getting Started with Testcafe`
    .page `https://todoist.com/users/showlogin`

	.before(async t => {
		//test setup goes here
		// await run database reset()
		// await SendTestData()
	})
	.beforeEach(async t => {
		await t.setTestSpeed(0.5)
	})
	.after(async t => {
		//cleaning test data
		// logging and sending data to monitoring systems
	})
	.afterEach(async t => {
		//runs after each test
	})

test('Login to Todoist App with Mail and password', async t => {
	const email = Selector(`#email`)
	const password = Selector(`#password`)
	const submitButton = Selector(`.submit_btn`)
	const leftMenu = Selector(`#left_menu`)

	await t.typeText(FirstPage.loginButton)
	await t.typeText(LoginPage.emailInput, CREDENTIALS.MYUSER.USERNAME)
	await t.typeText(LoginPage.PasswordInput, CREDENTIALS.MYUSER.PASSWORD)
	await t.click(LoginPage.submitButton)
	await t.expect(leftMenu.visible).ok
})
