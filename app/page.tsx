'use client'

import Image from 'next/image';
import Chart from './components/Chart';
import SyllabusAnalysis from './components/SyllabusAnalysis';
import QuestionAnalysis from './components/QuestionAnalysis';
import UpdateModal from './components/UpdateModal';
import { useState } from 'react';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questionScore, setQuestionScore] = useState<number>(0);
  const [rank, setRank] = useState<number>(0);
  const [percentile, setPercentile] = useState<number>(0);

  const handleUpdateScores = (newScores: { rank: number; percentile: number; score: number }) => {
    console.log(newScores.score )
    setQuestionScore(newScores.score * 6.67);
    setPercentile(newScores.percentile);
    setRank(newScores.rank);
    setIsModalOpen(false);
  };
  return (
    <>
      <h1 className="text-xl md:m-4 ml-16 my-4">Skill Test</h1>
      <div className='md:flex content-center w-full'>
        <div className="p-6 md:w-4/6">
          <div className="bg-white p-4 rounded-lg shadow-sm border mb-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/html.png"
                alt="HTML5 Logo"
                width={30}
                height={30}
                className="h-auto w-auto"
              />
              <div>
                <h2 className="text-lg font-medium">Hyper Text Markup Language</h2>
                <p className="text-sm text-gray-600">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-navy-blue/90"
            >
              Update
            </button>
            <UpdateModal 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSave={handleUpdateScores}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
            <h3 className="text-lg font-medium mb-4">Quick Statistics</h3>
            <div className="grid grid-cols-3">
              {/* Rank */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3 border-r border-gray-300">
                <div className="bg-yellow-50 p-2 rounded-full">
                  <span className="text-yellow-500 md:text-xl">🏆</span>
                </div>
                <div>
                  <div className="text-[3vh] font-semibold">{rank}</div>
                  <div className="lg:text-[2vh] text-gray-500 text-nowrap text-[.7rem]">YOUR RANK</div>
                </div>
              </div>

              {/* Percentile */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3 border-r border-gray-300 pl-1">
                <div className="bg-gray-50 p-2 rounded-full">
                  <span className="text-gray-500 text-xl">🗒️</span>
                </div>
                <div>
                  <div className="text-[3vh] font-semibold">{percentile}%</div>
                  <div className="lg:text-[2vh] text-gray-500 text-nowrap text-[.7rem]">PERCENTILE</div>
                </div>
              </div>

              {/* Correct Answers */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3 px-2">
                <div className="bg-green-50 p-2 rounded-full">
                  <span className="text-green-500 text-xl">✅</span>
                </div>
                <div>
                  <div className="text-[3vh] font-semibold">{Math.floor(questionScore / 6.6)} / 15</div>
                  <div className="lg:text-[2vh] text-gray-500 text-nowrap text-[.7rem]">CORRECT ANSWERS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className='border border-gray-300 rounded-lg p-4 h-[400px] md:h-[350px]'>
            <Chart />
          </div>
        </div>
        <div className='md:w-3/6 p-6 grid gap-12'>
          <SyllabusAnalysis />
          <QuestionAnalysis percentage={questionScore} question={Math.floor(questionScore / 6.6)} img='🎯'/>
        </div>
      </div>
    </>
  );
}
