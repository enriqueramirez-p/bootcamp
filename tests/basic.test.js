import { Selector } from 'testcafe'

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

test('My first solo testcafetest', async t => {
	const email = Selector(`#email`)
	const password = Selector(`#password`)
	const submitButton = Selector(`.submit_btn`)
	const leftMenu = Selector(`#left_menu`)

	await t.typeText(email, 'coca_noki@hotmail.com')
	await t.typeText(password, 'Noki512@')
	await t.click(submitButton)
	await t.expect(leftMenu.visible).ok
})
