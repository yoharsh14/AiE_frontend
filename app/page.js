"use client";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-10">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Purpose of AiE
          </h1>

          {/* Section Title */}
          <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">
            PURPOSE OF INTRODUCING Dr AMBEDKAR TO EUROPE
          </h2>

          {/* Quotation Section */}
          <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-4 text-gray-800 italic rounded-lg mb-6">
            “Men are mortal. So are ideas. An idea needs propagation as much as
            a plant needs watering.”
          </blockquote>

          {/* Main Content */}
          <div className="text-gray-800 space-y-6">
            <p>
              For a student of Europe, it would not be difficult to go through
              the entire literature of Dr Ambedkar and comprehend his thoughts
              on various subjects and his philosophy to its fullest extent.
              However, since most of his original literature is in the English
              language, and I guess hardly someone in the past made any attempt
              to translate it in French, German, and Spanish, these being the
              most spoken languages in Europe, Dr Ambedkar has not been heard by
              the students in the past few decades.
            </p>

            <p>
              A second most important reason is the neglect of this genius by
              successive Indian governments and its premier educational
              institutions. He is absent from the school and college curriculums
              of India, forget about introducing him to European Institutions.
              Also, to a greater extent, the intellectual flora of Europe
              preferred to profuse praise of M K Gandhi due to his so-called
              charisma and colossus projected character.
            </p>

            <p>
              Dr Ambedkar is still known in USA and UK; however, it is sheerly
              because Dr Ambedkar was alumni of these premier institutions such
              as Columbia, Grey’s Inn, London School of Economics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
