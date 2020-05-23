<template>
	<div class="text-center">
        <v-sheet
            class="mx-auto"
            max-width="1200">

			<v-row no-gutters>
				<v-col
					cols="12"
					class="pa-2"
				>
					<h5><i>Tech Expert</i></h5>
					<h1>{{ $route.params.uname }}</h1>
					<p>
						Hello, I’m a Full Stack Developer from Philippines. I'm currently a Master Student in Qatar University.
					</p>
				</v-col>
			</v-row>

			<v-row no-gutters>
				<v-col
					cols="6"
					md="4"
				>
					<v-card
						class="pa-4 transparent"
						flat
					>
						<v-img
							height="500"
							aspect-ratio="1.7"
							class="grey darken-4"
							src="/joseph_headshot.jpg" />
					</v-card>
				</v-col>

				<v-col
					cols="6"
					md="4"
				>
					<v-card
						class="pa-2 text-justify"
						flat
						tile
					>
						<h4 class="pa-2 text-center">PROFFESIONAL PROFILE</h4>
							<p>
								I have been crafting beautiful websites, launching stunning brands and making clients happy for years.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
							</p>
							<p>
								Praesent sit amet massa suscipit, auctor sapien non, egestas felis. Maecenas mattis aliquet est vitae dignissim. Suspendisse aliquam lacus mauris, id placerat felis faucibus quis. Suspendisse potenti. Etiam mattis, eros id porta iaculis, nisl purus dapibus leo, a lacinia tellus nunc sed nunc. faucibus quis. Suspendisse id porta iaculis.
							</p>
					</v-card>
				</v-col>

				<v-col
					cols="12"
					md="4"
				>
					<v-card
						class="pa-2 text-left"
						flat
						tile
					>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-title>
									<strong>Name:</strong> Joseph Legere
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-title>
									<strong>Date of Birth:</strong> April 2, 1993
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-title>
									<strong>Email:</strong> josephrlegere@gmail.com
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-col>
			</v-row>
		</v-sheet>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>