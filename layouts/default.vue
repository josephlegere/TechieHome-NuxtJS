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
				<v-icon>mdi-menu</v-icon>
			</v-btn>
		</v-app-bar>

		<v-content>
			<v-container>
			<nuxt />
			</v-container>
		</v-content>

		<v-navigation-drawer
			v-model="rightDrawer"
			:right="right"
			temporary
			fixed
		>
			<v-list>
			<v-list-item @click.native="right = !right">
				<v-list-item-action>
				<v-icon light>
					mdi-repeat
				</v-icon>
				</v-list-item-action>
				<v-list-item-title>Switch drawer (click me)</v-list-item-title>
			</v-list-item>
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
        {
          icon: 'mdi-account-hard-hat',
          title: 'Tech-xperts',
          to: '/inspire'
        }
      ],
      right: true,
      rightDrawer: false,
      title: 'TechieHome'
    }
  }
}
</script>
