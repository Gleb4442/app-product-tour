import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Database } from 'lucide-react';
import { stages } from './data/stages';
import StageNavigation from './components/StageNavigation';
import PhoneMockup from './components/PhoneMockup/PhoneMockup';
import CrmVisualizer from './components/CrmVisualizer';

export default function App() {
    const [activeStage, setActiveStage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [preArrivalStep, setPreArrivalStep] = useState(0); // 0 = Login, 1 = Home

    // Auto-play feature for Main Stages
    useEffect(() => {
        const timer = setInterval(() => {
            handleStageChange((prev) => (prev + 1) % stages.length);
        }, 8000); // Auto switch every 8 seconds
        return () => clearInterval(timer);
    }, []);

    // Internal timer for Pre-arrival screens
    useEffect(() => {
        if (activeStage === 0) {
            setPreArrivalStep(0);
            const timer = setTimeout(() => {
                setPreArrivalStep(1);
            }, 3500); // Switch from Login to Home after 3.5s
            return () => clearTimeout(timer);
        } else {
            setPreArrivalStep(0);
        }
    }, [activeStage]);

    const handleStageChange = (index) => {
        if (index === activeStage) return;
        setIsAnimating(true);
        setActiveStage(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const currentStage = stages[activeStage];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col items-center py-10 px-4 sm:px-8 overflow-hidden">
            {/* Header */}
            <div className="text-center max-w-3xl mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-4">
                    <Sparkles size={16} />
                    <span>Roomie Ecosystem</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Эволюция Гостевого Опыта</h1>
                <p className="text-slate-400 text-lg">От первого касания до пожизненной лояльности через единое приложение.</p>
            </div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Left Column: Timeline & Content */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                    <StageNavigation
                        stages={stages}
                        activeStage={activeStage}
                        handleStageChange={handleStageChange}
                    />
                    {/* Active Stage Description Card */}
                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                        <p className="text-slate-300 leading-relaxed text-lg min-h-[120px] transition-opacity duration-300">
                            {currentStage.description}
                        </p>
                    </div>
                </div>

                {/* Right Column: Visualizer (Phone & CRM) */}
                <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16 relative">
                    {/* Background decorative glow */}
                    <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <PhoneMockup activeStage={activeStage} preArrivalStep={preArrivalStep} />

                    {/* Connection Animation (Data Flow) - Desktop */}
                    <div className="hidden sm:flex flex-col items-center justify-center w-16 h-32 relative">
                        <div className="absolute w-full h-0.5 bg-slate-800 rounded-full top-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-full h-full flex items-center overflow-hidden">
                            <div className={`w-2 h-2 rounded-full ${currentStage.crmColor} bg-current shadow-[0_0_8px_currentColor] animate-data-flow absolute`}></div>
                            <div className={`w-2 h-2 rounded-full ${currentStage.crmColor} bg-current shadow-[0_0_8px_currentColor] animate-data-flow absolute delay-300`}></div>
                            <div className={`w-2 h-2 rounded-full ${currentStage.crmColor} bg-current shadow-[0_0_8px_currentColor] animate-data-flow absolute delay-700`}></div>
                        </div>
                        <ArrowRight className="text-slate-600 relative z-10 bg-slate-950 px-1" size={24} />
                    </div>

                    {/* Mobile Connection (Vertical) */}
                    <div className="sm:hidden flex justify-center w-full py-4 relative">
                        <div className="absolute h-full w-0.5 bg-slate-800 rounded-full left-1/2 -translate-x-1/2"></div>
                        <ArrowRight className="text-slate-600 relative z-10 bg-slate-950 py-1 rotate-90" size={24} />
                    </div>

                    <CrmVisualizer activeStage={activeStage} stages={stages} />
                </div>
            </div>
        </div>
    );
}
