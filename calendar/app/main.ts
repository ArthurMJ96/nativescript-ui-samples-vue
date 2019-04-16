// >> calendar-import-vue
import Vue from 'nativescript-vue';
// >> (hide)
import { getExamples } from './examples';
import * as views from './views';

import RadListView from 'nativescript-ui-listview/vue';
// << (hide)
import CalendarView from 'nativescript-ui-calendar/vue';
// >> (hide)
Vue.use(RadListView);
// << (hide)
Vue.use(CalendarView);
// << calendar-import-vue
for (let comp of getExamples()) {
  Vue.component(comp.name, comp);
}

Vue.component(views.Home.name, views.Home);

// Vue.config.silent = false;

new Vue({
  template: `
    <Frame>
      <Home />
    </Frame>
  `
}).$start();
