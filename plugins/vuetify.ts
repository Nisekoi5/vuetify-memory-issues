// import * as components from "vuetify/components";
import 'vuetify/styles'
import { createVuetify } from "vuetify";
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,
        theme: {
            defaultTheme: 'light',
        },
    });
    nuxtApp.vueApp.use(vuetify);
});
