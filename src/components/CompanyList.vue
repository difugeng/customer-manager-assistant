<script setup>
defineProps({
  companies: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['select'])

const handleSelect = (company) => {
  emit('select', company)
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-full">
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-50 text-gray-500 font-medium">
          <tr>
            <th class="px-4 py-3 whitespace-nowrap">客户名称</th>
            <th class="px-4 py-3 whitespace-nowrap">机构</th>
            <th class="px-4 py-3 whitespace-nowrap">管户人</th>
            <th class="px-4 py-3 whitespace-nowrap">一级行业</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr 
            v-for="company in companies" 
            :key="company.id"
            @click="handleSelect(company)"
            class="hover:bg-blue-50/50 cursor-pointer transition-colors"
          >
            <td class="px-4 py-3 font-medium text-gray-800">{{ company.customerName }}</td>
            <td class="px-4 py-3 text-gray-600">{{ company.institution }}</td>
            <td class="px-4 py-3 text-gray-600">{{ company.manager }}</td>
            <td class="px-4 py-3 text-gray-600">{{ company.industry }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="px-4 py-2 bg-gray-50 text-xs text-gray-400 text-center border-t border-gray-100">
      共找到 {{ companies.length }} 家符合条件的企业
    </div>
  </div>
</template>
