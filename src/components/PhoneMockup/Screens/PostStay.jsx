import React from 'react';
import { Star, CalendarCheck } from 'lucide-react';

export default function PostStay({ active }) {
    return (
        <div className={`absolute inset-0 bg-slate-50 transition-transform duration-500 ease-in-out flex flex-col ${active ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>

            <div className="relative h-48 bg-purple-600 flex flex-col items-center justify-center text-white overflow-hidden rounded-b-[2rem] shadow-lg">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <Star className="text-yellow-300 fill-yellow-300 mb-2" size={32} />
                <h2 className="text-3xl font-bold tracking-tight">12,450</h2>
                <p className="text-purple-200 text-sm font-medium">Roomie Points</p>
                <div className="absolute bottom-4 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold border border-white/30">
                    Platinum Status
                </div>
            </div>

            <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="text-center mt-2">
                    <h3 className="font-bold text-slate-800 text-lg">С возвращением домой!</h3>
                    <p className="text-sm text-slate-500 mt-1">Мы уже скучаем по вам.</p>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 relative overflow-hidden mt-2 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-purple-100 rounded-bl-full -z-0"></div>
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-purple-600 mb-1 uppercase tracking-wide">Персональное предложение</div>
                        <h4 className="font-bold text-slate-800 text-base mb-1">Roomie Париж</h4>
                        <p className="text-xs text-slate-500 mb-3 w-4/5">Мы знаем, вы любите номера с видом. Скидка 15% на следующий уикенд.</p>
                        <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors w-full justify-center">
                            <CalendarCheck size={16} />
                            Бронь в 1 клик
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
