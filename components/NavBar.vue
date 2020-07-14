<template>
  <nav>
    <v-app-bar color="transparent" fixed app>
      <v-toolbar-title>
        <span class="font-weight-light text-decoration-underline">Achintya</span>
        <span>Kumar</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        <div class="text-decoration-underline">Projects</div>
      </v-btn>
      <v-btn text>
        <span class="text-decoration-underline">Courses</span>
      </v-btn>
      <v-btn text>
        <span>Resume</span>
      </v-btn>
      <v-btn text>
        <span>Thoughts</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon :href="'https://www.github.com/achintya2000'" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon :href="'https://www.linkedin.com/in/achintyakumar'" target="_blank">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon :href="'mailto:achintyasi@gmail.com'">
        <v-icon>mdi-gmail</v-icon>
      </v-btn>
      <v-btn outlined>Contact</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      names: ["Experiences", "Projects", "Resume", "Thoughts"]
    };
  }
};
</script>

<style>
</style>