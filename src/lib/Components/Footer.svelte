<script lang="ts">
	import * as prismic from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import SocialSheet from './SocialSheet.svelte';
	interface Props {
		logo?: prismic.ImageField;
		site_name?: prismic.KeyTextField;
		description?: prismic.KeyTextField;
		socials?: prismic.GroupField<{
			platform: prismic.SelectField<'Twitter' | 'LinkedIn' | 'GitHub' | 'Facebook' | 'Instagram'>;
			url: prismic.LinkField;
		}>;
		sections?: prismic.GroupField<{
			title: prismic.KeyTextField;
			links: prismic.GroupField<{
				label: prismic.KeyTextField;
				url: prismic.LinkField;
			}>;
		}>;
		legal_text?: prismic.KeyTextField;
	}

	const { logo, site_name, description, socials = [], sections = [], legal_text }: Props = $props();
</script>

<footer class="bg-secondary">
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<div class="text-background flex items-center">
					<PrismicImage field={logo} class="h-9 w-auto" />
					<span class="ml-2 text-2xl">{site_name}</span>
				</div>
				<p class="text-sm/6 text-balance text-gray-400">{description}</p>

				<!-- Socials -->
				<SocialSheet />
			</div>

			<!-- Sections -->
			<div class="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 xl:col-span-2 xl:mt-0">
				{#each sections as section}
					<div>
						<h3 class="text-sm/6 font-semibold text-white">{section.title}</h3>
						<ul class="mt-6 space-y-4">
							{#each section.links as link}
								<li>
									<PrismicLink field={link.url} class="text-sm/6 text-gray-400 hover:text-gray-300"
										>{link.label}</PrismicLink
									>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-sm/6 text-gray-400">&copy; {new Date().getFullYear()} {legal_text}</p>
		</div>
	</div>
</footer>
