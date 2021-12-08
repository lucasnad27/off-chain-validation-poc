<script>
	import * as jose from 'jose';

	let signedPayload = "";
	async function validatePayload() {
		const response = await fetch('/api/validate-name', {
			method: 'POST'
		});
		return response.json();
	}

	async function buttonClicked(event) {
		const result = await validatePayload();
		signedPayload = result.payload;
	}

	async function copyClicked(event) {
		const clipText = document.getElementById("signedPayload");
		navigator.clipboard.writeText(clipText.innerHTML);
	}
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>off-chain-validation-poc</h1>
<button on:click={buttonClicked} class="bg-blue-900 text-white p-2 bg-white rounded-xl shadow-lg w-64">Get a validated payload</button>
<div class:invisible={!signedPayload} class="p-6 bg-white rounded-xl shadow-lg max-w-lg text-gray-500">
	<p id="signedPayload" class="text-black max-w-lg truncate">{signedPayload}</p>
	<svg on:click={copyClicked} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
	</svg>
	<p>Now go to <a href="https://jwt.io">jwt.io</a> and paste in the jwt. If you'd like to verify that this was signed by your own private key, paste the associated public key for 3rd party verification.</p>
</div>
<p>Visit <a href="https://github.com/lucasnad27/off-chain-validation-poc">github</a> to read the documentation</p>
