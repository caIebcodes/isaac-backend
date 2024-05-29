import { Request, Response } from 'express'
import { getToken } from './token'

export default async function callback(
	req: Request,
	res: Response
): Promise<void> {
	const code: string | null = String(req.query.code)

	if (code) {
		let query = {
			access_token: '',
			refresh_token: '',
			gen_time: 0,
		}
		try {
			await getToken(code).then((r: any) => {
				query.access_token = r.access_token
				query.refresh_token = r.refresh_token
				query.gen_time = r.gen_time
			})
		} catch (err) {
			res.status(401).json({
				status: 'error',
				message: err,
			})
		}

		process.env.PRODUCTION?.toLowerCase() == 'true'
			? res.redirect(
					`https://isaac.durev.net/auth?token=${query.access_token}&refresh_token=${query.refresh_token}&gen_time=${query.gen_time}`
			  )
			: res.redirect(
					`http://localhost:3000/auth?access_token=${query.access_token}&refresh_token=${query.refresh_token}&gen_time=${query.gen_time}`
			  )
	}
	//
	else
		res.status(401).json({
			status: 'error',
			message: 'Could not authenticate. Please try again',
		})
}
