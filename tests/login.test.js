import HomePage from "../pom/pages/HomePage";
import { URLS, CREDENTIALS, MESSAGES } from "../pom/data/Constants";
import { MYUSER } from "../pom/data/Roles";
import FirstPage from "../pom/pages/FirstPage";
import LoginPage from "../pom/pages/LoginPage";

// prettier-ignore
fixture`getting Started with Testcafe`
    .page `${URLS.MAINURL}`

	.beforeEach(async t => {
		//await t.useRole(MYUSER);
		// await t.setTestSpeed(0.5)
	})


	.afterEach(async t => {
		//runs after each test
		await t.wait(1500)
	})

test("Login to Todoist App with Mail and password", async (t) => {
	await t.useRole(MYUSER);	
  //await t.click(FirstPage.loginButton)
 // await LoginPage.submitLoginForm(CREDENTIALS.MYUSER.USERNAME, CREDENTIALS.MYUSER.PASSWORD )
  	await t.expect(HomePage.leftMenu.exists).ok();
});

test(" Try to login into todoist with a invalid username", async (t) => {
	await t.click(FirstPage.loginButton)
    await LoginPage.submitLoginForm(CREDENTIALS.BAD_USER.USERNAME, CREDENTIALS.MYUSER.PASSWORD );
	await t.expect(LoginPage.errorMessage.innerText).contains(MESSAGES.ERROR_MESSAGES.WRONG_EMAIL_OR_PASSWORD);
  });

  test(" Try to login into todoist with a blank username and password", async (t) => {
	await t.click(FirstPage.loginButton)
    await t.click(`.submit_btn`);
	await t.expect(LoginPage.errorMessage.innerText).contains(MESSAGES.ERROR_MESSAGES.INVALID_EMAIL);
  });

  test(" Try to login into todoist with a blank password", async (t) => {
	await t.click(FirstPage.loginButton)
  //  await LoginPage.submitLoginForm(CREDENTIALS.BAD_USER.USERNAME, '' );
	await t.typeText(`#email`, CREDENTIALS.BAD_USER.USERNAME);
	await t.click(`.submit_btn`);
	await t.expect(LoginPage.errorMessage.innerText).contains(MESSAGES.ERROR_MESSAGES.INVALID_PASSWORD);
  });
