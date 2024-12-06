import { CircularProgress } from "../types/question.types";



export default function QuestionAnalysis({ percentage, img, question }: CircularProgress ) {
  return (
    <>
      <div className="border border-gray-300 p-6 rounded-lg grid place-items-center gap-12">
        <div className="grid place-items-center gap-8">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-bold text-lg">Question Analysis</h3>
            <p className="text-blue-500 font-semibold">{question} / 15</p>
          </div>
          <div>
            <p className="font-bold text-gray-400">You Scored {question} Questions Out of 15 <span className="text-black font-thin">However it still needs some improvements</span></p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-[10rem] h-[10rem] rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(#3B82F6 ${percentage * 3.6}deg, #EAF2FE 0deg)`,
            }}
          >
            <div className="text-6xl w-[6rem] h-[6rem] rounded-full bg-white grid place-items-center">
              {img}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
