'use client';

import Image from "next/image";
import { useState } from "react";
import { UpdateModalProps } from "../types/modal.types";


export default function UpdateModal({ isOpen, onClose, onSave }: UpdateModalProps) {
  const [formData, setFormData] = useState<{ rank: number; percentile: number; score: number}>({
    rank: 0,
    percentile: 0,
    score: 0,
  });
  const [errors, setErrors] = useState<{ rank: string; percentile: string; score: string}>({
    rank: '',
    percentile: '',
    score: '',
  });
  const validateField = (name: string, value: string | number) => {

    const numValue = Number(value);
    if (name === 'score') {
      if (numValue < 1 || numValue > 15) {
        return 'Score must be between 1 and 15';
      }
    } 
    if(name === 'percentile'){
      if (numValue < 1 || numValue > 100){
        return 'percentile | 0-100'
      }
    } 
    if(name === 'rank'){
      if (!numValue){
        return 'required | must be a number'
      }
    }
    return '';
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      rank: validateField('rank', formData.rank),
      percentile: validateField('percentile', formData.percentile),
      score: validateField('score', formData.score)
    };
    
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }
    console.log(formData);
    onSave(formData);
    onClose()
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name ]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 z-50 w-11/12 lg:w-[40%]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Update scores</h2>
          <Image src="/html.png" alt="HTML5" width={20} height={20} className="h-auto w-auto"/>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Rank Input */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full grid place-items-center text-white font-bold">
                  1
                </div>
                <label >Update your <span className="font-bold">Rank</span></label>
              </div>
              <div className="w-2/6">
                <input
                  type="number"
                  name="rank"
                  className={`w-full border rounded-md p-2 ${errors.rank && "border-red-500 outline-none"}`}
                  placeholder="Rank"
                  value={formData.rank}
                  onChange={handleChange}
                />
                {errors.rank && <p className="text-red-500 text-sm mt-1">{errors.rank}</p>}
              </div>
            </div>

            {/* Percentile Input */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full grid place-items-center text-white font-bold">
                  2
                </div>
                <label >Update your <span className="font-bold">Percentile</span></label>
              </div>
              <div className="w-2/6">
                <input
                  type="number"
                  name="percentile"
                  className={`w-full border rounded-md p-2 ${errors.percentile && "border-red-500 outline-none"}`}
                  placeholder="Percentile"
                  value={formData.percentile}
                  onChange={handleChange}
                />
                {errors.percentile && <p className="text-red-500 text-sm mt-1">{errors.percentile}</p>}
              </div>
            </div>

            {/* Score Input */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full grid place-items-center text-white font-bold">
                  3
                </div>
                <label>Update your <span className="font-bold">Current Score (out of 15)</span></label>
              </div>
              <div className="w-2/6">
                <input
                  type="number"
                  name="score"
                  className={`w-full border rounded-md p-2 ${errors.score && "border-red-500 outline-none"}`}
                  placeholder="Score"
                  value={formData.score}
                  onChange={handleChange}
                />
                {errors.score && <p className="text-red-500 text-sm mt-1">{errors.score}</p>}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-500"
            >
              save →
            </button>
          </div>
        </form>
      </div>
    </>
  );
} 