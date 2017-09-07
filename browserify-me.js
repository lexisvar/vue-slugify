const VueSlugify = require('./vue2-slugify.js');

global.VueSlugify = VueSlugify;

window.Vue && global.Vue.use(VueSlugify);