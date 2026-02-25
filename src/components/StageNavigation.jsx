import React from 'react';

export default function StageNavigation({ stages, activeStage, handleStageChange }) {
    return (
        <div className="flex flex-col gap-3 relative before:absolute before:inset-y-0 before:left-6 before:w-0.5 before:bg-slate-800">
            {stages.map((stage, index) => {
                const isActive = index === activeStage;
                const Icon = stage.icon;
                return (
                    <button
                        key={stage.id}
                        onClick={() => handleStageChange(index)}
                        className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${isActive
                                ? 'bg-slate-900 border border-slate-700/50 shadow-xl scale-100 opacity-100 z-10'
                                : 'hover:bg-slate-900/50 scale-95 opacity-70 border border-transparent hover:opacity-100'
                            }`}
                    >
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 relative z-10 ${isActive
                                    ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                                    : 'bg-slate-800 text-slate-400'
                                }`}
                        >
                            <Icon size={20} />
                        </div>
                        <div>
                            <div className="flex items-baseline gap-2">
                                <h3 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-slate-300'}`}>
                                    {stage.label}
                                </h3>
                                <span className="text-xs text-slate-500 font-mono tracking-wider uppercase">{stage.subLabel}</span>
                            </div>
                            <span className={`text-sm font-medium ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                                {stage.focus}
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
