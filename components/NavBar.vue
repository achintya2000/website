<template>
  <nav>
    <v-app-bar color="#131313" flat app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer class="hidden-md-and-up"></v-spacer>

      <nuxt-link to="/" style="text-decoration: none; color: inherit;">
        <v-toolbar-title>
          <span class="font-weight-light text-decoration-underline">Achintya</span>
          <span>Kumar</span>
        </v-toolbar-title>
      </nuxt-link>

      <v-spacer></v-spacer>

      <v-btn class="hidden-sm-and-down" text v-for="name in names" :key="name.title">
        <nuxt-link :to="name.to" style="text-decoration: none; color: inherit;">{{ name.title }}</nuxt-link>
      </v-btn>
      <v-btn class="hidden-sm-and-down" text href="/Achintya_Resume.pdf" target="_blank">Resume</v-btn>

      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <v-btn
        class="hidden-sm-and-down"
        icon
        v-for="contact in contactpoints"
        :key="contact.title"
        :href="contact.link"
      >
        <v-icon>{{ contact.icon }}</v-icon>
      </v-btn>
      <!--<v-btn outlined>Contact</v-btn> -->
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="name in names" :key="name.title" link :to="name.to">
          <v-list-item-content>
            <v-list-item-title>{{ name.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="/Achintya_Resume.pdf" target="_blank">
          <v-list-item-content>
            <v-list-item-title>Resume</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="contact in contactpoints"
          :key="contact.title"
          link
          :href="contact.link"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>{{ contact.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ contact.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      names: [
        { title: "Experiences", to: "/experiences" },
        { title: "Projects", to: "/projects" },
        { title: "Thoughts", to: "/thoughts" },
      ],
      contactpoints: [
        {
          title: "Github",
          icon: "mdi-github",
          link: "https://www.github.com/achintya2000",
        },
        {
          title: "LinkedIn",
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/achintyakumar",
        },
        {
          title: "Email",
          icon: "mdi-gmail",
          link: "mailto:achintyasi@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
</style>