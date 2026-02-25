import React from 'react';
import { Signal, Wifi, BatteryMedium } from 'lucide-react';
import PreArrival from './Screens/PreArrival';
import InStay from './Screens/InStay';
import PostStay from './Screens/PostStay';

export default function PhoneMockup({ activeStage, preArrivalStep }) {
    return (
        <div className="relative w-[280px] h-[580px] bg-[#3f2f42] rounded-[3rem] border-[4px] border-[#3f2f42] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col shrink-0 z-10">
            {/* Physical Buttons */}
            <div className="absolute -left-[6px] top-[105px] w-[2px] h-[24px] bg-[#3f2f42] rounded-l-sm shadow-[inset_1px_0_1px_rgba(255,255,255,0.2)] z-0"></div>
            <div className="absolute -left-[6px] top-[145px] w-[2px] h-[48px] bg-[#3f2f42] rounded-l-sm shadow-[inset_1px_0_1px_rgba(255,255,255,0.2)] z-0"></div>
            <div className="absolute -left-[6px] top-[200px] w-[2px] h-[48px] bg-[#3f2f42] rounded-l-sm shadow-[inset_1px_0_1px_rgba(255,255,255,0.2)] z-0"></div>
            <div className="absolute -right-[6px] top-[160px] w-[2px] h-[70px] bg-[#3f2f42] rounded-r-sm shadow-[inset_-1px_0_1px_rgba(255,255,255,0.2)] z-0"></div>

            {/* Inner Screen Container */}
            <div className="flex-1 w-full bg-slate-50 rounded-[2.7rem] relative overflow-hidden flex flex-col border-[5px] border-black">

                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-[22px] w-[76px] bg-black rounded-full z-[100] flex items-center justify-end px-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
                </div>

                {/* Status Bar */}
                <div className={`absolute top-0 inset-x-0 h-10 w-full pt-3 px-5 flex justify-between items-start text-[10px] z-[90] font-medium pointer-events-none transition-colors duration-500 ${activeStage === 0 ? 'text-slate-800' : 'text-white'}`}>
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                        <Signal size={12} />
                        <Wifi size={12} />
                        <BatteryMedium size={14} />
                    </div>
                </div>

                {/* --- STRAGES --- */}
                <PreArrival active={activeStage === 0} step={preArrivalStep} />
                <InStay active={activeStage === 1} />
                <PostStay active={activeStage === 2} />

                {/* Home Indicator */}
                <div className="absolute bottom-1.5 inset-x-0 flex justify-center pb-1 z-[60]">
                    <div className="w-1/3 h-1 bg-slate-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
