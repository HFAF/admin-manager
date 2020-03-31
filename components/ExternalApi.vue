<template>
  <a-spin id="external_api" :spinning="spinning" size="large">
    <a-alert
      v-if="message.isShow"
      class="external-api-login-message"
      :message="message.text"
      :description="message.description"
      :type="message.type"
      show-icon
    />
    <a-button
      id="google_login_button"
      icon="google"
      class="external-api-login-button"
      @click="signInWithGoogle"
    >
      Signin with Google
    </a-button>
    <a-button
      id="twitter_login_button"
      icon="twitter"
      class="external-api-login-button"
      @click="signInWithTwitter"
    >
      Signin with Twitter
    </a-button>
    <a-button
      id="facebook_login_button"
      icon="facebook"
      class="external-api-login-button"
      @click="signInWithFacebook"
    >
      Signin with Facebook
    </a-button>
  </a-spin>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { AppMessage } from 'ant-design-vue/types/alert';

import { resetMessage } from '@/util/message';
import authService from '@/service/auth';

@Component
export default class SignIn extends Vue {
  message: AppMessage = resetMessage();

  spinning = false;

  async signInWithGoogle() {
    this.spinning = true;
    await authService.signInWithGoogle();
    this.spinning = false;
  }

  signInWithTwitter() {
    // TODO: 設定はちょっと後回しとします
  }

  signInWithFacebook() {
    // TODO: 設定はちょっと後回しとします
  }
}
</script>

<style scoped>
#external_api {
  text-align: center;
  width: calc(24rem + (18vw - 17rem));
  margin: auto;
}

.external-api-login-button {
  margin-top: 2%;
  margin-bottom: 2%;
  color: white;
  height: 4rem;
  width: 100%;
  font-size: calc(1.6rem + (1vw - 1rem));
}

#google_login_button {
  background-color: #c6594b;
  border-color: #a94335;
}

#twitter_login_button {
  background-color: #55acee;
  border-color: #2795e9;
}

#facebook_login_button {
  background-color: #4267b2;
  border-color: #29487d;
}

.external-api-login-message {
  margin-top: 2%;
  margin-bottom: 4%;
}
</style>
