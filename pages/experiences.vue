<template>
  <v-layout column align-center>
    <v-flex xs12 sm8 md6>
      <h1>Experiences</h1>

      <v-card
        v-for="experience in Experiences"
        :key="experience.title"
        class="mx-auto"
        max-width="800"
      >
        <v-img :src="experience.image" height="200px"></v-img>

        <v-card-title>{{experience.title}}</v-card-title>

        <v-card-subtitle>{{experience.company}}</v-card-subtitle>

        <v-card-actions>
          <v-btn text>Share</v-btn>

          <v-btn color="blue" text>Explore</v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="experience.show = !experience.show">
            <v-icon>{{ experience.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="experience.show">
            <v-divider></v-divider>

            <v-card-text>{{experience.description}}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    Experiences: [
      {
        title: "Cybersecurity and Automation Intern",
        company: "NetApp",
        image:
          "https://www.lockheedmartin.com/content/dam/lockheed-martin/eo/photo/suppliers/cybersecurity-masthead.jpg.pc-adaptive.full.medium.jpeg",
        description:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        show: false,
      },
    ],
  }),
};
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>