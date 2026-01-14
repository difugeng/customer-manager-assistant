<script setup>
defineProps({
  fixed: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
    <div 
      class="bottom-0 left-0 w-full bg-[#f6f7f8] border-t border-gray-200 px-4 py-2 z-50 shrink-0 safe-area-bottom"
      :class="{ 'fixed': fixed, 'absolute': !fixed }"
    >
        <div class="w-full max-w-[600px] mx-auto flex items-end gap-3 pb-2">
            <button class="text-gray-500 hover:text-gray-700 shrink-0 flex items-center justify-center w-9 h-9 mb-0.5 rounded-full active:bg-gray-200 transition-colors">
                <span class="material-symbols-outlined text-[26px]">add_circle</span>
            </button>
            <div class="flex-1 bg-white rounded-2xl px-4 py-2.5 flex items-center shadow-sm border border-gray-200">
                <input class="w-full text-[15px] text-gray-700 placeholder-gray-400 bg-transparent border-none focus:ring-0 p-0 leading-normal focus:outline-none" placeholder="输入您的问题..." type="text"/>
            </div>
            <button class="text-gray-500 hover:text-gray-700 shrink-0 flex items-center justify-center w-9 h-9 mb-0.5 rounded-full active:bg-gray-200 transition-colors">
                <span class="material-symbols-outlined text-[26px]">mic</span>
            </button>
        </div>
        <div class="h-6 w-full"></div>
    </div>
</template>
