import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faInstagram, faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';

library.add(faInstagram, faTwitter, faLinkedin, faGithub, faEnvelope); // Aggiunta icone


//Particles.vue3 -https://github.com/tsparticles/tsparticles?tab=readme-ov-file#tsparticles---typescript-particles
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
//import { loadSlim } from "@tsparticles/slim";

// styles
import "@/styles/style.scss";

const app = createApp(App)
app.use(router)
app.use(Particles, {
    init: async engine => {
      await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      //await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
  })
app.component('font-awesome-icon', FontAwesomeIcon) //Icone
app.mount('#app')