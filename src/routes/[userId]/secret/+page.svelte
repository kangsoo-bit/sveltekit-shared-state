<script lang="ts">
	import A from '$lib/components/A.svelte'

	let { data } = $props()
</script>

<A user={data.user} />
