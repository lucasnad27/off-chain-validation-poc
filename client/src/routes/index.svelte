<script context="module">
	export const prerender = true;
</script>

<script>
	let superSecret = "";
	async function getValidation() {
		const url = 'http://localhost:8787';
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json()
	}

	async function buttonClicked(event) {
		const result = await getValidation();
		superSecret = result.specialsecret;
	}
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>off-chain-validation-poc</h1>
<button on:click={buttonClicked} class="bg-blue-900 text-white">Click me</button>
<p class:invisibile={!superSecret}>{superSecret}</p>
<p>Visit <a href="https://github.com/lucasnad27/off-chain-validation-poc">github</a> to read the documentation</p>
