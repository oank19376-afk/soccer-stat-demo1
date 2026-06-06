/* eslint-env node */
module.exports = {
root: true,
env: {
browser: true,
es2021: true,
node: true
},
extends: [
'eslint:recommended',
'plugin:vue/vue3-recommended'//тут подтягиваются все правила vue Vue
],
globals: {
//  говорим  ESLint,что эти функции существуют и их не надо импортировать
defineProps: 'readonly',
defineEmits: 'readonly',
defineExpose: 'readonly',
withDefaults: 'readonly'
},
rules: {
// на первое время можно отключить требование к имени компонента
'vue/multi-word-component-names': 'off'
}
}