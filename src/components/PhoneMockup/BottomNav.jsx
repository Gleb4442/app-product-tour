import React from 'react';

export default function BottomNav() {
    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] z-50">
            <nav className="bg-white/70 backdrop-blur-md rounded-[20px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] flex justify-between items-center px-4 py-2.5">
                <a className="flex flex-col items-center gap-0.5 text-[#1152d4] transition-all duration-300" href="#">
                    <span className="material-symbols-outlined text-[20px]">home</span>
                    <span className="text-[8px] font-bold">Home</span>
                </a>
                <a className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-[#1152d4] transition-all duration-300" href="#">
                    <span className="material-icons text-[20px]">support_agent</span>
                    <span className="text-[8px] font-medium">Services</span>
                </a>
                <a className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-[#1152d4] transition-all duration-300" href="#">
                    <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                    <span className="text-[8px] font-medium">Orders</span>
                </a>
                <a className="flex flex-col items-center gap-0.5 text-slate-400 hover:text-[#1152d4] transition-all duration-300" href="#">
                    <span className="material-icons text-[20px]">person_outline</span>
                    <span className="text-[8px] font-medium">Profile</span>
                </a>
            </nav>
        </div>
    );
}
