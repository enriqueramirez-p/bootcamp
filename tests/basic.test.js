import { Selector } from 'testcafe'
import FirstPage from '../pom/pages/FirstPage'
import LoginPage from '../pom/pages/LoginPage'
import { CREDENTIALS, URLS } from '../pom/data/Constants'
import { MYUSER } from '../pom/data/Roles'

// prettier-ignore
fixture`getting Started with Testcafe`
    .page `${URL.MAINURL}`

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
	await t.typeText(FirstPage.loginButton)
	await t.useRole(MYUSER)
	await t.expect(HomePage.leftMenu.visible).ok
})
