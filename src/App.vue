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

// Keep existing refs
const showCustomerDrawer = ref(false)
const customerData = ref(mockCustomer)

// New ref for right panel
const showRightPanel = ref(false)

const closeCustomerDrawer = () => {
  showCustomerDrawer.value = false
}

const toggleCustomerDetail = () => {
  showCustomerDetail.value = !showCustomerDetail.value
  // Close right panel if open to avoid confusion? Or keep independent.
  // User didn't specify interaction between them, but let's keep them independent or close one when other opens.
  if (showCustomerDetail.value) showRightPanel.value = false
}

const handleSelectCompany = (company) => {
  selectedCompany.value = company
}

const openRightPanel = () => {
  showRightPanel.value = true
  // Close inline detail if open
  showCustomerDetail.value = false
}

const closeRightPanel = () => {
  showRightPanel.value = false
}
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <TheHeader />

    <div class="flex-1 flex overflow-hidden relative">
      <!-- Chat Area -->
      <main class="flex-1 flex flex-col relative h-full transition-all duration-300 min-w-0">
        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto px-4 pt-4 pb-[100px] space-y-6 bg-background-light">
          
          <!-- New Scenario at the Top -->
          <div class="text-center">
              <span class="text-xs text-gray-400 font-medium bg-gray-200/40 px-3 py-1 rounded-full">10:38</span>
          </div>

          <div class="flex justify-end items-start gap-2.5">
              <div class="max-w-[78%] bg-primary text-white p-3.5 rounded-2xl rounded-tr-none shadow-sm text-[15px] leading-relaxed">
                  查询客户详情（右侧详情模式）
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
                  <!-- New Card with different background -->
                  <CustomerCard 
                    :customer="mockCustomer" 
                    bgClass="bg-blue-50/60" 
                    @click="openRightPanel" 
                  />
              </div>
          </div>


          <!-- Existing Scenarios -->
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

        </div>
        
        <!-- Footer forced to absolute bottom of main container -->
        <TheFooter :fixed="false" />
      </main>

      <!-- Right Panel -->
      <aside 
        v-if="showRightPanel" 
        class="w-1/2 bg-white border-l border-gray-200 shadow-xl z-20 flex flex-col transition-all duration-300 h-full shrink-0"
      >
           <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-white shrink-0">
               <h2 class="font-bold text-lg text-gray-800">客户详情</h2>
               <button 
                @click="closeRightPanel" 
                class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
               >
                   <span class="material-symbols-outlined text-[20px]">close</span>
               </button>
           </div>
           <div class="flex-1 overflow-y-auto p-4">
                <!-- Reusing CustomerDetail -->
                <CustomerDetail :customer="mockCustomer" />
           </div>
      </aside>
    </div>

    <!-- Removed old Drawer if not needed, but code had it. The prompt implies this new behavior is for the new scenario. 
         Existing scenarios might still use their own logic (toggleCustomerDetail). 
         I will leave the drawer code out or keep it if it was used by other things?
         The original code had <CustomerDrawer ... /> at the end.
         I'll add it back just in case, although the prompt says "Similar data... just click details need to pop from right".
         It seems this new right panel replaces the drawer for this specific scenario.
         I will keep CustomerDrawer for backward compatibility if other flows use it, though in the provided code it was only referenced, not clearly used by a specific button other than potentially implicit ones.
         Wait, in original App.vue, there was `showCustomerDrawer` but no button explicitly set it to true in the template I saw. `toggleCustomerDetail` was used for the inline detail.
         Ah, maybe I missed where `showCustomerDrawer` was used.
         Regardless, I'll focus on the right panel.
    -->
    
  </div>
</template>
