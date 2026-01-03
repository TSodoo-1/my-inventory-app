"use client";
import React, { useState } from 'react';
import { Package, ShoppingCart, BarChart3, ScanLine, Plus } from 'lucide-react';

export default function InventoryApp() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-20 font-sans">
      {/* Header */}
      <div className="bg-blue-600 p-6 text-white rounded-b-3xl shadow-lg">
        <h1 className="text-xl font-bold">Миний Агуулах</h1>
        <p className="text-sm opacity-80">Өнөөдрийн ашиг: 150,000₮</p>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {view === 'dashboard' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <Package className="text-blue-500 mb-2" />
                <p className="text-xs text-gray-500">Нийт бараа</p>
                <p className="text-lg font-bold">1,240</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <BarChart3 className="text-green-500 mb-2" />
                <p className="text-xs text-gray-500">Үлдэгдэл өртөг</p>
                <p className="text-lg font-bold">5.2M₮</p>
              </div>
            </div>

            <button className="w-full bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><ScanLine /></div>
                <div className="text-left">
                  <p className="font-bold">Бар код уншуулах</p>
                  <p className="text-xs text-gray-500">Бараа хайх, зарах</p>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t flex justify-around p-3 text-gray-400">
        <button onClick={() => setView('dashboard')} className={view === 'dashboard' ? 'text-blue-600' : ''}>
          <Package size={24} className="mx-auto" />
          <span className="text-[10px]">Агуулах</span>
        </button>
        <button className="bg-blue-600 text-white p-3 rounded-full -mt-8 shadow-lg">
          <Plus size={24} />
        </button>
        <button onClick={() => setView('reports')} className={view === 'reports' ? 'text-blue-600' : ''}>
          <BarChart3 size={24} className="mx-auto" />
          <span className="text-[10px]">Тайлан</span>
        </button>
      </div>
    </div>
  );
}
