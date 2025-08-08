import React from 'react';
import { solutions } from '../assets/mocks/solutions';

export const Solutions = () => {
  return (
    <div id="solucoes" className="w-full flex flex-col py-20">
      <h2 className="dark:text-white text-dark mx-auto flex px-6 mb-12 text-4xl font-bold text-center">
        O que nós resolvemos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto w-full sm:max-w-3xl lg:max-w-6xl p-4">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <div key={index} className="group perspective h-[320px]">
              <div className="relative transform-style-3d group-hover:rotate-y-180 w-full h-full duration-700">
                {/* Frente do Card */}
                <div className="absolute backface-hidden w-full h-full bg-black/30 backdrop-blur-lg border border-[#AE27F9] rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-[#AE27F9] mb-4">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </div>
                {/* Verso do Card */}                <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-gradient-to-br from-purple-900 to-pink-900/70 backdrop-blur-lg border border-pink-500/50 rounded-lg p-6 flex flex-col items-center justify-center text-center">                  <h4 className="text-lg font-bold text-white mb-3">Impacto Real</h4>                  <p className="text-pink-300 italic">"{solution.impact}"</p>                  <a href={solution.caseLink} className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition-colors duration-300">                    Veja como                  </a>                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};