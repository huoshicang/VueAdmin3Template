import {defineStore} from 'pinia'
import {ref} from 'vue';

export const useCounterStore = defineStore(
    'counter',
    () => {
      const Breadcrumb = ref("数据概览")

      return {Breadcrumb}
    },
    {
      persist: {
        enabled: true,
        key: 'counter',
        storage: sessionStorage,
      },
    })
