<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
      color="universal"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="150">
            <img class="text-lg-center" src="~/assets/quiccly-io.jpg" />
          </v-avatar>
          <p class="font-weight-black text-lg-center mt-3 text-center">Quiccly-io</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="universal" height="75vh">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>-->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-chip class="ma-2" color="primary" nuxt to="/cart">
        <v-avatar left class="error">{{getCartLenght}}</v-avatar>
        <v-icon>mdi-cart</v-icon>
      </v-chip>
      <v-btn icon @click="lightSwitch()">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->

    <v-footer :absolute="!fixed" app padless class="universal">
      <v-col class="text-center">
        <v-card class="text-center universal" flat width="100%">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px" color="primary">{{ icon }}</v-icon>
          </v-btn>

          <v-card-text>The Official quiccly-io one stop mart for all your school needs.</v-card-text>

          <v-divider></v-divider>

          <v-card-text>
            &copy;
            {{ new Date().getFullYear() }} —
            <strong>
              <span>Tomisinteazer</span>
            </strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      theme: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Products",
          to: "/products",
        },
        {
          icon: "mdi-cart",
          title: "cart",
          to: "/cart",
        },
        {
          icon: "mdi-information-variant",
          title: "About & contact",
          to: "/about",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Quiccly-io",
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  methods: {
    lightSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    initDarkMode() {
      const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      darkMediaQuery.addEventListener("change", (e) => {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      });

      if (darkMediaQuery.matches) {
        console.log("change default light to dark theme");
        // need to set 0 sec timeout to set the dark more after mounted event, due to some bug in the framework
        setTimeout(() => (this.$vuetify.theme.dark = true), 0);
      }
    },
    loadCart() {
      if (process.client) {
        let localcart = window.localStorage.getItem("cart");
        let processedCart = JSON.parse(localcart);
        if (processedCart) {
          this.$store.commit("persistCart", processedCart);
        }
        console.log(processedCart);
      }
    },
  },
  computed: {
    getCartLenght() {
      return this.$store.getters.getCartItems.length;
    },
  },

  mounted() {
    this.initDarkMode();
  },
  created() {
    this.loadCart();
  },
};
</script>
<style>
* {
  font-family: "Quicksand", sans-serif !important;
}

body {
  color: #333b4f;
}

a {
  text-decoration: none;
}
</style>