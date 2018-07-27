<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <h1>Test</h1>
      <!-- Форма нового сообщения -->
      <v-layout row wrap>
          <v-text-field label="Regular"></v-text-field>
      </v-layout>
      <!-- -->
  </v-parallax>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
  //HelloWorld,
  },
  })
export default class Messanger extends Vue {}
</script>
