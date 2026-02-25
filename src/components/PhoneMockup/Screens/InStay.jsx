import React from 'react';
import BottomNav from '../BottomNav';

export default function InStay({ active }) {
    return (
        <div className={`absolute inset-0 bg-[#f6f6f8] text-slate-900 font-['Inter',sans-serif] transition-transform duration-500 ease-in-out ${active ? 'translate-x-0 opacity-100 z-30 pointer-events-auto' : 'translate-x-full opacity-0 z-0 pointer-events-none'}`}>
            <div className="absolute inset-0 overflow-y-auto hide-scrollbar pb-24">

                <header className="px-4 pt-10 pb-2 flex items-center justify-between">
                    <div>
                        <p className="text-slate-500 text-[10px] font-medium">Welcome back,</p>
                        <h1 className="text-base font-bold tracking-tight text-slate-900">Good Morning, Alex</h1>
                    </div>
                    <div className="relative">
                        <img alt="Profile avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsXP4Fq3FOAPvvFpSLiNocwn8iHndukT3Eu6h3FgdZPsNJGprZkFhdID5Uyx-ptOTp8_A9Vyx-0DJynCg0OmEdhNz63i7qsjdVyqSh8IF-yMP8vuXFCy4xbCt45cEL83GwOPnl0mtiY95Mh5blIVf0-noecPxJ8MNM9rpB0KOx4wD5s8HyxoKwkaXAf41_BCLBGwM5HWyCwi-I2641IsLJiJxJ51ZgDO2Qe3ES_5QYk8EwoqUae0X1KBNQjN1UYGL4bb-4zy9dUDyj" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                </header>

                <section className="px-4 py-2">
                    <div className="bg-[#1152d4] rounded-xl p-4 text-white shadow-xl shadow-[#1152d4]/20 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-[8px] font-medium uppercase tracking-widest opacity-80">Current Stay</span>
                                    <h2 className="text-[14px] font-bold mt-0.5 leading-tight">Grand Hyatt Regency</h2>
                                </div>
                                <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-md cursor-pointer hover:bg-white/30 transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-[16px]">edit</span>
                                </div>
                            </div>
                            <div className="flex items-end justify-between mb-4">
                                <div className="space-y-0.5">
                                    <p className="text-[9px] opacity-70">Room Number</p>
                                    <p className="text-xl font-bold leading-none">402</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[9px] opacity-70 mb-0.5">Check-out</p>
                                    <div className="flex items-center gap-1 justify-end">
                                        <span className="material-icons text-[10px] opacity-70">calendar_today</span>
                                        <p className="text-[10px] font-semibold">Oct 12 - Oct 15</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="bg-gradient-to-r from-amber-200 to-amber-400 text-amber-900 px-2 py-2 rounded-lg text-[10px] font-bold shadow-lg shadow-amber-400/20 hover:from-amber-100 hover:to-amber-300 transition-all flex items-center justify-center gap-1 border border-white/20 w-full">
                                    <span className="material-symbols-outlined text-[14px]">upgrade</span>
                                    Upgrade
                                </button>
                                <button className="bg-white text-slate-900 px-2 py-2 rounded-lg text-[10px] font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-1 border border-slate-100 w-full">
                                    <span className="material-symbols-outlined text-[14px]">how_to_reg</span>
                                    Pre-check-in
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-2">
                    <div className="flex gap-2 items-center">
                        <div className="flex-1 relative group">
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-xl border border-white/50 shadow-sm transition-all duration-300"></div>
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#1152d4]/80 text-[18px] z-10">search</span>
                            <input className="w-full pl-9 pr-20 py-3 bg-transparent border-none rounded-xl text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:ring-0 relative z-10 outline-none" placeholder="Find your next stay" type="text" />
                            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm px-2 py-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-1 z-20 transition-colors">
                                <span className="material-symbols-outlined text-[14px] text-[#1152d4]">near_me</span>
                                <span className="text-[8px] font-semibold text-slate-600 uppercase tracking-wide">Nearby</span>
                            </button>
                        </div>
                        <button className="w-10 h-10 bg-slate-100/80 rounded-full flex items-center justify-center shadow-md shadow-slate-200/50 border border-slate-100 shrink-0 group hover:shadow-lg transition-all">
                            <span className="material-symbols-outlined text-[18px] text-[#1152d4] font-light transition-transform duration-200 group-hover:scale-105">tune</span>
                        </button>
                    </div>
                </section>

                <section className="py-2 mt-1">
                    <div className="px-4 flex items-center justify-between mb-3">
                        <h3 className="text-[14px] font-bold text-slate-900">Recommended for you</h3>
                        <button className="text-[#1152d4] text-[10px] font-semibold">See all</button>
                    </div>
                    <div className="flex overflow-x-auto hide-scrollbar gap-3 px-4 pb-2">
                        <div className="flex-shrink-0 w-44 bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                            <div className="relative h-28">
                                <img alt="Luxury resort" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXmyoLaf9HHG60bVVCaxqUHNw_ryNKhRgHYK2abgkHT4dZlcemXz9aKS72YHMnMqudN4VLqTJxelCWCfO2OCv1FPJNnzyuRRvEieQxmtf0EofO2jsm6WGVaxJFhyvIaCdyIBkvfPIyfcDt7H0YId4thkQPrvWUOmPxYU-Grt878dXSJ6jwrs4J9PZzo5oT17FaN2SAnSvqEGCAr1JIC8ugB3UgPvveAh-aR4yiPnSN7mm904Gmnhsb8zj4FknPTjHT2_7sw_MfCbGe" />
                                <button className="absolute top-2 right-2 bg-white/30 backdrop-blur-md p-1 rounded-full text-white">
                                    <span className="material-icons text-[14px]">favorite_border</span>
                                </button>
                                <div className="absolute bottom-2 left-2 bg-[#1152d4] text-[8px] text-white font-bold px-1.5 py-0.5 rounded">FEATURED</div>
                            </div>
                            <div className="p-3">
                                <div className="flex justify-between items-start mb-0.5">
                                    <h4 className="font-bold text-[12px] truncate pr-1">The Ritz-Carlton</h4>
                                    <div className="flex items-center text-[10px] font-bold text-amber-500">
                                        <span className="material-icons text-[10px] mr-0.5">star</span>4.9
                                    </div>
                                </div>
                                <p className="text-slate-500 text-[10px] mb-2 flex items-center">
                                    <span className="material-icons text-[10px] mr-0.5">location_on</span>Malibu, CA
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-[13px] font-bold text-[#1152d4]">$450<span className="text-[9px] text-slate-400 font-normal"> /night</span></p>
                                    <span className="material-icons text-slate-300 text-[14px]">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-44 bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                            <div className="relative h-28">
                                <img alt="Modern villa" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx3yKZ4MbwFzhmVbQNgriFOFIIIHGdTcYocFeypzPizPyEW9IWRkHP16_e7CYhM9L8tTgsPCFDjqiybAkVB8SICXRm_6FUFPXjMN2huIMtdbdI3DGXAwGp9YZj2XhFmqN19bTeOs4uSUVwP7cBz2nEXSUS03W48FAKDWPTr9PxvpHKQ_wqgCPXkYKJbjVvIiQqQqOGFS33bqId3uw7q3eXEYfpB2E92LGCyOPaPc7viuniBuQzBhnnUqEyMIdmWKu4ReC3mh_dr-4g" />
                                <button className="absolute top-2 right-2 bg-white/30 backdrop-blur-md p-1 rounded-full text-white">
                                    <span className="material-icons text-[14px]">favorite_border</span>
                                </button>
                            </div>
                            <div className="p-3">
                                <div className="flex justify-between items-start mb-0.5">
                                    <h4 className="font-bold text-[12px] truncate pr-1">Amangiri Resort</h4>
                                    <div className="flex items-center text-[10px] font-bold text-amber-500">
                                        <span className="material-icons text-[10px] mr-0.5">star</span>4.8
                                    </div>
                                </div>
                                <p className="text-slate-500 text-[10px] mb-2 flex items-center">
                                    <span className="material-icons text-[10px] mr-0.5">location_on</span>Canyon Point, UT
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-[13px] font-bold text-[#1152d4]">$820<span className="text-[9px] text-slate-400 font-normal"> /night</span></p>
                                    <span className="material-icons text-slate-300 text-[14px]">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-1 mb-2">
                    <h3 className="text-[14px] font-bold text-slate-900 mb-3">Guest Services</h3>
                    <div className="flex justify-between items-start gap-2">
                        <div className="flex flex-col items-center gap-1.5 flex-1">
                            <div className="w-12 h-12 rounded-[0.8rem] bg-[#1152d4]/10 flex items-center justify-center text-[#1152d4] shadow-sm">
                                <span className="material-icons text-[22px]">room_service</span>
                            </div>
                            <span className="text-[9px] font-semibold text-slate-600">Dining</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 flex-1">
                            <div className="w-12 h-12 rounded-[0.8rem] bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
                                <span className="material-icons text-[22px]">cleaning_services</span>
                            </div>
                            <span className="text-[9px] font-semibold text-slate-600">Cleaning</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 flex-1">
                            <div className="w-12 h-12 rounded-[0.8rem] bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm">
                                <span className="material-icons text-[22px]">spa</span>
                            </div>
                            <span className="text-[9px] font-semibold text-slate-600">Spa</span>
                        </div>
                    </div>
                </section>

                <section className="px-4 pb-4 mt-3">
                    <div className="bg-white/45 backdrop-blur-[16px] border border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl p-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="mb-3 text-center w-full">
                                <h4 className="text-[12px] font-semibold text-slate-700">Quick Contact</h4>
                            </div>
                            <div className="flex justify-between items-center w-full px-1 gap-2">
                                <button className="flex flex-col items-center gap-1.5 group flex-1">
                                    <div className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center text-slate-600 group-hover:bg-slate-100 transition-all duration-300 shadow-sm border border-white/50">
                                        <i className="fa-brands fa-telegram text-[20px] text-slate-600"></i>
                                    </div>
                                    <span className="text-[9px] font-medium text-slate-600">Telegram</span>
                                </button>
                                <button className="flex flex-col items-center gap-1.5 group flex-1">
                                    <div className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center text-slate-600 group-hover:bg-slate-100 transition-all duration-300 shadow-sm border border-white/50">
                                        <i className="fa-brands fa-whatsapp text-[20px] text-slate-600"></i>
                                    </div>
                                    <span className="text-[9px] font-medium text-slate-600">WhatsApp</span>
                                </button>
                                <button className="flex flex-col items-center gap-1.5 group flex-1">
                                    <div className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center text-slate-600 group-hover:bg-slate-100 transition-all duration-300 shadow-sm border border-white/50">
                                        <span className="material-symbols-outlined text-[20px] font-light text-slate-600">call</span>
                                    </div>
                                    <span className="text-[9px] font-medium text-slate-600">Call Us</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <BottomNav />
        </div>
    );
}
