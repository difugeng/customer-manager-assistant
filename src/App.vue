<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import InvestmentForm from './components/InvestmentForm.vue'
import ComplianceScan from './components/ComplianceScan.vue'
import ResultDashboard from './components/ResultDashboard.vue'
import CustomerCard from './components/CustomerCard.vue'
import CustomerDetail from './components/CustomerDetail.vue'
import CompanyList from './components/CompanyList.vue'
import { mockCustomer } from './data/mockCustomer'
import { mockCompanyList } from './data/mockCompanyList'

const showCustomerDetail = ref(false)
const selectedCompany = ref(null)

// Keep existing refs if they were implied, but since they were missing in the read, 
// I'll define them to prevent errors if I keep the drawer code.
const showCustomerDrawer = ref(false)
const customerData = ref(mockCustomer)

const closeCustomerDrawer = () => {
  showCustomerDrawer.value = false
}

const toggleCustomerDetail = () => {
  showCustomerDetail.value = !showCustomerDetail.value
}

const handleSelectCompany = (company) => {
  // Always use mockCustomer for detail view as requested
  // In a real app, we would fetch details for the specific company
  selectedCompany.value = company
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />

    <main class="flex-1 px-4 pt-4 pb-[100px] space-y-6 bg-background-light">

        <!-- Simulated Scenario -->
        <div class="text-center">
            <span class="text-xs text-gray-400 font-medium bg-gray-200/40 px-3 py-1 rounded-full">10:40</span>
        </div>

        <div class="flex justify-end items-start gap-2.5">
            <div class="max-w-[78%] bg-primary text-white p-3.5 rounded-2xl rounded-tr-none shadow-sm text-[15px] leading-relaxed">
                帮我查询【宁波云象科技股份有限公司】的信息
            </div>
            <div class="w-9 h-9 rounded-full bg-blue-100 overflow-hidden shrink-0 border border-white shadow-sm flex items-center justify-center">
                <span class="material-symbols-outlined text-blue-500 text-[20px]">person</span>
            </div>
        </div>

        <div class="flex justify-start items-start gap-2.5">
            <div class="w-9 h-9 rounded-full bg-white overflow-hidden shrink-0 flex items-center justify-center border border-gray-100 shadow-sm">
                <span class="material-symbols-outlined text-primary text-[22px]">smart_toy</span>
            </div>
            <div class="flex flex-col gap-2 max-w-[92%] w-full">
                <CustomerCard :customer="mockCustomer" @click="toggleCustomerDetail" />
                
                <div v-if="showCustomerDetail" class="animate-fade-in-down w-full">
                   <CustomerDetail :customer="mockCustomer" />
                </div>
            </div>
        </div>

        <div class="text-center pt-4">
            <span class="text-xs text-gray-400 font-medium bg-gray-200/40 px-3 py-1 rounded-full">10:41</span>
        </div>

        <div class="flex justify-end items-start gap-2.5">
            <div class="max-w-[78%] bg-primary text-white p-3.5 rounded-2xl rounded-tr-none shadow-sm text-[15px] leading-relaxed">
                优质科技型企业有哪些
            </div>
            <div class="w-9 h-9 rounded-full bg-blue-100 overflow-hidden shrink-0 border border-white shadow-sm flex items-center justify-center">
                <span class="material-symbols-outlined text-blue-500 text-[20px]">person</span>
            </div>
        </div>

        <div class="flex justify-start items-start gap-2.5">
            <div class="w-9 h-9 rounded-full bg-white overflow-hidden shrink-0 flex items-center justify-center border border-gray-100 shadow-sm">
                <span class="material-symbols-outlined text-primary text-[22px]">smart_toy</span>
            </div>
            <div class="flex flex-col gap-2 max-w-[92%] w-full">
                <CompanyList :companies="mockCompanyList" @select="handleSelectCompany" />
                
                <div v-if="selectedCompany" class="animate-fade-in-down w-full mt-2">
                   <!-- Reusing CustomerDetail with mockCustomer data as requested -->
                   <CustomerDetail :customer="mockCustomer" />
                </div>
            </div>
        </div>

        <div class="text-center">
            <span class="text-xs text-gray-400 font-medium bg-gray-200/40 px-3 py-1 rounded-full">10:42</span>
        </div>

        <div class="flex justify-end items-start gap-2.5">
            <div class="max-w-[78%] bg-primary text-white p-3.5 rounded-2xl rounded-tr-none shadow-sm text-[15px] leading-relaxed">
                帮我推荐几款适合企业的理财产品，资金大约500万。
            </div>
            <div class="w-9 h-9 rounded-full bg-blue-100 overflow-hidden shrink-0 border border-white shadow-sm flex items-center justify-center">
                <span class="material-symbols-outlined text-blue-500 text-[20px]">person</span>
            </div>
        </div>

        <div class="flex justify-start items-start gap-2.5">
            <div class="w-9 h-9 rounded-full bg-white overflow-hidden shrink-0 flex items-center justify-center border border-gray-100 shadow-sm">
                <span class="material-symbols-outlined text-primary text-[22px]">smart_toy</span>
            </div>
            <div class="flex flex-col gap-2 max-w-[92%] w-full">
                <div class="bg-white text-gray-800 p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-gray-100/50 text-[15px] leading-relaxed">
                    好的。为了为您精准匹配对公理财产品，请确认以下配置参数：
                </div>
                
                <InvestmentForm />
            </div>
        </div>

        <ComplianceScan />

        <div class="text-center pt-4">
            <span class="text-xs text-gray-400 font-medium bg-gray-200/40 px-3 py-1 rounded-full">10:44</span>
        </div>

        <ResultDashboard />

        <CustomerDrawer 
          :customer="customerData" 
          :visible="showCustomerDrawer" 
          @close="closeCustomerDrawer" />

    </main>

    <TheFooter />
  </div>
</template>
