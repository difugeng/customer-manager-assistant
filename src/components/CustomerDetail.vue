<script setup>
import { ref, computed } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart, PieChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent])

const props = defineProps({
  customer: {
    type: Object,
    required: true
  }
})

// Sections state
const openSections = ref({
  tags: false,
  finance: false,
  products: false,
  risk: false,
  business: false,
  other: false
})

const toggleSection = (section) => {
  openSections.value[section] = !openSections.value[section]
}

// Chart option for Balances
const balanceOption = computed(() => ({
  title: {
    text: '资产负债概览 (万元)',
    left: 'left',
    textStyle: { fontSize: 14, color: '#374151', fontWeight: 600 }
  },
  tooltip: { trigger: 'axis' },
  grid: { left: '3%', right: '4%', bottom: '3%', top: '40', containLabel: true },
  xAxis: { type: 'category', data: ['存款', '贷款', '理财', '模拟利润'] },
  yAxis: { type: 'value' },
  series: [{
    data: [
      props.customer['存款余额'],
      props.customer['贷款余额'],
      props.customer['理财余额'],
      props.customer['模拟利润']
    ],
    type: 'bar',
    itemStyle: {
      color: (params) => {
        const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];
        return colors[params.dataIndex]
      },
      borderRadius: [4, 4, 0, 0]
    },
    barWidth: '40%',
    label: {
      show: true,
      position: 'top',
      formatter: '{c}'
    }
  }]
}))

// Helpers
const getTrueTags = (prefix) => {
  return Object.keys(props.customer)
    .filter(key => key.startsWith(prefix) && props.customer[key] === true)
    .map(key => key.replace(prefix, ''))
}

const basicTags = computed(() => getTrueTags('基础标签-'))
const productTags = computed(() => getTrueTags('产品标签-'))
const vipTags = computed(() => getTrueTags('重客标签-'))

// Product Data Groups
const productGroups = [
  {
    title: '财资大管家',
    show: computed(() => props.customer['财资大管家客户标识']),
    items: [
      { label: '月均交易金额', key: '财资大管家月均交易金额', unit: '万元' },
      { label: '月均交易笔数', key: '财资大管家月均交易笔数', unit: '笔' },
      { label: '累计交易金额', key: '财资大管家累计交易金额', unit: '万元' },
      { label: '累计交易笔数', key: '财资大管家累计交易笔数', unit: '笔' },
    ],
    flags: ['财资有效户标识', '开通财资app标识', '财资大管家生熟客']
  },
  {
    title: '票据业务',
    show: computed(() => props.customer['票据好管家客户标识'] || props.customer['票据贴现有效户标识']),
    items: [
      { label: '贴现量', key: '贴现量', unit: '万元' },
      { label: '贴现收益', key: '贴现业务收益', unit: '万元' },
      { label: '好管家月均金额', key: '票据好管家月均交易金额', unit: '万元' },
      { label: '好管家月均笔数', key: '票据好管家月均交易笔数', unit: '笔' },
    ],
    flags: ['票据好管家有效户标识', '资产池动户标识', '票据贴现重点客户标识']
  },
  {
    title: '国际业务',
    show: computed(() => props.customer['国结客户标识']),
    items: [
      { label: '月均结算量', key: '月均国际结算量', unit: '万美元' },
      { label: '月均结算笔数', key: '月均国际结算笔数', unit: '笔' },
      { label: '累计结算量', key: '累计国际结算量', unit: '万美元' },
    ],
    flags: ['国结重点客户标识', '进出口有效户标识', '国结战略客户标识']
  },
  {
    title: '易收宝',
    show: computed(() => props.customer['易收宝客户标识']),
    items: [
      { label: '月均交易金额', key: '易收宝月均交易金额', unit: '万元' },
      { label: '月均交易笔数', key: '易收宝月均交易笔数', unit: '笔' },
      { label: '收款户日均存款', key: '易收宝收款账户日均存款', unit: '万元' },
    ],
    flags: ['易收宝有效户', '易收宝标杆户', '易收宝生熟客']
  },
  {
    title: '企业APP',
    show: computed(() => props.customer['是否开通企业app']),
    items: [
      { label: '累计交易金额', key: '企业app累计交易金额', unit: '万元' },
      { label: '登录次数', key: '企业app登录次数', unit: '次' },
      { label: '经办交易金额', key: '企业app经办交易金额', unit: '万元' },
    ],
    flags: ['企业app有效户', '企业app生熟客']
  },
  {
    title: '薪福宝',
    show: computed(() => props.customer['薪福宝客户']),
    items: [
      { label: '月均代发金额', key: '薪福宝月均代发金额', unit: '万元' },
      { label: '月均代发人数', key: '薪福宝月均代发人数', unit: '人' },
      { label: '累计代发金额', key: '薪福宝累计代发金额', unit: '万元' },
    ],
    flags: ['签约薪福宝', '代扣代发合作标识', '数币代发客户标识']
  },
  {
    title: '金融市场',
    show: computed(() => props.customer['金市客户标识']),
    items: [
      { label: '金市总收益', key: '金市总收益', unit: '万元' },
      { label: '外汇收益', key: '金市外汇收益', unit: '万元' },
      { label: '外汇交易量', key: '金市外汇交易量', unit: '万美元' },
    ],
    flags: ['金融市场交易有效户标识', '金市存量客户标识']
  }
]

