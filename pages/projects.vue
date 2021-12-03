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
        <v-img :src="project.image"></v-img>

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
        title: "Tic-Tac-Toe Playing Robot",
        group: "Intro to Robotics - ECE495",
        image: require("@/static/project3.png"),
        description: "PLEASE CLICK THE EXPLORE BUTTON FOR MORE DETAILS",
        show: false,
        link: "ECE495_Final Report.pdf",
      },
      {
        title: "UR5 Robot - Write Initials",
        group: "Intro to Robotics - ECE495",
        image: require("@/static/project2.png"),
        description:
          "The problem for this midterm assignment was to have a UR5’s end-effector draw out the letters of our initials. In my case those letters were a, s, and k. My general approach was to set the robot to an initial pose and then plan a Cartesian path by specifying waypoints for the end effector to go to. In this way we can trace out the path of the letters. Video Link: ",
        show: false,
        link: "https://gitlab.oit.duke.edu/ask60/ask60_rosintro/-/blob/master/scripts/midterm.py",
      },
      {
        title: "InstaJam",
        group: "Hacking for Defense - I&E 590",
        image: require("@/static/project1.jpg"),
        description:
          "Developing an Android application with the research obtained for the DoD that will integrate with their existing hardware to give instant feedback to close air support soldiers on whether they’re being jammed or not while trying to communicate with pilots. Collaborated with the 818th Operations Support Squadron to find a solution for 'Securing Communications between JTACs and Pilots.' Interviewed 6-10 Department of Defense officials a week to conduct extensive market research on the selected problem",
        show: false,
        link: "https://github.com/sgupta229/RFAnalyzer",
      },
      {
        title: "ECE Calculator App",
        group: "Mobile App Development - ECE 564",
        image: "",
        description:
          "Created an iOS calculator app targeted to ECE students that solves differential equations, sys of equations, and matrix operations",
        show: false,
        link: "https://github.com/achintya2000/ECE564_Project",
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