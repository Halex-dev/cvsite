<template>
  <myHeader />
  <router-view />
  <myFooter />
</template>

<script>
import myHeader from './components/myHeader.vue';
import myFooter from './components/myFooter.vue';

export default {
  name: 'App',
  watch: {
    '$route'(to) {
      this.updatePageTitle(to);
    }
  },
  mounted() {
    this.updatePageTitle(this.$route);
  },
  methods: {
    updatePageTitle(route) {
      const baseTitle = 'A.V.D';
      const pageTitle = route.meta.title ? ` | ${route.meta.title}` : '';
      document.title = `${baseTitle}${pageTitle}`;
    }
  },
  components: {
    myHeader,
    myFooter,
  },
};
</script>