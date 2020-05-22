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
									nuxt
									:to="'/tech-xperts/' + member.uname"
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
		</v-flex>
	</v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue';
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
					title: 'Tech-xpert Arman',
					url: '/tech-xperts/Arman'
				},
				{
					img: '/BG_1.jpg',
					title: 'Tech-xpert Joseph',
					url: '/tech-xperts/Joseph'
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
					uname: 'Joseph',
					img: '/joseph_headshot.jpg',
					name: 'Joseph Legere.',
					credentials: 'BS IT FEU Makati, MS Student QU.',
					expertise: 'Full Stack Development, Cloud.'
				},
				{
					uname: 'Arman',
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
		SiteHighlights,
		SiteTrends,
		LandingPosts
	}
}
</script>
