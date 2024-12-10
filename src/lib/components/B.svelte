<script lang="ts">
	import C from './C.svelte'
	import type { PageData } from '../../routes/secret/$types'

	let { user }: PageData = $props()
</script>

<div class="outline">
	<div class="label">B</div>
	<h1 class="label">Hi, {user.username}!</h1>
	<p class="label">Your user ID is {user.id}.</p>

	<C {user} />
</div>
