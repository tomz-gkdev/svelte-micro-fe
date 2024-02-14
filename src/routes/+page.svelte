<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';

	let localStorageTokenSvelte: any = null;
	let cookieTokenSvelte: any = null;
	// let localStorageTokenFromNext: any = null;
	// let cookieTokenFromNext: any = null;
	let localStorageTokenEmerge: any = null;
	let cookieTokenFromEmerge: any = null;

	onMount(() => {
		// SET TOKEN INTO LOCALSTORAGE AND COOKIE BY SVELTE
		localStorage.setItem('auth_token_from_svelte', 'localStorage_token_by_svelte_3333333333');
		const tokenOfSvelte = localStorage.getItem('auth_token_from_svelte');
		if (tokenOfSvelte) {
			localStorageTokenSvelte = tokenOfSvelte;
		}
		Cookies.set('cookie_auth_token_from_svelte', 'cookie_token_by_svelte_444444444');
		cookieTokenSvelte = Cookies.get('cookie_auth_token_from_svelte');

		// GET TOKEN FROM NEXT
		// const fromNext = localStorage.getItem('auth_token_from_next');
		// if (fromNext) {
		// 	localStorageTokenFromNext = fromNext;
		// }
		// cookieTokenFromNext = Cookies.get('cookie_auth_token_from_next');

		// GET TOKEN FROM EMERGE STAGING
		const fromEmerge = localStorage.getItem('token');
		if (fromEmerge) {
			localStorageTokenEmerge = fromEmerge;
		}
		cookieTokenFromEmerge = Cookies.get('rl_user_id');
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Token set into localStorage by Svelte:::: <strong>{localStorageTokenSvelte}</strong>
	</h1>
	<h1>
		Token set into Cookie by Svelte::::{' '}
		<strong>{cookieTokenSvelte}</strong>
	</h1>
	<!-- <h1>================================</h1>
	<h3>
		Token from Next (LocalStorage)::::{' '}
		<strong>{localStorageTokenFromNext || 'n/a'}</strong>
	</h3>
	<h3>
		Token from Next (Cookie)::::{' '}
		<strong>{cookieTokenFromNext || 'n/a'}</strong>
	</h3> -->
	<h1>================================</h1>
	<h3>
		Token from Emerge (LocalStorage)::::{' '}
		<strong>{localStorageTokenEmerge || 'n/a'}</strong>
	</h3>
	<h3>
		Token from Emerge (Cookie)::::{' '}
		<strong>{cookieTokenFromEmerge || 'n/a'}</strong>
	</h3>
	<a href="/">Go to Emerge</a>
</section>

<style>
</style>
