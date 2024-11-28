<script lang="ts">
	import D from './D.svelte'
	import type { PageData } from '../../routes/secret/$types'

	let { user }: PageData = $props()
</script>

<div class="outline">
	<div class="label">C</div>
	<D {user} />
</div>
