<script setup>
defineProps({
  customer: {
    type: Object,
    required: true
  },
  bgClass: {
    type: String,
    default: 'bg-white'
  }
})

defineEmits(['click'])
</script>

<template>
  <div 
    class="p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100/50 cursor-pointer hover:shadow-md transition-shadow duration-200"
    :class="bgClass"
    @click="$emit('click')"
  >
    <div class="flex items-center gap-2 mb-3">
      <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg shrink-0">
        {{ customer['客户名称'].substring(0, 1) }}
      </div>
      <div>
        <h3 class="font-bold text-gray-800 text-base leading-tight">{{ customer['客户名称'] }}</h3>
        <span class="text-xs text-gray-500">点击查看详情</span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
      <div class="flex flex-col">
        <span class="text-xs text-gray-400">客户号</span>
        <span class="font-medium text-gray-700 truncate">{{ customer['客户号'] }}</span>
      </div>
      <div class="flex flex-col">
        <span class="text-xs text-gray-400">注册资本</span>
        <span class="font-medium text-gray-700 truncate">{{ customer['注册资本'] }}</span>
      </div>
      <div class="flex flex-col">
        <span class="text-xs text-gray-400">成立年限</span>
        <span class="font-medium text-gray-700 truncate">{{ customer['成立年限'] }}</span>
      </div>
      <div class="flex flex-col">
        <span class="text-xs text-gray-400">一级行业</span>
        <span class="font-medium text-gray-700 truncate">{{ customer['一级行业'] }}</span>
      </div>
      <div class="flex flex-col col-span-2 border-t border-gray-100 pt-2 mt-1">
         <span class="text-xs text-gray-400">管户人</span>
         <span class="font-medium text-gray-700">{{ customer['管户人姓名工号'] }}</span>
      </div>
    </div>
  </div>
</template>
