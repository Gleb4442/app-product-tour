import React from 'react';
import BottomNav from '../BottomNav';

export default function PreArrival({ active, step }) {
    return (
        <div className={`absolute inset-0 bg-[#f6f6f8] font-['Inter',sans-serif] text-gray-800 overflow-hidden transition-transform duration-500 ease-in-out ${active ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>

            {/* SUB-STEP 0: LOGIN SCREEN */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${step === 0 ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}>
                {/* Background Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute filter blur-[40px] opacity-60 w-48 h-48 bg-[#1052D5]/20 rounded-full top-[-5%] left-[-20%]"></div>
                    <div className="absolute filter blur-[40px] opacity-60 w-40 h-40 bg-blue-200/40 rounded-full bottom-[-5%] right-[-20%]"></div>
                    <div className="absolute filter blur-[40px] opacity-60 w-32 h-32 bg-indigo-100/50 rounded-full top-[30%] right-[-10%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#1052D5]/5 mix-blend-overlay"></div>
                </div>

                <div className="relative h-full flex flex-col justify-between px-5 py-6">
                    <header className="pt-10 flex flex-col items-center text-center space-y-4 flex-grow justify-center pb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#1052D5] to-blue-400 flex items-center justify-center shadow-lg shadow-[#1052D5]/20 text-white mb-1">
                            <span className="material-symbols-outlined text-[28px] font-light">meeting_room</span>
                        </div>
                        <div className="space-y-1.5">
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#1052D5]/80 font-semibold">Welcome to Roomie</p>
                            <h1 className="text-3xl font-light text-gray-900 leading-tight">
                                <span className="italic font-['Noto_Serif',serif]">Quick</span> Login
                            </h1>
                            <p className="text-gray-500 text-[11px] font-light max-w-[200px] mx-auto leading-relaxed">
                                Your stay, elevated. Experience luxury at your fingertips.
                            </p>
                        </div>
                    </header>

                    <main className="w-full space-y-3 mb-4 z-10">
                        <button className="glass-button w-full">
                            <svg className="w-4 h-4 z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            <span className="text-gray-700 font-medium z-10 text-[13px]">Continue with Google</span>
                        </button>
                        <button className="glass-button w-full">
                            <svg className="w-4 h-4 z-10 text-black fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.48 2.24-1.26 3.96-.82 1.62.42 2.76 1.48 3.5 2.56-3.1 1.88-2.55 6.46.75 8.16-.62 1.34-1.43 2.72-3.29 2.27zM12.02 5.25c.34-1.89 1.55-3.3 3.09-3.46.43 2.06-1.74 3.86-3.09 3.46z"></path>
                            </svg>
                            <span className="text-gray-900 font-medium z-10 text-[13px]">Continue with Apple</span>
                        </button>

                        <div className="flex items-center justify-center py-1 space-x-3 opacity-50">
                            <div className="h-px bg-[#1052D5]/30 w-8"></div>
                            <span className="text-[9px] text-[#1052D5]/60 uppercase tracking-[0.2em] font-bold">or</span>
                            <div className="h-px bg-[#1052D5]/30 w-8"></div>
                        </div>

                        <button className="liquid-phone-btn w-full">
                            <span className="material-symbols-outlined text-[16px] fill-[1] transition-transform duration-300 group-hover:scale-110">call</span>
                            <span className="font-medium tracking-wide text-[13px]">Login with Phone</span>
                        </button>
                    </main>

                    <footer className="text-center pb-2 z-10">
                        <p className="text-[9px] text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                            By continuing, you agree to our <a className="text-[#1052D5] hover:text-[#1052D5]/80 font-medium" href="#">Terms</a> and <a className="text-[#1052D5] hover:text-[#1052D5]/80 font-medium" href="#">Privacy</a>.
                        </p>
                        <button className="mt-3 text-[11px] text-[#1052D5]/70 hover:text-[#1052D5] font-medium tracking-wide transition-colors">
                            Skip for now
                        </button>
                    </footer>
                </div>
                <div className="absolute bottom-0 right-0 pointer-events-none opacity-20 transform translate-x-1/3 translate-y-1/3">
                    <div className="w-48 h-48 rounded-full border-[30px] border-white blur-2xl"></div>
                </div>
            </div>

            {/* SUB-STEP 1: HOME SCREEN (Fades in) */}
            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-[#f6f6f8] text-slate-900 ${step === 1 ? 'opacity-100 z-30 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}>
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
        </div>
    );
}
