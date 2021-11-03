<template>
  <v-app>
    <Spinner />
    <v-app-bar app elevate-on-scroll color="#2c2e3a" dark>
      <div class="d-flex align-center my-5">
        <v-img
          alt="Shibx"
          contain
          max-height="250px"
          max-width="90"
          src="../public/img/icons/apolloLogo.png"
        />
        <h2>{{ title }}</h2>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="mx-5"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <div>
        <router-view />
        <vue-particles color="#dedede"></vue-particles>
      </div>
    </v-main>
    <v-navigation-drawer
      height="100%"
      app
      v-model="drawer"
      floating
      temporary
      right
      dark
      color="#2c2e3a"
    >
      <v-list-item>
        <v-img contain src="../public/img/icons/apolloLogo.png"></v-img>
      </v-list-item>
      <v-list nav>
        <v-list-item-group v-model="group" active-class="secondary--text">
          <v-list-item href="https://www.apollorebase.com/">
            <v-list-item-icon>
              <v-icon>mdi-web</v-icon>
            </v-list-item-icon>
            <v-list-item-title>APR Website</v-list-item-title>
          </v-list-item>
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-chart-tree</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/tracker">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-wallet</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tracker</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div>
          <v-list-item-subtitle class="text-center my-0">
            Join APR
          </v-list-item-subtitle>
          <v-list-item class="d-flex justify-center">
            <div>
              <v-btn
                href="https://twitter.com/apollorebasebsc"
                target="_blank"
                text
                icon
                class="mx-2"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
                style="fill: #000000"
              >
                <path
                  fill="#ff6148"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                ></path>
                <path
                  fill="#fff"
                  d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"
                ></path></svg
              >
              </v-btn>
              <v-btn
                href="https://t.me/apollorebasebsc"
                target="_blank"
                text
                icon
                class="mx-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  style="fill: #ff6148"
                >
                  <path
                    fill="#ff6148"
                    d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"
                  ></path>
                  <path
                    fill="#b0bec5"
                    d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"
                  ></path>
                </svg>
              </v-btn>
            </div>
          </v-list-item>
        </div>
      </template>
      <v-spacer></v-spacer>
    </v-navigation-drawer>
  </v-app>
</template>
<style>
</style>

<script>
import Spinner from "../src/components/Spinner";
export default {
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },
  data: () => ({
    drawer: false,
    title: "Apollo Rebase Dashboard",
    group: null,
  }),

  components: {
    Spinner,
  },
  watch: {
    $route(to) {
      this.title = to.name;
    },
  },
  methods: {
    async accept() {
      this.showUpgradeUI = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    },
  },
};
</script>
