<script lang="ts">
	let { children } = $props()
</script>

<svelte:head>
	<title>Shared State</title>
</svelte:head>

{@render children?.()}

<style>
	@import url(https://fonts.bunny.net/css?family=atkinson-hyperlegible:400,700);

	:global {
		@import 'open-props/style';
		@import 'open-props/normalize';
		@import 'open-props/buttons';

		:root {
			--surface-1: #1b1e28;
			--font-system-ui: 'Atkinson Hyperlegible', sans-serif;
			--font-monospace-code: 'Atkinson Hyperlegible', monospace;
		}

		body {
			display: grid;
			place-content: center;
			gap: var(--size-8);
		}

		.outline {
			padding: var(--size-8);
			outline: 1px solid #fff;
			border-radius: var(--radius-2);

			.label {
				font-size: var(--font-size-6);
				font-weight: 700;
			}
		}

		pre {
			font-size: var(--font-size-4);
			color: chartreuse;
		}

		.label {
			font-size: var(--font-size-4);
			color: chartreuse;
		}

	}
</style>
