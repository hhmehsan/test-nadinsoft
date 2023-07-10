<template>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item :label="$t('profile.name')" required>
        <a-input v-model:value="name" />
      </a-form-item>
      <a-form-item :label="$t('profile.locale')" required>
        <a-select v-model:value="selectedLocaleOption">
          <a-select-option value="en">{{$t('profile.english')}}</a-select-option>
          <a-select-option value="fa">{{$t('profile.farsi')}}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :label="$t('profile.theme')" required>
        <a-select v-model:value="selectedThemeOption">
          <a-select-option value="light">{{$t('profile.light')}}</a-select-option>
          <a-select-option value="dark">{{$t('profile.dark')}}</a-select-option>
        </a-select>
      </a-form-item>
      <a-button type="primary" html-type="submit">{{$t('profile.submit')}}</a-button>
    </a-form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Form, Input, Select, Button } from 'ant-design-vue';
  import  {useI18n}  from 'vue-i18n';

  export default defineComponent({
    components: {
      AForm: Form,
      AFormItem: Form.Item,
      AInput: Input,
      ASelect: Select,
      ASelectOption: Select.Option,
      AButton: Button,
    },
    setup() {
      const {locale , t} = useI18n()
      const form = ref();
      const name = ref(localStorage.getItem('Username'));
      const selectedLocaleOption = ref(locale.value);
      const selectedThemeOption = ref('light');
      const handleSubmit = () => {
        console.log('Name:', name.value);
          console.log('Selected Locale Option:', selectedLocaleOption.value);
          console.log('selected Theme Option:', selectedThemeOption.value);
          locale.value = selectedLocaleOption.value
          localStorage.setItem('Username',name.value)
          localStorage.setItem('Locale',selectedLocaleOption.value)
          localStorage.setItem('Theme',selectedThemeOption.value)
          reloadPage();
        };
        
        const reloadPage = () =>{
          window.location.reload();
        };
      return {
        form,
        name,
        selectedLocaleOption,
        selectedThemeOption,
        handleSubmit,
        reloadPage,
      };
    },
  });
  </script>
  <style scoped>
  
  </style>