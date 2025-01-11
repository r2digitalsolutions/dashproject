<script lang="ts">
	import { CheckCircle } from 'lucide-svelte';
	let currentStep = 0;
	let projectName = '';
	let adminUsername = '';
	let adminPassword = '';
	let databaseType = 'sqlite';
	let useTypeScript = false;

	const steps = [
		{
			title: 'Bienvenida',
			description: 'Bienvenido al asistente de configuración de tu nuevo proyecto.'
		},
		{
			title: 'Información del Proyecto',
			description: 'Configura la información básica de tu proyecto.'
		},
		{
			title: 'Configuración de Administrador',
			description: 'Configura las credenciales del administrador.'
		},
		{
			title: 'Configuración de Base de Datos',
			description: 'Elige el tipo de base de datos para tu proyecto.'
		},
		{
			title: 'Configuración Adicional',
			description: 'Configura opciones adicionales para tu proyecto.'
		},
		{ title: 'Resumen', description: 'Revisa la configuración de tu proyecto.' }
	];

	function nextStep() {
		if (currentStep < steps.length - 1) {
			currentStep++;
		}
	}

	function prevStep() {
		if (currentStep > 0) {
			currentStep--;
		}
	}

	function submitConfig() {
		// Aquí iría la lógica para enviar la configuración al backend
		console.log('Configuración enviada:', {
			projectName,
			adminUsername,
			adminPassword,
			databaseType,
			useTypeScript
		});
		alert('¡Configuración completada!');
	}
</script>

<div class="flex min-h-screen flex-col justify-center bg-gray-100 py-6 dark:bg-gray-900 sm:py-12">
	<div class="relative py-3 sm:mx-auto sm:max-w-xl">
		<div
			class="to-light-blue-500 dark:from absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-cyan-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"
		></div>
		<div class="relative bg-white px-4 py-10 shadow-lg dark:bg-gray-800 sm:rounded-3xl sm:p-20">
			<div class="mx-auto max-w-md">
				<h2 class="mb-2 text-4xl font-semibold dark:text-gray-300">{steps[currentStep].title}</h2>
				<p class="mb-8 text-lg text-gray-600 dark:text-gray-400">
					{steps[currentStep].description}
				</p>

				{#if currentStep === 0}
					<button
						on:click={nextStep}
						class="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 hover:dark:bg-gray-600"
					>
						Comenzar
					</button>
				{:else if currentStep === 1}
					<div class="mb-4">
						<label
							for="projectName"
							class="block text-sm font-medium text-gray-700 dark:text-gray-300"
							>Nombre del Proyecto</label
						>
						<input
							type="text"
							id="projectName"
							bind:value={projectName}
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
						/>
					</div>
				{:else if currentStep === 2}
					<div class="mb-4">
						<label
							for="adminUsername"
							class="block text-sm font-medium text-gray-700 dark:text-gray-300"
							>Nombre de Usuario Admin</label
						>
						<input
							type="text"
							id="adminUsername"
							bind:value={adminUsername}
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
						/>
					</div>
					<div class="mb-4">
						<label
							for="adminPassword"
							class="block text-sm font-medium text-gray-700 dark:text-gray-300"
							>Contraseña Admin</label
						>
						<input
							type="password"
							id="adminPassword"
							bind:value={adminPassword}
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
						/>
					</div>
				{:else if currentStep === 3}
					<div class="mb-4">
						<label
							for="databaseType"
							class="block text-sm font-medium text-gray-700 dark:text-gray-300"
							>Tipo de Base de Datos</label
						>
						<select
							id="databaseType"
							bind:value={databaseType}
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
						>
							<option value="sqlite">SQLite</option>
							<option value="mysql">MySQL</option>
							<option value="postgresql">PostgreSQL</option>
							<option value="mongodb">MongoDB</option>
						</select>
					</div>
				{:else if currentStep === 4}
					<div class="mb-4">
						<label class="flex items-center">
							<input
								type="checkbox"
								bind:checked={useTypeScript}
								class="form-checkbox h-5 w-5 text-blue-600 dark:border-gray-600 dark:bg-gray-700"
							/>
							<span class="ml-2 text-gray-700 dark:text-gray-300">Usar TypeScript</span>
						</label>
					</div>
				{:else if currentStep === 5}
					<div class="mb-6">
						<div class="space-y-4">
							<div class="flex items-start">
								<CheckCircle class="mr-2 text-green-500" size={20} />
								<div>
									<p class="text-sm font-medium text-gray-700 dark:text-gray-300">
										Nombre del Proyecto
									</p>
									<p class="text-sm text-gray-900 dark:text-gray-400">{projectName}</p>
								</div>
							</div>
							<div class="flex items-start">
								<CheckCircle class="mr-2 text-green-500" size={20} />
								<div>
									<p class="text-sm font-medium text-gray-700 dark:text-gray-300">Usuario Admin</p>
									<p class="text-sm text-gray-900 dark:text-gray-400">{adminUsername}</p>
								</div>
							</div>
							<div class="flex items-start">
								<CheckCircle class="mr-2 text-green-500" size={20} />
								<div>
									<p class="text-sm font-medium text-gray-700 dark:text-gray-300">
										Tipo de Base de Datos
									</p>
									<p class="text-sm text-gray-900 dark:text-gray-400">{databaseType}</p>
								</div>
							</div>
							<div class="flex items-start">
								<CheckCircle class="mr-2 text-green-500" size={20} />
								<div>
									<p class="text-sm font-medium text-gray-700 dark:text-gray-300">
										Usar TypeScript
									</p>
									<p class="text-sm text-gray-900 dark:text-gray-400">
										{useTypeScript ? 'Sí' : 'No'}
									</p>
								</div>
							</div>
						</div>
					</div>
					<button
						on:click={submitConfig}
						class="w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
					>
						Finalizar Configuración
					</button>
				{/if}

				{#if currentStep > 0 && currentStep < 5}
					<div class="mt-8 flex justify-between">
						<button
							on:click={prevStep}
							class="rounded-md bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
						>
							Anterior
						</button>
						<button
							on:click={nextStep}
							class="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 hover:dark:bg-gray-600"
						>
							Siguiente
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
