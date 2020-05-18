<template>
	<v-layout
	column
	justify-center
	align-center
	>
		<v-flex
			xs12
			sm8
			md6
		>
			<div class="text-center">
				<logo />
				<logo-tech />
			</div>

			<h1 class="text-center">Techie Home</h1>
			<h3 class="text-center"><i>"The Home for Home Automation"</i></h3>
			
			<site-highlights :items="highlights" />
			<site-trends :items="trends" />

        	<v-container>
				<v-row>
					<v-col cols="12" md="9">
						<landing-posts :recents="posts" />
					</v-col>
					<v-col cols="12" md="3">
						<h3 class="text-center">The Team</h3>
						<v-row>

							<v-col
								cols="12"
								v-for="(member, i) in team"
								:key="i"
							>
								<v-card
									class="align-center"
								>
									<v-img
										:src="member.img"
									/>
									<v-card-text>
										{{member.name}} {{member.credentials}} {{member.expertise}}
									</v-card-text>
								</v-card>
							</v-col>

						</v-row>
					</v-col>
				</v-row>
        	</v-container>

			<v-card>
				<v-card-title class="headline">
					Welcome to the Vuetify + Nuxt.js template
				</v-card-title>
				<v-card-text>
					<p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
					<p>
						For more information on Vuetify, check out the <a
							href="https://vuetifyjs.com"
							target="_blank"
						>
							documentation
						</a>.
					</p>
					<p>
						If you have questions, please join the official <a
							href="https://chat.vuetifyjs.com/"
							target="_blank"
							title="chat"
						>
							discord
						</a>.
					</p>
					<p>
						Find a bug? Report it on the github <a
							href="https://github.com/vuetifyjs/vuetify/issues"
							target="_blank"
							title="contribute"
						>
							issue board
						</a>.
					</p>
					<p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
					<div class="text-xs-right">
					<em><small>&mdash; John Leider</small></em>
					</div>
					<hr class="my-3">
					<a
					href="https://nuxtjs.org/"
					target="_blank"
					>
					Nuxt Documentation
					</a>
					<br>
					<a
					href="https://github.com/nuxt/nuxt.js"
					target="_blank"
					>
					Nuxt GitHub
					</a>
				</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn
					color="primary"
					nuxt
					to="/inspire"
					>
					Continue
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LogoTech from '~/components/LogoTech.vue'
import SiteHighlights from '~/components/SiteHighlights';
import SiteTrends from '~/components/SiteTrends';
import LandingPosts from '~/components/LandingPosts';

export default {
	data() {
		return {
			highlights: [
				{
					img: '/BG_1.jpg',
					title: 'Title 1',
					summary: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
				},
				{
					img: '/BG_2.jpg',
					title: 'Title 2',
					summary: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
				},
				{
					img: '/BG_3.jpg',
					title: 'Title 3',
					summary: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
				}
			],
			trends: [
				{
					img: '/BG_1.jpg',
					title: 'Tech-xpert Arman'
				},
				{
					img: '/BG_2.jpg',
					title: 'Tech-xpert Joseph'
				},
				{
					img: '/BG_3.jpg',
					title: 'Most Read Blog'
				},
				{
					img: '/BG_3.jpg',
					title: 'Shop for Devices'
				}
			],
			team: [
				{
					img: '/BG_1.jpg',
					name: 'Joseph Legere.',
					credentials: 'BS IT FEU Makati, MS Student QU.',
					expertise: 'Full Stack Development, Cloud.'
				},
				{
					img: '/BG_2.jpg',
					name: 'Arman Satuito.',
					credentials: 'BS Elect Eng. U of PHS Las Pinas.',
					expertise: 'Home Automation.'
				}
			],
			posts: [
				{
					img: '/BG_1.jpg',
					title: 'Title 1',
					summary: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
				},
				{
					img: '/BG_2.jpg',
					title: 'Title 2',
					summary: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
				},
				{
					img: '/BG_3.jpg',
					title: 'Title 3',
					summary: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
				}
			]
		}
	},
	components: {
		Logo,
		LogoTech,
		SiteHighlights,
		SiteTrends,
		LandingPosts
	}
}
</script>
