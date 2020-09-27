<template>
  <v-layout column align-center>
    <v-flex xs12 sm8 md6>
      <h1>Experiences</h1>

      <v-card
        v-for="experience in Experiences"
        :key="experience.title"
        class="mx-auto my-4"
        max-width="800"
      >
        <v-img :src="experience.image" height="200px"></v-img>

        <v-card-title>{{ experience.title }}</v-card-title>

        <v-card-subtitle>{{ experience.company }}</v-card-subtitle>

        <v-card-actions>
          <v-btn text>Share</v-btn>

          <v-btn color="blue" text>Explore</v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="experience.show = !experience.show">
            <v-icon>{{
              experience.show ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="experience.show">
            <v-divider></v-divider>

            <v-card-text>{{ experience.description }}</v-card-text>
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
        title: "Undergrad Researcher",
        company:
          "Intelligent Interactive Internet of Things Lab - Duke University",
        image: require("@/static/experience3.png"),
        description:
          "Automated functionality to reduce email analysis time which improved efficiency by 20% and saved at least 10 hours weekly. Developed and engineered 3 automation solutions to streamline the workflow of security analysts. Challenge was to increase efficiency as email analysis was consuming the entire work week. Integrated various backend services through APIs and authored technical documentation",
        show: false,
      },
      {
        title: "Cybersecurity and Automation Intern",
        company: "NetApp",
        image: require("@/static/experience1.jpeg"),
        description:
          "Automated functionality to reduce email analysis time which improved efficiency by 20% and saved at least 10 hours weekly. Developed and engineered 3 automation solutions to streamline the workflow of security analysts. Challenge was to increase efficiency as email analysis was consuming the entire work week. Integrated various backend services through APIs and authored technical documentation",
        show: false,
      },
      {
        title: "Web Development Intern",
        company: "NetApp",
        image: require("@/static/experience2.jpg"),
        description:
          "Spearheaded the development of new front end technologies resulting in improved workflow experiences. Partnered with a global team to overhaul the design of the internal case tracking tool. Improved case tracking efficiency by 70% for Support Engineers using a customized framework. Showcased my project to company executives and employees and received several accolades",
        show: false,
      },
      {
        title: "Tech Specialist",
        company: "Duke University",
        image: require("@/static/experience4.jpg"),
        description:
          "Advise students with technology solutions for their needs. Provide after sales support on computers and peripherals.",
        show: false,
      },
      {
        title: "Software Lead",
        company: "FIRST Robotics Team 2059 - The Hitchhikers",
        image: require("@/static/experience5.jpg"),
        description:
          "Successfully programmed our robot in Java and reached the World Championships in Houston. Collaborated to create a code library for our team's future use. Used power tools to precisely manufacture our robot's mechanical parts. Presented to judges about our team to win the 'Innovation in Control' and 'Excellence in Engineering' awards. Held a leadership position for 1+ years.",
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