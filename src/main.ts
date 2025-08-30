import './assets/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice'

import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import ProgressSpinner from 'primevue/progressspinner';
import Card from 'primevue/card';
import ConfirmDialog from 'primevue/confirmdialog';
import InlineMessage from 'primevue/inlinemessage';
import DataTable from 'primevue/datatable'
import Radio from 'primevue/radiobutton';
import Column from 'primevue/column';
import Badge from 'primevue/badge';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea'


import App from './App.vue';
import router from './router';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbUjO_716TsJKs8nfVjuPW5FeAzfj7l2U",
  authDomain: "interciews.firebaseapp.com",
  projectId: "interciews",
  storageBucket: "interciews.firebasestorage.app",
  messagingSenderId: "258851386986",
  appId: "1:258851386986:web:a15a455add393e5357bc13"
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(ConfirmationService);
app.use(createPinia());
app.use(router);


app.use(ToastService);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('app-menubar', Menubar);
app.component('app-button', Button);
app.component('app-input-text', InputText);
app.component('app-toast', Toast);
app.component('app-progress', ProgressSpinner);
app.component('app-card', Card);
app.component('app-datatable', DataTable);
app.component('app-dialog', ConfirmDialog);
app.component('app-message', InlineMessage);
app.component('app-radio', Radio);
app.component('app-column', Column);
app.component('app-badge', Badge);
app.component('app-input-number', InputNumber);
app.component('app-calendar', Calendar);
app.component('app-textarea', Textarea)

app.mount('#app');
