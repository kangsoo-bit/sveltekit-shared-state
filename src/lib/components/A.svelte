<script lang="ts">
	import B from './B.svelte'
	import type { PageData } from '../../routes/secret/$types'

	let { user }: PageData = $props()
</script>

<div class="outline">
	<div class="label">A</div>
	<B {user} />
</div>
