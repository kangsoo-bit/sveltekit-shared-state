<script lang="ts">
	import A from '$lib/components/A.svelte'

	let { data } = $props()

	console.log(data.kangsookim)
</script>

<A user={data.user} />
