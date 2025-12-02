import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Layout from "../Layout/Layout";

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
        <div className="container-modern max-w-4xl">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 font-semibold mb-8 transition-colors duration-200"
          >
            <IoArrowBack className="w-5 h-5" />
            Înapoi la pagina principală
          </button>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-medium border-2 border-gray-200/60">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Politica de Utilizare a Cookie-urilor
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-sm text-gray-500 mb-8">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Ce sunt cookie-urile?</h2>
                <p>
                  Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul dumneavoastră mobil când vizitați un site web. 
                  Acestea sunt utilizate pe scară largă pentru a face site-urile web să funcționeze sau să funcționeze mai eficient, 
                  precum și pentru a furniza informații proprietarilor site-ului.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cum utilizăm cookie-urile?</h2>
                <p className="mb-3">Utilizăm cookie-uri pentru următoarele scopuri:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookie-uri esențiale:</strong> Necesare pentru funcționarea site-ului și nu pot fi dezactivate</li>
                  <li><strong>Cookie-uri de performanță:</strong> Ne ajută să înțelegem cum vizitatorii interacționează cu site-ul</li>
                  <li><strong>Cookie-uri de funcționalitate:</strong> Permit site-ului să-și amintească alegerile dumneavoastră</li>
                  <li><strong>Cookie-uri de marketing:</strong> Utilizate pentru a vă arăta conținut relevant</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Tipuri de cookie-uri utilizate</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookie-uri de sesiune</h3>
                    <p>
                      Aceste cookie-uri sunt temporare și sunt șterse automat când închideți browserul. 
                      Ele sunt esențiale pentru funcționarea corectă a site-ului.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookie-uri persistente</h3>
                    <p>
                      Aceste cookie-uri rămân pe dispozitivul dumneavoastră pentru o perioadă determinată sau până când le ștergeți manual. 
                      Ne permit să vă recunoaștem când reveniți pe site.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cookie-uri terțe</h3>
                    <p>
                      Unele cookie-uri sunt plasate de servicii terțe care apar pe paginile noastre, cum ar fi Google Analytics, 
                      pentru a ne ajuta să analizăm traficul site-ului și să îmbunătățim experiența utilizatorului.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gestionarea cookie-urilor</h2>
                <p className="mb-3">
                  Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile care sunt deja pe computerul dumneavoastră 
                  și puteți seta majoritatea browserelor pentru a preveni plasarea acestora. Cu toate acestea, dacă faceți acest lucru, 
                  este posibil să trebuiască să ajustați manual anumite preferințe de fiecare dată când vizitați un site.
                </p>
                <p>
                  Majoritatea browserelor web acceptă automat cookie-urile, dar puteți modifica setările browserului pentru a refuza cookie-urile 
                  dacă preferați. Instrucțiunile pentru gestionarea cookie-urilor în diferite browsere pot fi găsite în setările browserului dumneavoastră.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie-uri terțe</h2>
                <p>
                  În unele cazuri, folosim cookie-uri furnizate de terți de încredere. Următoarele secțiuni detaliază cookie-urile terțe 
                  pe care le puteți întâlni prin intermediul acestui site.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>Google Analytics:</strong> Utilizat pentru a analiza utilizarea site-ului</li>
                  <li><strong>Google Tag Manager:</strong> Utilizat pentru gestionarea tag-urilor de marketing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h2>
                <p>
                  Dacă aveți întrebări despre utilizarea cookie-urilor pe acest site, vă rugăm să ne contactați la:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> contact@obtinecredit.ro<br />
                  <strong>Telefon:</strong> 0786 744 694
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;

