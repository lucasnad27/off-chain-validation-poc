<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import logo from './svelte-logo.svg';
	import { defaultChainStore, web3, selectedAccount, connected } from 'svelte-web3';

	let address = null;

	async function connect() {
		if (window.ethereum) {
			defaultChainStore.setBrowserProvider();
		}
	}

	onMount(() => {
		connect();
	});

	async function init($web3, $selectedAccount) {
		if ($selectedAccount) {
			console.log($selectedAccount);
		}
	}

	$: address = $selectedAccount;
	$: (async () => init($web3, $selectedAccount))();
	// This should be set based on the current active route
	let current = 'dashboard';
	let pages = [
		{
			name: 'Home',
			route: '/'
		}
	];
	let profileOptionsVisible = false;

	function handleProfileClick() {
		profileOptionsVisible = !profileOptionsVisible;
	}
</script>

<nav class="bg-yellow-400">
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-16">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<svg
						class="hidden h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<img class="block lg:hidden h-8 w-auto" src={logo} alt="Workflow" />
					<img class="hidden lg:block h-8 w-auto" src={logo} alt="Workflow" />
				</div>
				<!-- End Mobile menu button -->
				<!-- Menu items -->
				<div class="hidden sm:block sm:ml-6">
					<div class="flex space-x-4">
						{#each pages as page}
							<a
								href={page.route}
								class="text-white hover:bg-blue-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								aria-current="page">{page.name}</a
							>
						{/each}
					</div>
				</div>
				<!-- End Menu items -->
			</div>
			<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				{#if $connected}
					<button
						type="button"
						class="bg-yellow-400 p-1 rounded-full text-labelr-secondary hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-400 focus:ring-blue-900"
					>
					<span class="sr-only">View notifications</span>
						<!-- Heroicon name: outline/bell -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
					</button>

					<!-- Profile dropdown -->
					<div class="ml-3 relative">
						<div>
							<button
								type="button"
								on:click={handleProfileClick}
								class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-400 focus:ring-blue-900"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>
						{#if profileOptionsVisible}
							<div
								transition:fade={{ duration: 100 }}
								class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-labelr-secondary ring-1 ring-yellow-400 ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<!-- Active: "bg-gray-100", Not Active: "" -->
								<a
									href="/user/profile"
									class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">{address.substring(0, 5)}... Profile</a
								>
								<a
									href="/user/settings"
									class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-1">Settings</a
								>
								<a
									href="/disconnect"
									class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-2">Disconnect</a
								>
							</div>
						{/if}
					</div>
					<!-- {:else if $connected === false}
          <button class="text-2xl bg-red-400 text-white py-2 px-6 rounded shadow-lg relative active:top-0.5" on:click={connect}>
            Connect Wallet
          </button> -->
				{/if}
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="px-2 pt-2 pb-3 space-y-1">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<a href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page"
				>Home</a
			>
		</div>
	</div>
</nav>
