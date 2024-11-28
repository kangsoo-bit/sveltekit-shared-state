type IUser = { id: string; username: string }

class User {
	id = $state('')
	username = $state('')

	set(user: IUser) {
		this.id = user.id
		this.username = user.username
	}

	get() {
		return { id: this.id, username: this.username }
	}
}

export const user = new User()
