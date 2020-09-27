<template>
  <v-layout column align-center>
    <v-flex xs12 sm8 md6>
      <h1>Personal Projects</h1>

      <v-card
        v-for="project in Projects"
        :key="project.title"
        class="mx-auto my-4"
        max-width="800"
      >
        <v-img :src="project.image" height="200px"></v-img>

        <v-card-title>{{ project.title }}</v-card-title>

        <v-card-subtitle>{{ project.group }}</v-card-subtitle>

        <v-card-actions>
          <v-btn color="blue" text :href="project.link" target="_blank"
            >Explore</v-btn
          >
          <v-spacer></v-spacer>

          <v-btn icon @click="project.show = !project.show">
            <v-icon>{{
              project.show ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="project.show">
            <v-divider></v-divider>

            <v-card-text>{{ project.description }}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    Projects: [
      {
        title: "Undergrad Researcher",
        group:
          "Intelligent Interactive Internet of Things Lab - Duke University",
        image: require(""),
        description:
          "Automated functionality to reduce email analysis time which improved efficiency by 20% and saved at least 10 hours weekly. Developed and engineered 3 automation solutions to streamline the workflow of security analysts. Challenge was to increase efficiency as email analysis was consuming the entire work week. Integrated various backend services through APIs and authored technical documentation",
        show: false,
        link: "https://www.github.com/achintya2000",
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