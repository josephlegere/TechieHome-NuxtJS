<template>
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			clipped
			fixed
			app
			disable-resize-watcher
		>
			<v-list>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar
			class="teal accent-4"
			dark
			clipped-left
			fixed
			app
		>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none" />

			<v-btn icon nuxt to="/">
				<v-avatar color="white" size="35">
					<v-img src="/Logo.png" alt="TechieHome"></v-img>
				</v-avatar>
			</v-btn>

			<v-tabs class="d-none d-md-block">
				<v-tab
					v-for="(item, i) in items" :key="i"
					:to="item.to"
					router
					exact>
					{{item.title}}
				</v-tab>
			</v-tabs>

			<v-spacer />

			<v-btn
				icon
				@click.stop="rightDrawer = !rightDrawer"
			>
				<v-badge
					:content="bag.length"
					:value="bag.length"
					color="grey darken-4 font-weight-black"
					overlap
				>
					<v-icon>mdi-account-circle-outline</v-icon>
				</v-badge>
			</v-btn>
		</v-app-bar>

		<v-main>
			<v-container>
			<nuxt />
			</v-container>
		</v-main>

		<v-navigation-drawer
			v-model="rightDrawer"
			:right="right"
			temporary
			fixed
		>
			<v-list>
				<v-list-item>
					<i>"Nothing to see here. Under construction!"</i>
				</v-list-item>
				<!-- <v-list-item @click.native="right = !right">
					<v-list-item-action>
						<v-icon light>
							mdi-repeat
						</v-icon>
					</v-list-item-action>
					<v-list-item-title>Switch drawer (click me)</v-list-item-title>
				</v-list-item>
				<v-list-item>
					<v-list-item-action>
						<v-btn
							@click="bag = []"
						>
							Clear
						</v-btn>
					</v-list-item-action>
				</v-list-item> -->
			</v-list>
		</v-navigation-drawer>

		<v-footer
			fixed
			app
		>
			<span>&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data () {
		return {
			drawer: false,
			bag: [],
			items: [
				{
					icon: 'mdi-home',
					title: 'Techie Home',
					to: '/'
				},
				{
					icon: 'mdi-post-outline',
					title: 'Posts',
					to: '/posts'
				},
				// {
				// 	icon: 'mdi-devices',
				// 	title: 'Shop',
				// 	to: '/shop'
				// },
				{
					icon: 'mdi-account-hard-hat',
					title: 'Tech-xperts',
					to: '/tech-xperts'
				}
			],
			right: true,
			rightDrawer: false,
			title: 'TechieHome',
		}
	},
	created() {
		this.$nuxt.$on('add-to-cart', productItem => {
			this.bag.push(productItem);
		});
	}
}
</script>

<style>
    .markdown span * {
        position:               relative;
        width:                  100%;
    }
</style>