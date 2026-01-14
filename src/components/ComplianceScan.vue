<template>
    <div class="flex justify-start items-start gap-2.5">
        <div class="w-9 h-9 rounded-full bg-indigo-50 overflow-hidden shrink-0 flex items-center justify-center border border-indigo-100 shadow-sm">
            <span class="material-symbols-outlined text-indigo-600 text-[20px]">security</span>
        </div>
        <div class="flex flex-col gap-2 max-w-[88%] w-full">
            <div class="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-indigo-100 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-80"></div>
                <div class="flex items-center gap-2 mb-4">
                    <div class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </div>
                    <span class="text-xs font-bold text-gray-800">正在接入合规风控系统，进行穿透式扫描...</span>
                </div>
                <div class="space-y-3 pl-1">
                    <div class="flex gap-3">
                        <div class="flex flex-col items-center">
                            <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                            <div class="w-px h-full bg-gray-100 my-0.5 min-h-[12px]"></div>
                        </div>
                        <div class="text-[11px] text-gray-500 leading-snug font-mono">
                            依据《商业银行理财业务监督管理办法》校验合格投资者身份... <span class="text-green-600 font-bold ml-0.5">[通过]</span>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <div class="flex flex-col items-center">
                            <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                            <div class="w-px h-full bg-gray-100 my-0.5 min-h-[12px]"></div>
                        </div>
                        <div class="text-[11px] text-gray-500 leading-snug font-mono">
                            反洗钱 (AML) 名单筛查与风险承受能力匹配... <span class="text-green-600 font-bold ml-0.5">[无异常]</span>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <div class="flex flex-col items-center">
                            <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0 animate-pulse"></div>
                        </div>
                        <div class="text-[11px] text-gray-800 font-medium leading-snug font-mono">
                            基于企业流动性需求，正在计算最优资产组合权重...
                        </div>
                    </div>
                </div>
                <div class="mt-5 pt-4 border-t border-gray-50">
                    <div class="h-[80px] w-full relative flex items-end justify-between px-4 gap-3 opacity-60">
                        <div class="w-full bg-gray-100 rounded-t-sm h-[30%] animate-pulse"></div>
                        <div class="w-full bg-blue-50 rounded-t-sm h-[55%] animate-pulse delay-75"></div>
                        <div class="w-full bg-gray-100 rounded-t-sm h-[40%] animate-pulse delay-100"></div>
                        <div class="w-full bg-blue-100 rounded-t-sm h-[75%] animate-pulse delay-150"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
