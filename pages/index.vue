<template>
	<v-row
		no-gutters=""
		column
		justify-center
		align-center
	>
		<v-col
			xs12
			sm8
			md6
		>
			<v-sheet
				class="mx-auto"
				max-width="1200">

				<v-carousel
					cycle
					height="300"
					hide-delimiter-background
					:show-arrows="false"
				>
					<v-carousel-item
						v-for="(banner, i) in banners"
						:key="i"
					>
						<v-sheet
							v-if="banner.DisplayType === 'TextSlogan'"
							:color="banner.BackgroundColor"
							height="100%"
						>
							<v-row
								class="fill-height"
								align="center"
								justify="center"
							>
								<div class="display-3">{{ banner.Caption }}</div>
							</v-row>
						</v-sheet>
						<v-sheet
							v-else-if="banner.DisplayType === 'ImageBanner'"
							height="100%"
							class="transparent"
						>
							<v-row
								align="center"
								justify="center"
							>
								<v-card
									light
									flat
								>
									<v-img
										:src="banner.GraphicImage.url"
										class="transparent banner-image"
										position="top"
										height="300"
										width="1161"
									></v-img>
								</v-card>
								<div class="display-3">{{ banner.Caption }}</div>
							</v-row>
						</v-sheet>
						<v-sheet
							v-else
							height="100%"
						>
							<v-row
								class="fill-height"
								align="center"
								justify="center"
							>
								<div class="display-3">{{ banner.Caption }}</div>
							</v-row>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>

				<!-- <div class="text-center">
					<logo />
				</div>

				<h1 class="text-center">Techie Home</h1>
				<h3 class="text-center"><i>"The Home for Home Automation"</i></h3> -->
				
				<site-highlights :items="highlights" />
				<site-trends :items="trends" />

				<v-container>
					<v-row>
						<v-col cols="12" md="9">
							<landing-posts :recents="sortPosts" />
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
			</v-sheet>
		</v-col>
	</v-row>
</template>

<script>
import _ from "lodash";

import Logo from '~/components/Logo.vue';
import SiteHighlights from '~/components/SiteHighlights';
import SiteTrends from '~/components/SiteTrends';
import LandingPosts from '~/components/LandingPosts';

import { mapState } from 'vuex';

export default {
	data() {
		return {
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
			]
		}
	},
	methods: {
		compare(a, b) {
			let postA = new Date(a.createdAt);
			let postB = new Date(b.createdAt);

			let comparison = 0;
			if (postA.getTime() > postB.getTime()) {
				comparison = -1;
			} else if (postA.getTime() < postB.getTime()) {
				comparison = 1;
			}

			return comparison;
		}
	},
	computed: {
		...mapState({
			posts: state => state.posts.list,
			highlights: state => state.highlights.list,
			banners: state => state.banners.list
		}),
		sortPosts() {
			let _posts = _.cloneDeep(this.posts);
			return _posts.sort(this.compare);
		}
	},
	async asyncData({store}) {
		await store.dispatch('banners/get');
		await store.dispatch('highlights/get');
		await store.dispatch('posts/get');
	},
	components: {
		Logo,
		SiteHighlights,
		SiteTrends,
		LandingPosts
	}
}
</script>

<style scoped>
	.banner-image {
		background-size:					auto;
	}
</style>