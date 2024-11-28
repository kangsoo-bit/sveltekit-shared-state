<script lang="ts">
	// import { page } from '$app/stores'
	// import type { PageData } from '../../routes/secret/$types'
	import { user } from '$lib/user/user.svelte'

	// let { user }: PageData = $props()
</script>

<div class="outline">
	<div class="label">D</div>

	<pre>{JSON.stringify(user.get(), null, 2)}</pre>

	<!-- <h1>Hi, {user.username}!</h1> -->
	<!-- <p>Your user ID is {user.id}.</p> -->

	<!-- <pre>{JSON.stringify($page.data, null, 2)}</pre> -->
</div>
