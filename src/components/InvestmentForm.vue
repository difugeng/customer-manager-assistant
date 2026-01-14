<script setup>
import { ref, computed } from 'vue';

const riskLevel = ref('R3');

const riskConfig = {
    'R1': { label: '谨慎', textClass: 'text-emerald-700', bgClass: 'bg-emerald-100', barColor: 'peer-checked:bg-emerald-500', labelColor: 'peer-checked:text-emerald-600' },
    'R2': { label: '稳健', textClass: 'text-lime-700', bgClass: 'bg-lime-100', barColor: 'peer-checked:bg-lime-500', labelColor: 'peer-checked:text-lime-600' },
    'R3': { label: '平衡', textClass: 'text-yellow-700', bgClass: 'bg-yellow-100', barColor: 'peer-checked:bg-yellow-500', labelColor: 'peer-checked:text-yellow-600' },
    'R4': { label: '进取', textClass: 'text-orange-700', bgClass: 'bg-orange-100', barColor: 'peer-checked:bg-orange-500', labelColor: 'peer-checked:text-orange-600' },
    'R5': { label: '激进', textClass: 'text-red-700', bgClass: 'bg-red-100', barColor: 'peer-checked:bg-red-600', labelColor: 'peer-checked:text-red-600' }
};

const currentRisk = computed(() => riskConfig[riskLevel.value]);
const options = ['R1', 'R2', 'R3', 'R4', 'R5'];
</script>

<template>
    <div class="bg-white w-full rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col mt-1">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center gap-3 bg-white">
            <div class="text-primary bg-primary/10 rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[20px]">assignment_add</span>
            </div>
            <div class="flex flex-col">
                <h2 class="text-gray-900 text-sm font-bold leading-tight">投资需求收集</h2>
                <p class="text-gray-500 text-[11px] mt-0.5">请完善信息以匹配产品</p>
            </div>
        </div>
        <div class="flex flex-col divide-y divide-gray-50 text-sm">
            <div class="p-4">
                <h3 class="text-gray-900 text-sm font-bold flex items-center gap-1.5 mb-3">
                    <span class="material-symbols-outlined text-primary text-[18px]">stars</span>
                    核心要素
                </h3>
                <div class="mb-4">
                    <label class="block text-xs font-medium text-gray-500 mb-1.5">拟投金额</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span class="text-gray-500 font-bold">¥</span>
                        </div>
                        <input class="form-input block w-full pl-7 pr-10 py-2.5 rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary text-gray-900 font-semibold placeholder-gray-400 text-sm transition-colors" placeholder="请输入金额" type="number" value="500"/>
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span class="text-gray-500 text-xs font-medium">万元</span>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-xs font-medium text-gray-500 mb-1.5">投资期限</label>
                    <div class="flex bg-gray-100 p-1 rounded-lg">
                        <label class="flex-1 cursor-pointer">
                            <input class="peer sr-only" name="term" type="radio"/>
                            <div class="py-2 text-center text-xs font-medium text-gray-500 rounded peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm transition-all">
                                &lt;6月
                            </div>
                        </label>
                        <label class="flex-1 cursor-pointer">
                            <input checked="" class="peer sr-only" name="term" type="radio"/>
                            <div class="py-2 text-center text-xs font-medium text-gray-500 rounded peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm transition-all">
                                1-3年
                            </div>
                        </label>
                        <label class="flex-1 cursor-pointer">
                            <input class="peer sr-only" name="term" type="radio"/>
                            <div class="py-2 text-center text-xs font-medium text-gray-500 rounded peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm transition-all">
                                &gt;3年
                            </div>
                        </label>
                    </div>
                </div>
                
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label class="block text-xs font-medium text-gray-500">风险偏好</label>
                        <span :class="['text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors duration-300', currentRisk.textClass, currentRisk.bgClass]">
                            {{ currentRisk.label }}
                        </span>
                    </div>
                    <div class="flex justify-between gap-1 pt-1">
                        <label v-for="opt in options" :key="opt" class="cursor-pointer group flex flex-col items-center gap-1 w-full">
                            <input class="peer sr-only" name="risk" type="radio" :value="opt" v-model="riskLevel" />
                            <div :class="['w-full h-1.5 rounded-full bg-gray-200 transition-colors', opt === riskLevel ? riskConfig[opt].barColor.replace('peer-checked:', '') : '']"></div>
                            <span :class="['text-[9px] text-gray-400 font-medium whitespace-nowrap mt-1', opt === riskLevel ? riskConfig[opt].labelColor.replace('peer-checked:', 'font-bold ') : '']">{{ opt }}</span>
                        </label>
                    </div>
                </div>
                
            </div>
            
            <div class="p-4 bg-white">
                <h3 class="text-gray-900 text-sm font-bold flex items-center gap-1.5 mb-3">
                    <span class="material-symbols-outlined text-primary text-[18px]">tune</span>
                    进阶约束
                </h3>
                <div class="mb-4">
                    <label class="block text-xs font-medium text-gray-500 mb-1.5">流动性要求</label>
                    <div class="grid grid-cols-2 gap-2">
                        <label class="cursor-pointer relative" v-for="item in ['现金管理类', '定期开放', '封闭式', '周期型']" :key="item">
                            <input :checked="item === '现金管理类'" class="peer sr-only" name="liquidity" type="radio"/>
                            <div class="h-9 flex items-center justify-center rounded border border-gray-200 bg-white text-xs text-gray-600 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition-all font-medium">
                                {{ item }}
                            </div>
                        </label>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-xs font-medium text-gray-500 mb-1.5">期望收益率 (年化)</label>
                    <div class="flex items-center gap-2">
                        <div class="relative flex-1">
                            <input class="form-input block w-full pr-7 py-2 rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary text-gray-900 text-sm font-medium" placeholder="3.0" type="number"/>
                            <span class="absolute right-2 top-2 text-gray-400 text-xs font-medium">%</span>
                        </div>
                        <span class="text-gray-400 font-medium">-</span>
                        <div class="relative flex-1">
                            <input class="form-input block w-full pr-7 py-2 rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary text-gray-900 text-sm font-medium" placeholder="5.5" type="number"/>
                            <span class="absolute right-2 top-2 text-gray-400 text-xs font-medium">%</span>
                        </div>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-500 mb-1.5">偏好产品</label>
                    <div class="flex flex-wrap gap-2">
                        <label class="cursor-pointer" v-for="pref in ['公募基金', '银行理财', '国债', '券商资管']" :key="pref">
                            <input :checked="['公募基金', '国债'].includes(pref)" class="peer sr-only" type="checkbox"/>
                            <span class="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-600 bg-white peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all shadow-sm">
                                {{ pref }}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 border-t border-gray-50 bg-gray-50/50">
            <button class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm">
                <span class="material-symbols-outlined text-[18px]">send</span>
                提交需求
            </button>
            <div class="mt-2 text-center flex items-center justify-center gap-1">
                <span class="material-symbols-outlined text-[12px] text-gray-400">verified_user</span>
                <span class="text-[10px] text-gray-400">数据已加密传输</span>
            </div>
        </div>
    </div>
</template>
