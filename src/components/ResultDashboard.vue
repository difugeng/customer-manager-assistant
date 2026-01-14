<template>
    <div class="flex gap-3 items-start mb-6 w-full">
        <div class="w-9 h-9 rounded-full bg-white overflow-hidden shrink-0 flex items-center justify-center border border-gray-100 shadow-sm">
            <span class="material-symbols-outlined text-primary text-[22px]">smart_toy</span>
        </div>
        <div class="flex flex-col gap-2 flex-1 min-w-0">
            <div class="flex flex-col gap-1 items-start">
                <div class="bg-white text-[#111418] text-[15px] font-normal leading-relaxed max-w-full rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-slate-100">
                    为您匹配了 3 款各有侧重的产品，请查看详细对比:
                </div>
            </div>

            <div class="w-full bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden mt-3">
                <div class="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
                    <h3 class="text-[#111418] text-sm font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-[18px]">bar_chart</span>
                        收益率对比
                    </h3>
                </div>
                <div class="px-5 pt-6 pb-6">
                    <div class="flex justify-between items-end text-[10px] font-medium text-slate-400 mb-2">
                        <span>年化收益率 (%)</span>
                        <span class="text-slate-300">SHIBOR ---</span>
                    </div>
                    <div class="h-32 flex items-end justify-around gap-4 px-2 relative">
                        <div class="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                            <div class="w-full border-t border-dashed border-slate-100"></div>
                            <div class="w-full border-t border-dashed border-slate-200"></div>
                            <div class="w-full border-t border-dashed border-slate-100"></div>
                            <div class="w-full border-t border-slate-100"></div>
                        </div>
                        <div class="flex flex-col items-center gap-1 z-10 w-12 group opacity-60">
                            <span class="text-[10px] font-bold text-slate-400">2.8%</span>
                            <div class="w-full bg-slate-400 rounded-t-sm h-16 relative"></div>
                        </div>
                        <div class="flex flex-col items-center gap-1 z-10 w-14 group">
                            <span class="text-[11px] font-black text-secondary drop-shadow-sm">3.45%</span>
                            <div class="w-full bg-gradient-to-b from-amber-400 to-amber-500 rounded-t-sm h-24 relative shadow-lg shadow-amber-100">
                                <div class="absolute -top-3 left-1/2 -translate-x-1/2 text-yellow-600 text-[10px]">👑</div>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-1 z-10 w-12 group opacity-60">
                            <span class="text-[10px] font-bold text-slate-400">3.1%</span>
                            <div class="w-full bg-slate-400 rounded-t-sm h-20 relative"></div>
                        </div>
                    </div>
                    <div class="flex justify-around mt-2 text-[11px] font-medium text-slate-500">
                        <span class="w-12 text-center">稳健A</span>
                        <span class="w-14 text-center font-bold text-secondary">增利B</span>
                        <span class="w-12 text-center">灵活C</span>
                    </div>
                </div>
            </div>

            <div class="w-full bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden mt-3">
                <div class="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
                    <h3 class="text-[#111418] text-sm font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-[18px]">show_chart</span>
                        未来3个月收益推演
                    </h3>
                </div>
                <div class="p-4">
                    <div class="relative w-full h-[140px]">
                        <svg viewBox="0 0 300 120" class="w-full h-full overflow-visible">
                            <line x1="0" y1="100" x2="300" y2="100" stroke="#f1f5f9" stroke-width="1" />
                            <line x1="0" y1="60" x2="300" y2="60" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4 4" />
                            <line x1="0" y1="20" x2="300" y2="20" stroke="#f1f5f9" stroke-width="1" stroke-dasharray="4 4" />
                            
                            <path d="M 0 100 C 50 95, 150 90, 300 80" fill="none" stroke="#cbd5e1" stroke-width="2" />
                            <path d="M 0 100 C 60 70, 140 110, 300 50" fill="none" stroke="#93c5fd" stroke-width="2" stroke-dasharray="3 3" />

                            <defs>
                                <linearGradient id="orangeGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.2"/>
                                    <stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/>
                                </linearGradient>
                            </defs>
                            <path d="M 0 100 C 80 90, 180 30, 300 20 L 300 100 Z" fill="url(#orangeGradient)" stroke="none" />
                            <path d="M 0 100 C 80 90, 180 30, 300 20" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
                            <circle cx="300" cy="20" r="4" fill="#fff" stroke="#f59e0b" stroke-width="2" />
                            <rect x="255" y="-5" width="50" height="20" rx="4" fill="#f59e0b" />
                            <text x="280" y="8" text-anchor="middle" font-size="10" fill="white" font-weight="bold">+3.45%</text>
                        </svg>
                    </div>
                    <div class="flex justify-between text-[10px] text-gray-400 mt-2 px-1 font-mono">
                        <span>T+0</span>
                        <span>T+30</span>
                        <span>T+60</span>
                        <span>T+90</span>
                    </div>
                    <div class="flex justify-center gap-4 mt-3">
                        <div class="flex items-center gap-1">
                            <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                            <span class="text-[10px] text-gray-500">A款</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <div class="w-3 h-1 rounded-full bg-amber-500"></div>
                            <span class="text-[10px] text-amber-600 font-bold">B款</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <div class="w-2 h-2 rounded-full bg-blue-300"></div>
                            <span class="text-[10px] text-gray-500">C款</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden mt-3">
                <div class="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
                    <h3 class="text-[#111418] text-sm font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-[18px]">table_chart</span>
                        核心指标详表
                    </h3>
                </div>
                <div class="w-full text-sm bg-white pb-2">
                    <div class="grid grid-cols-4 bg-slate-50 border-b border-slate-200 text-[10px] font-medium text-slate-500">
                        <div class="p-2 text-center self-center">对比项</div>
                        <div class="p-2 text-center self-center">稳健A</div>
                        <div class="p-2 text-center text-secondary font-bold bg-amber-50/50 border-x border-amber-100 py-3 self-center">增利B</div>
                        <div class="p-2 text-center self-center">灵活C</div>
                    </div>
                    <div class="grid grid-cols-4 border-b border-slate-100 text-[12px] items-stretch">
                        <div class="p-2 text-center text-slate-500 font-medium text-[10px] self-center">收益</div>
                        <div class="p-2 text-center font-medium self-center text-slate-600">2.8%</div>
                        <div class="p-2 text-center font-bold text-red-500 bg-amber-50/30 border-x border-amber-50 text-[13px] self-center">3.45%</div>
                        <div class="p-2 text-center font-medium self-center text-slate-600">3.1%</div>
                    </div>
                    <div class="grid grid-cols-4 border-b border-slate-100 text-[12px] items-stretch">
                        <div class="p-2 text-center text-slate-500 font-medium text-[10px] self-center">风险</div>
                        <div class="p-2 text-center text-emerald-600 font-medium self-center">R1</div>
                        <div class="p-2 text-center text-amber-600 font-medium bg-amber-50/30 border-x border-amber-50 self-center">R2</div>
                        <div class="p-2 text-center text-amber-600 font-medium self-center">R2</div>
                    </div>
                </div>
            </div>

            <div class="w-full bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden mt-3">
                <div class="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
                    <h3 class="text-[#111418] text-sm font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-[18px]">play_circle</span>
                        专家深度解读
                    </h3>
                </div>
                <div class="p-4 flex flex-col gap-3">
                    <div class="relative w-full h-32 rounded-xl bg-gray-900 overflow-hidden group cursor-pointer shadow-sm">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <div class="absolute inset-0 bg-slate-200 flex items-center justify-center">
                            <span class="material-symbols-outlined text-gray-300 text-[60px]">person</span>
                        </div>
                        <div class="absolute inset-0 flex items-center justify-center z-20">
                            <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-white text-[24px]">play_arrow</span>
                            </div>
                        </div>
                        <div class="absolute bottom-3 left-3 right-3 z-20 flex justify-between items-end">
                            <div>
                                <p class="text-white text-xs font-bold leading-tight mb-0.5">为何“稳富B款”适合当前市场？</p>
                                <p class="text-gray-300 text-[10px]">理财分析师 · 张经理</p>
                            </div>
                            <span class="text-white text-[10px] bg-black/50 px-1.5 py-0.5 rounded">01:30</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 bg-blue-50/50 border border-blue-100 p-3 rounded-xl cursor-pointer hover:bg-blue-50 transition-colors">
                        <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm shadow-blue-200">
                            <span class="material-symbols-outlined text-white text-[18px]">graphic_eq</span>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-xs font-bold text-gray-800">AI 每日财经早报</span>
                                <span class="text-[10px] text-gray-400">02:15</span>
                            </div>
                            <div class="flex items-end gap-0.5 h-3">
                                <div class="w-0.5 bg-primary/40 h-[60%] rounded-full"></div>
                                <div class="w-0.5 bg-primary/60 h-[80%] rounded-full"></div>
                                <div class="w-0.5 bg-primary h-[100%] rounded-full animate-pulse"></div>
                                <div class="w-0.5 bg-primary/70 h-[50%] rounded-full"></div>
                                <div class="w-0.5 bg-primary/40 h-[70%] rounded-full"></div>
                                <div class="w-full h-px bg-blue-100 ml-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden mt-3">
                    <div class="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
                    <h3 class="text-[#111418] text-sm font-bold flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary text-[18px]">view_carousel</span>
                        方案详情推荐
                    </h3>
                        <span class="text-[10px] text-primary bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-medium">可滑动查看</span>
                </div>
                <div class="pl-5 pb-6 pt-4">
                    <div class="flex gap-4 overflow-x-auto no-scrollbar pr-5 pb-4 snap-x snap-mandatory items-center">
                        <div class="snap-center shrink-0 min-w-[200px] bg-white border border-slate-200 rounded-xl p-3 flex flex-col gap-3 opacity-80 scale-95 transition-all">
                            <div class="flex justify-between items-start">
                                <div class="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded">方案 A</div>
                            </div>
                            <div>
                                <h4 class="text-slate-700 text-[13px] font-bold leading-tight mb-1">中银-日积月累</h4>
                                <span class="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">🛡️ 极低风险</span>
                            </div>
                            <div class="mt-auto pt-2 border-t border-dashed border-slate-100 flex items-end justify-between">
                                <div>
                                    <p class="text-[10px] text-slate-400">收益率</p>
                                    <p class="text-lg font-bold text-slate-700 leading-none">2.85%</p>
                                </div>
                                <button class="text-slate-400 text-[10px] flex items-center">详情 ></button>
                            </div>
                        </div>
                        <div class="snap-center shrink-0 min-w-[210px] bg-white border border-amber-100 rounded-xl p-4 flex flex-col gap-3 shadow-xl shadow-amber-100/50 ring-2 ring-secondary relative z-10 scale-100 transition-all transform">
                            <div class="absolute -top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                🔥 综合推荐
                            </div>
                            <div class="flex justify-between items-start">
                                <div class="bg-amber-50 text-secondary text-[10px] font-bold px-2 py-0.5 rounded">方案 B</div>
                            </div>
                            <div>
                                <h4 class="text-[#111418] text-[15px] font-black leading-tight mb-1 text-secondary">中银-稳富(B)</h4>
                                <div class="flex gap-1">
                                    <span class="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100">💰 收益最高</span>
                                </div>
                            </div>
                            <div class="bg-amber-50 border border-amber-100 rounded-lg p-2 flex items-center gap-2">
                                <span class="material-symbols-outlined text-amber-600 text-[16px]">savings</span>
                                <div class="flex flex-col">
                                    <span class="text-[9px] text-amber-700">预计收益 (500万)</span>
                                    <span class="text-[12px] font-bold text-amber-800">¥ 41,500</span>
                                </div>
                            </div>
                            <div class="mt-1 pt-2 border-t border-slate-100 flex items-end justify-between">
                                <div>
                                    <p class="text-[10px] text-slate-400">业绩基准</p>
                                    <p class="text-2xl font-black text-red-500 leading-none tracking-tight">3.45%</p>
                                </div>
                                <button class="bg-secondary hover:bg-amber-600 text-white text-[10px] font-medium px-3 py-1.5 rounded-full flex items-center gap-0.5 shadow-md shadow-amber-200 transition-colors">
                                    详情 <span class="material-symbols-outlined text-[10px]">arrow_outward</span>
                                </button>
                            </div>
                        </div>
                        <div class="snap-center shrink-0 min-w-[200px] bg-white border border-slate-200 rounded-xl p-3 flex flex-col gap-3 opacity-80 scale-95 transition-all">
                            <div class="flex justify-between items-start">
                                <div class="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded">方案 C</div>
                            </div>
                            <div>
                                <h4 class="text-slate-700 text-[13px] font-bold leading-tight mb-1">中银-灵活存取</h4>
                                <span class="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">⚡ T+0 到账</span>
                            </div>
                            <div class="mt-auto pt-2 border-t border-dashed border-slate-100 flex items-end justify-between">
                                <div>
                                    <p class="text-[10px] text-slate-400">收益率</p>
                                    <p class="text-lg font-bold text-slate-700 leading-none">3.10%</p>
                                </div>
                                <button class="text-slate-400 text-[10px] flex items-center">详情 ></button>
                            </div>
                        </div>
                        <div class="snap-start min-w-[20px]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
