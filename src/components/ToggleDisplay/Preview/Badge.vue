<template>
    <div class="top-50">
        {{ props.content.platform }}
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object
})
</script>
