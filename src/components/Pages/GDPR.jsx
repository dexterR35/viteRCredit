import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Layout from "../Layout/Layout";

const GDPR = () => {
  const navigate = useNavigate();

  return (
    <Layout setIsModalOpen={() => navigate("/formular")}>
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
              Informații GDPR
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-sm text-gray-500 mb-8">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce este GDPR?</h2>
                <p>
                  Regulamentul General privind Protecția Datelor (GDPR) este un regulament al Uniunii Europene care a intrat în vigoare pe 25 mai 2018. 
                  Acesta înlocuiește Directiva 95/46/EC și are ca scop protejarea datelor personale ale cetățenilor UE și oferirea unui control mai mare 
                  asupra modului în care datele lor sunt utilizate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Drepturile dumneavoastră conform GDPR</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Dreptul de acces</h3>
                    <p>
                      Aveți dreptul să solicitați copii ale datelor dumneavoastră personale pe care le deținem. 
                      Vom furniza aceste informații în termen de 30 de zile de la primirea cererii.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Dreptul la rectificare</h3>
                    <p>
                      Dacă considerați că datele pe care le deținem despre dumneavoastră sunt incorecte sau incomplete, 
                      aveți dreptul să solicitați corectarea acestora.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Dreptul la ștergere ("dreptul de a fi uitat")</h3>
                    <p>
                      În anumite circumstanțe, aveți dreptul să solicitați ștergerea datelor dumneavoastră personale. 
                      Acest drept nu este absolut și se aplică doar în anumite situații.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Dreptul la restricționarea prelucrării</h3>
                    <p>
                      Aveți dreptul să solicitați restricționarea prelucrării datelor dumneavoastră personale în anumite circumstanțe, 
                      de exemplu, când contestați acuratețea datelor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Dreptul la portabilitatea datelor</h3>
                    <p>
                      Aveți dreptul să primiți datele dumneavoastră personale într-un format structurat, utilizat în mod obișnuit 
                      și care poate fi citit automat, și aveți dreptul de a transmite aceste date altui operator.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6. Dreptul de opoziție</h3>
                    <p>
                      Aveți dreptul să vă opuneți prelucrării datelor dumneavoastră personale în anumite circumstanțe, 
                      inclusiv pentru marketing direct.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">7. Dreptul de a retrage consimțământul</h3>
                    <p>
                      În cazul în care prelucrarea se bazează pe consimțământul dumneavoastră, aveți dreptul să vă retrageți consimțământul 
                      în orice moment, fără a afecta legalitatea prelucrării efectuate înainte de retragere.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cum puteți exercita aceste drepturi?</h2>
                <p className="mb-3">
                  Pentru a exercita oricare dintre aceste drepturi, vă rugăm să ne contactați folosind informațiile de contact de mai jos. 
                  Vom răspunde la cererea dumneavoastră în termen de 30 de zile.
                </p>
                <p>
                  Vă rugăm să includeți în cerere informații suficiente pentru a vă identifica și pentru a înțelege ce drept doriți să exercitați.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dreptul de a depune o plângere</h2>
                <p>
                  Dacă considerați că prelucrarea datelor dumneavoastră personale încalcă GDPR-ul, aveți dreptul să depuneți o plângere 
                  la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
                </p>
                <p className="mt-3">
                  <strong>ANSPDCP</strong><br />
                  B-dul G-ral. Gheorghe Magheru 28-30<br />
                  Sector 1, București<br />
                  Tel: +40.318.059.211<br />
                  Email: anspdcp@dataprotection.ro
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <p>
                  Pentru orice întrebări sau pentru a exercita drepturile dumneavoastră conform GDPR, vă rugăm să ne contactați la:
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

export default GDPR;

