import { redirect } from '@sveltejs/kit'

export async function load(event) {
	if (!event.locals.user) {
		return redirect(302, '/auth/login')
	}
	return { 
		user: event.locals.user, 
		kangsookim: event.locals.kangsookim 
	}
}
