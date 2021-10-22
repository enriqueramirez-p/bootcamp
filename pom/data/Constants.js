import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
	MYUSER: {
		USERNAME: process.env.MYUSER_USERNAME,
		PASSWORD: process.env.MYUSER_PASSWORD,
	},
}
