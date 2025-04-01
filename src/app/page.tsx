// app/page.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-950 text-white overflow-hidden">
      {/* Partículas animadas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {/* Podrías agregar elementos decorativos como hojas o partículas aquí */}
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/kHF6v901.png" 
            alt="Logo GnomoAwards" 
            width={50} 
            height={50} 
            className="mr-2"
          />
          <span className="text-xl font-bold">GnomoAwards</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="#info" className="hover:text-amber-300 transition">Info</Link>
          <Link href="#categorias" className="hover:text-amber-300 transition">Categorías</Link>
          <Link href="#votacion" className="hover:text-amber-300 transition">Votación</Link>
          <Link href="#galeria" className="hover:text-amber-300 transition">Galería</Link>
        </div>
        <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg font-medium transition">
          Votar Ahora
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-10 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg)' }}></div>
        <div className="relative z-20 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4">
            <span className="text-amber-400">GNOMO</span>AWARDS
          </h1>
          <h2 className="text-xl md:text-3xl font-medium mb-8">
            Premios de la comunidad para la comunidad bushcraft
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Celebrando lo mejor del bushcraft, la autosuficiencia y la vida salvaje 
            en el canal Wild Gnomos y su comunidad.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-lg font-medium text-lg transition">
              Vota por tus favoritos
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-green-900 rounded-lg font-medium text-lg transition">
              Conoce las categorías
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-amber-400">Los premios</span> de la comunidad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-800/50 p-8 rounded-xl backdrop-blur">
              <div className="w-16 h-16 bg-amber-500 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Celebración Bushcraft</h3>
              <p className="text-gray-200">
                Un reconocimiento a las mejores prácticas y conocimientos de supervivencia
                y autosuficiencia en la naturaleza.
              </p>
            </div>
            
            <div className="bg-green-800/50 p-8 rounded-xl backdrop-blur">
              <div className="w-16 h-16 bg-amber-500 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Votación Comunitaria</h3>
              <p className="text-gray-200">
                Los premios son elegidos por la comunidad de Wild Gnomos,
                garantizando que representen realmente a los fans.
              </p>
            </div>
            
            <div className="bg-green-800/50 p-8 rounded-xl backdrop-blur">
              <div className="w-16 h-16 bg-amber-500 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Gala Anual</h3>
              <p className="text-gray-200">
                Una ceremonia especial transmitida en vivo desde un entorno natural,
                con invitados especiales y sorpresas para toda la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trofeo */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              El <span className="text-amber-400">Trofeo</span>
            </h2>
            <p className="text-lg mb-6">
              Fabricado artesanalmente con materiales naturales sostenibles,
              el trofeo GnomoAwards representa la armonía entre la habilidad humana
              y el respeto por la naturaleza.
            </p>
            <p className="text-lg">
              Cada pieza es única, tallada en madera local y decorada con elementos
              del bosque recolectados de forma responsable.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src="https://images.pexels.com/photos/4205984/pexels-photo-4205984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Trofeo GnomoAwards"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="py-20 px-6 bg-green-950/70">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-amber-400">Categorías</span> premiadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-800/30 p-6 rounded-xl backdrop-blur hover:bg-green-800/50 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Mejor Técnica de Supervivencia</h3>
              <p className="text-gray-300">Reconociendo las demostraciones más impresionantes de técnicas para sobrevivir en la naturaleza.</p>
            </div>
            
            <div className="bg-green-800/30 p-6 rounded-xl backdrop-blur hover:bg-green-800/50 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Creador de Contenido Revelación</h3>
              <p className="text-gray-300">Para nuevos creadores que han impactado a la comunidad con su contenido de bushcraft y autosuficiencia.</p>
            </div>
            
            <div className="bg-green-800/30 p-6 rounded-xl backdrop-blur hover:bg-green-800/50 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Mejor Refugio Natural</h3>
              <p className="text-gray-300">Premiando las construcciones más ingeniosas utilizando únicamente materiales del entorno.</p>
            </div>
            
            <div className="bg-green-800/30 p-6 rounded-xl backdrop-blur hover:bg-green-800/50 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Educador del Año</h3>
              <p className="text-gray-300">Para quienes comparten conocimiento valioso sobre naturaleza y supervivencia de forma accesible.</p>
            </div>
            
            <div className="bg-green-800/30 p-6 rounded-xl backdrop-blur hover:bg-green-800/50 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Innovación en Autosuficiencia</h3>
              <p className="text-gray-300">Reconociendo soluciones creativas para la vida sostenible y autónoma.</p>
            </div>
            
            <div className="bg-green-800/30 p-6 rounded-xl backdrop-blur hover:bg-green-800/50 transition cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Momento del Año</h3>
              <p className="text-gray-300">El evento o situación más memorable de la comunidad Wild Gnomos en el último año.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-lg font-medium text-lg transition">
              Ver todas las categorías
            </button>
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-amber-400">Calendario</span> de eventos
          </h2>
          
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-amber-500 transform md:translate-x-px"></div>
            
            {/* Eventos */}
            <div className="relative">
              {/* Evento 1 */}
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="md:w-1/2 pr-8 md:text-right hidden md:block">
                  <h3 className="text-xl font-bold text-amber-400">Fase 1: Nominaciones</h3>
                  <p className="text-gray-200 mt-2">La comunidad puede proponer a sus creadores y momentos favoritos</p>
                </div>
                <div className="relative flex items-center justify-center mx-8 md:mx-0">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center z-10">
                    <span className="font-bold">1</span>
                  </div>
                </div>
                <div className="md:w-1/2 pl-0 md:pl-8 md:hidden">
                  <h3 className="text-xl font-bold text-amber-400">Fase 1: Nominaciones</h3>
                  <p className="text-gray-200 mt-2">La comunidad puede proponer a sus creadores y momentos favoritos</p>
                </div>
              </div>
              
              {/* Evento 2 */}
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="md:w-1/2 pr-8 md:text-right md:hidden">
                  <h3 className="text-xl font-bold text-amber-400">Fase 2: Votaciones</h3>
                  <p className="text-gray-200 mt-2">Vota por tus favoritos entre los finalistas seleccionados</p>
                </div>
                <div className="relative flex items-center justify-center mx-8 md:mx-0">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center z-10">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 pl-0 md:pl-8 hidden md:block">
                  <h3 className="text-xl font-bold text-amber-400">Fase 2: Votaciones</h3>
                  <p className="text-gray-200 mt-2">Vota por tus favoritos entre los finalistas seleccionados</p>
                </div>
              </div>
              
              {/* Evento 3 */}
              <div className="flex flex-col md:flex-row items-start mb-12">
                <div className="md:w-1/2 pr-8 md:text-right hidden md:block">
                  <h3 className="text-xl font-bold text-amber-400">Fase 3: Anuncio de ganadores</h3>
                  <p className="text-gray-200 mt-2">Revelación de nominados y preparación para la gala</p>
                </div>
                <div className="relative flex items-center justify-center mx-8 md:mx-0">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center z-10">
                    <span className="font-bold">3</span>
                  </div>
                </div>
                <div className="md:w-1/2 pl-0 md:pl-8 md:hidden">
                  <h3 className="text-xl font-bold text-amber-400">Fase 3: Anuncio de ganadores</h3>
                  <p className="text-gray-200 mt-2">Revelación de nominados y preparación para la gala</p>
                </div>
              </div>
              
              {/* Evento 4 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 pr-8 md:text-right md:hidden">
                  <h3 className="text-xl font-bold text-amber-400">La Gran Gala</h3>
                  <p className="text-gray-200 mt-2">Ceremonia de entrega en vivo desde un entorno natural espectacular</p>
                </div>
                <div className="relative flex items-center justify-center mx-8 md:mx-0">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center z-10">
                    <span className="font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 pl-0 md:pl-8 hidden md:block">
                  <h3 className="text-xl font-bold text-amber-400">La Gran Gala</h3>
                  <p className="text-gray-200 mt-2">Ceremonia de entrega en vivo desde un entorno natural espectacular</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 px-6 bg-green-900/70">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">+250K</div>
              <div className="text-lg">Votos en la última edición</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">12</div>
              <div className="text-lg">Categorías premiadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">+100</div>
              <div className="text-lg">Creadores nominados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">1</div>
              <div className="text-lg">Gran comunidad unida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-amber-400">Galería</span> de gnomomentos
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg" alt="Supervivencia en la naturaleza" fill className="object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construcción de refugio" fill className="object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.pexels.com/photos/776113/pexels-photo-776113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fogata en el bosque" fill className="object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.pexels.com/photos/5945915/pexels-photo-5945915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Recolección de alimentos" fill className="object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.pexels.com/photos/1503441/pexels-photo-1503441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Talla en madera" fill className="object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Herramientas de supervivencia" fill className="object-cover hover:scale-105 transition duration-300" />
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-green-900 rounded-lg font-medium text-lg transition">
              Ver más momentos
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="votacion" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¡Participa en los <span className="text-amber-400">GnomoAwards</span>!
          </h2>
          <p className="text-xl mb-8">
            Vota por tus creadores favoritos y ayuda a reconocer lo mejor de nuestra comunidad.
          </p>
          <button className="px-8 py-4 bg-amber-600 hover:bg-amber-500 rounded-lg font-bold text-xl transition">
            VOTAR AHORA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-green-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Image 
                src="/kHF6v901.png" 
                alt="Logo GnomoAwards" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-xl font-bold">GnomoAwards</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 5.46l-2.24-2.24a.5.5 0 0 0-.71 0l-1.24 1.24a8.98 8.98 0 0 0-11.65.23 9 9 0 0 0 0 12.73 9 9 0 0 0 12.73 0 8.97 8.97 0 0 0 .23-11.65l1.24-1.24a.5.5 0 0 0 0-.71zM12 19.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm2.5-7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.5 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-6z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-amber-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H9v-3h2V8.5L14 12l-3 5z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 GnomoAwards. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Términos y condiciones</a>
              <a href="#" className="hover:text-white transition">Privacidad</a>
              <a href="#" className="hover:text-white transition">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}