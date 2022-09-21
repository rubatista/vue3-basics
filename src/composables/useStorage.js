import { ref, watch } from "vue";

export function useStorage(key) {
  let storeval = localStorage.getItem(key);
  
  let val = ref(storeval);

  watch(val, () => {
    write();
  });

  function write() {
    if(val.value == '' || val.value == null){
      localStorage.removeItem(key);
    }else{
      localStorage.setItem(key, val.value);
    }
  }

  return val;
}