import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
	MAINURL: 'https://todoist.com/',
}

export const CREDENTIALS = {
	MYUSER: {
		USERNAME: process.env.MYUSER_USERNAME,
		PASSWORD: process.env.MYUSER_PASSWORD,
	},

	BAD_USER: {
		USERNAME: 'led@led.com',
		PASSWORD: 'deck'
	},

	NULL_USER: {
		USERNAME: '',
		PASSWORD: ''
	},
}


export const MESSAGES = {
	ERROR_MESSAGES: {
		INVALID_EMAIL: 'Invalid email address.',
		INVALID_PASSWORD: 'Blank password.',
		WRONG_EMAIL_OR_PASSWORD: 'Wrong email or password.'
	},
}
