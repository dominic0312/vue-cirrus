import component from './VCol.vue';
import component1 from './VRow.vue';

export default (Vue) => {
  Vue.component(component.name, component);
  Vue.component(component1.name, component1);
};
