import HomePage from "../pom/pages/HomePage";
import { URLS } from "../pom/data/Constants";
import { MYUSER } from "../pom/data/Roles";

// prettier-ignore
fixture`getting Started with Testcafe`
    .page `${URLS.MAINURL}`

	.beforeEach(async t => {
		await t.useRole(MYUSER);
		// await t.setTestSpeed(0.5)
	})


	.afterEach(async t => {
		//runs after each test
		await t.wait(1500)
	})

test("Login to Todoist App with Mail and password", async (t) => {
  //await t.click(FirstPage.loginButton);
 // await LoginPage.submitLoginForm(CREDENTIALS.MYUSER.USERNAME, CREDENTIALS.MYUSER.PASSWORD );
  
  await t.expect(HomePage.leftMenu.exists).ok();
});
