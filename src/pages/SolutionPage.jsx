import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { solutions } from '../assets/mocks/solutions';
import { Navbar } from '../components/Navbar';
import { FooterWithLogo } from '../components/FooterWithLogo';
import { FaArrowLeft, FaChartLine, FaCheckCircle } from 'react-icons/fa';

export const SolutionPage = () => {
  const { solutionId } = useParams();
  const solution = solutions.find(s => s.caseLink === `/solutions/${solutionId}`);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (section) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Página de "Não Encontrado" com estilos para ambos os temas
  if (!solution) {
    return (
      <div className="flex flex-col justify-center items-center font-sans bg-gray-200 dark:bg-gradient-to-br dark:from-[#0A0A0A] dark:via-[#1a0826] dark:to-[#0A0A0A] w-full min-h-screen">
        <Navbar />
        <div className='flex-grow flex flex-col justify-center items-center text-center px-4'>
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 dark:from-[#AE27F9] dark:to-[#7B1FA2] rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl text-white">🔍</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-[#AE27F9] dark:to-[#7B1FA2] bg-clip-text text-transparent">
            Solução não encontrada
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mt-4">
            A solução que você procura não existe ou foi movida.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-[#AE27F9] dark:to-[#7B1FA2] hover:from-pink-500 hover:to-purple-500 dark:hover:from-[#7B1FA2] dark:hover:to-[#AE27F9] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:hover:shadow-[#AE27F9]/25"
          >
            <FaArrowLeft />
            Voltar para a Home
          </Link>
        </div>
        <FooterWithLogo />
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="flex flex-col justify-between font-sans bg-gray-200 dark:bg-gradient-to-br dark:from-[#0A0A0A] dark:via-[#1a0826] dark:to-[#0A0A0A] w-full min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 py-16 text-gray-800 dark:text-white flex-grow">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Link
              onClick={() => scrollToSection('solucoes')}
              to="/"
              className="inline-flex items-center mt-14 gap-2 text-purple-600 dark:text-[#AE27F9] hover:text-pink-600 dark:hover:text-[#7B1FA2] mb-12 transition-all duration-300 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="border-b border-transparent group-hover:border-purple-500 dark:group-hover:border-[#AE27F9] transition-all duration-300">
                Voltar para Soluções
              </span>
            </Link>
          </div>

          {/* Header da solução */}
          <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="relative bg-white dark:bg-black/40 dark:backdrop-blur-xl border border-gray-300 dark:border-[#AE27F9]/30 rounded-2xl p-8 mb-8 shadow-md dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-5 dark:opacity-10 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-[#AE27F9]/20 dark:to-[#7B1FA2]/20 rounded-2xl border border-purple-200 dark:border-[#AE27F9]/30">
                    <Icon size={48} className="text-purple-600 dark:text-[#AE27F9]" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-white dark:to-[#AE27F9] bg-clip-text text-transparent mb-4">
                      {solution.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de conteúdo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Impacto e resultados */}
            <div className={`transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="bg-white dark:bg-gradient-to-br dark:from-[#AE27F9]/20 dark:to-[#7B1FA2]/20 dark:backdrop-blur-lg border border-gray-300 dark:border-[#AE27F9]/30 rounded-2xl p-8 h-full shadow-md dark:shadow-none">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-[#AE27F9] dark:to-[#7B1FA2] rounded-lg">
                    <FaChartLine className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Impacto Real</h2>
                </div>
                <div className="bg-gray-100 dark:bg-black/30 rounded-xl p-6 border border-gray-200 dark:border-[#AE27F9]/20">
                  <blockquote className="text-purple-700 dark:text-[#AE27F9] italic text-lg leading-relaxed">
                    "{solution.impact}"
                  </blockquote>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-[#AE27F9]/10 dark:to-[#7B1FA2]/10 rounded-xl border border-purple-100 dark:border-[#AE27F9]/10">
                  <p className="text-purple-800 dark:text-[#AE27F9] font-semibold mb-2">💡 Próximos Passos:</p>
                  <p className="text-gray-600 text-sm">
                    Vamos analisar seu caso específico e criar uma solução personalizada que maximize seus resultados.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="bg-white dark:bg-black/40 dark:backdrop-blur-lg border border-gray-300 dark:border-[#AE27F9]/30 rounded-2xl p-8 h-full shadow-md dark:shadow-none">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-[#AE27F9] dark:to-[#7B1FA2] rounded-lg">
                    <FaCheckCircle className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Benefícios</h2>
                </div>
                <div className="space-y-4">
                  {solution.benefits?.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-[#AE27F9]/10 transition-all duration-300 transform hover:translate-x-1 dark:hover:translate-x-2"
                    >
                      <FaCheckCircle className="text-purple-600 dark:text-[#AE27F9] mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#AE27F9]/20">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-[#AE27F9] dark:to-[#7B1FA2] hover:from-pink-500 hover:to-purple-500 dark:hover:from-[#7B1FA2] dark:hover:to-[#AE27F9] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg dark:hover:shadow-[#AE27F9]/25">
                    Quero essa solução para meu negócio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de processo */}
          {solution.process && (
            <div className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} mt-12`}>
              <div className="bg-white dark:bg-black/20 dark:backdrop-blur-lg border border-gray-300 dark:border-[#AE27F9]/20 rounded-2xl p-8 shadow-md dark:shadow-none">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-white dark:to-[#AE27F9] bg-clip-text text-transparent">
                  Como funciona o processo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {solution.process.map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-[#AE27F9] dark:to-[#7B1FA2] rounded-full flex items-center justify-center font-bold text-xl text-white group-hover:scale-110 transition-transform duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-[#AE27F9] transition-colors duration-300">
                        {item.step}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <FooterWithLogo />
    </div>
  );
};