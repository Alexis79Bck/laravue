require('./bootstrap');

import { createApp } from 'vue';
import HelloWorld from "./components/HelloWorld";

const app = createApp({})

app.component('greeting', HelloWorld)

app.mount('#app')
