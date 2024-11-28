<script lang="ts">
	import { enhance } from '$app/forms'

	let { form } = $props()
</script>

<h1>Login/Register</h1>

<form method="post" action="?/login" use:enhance>
	<label>
		Username
		<input name="username" />
	</label>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<button>Login</button>
	<button formaction="?/register">Register</button>
</form>

<p style="color: red">{form?.message ?? ''}</p>

<style>
	form {
		display: grid;
		gap: var(--size-2);

		input {
			width: 100%;
		}
	}
</style>
