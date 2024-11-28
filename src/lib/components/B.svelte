<script lang="ts">
	import C from './C.svelte'
	import type { PageData } from '../../routes/secret/$types'

	let { user }: PageData = $props()
</script>

<div class="outline">
	<div class="label">B</div>
	<C {user} />
</div>
