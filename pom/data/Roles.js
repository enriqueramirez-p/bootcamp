import { Role } from 'testcafe'
import { URLS, CREDENTIALS } from './Constants'
import { LoginPage } from '../pages/LoginPage'

export const MYUSER = Role(
	URLS.MAINURL,
	async t => {
		await LoginPage.submitLoginForm(
			CREDENTIALS.MYUSER.USERNAME,
			CREDENTIALS.MYUSER.PASSWORD
		)
	},
	{ preserveUrl: true }
)
