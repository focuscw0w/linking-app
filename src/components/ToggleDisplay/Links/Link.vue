<template>
  <div class="pt-1.5 px-1">
    <p>Link {{props.linkData.order}}</p>
  </div>
</template>

<script setup>
  const props = defineProps(["linkData"]);
</script>
