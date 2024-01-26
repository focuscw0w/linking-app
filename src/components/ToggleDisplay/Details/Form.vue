<template>
  <form class="w-full bg-gray-100 p-4">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="page-description mb-1 md:mb-0 pr-4"
          for="inline-first"
        >
          First Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="w-full rounded-md bg-white p-3 text-sm font-semi-bold placeholder-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="inline-first"
          type="text"
          value="Shane"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="page-description md:text-right mb-1 md:mb-0 pr-4"
          for="inline-last"
        >
          Last Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="w-full rounded-md bg-white p-3 text-sm font-semi-bold placeholder-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="inline-last"
          type="text"
          placeholder="Hunt"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="page-description mb-1 md:mb-0 pr-4"
          for="inline-email"
        >
          Email
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="w-full rounded-md bg-white p-3 text-sm font-semi-bold placeholder-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="inline-email"
          type="text"
          value="shanehunt@gmail.com"
        />
      </div>
    </div>
  </form>
</template>
