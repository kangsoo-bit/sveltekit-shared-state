import { user } from '$lib/user/user.svelte.js'

export async function load(event) {
	// user.set(event.data.user)
	return  event.data

}
