<template>
  <div>
    <div id="sign_in">
      <h1>Sign in</h1>
      <a-divider />
      <external-api />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import ExternalApi from '@/components/ExternalApi.vue';

@Component({
  components: {
    ExternalApi
  }
})
export default class SignIn extends Vue {}
</script>

<style scoped>
h1 {
  margin-left: 10%;
  font-size: 2em;
}
#sign_in {
  padding: 10% 15%;
  width: 100vw;
}
</style>
