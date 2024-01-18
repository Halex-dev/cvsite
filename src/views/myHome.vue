<template>
    <div>
        <div class="my-page min-h-screen flex items-center justify-center bg-gray-100">
            <ParticleBackground />
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-4 text-white">Alessio Vito D'angelo</h1>
                <div class="flex space-x-4">
                <div class="social-icon">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="text-4xl text-white" />
                </div>
                <div class="social-icon">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="text-4xl text-white" />
                </div>
                <div class="social-icon">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="text-4xl text-white" />
                </div>
                <div class="social-icon">
                    <font-awesome-icon :icon="['fab', 'github']" class="text-4xl text-white" />
                </div>
                <div class="social-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="text-4xl text-white" />
                </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ParticleBackground from '@/components/ParticleBackground.vue';

export default {
  components: {
    //FontAwesomeIcon,
    ParticleBackground,
  },
};
</script>