<script lang="ts">
	import { i18n } from '@r2digisolutions/ui';
	import '../app.css';

	let { children, data } = $props();

	i18n.init({
		language: data.language,
		translations: data.translations
	});
</script>

{@render children()}
