import React from 'react';
import { Database } from 'lucide-react';

export default function CrmVisualizer({ activeStage, stages }) {
    const currentStage = stages[activeStage];

    return (
        <div className={`w-full sm:w-[280px] bg-slate-900 border-2 rounded-3xl p-6 flex flex-col shadow-2xl transition-colors duration-500 ${currentStage.crmBorder}`}>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <div className={`p-2.5 rounded-xl bg-slate-800 ${currentStage.crmColor}`}>
                    <Database size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-white leading-tight">Roomie CRM</h3>
                    <p className="text-xs text-slate-400 font-mono">Real-time Data</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
                <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Активное обогащение</div>
                    <p className="text-sm text-slate-300 min-h-[80px]">
                        {currentStage.crmData}
                    </p>
                </div>

                {/* Simulated Data blocks */}
                <div className="space-y-2 opacity-70">
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${currentStage.crmColor} bg-current w-[85%] transition-all duration-1000`}></div>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${currentStage.crmColor} bg-current w-[60%] transition-all duration-1000 delay-100`}></div>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${currentStage.crmColor} bg-current w-[90%] transition-all duration-1000 delay-200`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