// Risk Check
const hasRisk = computed(() => {
  return props.customer['行政处罚-处罚结果'] || 
         props.customer['经营异常-列入原因'] || 
         props.customer['开庭公告-案由'] ||
         props.customer['失信信息-立案日期']
})

</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden text-sm w-full font-sans">
    
    <!-- 1. 基础信息 Header -->
    <div class="p-5 bg-gradient-to-r from-blue-50/50 to-white border-b border-gray-100">
      <div class="flex justify-between items-start mb-4">
        <div>
          <h3 class="font-bold text-gray-800 text-lg mb-1">{{ customer['客户名称'] }}</h3>
          <div class="flex flex-wrap gap-2 mb-2">
            <span class="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md font-medium">客户号: {{ customer['客户号'] }}</span>
            <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md">信用代码: {{ customer['信用代码'] }}</span>
          </div>
          <div class="flex gap-2 text-xs text-gray-500">
             <span>{{ customer['管户人姓名工号'] }}</span>
             <span class="text-gray-300">|</span>
             <span>{{ customer['机构名'] }}</span>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <div class="flex flex-col">
           <span class="text-xs text-gray-400 mb-0.5">注册资本</span>
           <span class="font-medium text-gray-700">{{ customer['注册资本'] }}</span>
        </div>
        <div class="flex flex-col">
           <span class="text-xs text-gray-400 mb-0.5">成立年限</span>
           <span class="font-medium text-gray-700">{{ customer['成立年限'] }}</span>
        </div>
        <div class="flex flex-col">
           <span class="text-xs text-gray-400 mb-0.5">注册日期</span>
           <span class="font-medium text-gray-700">{{ customer['注册日期'] }}</span>
        </div>
        <div class="flex flex-col">
           <span class="text-xs text-gray-400 mb-0.5">最早开户</span>
           <span class="font-medium text-gray-700">{{ customer['最早开户日期'] }}</span>
        </div>
        
        <div class="col-span-2 border-t border-gray-100 pt-3 mt-1">
           <span class="text-xs text-gray-400 mb-1 block">行业与产业</span>
           <div class="space-y-1">
             <div class="flex items-start gap-2">
               <span class="text-[10px] bg-blue-50 text-blue-600 px-1.5 rounded shrink-0 mt-0.5">产业</span>
               <span class="font-medium text-gray-700 text-xs break-all">
                 {{ customer['一级产业'] }} <span class="text-gray-300 mx-1">></span> {{ customer['二级产业'] }}
               </span>
             </div>
             <div class="flex items-start gap-2">
               <span class="text-[10px] bg-green-50 text-green-600 px-1.5 rounded shrink-0 mt-0.5">行业</span>
               <span class="font-medium text-gray-700 text-xs break-all leading-relaxed">
                 {{ customer['一级行业'] }} <span class="text-gray-300 mx-1">></span> {{ customer['二级行业'] }} <span class="text-gray-300 mx-1">></span> {{ customer['三级行业'] }} <span class="text-gray-300 mx-1">></span> {{ customer['四级行业'] }}
               </span>
             </div>
           </div>
        </div>
      </div>
    </div>

    <!-- 2. 标签画像 -->
    <div class="border-b border-gray-100">
      <button @click="toggleSection('tags')" class="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-blue-500 text-xl">label</span>
          <span class="font-bold text-gray-800">标签画像</span>
        </div>
        <span class="material-symbols-outlined text-gray-400 transition-transform duration-200" :class="{ 'rotate-180': openSections.tags }">expand_more</span>
      </button>
      
      <div v-show="openSections.tags" class="p-4 pt-0 grid gap-4 animate-fade-in">
        <!-- Custom Tags -->
        <div v-if="customer['自定义标签']">
           <div class="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
             <span class="w-1 h-3 bg-purple-400 rounded-full"></span>
             自定义标签
           </div>
           <div class="flex flex-wrap gap-2">
             <span v-for="tag in customer['自定义标签'].split(/[,，]/)" :key="tag" class="px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-100 rounded-md text-xs font-medium">
               {{ tag.trim() }}
             </span>
           </div>
        </div>

        <!-- Special Text Tags (Eight Types / Ths Industry) -->
        <div v-if="customer['基础标签-八类客户'] || customer['基础标签-同花顺科技产业标签']">
           <div class="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
             <span class="w-1 h-3 bg-teal-400 rounded-full"></span>
             特殊分类
           </div>
           <div class="flex flex-wrap gap-2">
             <span v-if="customer['基础标签-八类客户']" class="px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-md text-xs font-medium">
               {{ customer['基础标签-八类客户'] }}
             </span>
             <span v-if="customer['基础标签-同花顺科技产业标签']" class="px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-md text-xs font-medium">
               {{ customer['基础标签-同花顺科技产业标签'] }}
             </span>
           </div>
        </div>
        
        <!-- Basic Tags -->
        <div v-if="basicTags.length">
           <div class="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
             <span class="w-1 h-3 bg-gray-400 rounded-full"></span>
             基础标签
           </div>
           <div class="flex flex-wrap gap-2">
             <span v-for="tag in basicTags" :key="tag" class="px-2.5 py-1 bg-gray-100 text-gray-600 border border-gray-200 rounded-md text-xs">
               {{ tag }}
             </span>
           </div>
        </div>

        <!-- Product Tags -->
        <div v-if="productTags.length">
           <div class="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
             <span class="w-1 h-3 bg-blue-400 rounded-full"></span>
             产品持有
           </div>
           <div class="flex flex-wrap gap-2">
             <span v-for="tag in productTags" :key="tag" class="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-md text-xs font-medium">
               {{ tag }}
             </span>
           </div>
        </div>

        <!-- VIP Tags -->
        <div v-if="vipTags.length">
           <div class="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
             <span class="w-1 h-3 bg-amber-400 rounded-full"></span>
             重客身份
           </div>
           <div class="flex flex-wrap gap-2">
             <span v-for="tag in vipTags" :key="tag" class="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-100 rounded-md text-xs font-medium">
               {{ tag }}
             </span>
           </div>
        </div>
      </div>
    </div>

    <!-- 3. 经营与财务 (Charts) -->
    <div class="border-b border-gray-100">
      <button @click="toggleSection('finance')" class="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-green-500 text-xl">account_balance</span>
          <span class="font-bold text-gray-800">资产负债</span>
        </div>
        <span class="material-symbols-outlined text-gray-400 transition-transform duration-200" :class="{ 'rotate-180': openSections.finance }">expand_more</span>
      </button>
      <div v-show="openSections.finance" class="p-4 pt-0">
        <div class="h-[220px] w-full mb-2">
          <v-chart class="chart" :option="balanceOption" autoresize />
        </div>
        <div class="grid grid-cols-2 gap-4 mt-2">
          <div class="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div class="text-xs text-gray-500 mb-1">收款账户日均活期</div>
            <div class="font-bold text-gray-800 text-lg">{{ customer['收款账户日均活期存款'] }} <span class="text-xs font-normal text-gray-400">万元</span></div>
          </div>
          <div class="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div class="text-xs text-gray-500 mb-1">授信可用额度</div>
            <div class="font-bold text-gray-800 text-lg">{{ customer['授信可用额度'] }} <span class="text-xs font-normal text-gray-400">万元</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. 重点产品经营 (Detailed Stats) -->
    <div class="border-b border-gray-100">
      <button @click="toggleSection('products')" class="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-indigo-500 text-xl">dataset</span>
          <span class="font-bold text-gray-800">重点产品经营</span>
        </div>
        <span class="material-symbols-outlined text-gray-400 transition-transform duration-200" :class="{ 'rotate-180': openSections.products }">expand_more</span>
      </button>
      
      <div v-show="openSections.products" class="p-4 pt-0 space-y-4">
        <template v-for="(group, index) in productGroups" :key="index">
          <div v-if="group.show.value" class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
            <div class="flex items-center justify-between mb-3 pb-2 border-b border-gray-100 border-dashed">
              <span class="font-bold text-gray-700 text-sm">{{ group.title }}</span>
              <div class="flex gap-1">
                 <span v-for="flagKey in group.flags" :key="flagKey" 
                       v-show="customer[flagKey]"
                       class="text-[10px] px-1.5 py-0.5 bg-green-50 text-green-600 rounded border border-green-100">
                   {{ flagKey.replace('标识', '').replace('是否', '').replace('客户', '') }}
                 </span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="item in group.items" :key="item.key" class="flex flex-col">
                <span class="text-xs text-gray-400">{{ item.label }}</span>
                <span class="font-medium text-gray-800">
                  {{ customer[item.key] || '-' }} 
                  <span v-if="customer[item.key]" class="text-[10px] text-gray-400 font-normal">{{ item.unit }}</span>
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- 5. 风险合规 -->
    <div class="border-b border-gray-100" v-if="hasRisk">
      <button @click="toggleSection('risk')" class="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-red-500 text-xl">warning</span>
          <span class="font-bold text-gray-800">风险合规</span>
        </div>
        <span class="material-symbols-outlined text-gray-400 transition-transform duration-200" :class="{ 'rotate-180': openSections.risk }">expand_more</span>
      </button>
      <div v-show="openSections.risk" class="p-4 pt-0 space-y-3">
         <!-- 行政处罚 -->
         <div v-if="customer['行政处罚-处罚结果']" class="bg-red-50 p-3 rounded-lg border border-red-100">
            <div class="flex items-center gap-2 mb-2 text-red-700 font-bold text-xs">
               <span class="material-symbols-outlined text-sm">gavel</span> 行政处罚
            </div>
            <div class="grid grid-cols-1 gap-1 text-xs text-gray-600">
               <div><span class="text-gray-400">内容：</span>{{ customer['行政处罚-处罚内容'] }}</div>
               <div><span class="text-gray-400">结果：</span>{{ customer['行政处罚-处罚结果'] }}</div>
               <div><span class="text-gray-400">日期：</span>{{ customer['行政处罚-处罚决定日期'] }}</div>
            </div>
         </div>
         
         <!-- 开庭公告 -->
         <div v-if="customer['开庭公告-案由']" class="bg-orange-50 p-3 rounded-lg border border-orange-100">
            <div class="flex items-center gap-2 mb-2 text-orange-700 font-bold text-xs">
               <span class="material-symbols-outlined text-sm">balance</span> 开庭公告
            </div>
            <div class="grid grid-cols-1 gap-1 text-xs text-gray-600">
               <div><span class="text-gray-400">案由：</span>{{ customer['开庭公告-案由'] }}</div>
               <div><span class="text-gray-400">法院：</span>{{ customer['开庭公告-法院'] }}</div>
               <div><span class="text-gray-400">日期：</span>{{ customer['开庭公告-开庭日期'] }}</div>
            </div>
         </div>
      </div>
    </div>

    <!-- 6. 工商与经营 (Business Info) -->
    <div class="border-b border-gray-100">
      <button @click="toggleSection('business')" class="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-gray-500 text-xl">domain</span>
          <span class="font-bold text-gray-800">工商年报 ({{ customer['年报信息-年报年份'] }})</span>
        </div>
        <span class="material-symbols-outlined text-gray-400 transition-transform duration-200" :class="{ 'rotate-180': openSections.business }">expand_more</span>
      </button>
      <div v-show="openSections.business" class="p-4 pt-0">
        <div class="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
          <div class="flex justify-between border-b border-gray-50 pb-1">
             <span class="text-gray-500">营业收入</span>
             <span class="font-medium">{{ customer['年报信息-主营业务收入'] }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-50 pb-1">
             <span class="text-gray-500">净利润</span>
             <span class="font-medium">{{ customer['年报信息-净利润'] }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-50 pb-1">
             <span class="text-gray-500">资产总额</span>
             <span class="font-medium">{{ customer['年报信息-资产总额'] }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-50 pb-1">
             <span class="text-gray-500">负债总额</span>
             <span class="font-medium">{{ customer['年报信息-负债总额'] }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-50 pb-1">
             <span class="text-gray-500">纳税总额</span>
             <span class="font-medium">{{ customer['年报信息-纳税总额'] }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-50 pb-1">
             <span class="text-gray-500">从业人数</span>
             <span class="font-medium">{{ customer['年报信息-从业人数'] }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 7. 更多信息 -->
    <div class="border-b border-gray-100">
      <button @click="toggleSection('other')" class="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-gray-500 text-xl">more_horiz</span>
          <span class="font-bold text-gray-800">更多信息</span>
        </div>
        <span class="material-symbols-outlined text-gray-400 transition-transform duration-200" :class="{ 'rotate-180': openSections.other }">expand_more</span>
      </button>
      <div v-show="openSections.other" class="p-4 pt-0 space-y-3">
         <div v-if="customer['招聘信息-招聘职位']">
            <div class="text-xs font-bold text-gray-700 mb-1">最新招聘</div>
            <div class="text-xs text-gray-600 bg-gray-50 p-2 rounded">
              {{ customer['招聘信息-招聘职位'] }} ({{ customer['招聘信息-招聘人数'] }}人) - {{ customer['招聘信息-薪资'] }}
            </div>
         </div>
         <div v-if="customer['专利信息-专利名称']">
            <div class="text-xs font-bold text-gray-700 mb-1">知识产权</div>
            <div class="text-xs text-gray-600 bg-gray-50 p-2 rounded">
              <span class="bg-blue-100 text-blue-700 px-1 rounded mr-1">专利</span> {{ customer['专利信息-专利名称'] }}
            </div>
         </div>
         <div v-if="customer['购地数据-项目名称']">
            <div class="text-xs font-bold text-gray-700 mb-1">购地信息</div>
            <div class="text-xs text-gray-600 bg-gray-50 p-2 rounded">
              {{ customer['购地数据-项目名称'] }} - {{ customer['购地数据-总面积'] }} ({{ customer['购地数据-土地用途'] }})
            </div>
         </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.chart {
  height: 220px;
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
