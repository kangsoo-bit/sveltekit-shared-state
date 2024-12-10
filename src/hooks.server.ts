import type { Handle } from '@sveltejs/kit'
import * as auth from '$lib/server/auth.js'

const handleAuth: Handle = async ({ event, resolve }) => {

	console.log('event.url.pathname', event.url.pathname)

	const splitURL = event.url.pathname.toString().split("/")
	if(splitURL.length > 1) {
		console.log('splitURL[1]', splitURL[1])
	}

	// const sessionToken = event.cookies.get(auth.sessionCookieName)
	const sessionToken = splitURL[1]
	console.log('auth.sessionCookieName', auth.sessionCookieName)
	if (!sessionToken) {
		event.locals.user = null
		event.locals.session = null
		return resolve(event)
	}

	const { session, user } = await auth.validateSessionToken(sessionToken)
	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt)
	} else {
		auth.deleteSessionTokenCookie(event)
	}

	event.locals.user = user
	console.log('event.locals.user', user)
	event.locals.session = session
	console.log('event.locals.session', session)
	event.locals.kangsookim = 'kangsookim'


	return resolve(event)
}

export const handle: Handle = handleAuth
