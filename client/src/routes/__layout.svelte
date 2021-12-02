<script>
	import Header from '$lib/header/Header.svelte';
	import '../tailwind.css';
	import '../app.css';
</script>

<div>
	<Header />
	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<!-- Replace with your content -->
			<div class="px-4 py-6 sm:px-0">
				<div class="border-4 border-dashed border-gray-200 rounded-lg">
					<slot />
				</div>
			</div>
			<!-- /End replace -->
		</div>
	</main>
	<footer class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
		<p>Visit <a href="https://electricocean.io">electric ocean</a> to contact the developer</p>
	</footer>
</div>
