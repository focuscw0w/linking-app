<template>
  <div
    class="flex justify-between items-center absolute gap-2 top-8 right-4 py-3 px-4 bg-white drop-shadow-lg rounded-md"
  >
    <slot name="icon"></slot>
    <div>
      <slot name="message-content"></slot>
    </div>
  </div>
</template>

<script setup></script>
