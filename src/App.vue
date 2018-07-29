<template>
  <v-app dark> <!-- TODO: сделать переключение цветов -->
    <v-navigation-drawer
      persistent
      :mini-variant="mini"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <!-- Фото пользователя -->
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <!-- Помещаем компонент :is -->
      <component :is="leftPanel"/>
      <!-- Контакты -->
      <!-- Нижняя навигация -->
      <v-tabs centered color="cyan">
        <v-tab-item v-for="v in footerBottomNav" :id="'tab-' + v.id" :key="v.id">
          <v-card flat>
            <div class="headline text-xs-center pa-5">
              Active: {{ v.content }}
            </div>
          </v-card>
        </v-tab-item>
        <!-- Кнопки табов -->
        <v-tabs-slider color="yellow"/>
        <v-tab
          v-for="bottom in footerBottomNav"
          :color="bottom.color"
          :value="bottom.value"
          :key="bottom.id"
          :href="'#tab-' + bottom.id"
        >
          <v-icon>{{bottom.icon}}</v-icon>
        </v-tab>
      </v-tabs>
      <!-- -->
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon v-html="mini ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- CONTENT -->
    <v-content>
    </v-content>
    <!-- -->
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
    <!-- Пуш сообщение в браузерном окне -->
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      Текст собщения
      <v-btn color="pink" flat @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <!---->
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      leftPanel: '',
      clipped: false,
      drawer: true,
      fixed: false,
      mini: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      footerBottomNav: [
        {value: 'recent',     icon: 'history',  color: 'grey', content: '1'},
        {value: 'favorites',  icon: 'favorite', color: 'grey', content: '2'},
        {value: 'nearby',     icon: 'place',    color: 'grey', content: '3'},
        {value: 'settings',   icon: 'settings', color: 'grey', content: '4'}
      ],
      activeFooterBottomNav: 'recent',
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: "Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "Do you have Paris recommendations? Have you ever been?"
        }
      ],
      links: [
        {text: 'Dashboard', disabled: false},
        {text: 'Link 1', disabled: false},
        {text: 'Link 2', disabled: true}
      ]
    }
  },
  //components: components,
}
</script>
<style>

</style>
