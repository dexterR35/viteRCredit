import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Layout from "../Layout/Layout";

const PrivacyPolicy = () => {
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
              Politica de Confidențialitate
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-sm text-gray-500 mb-8">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducere</h2>
                <p>
                  Obține Credit.ro ("noi", "ne", "nostru") respectă confidențialitatea și protecția datelor personale ale vizitatorilor site-ului nostru. 
                  Această Politică de Confidențialitate descrie modul în care colectăm, utilizăm, stocăm și protejăm informațiile personale pe care ni le furnizați 
                  atunci când utilizați site-ul nostru web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datele pe care le colectăm</h2>
                <p className="mb-3">Colectăm următoarele tipuri de date personale:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nume complet</li>
                  <li>Adresă de email</li>
                  <li>Număr de telefon</li>
                  <li>Informații despre nevoile dumneavoastră de creditare</li>
                  <li>Date despre istoricul bancar (dacă este relevant)</li>
                  <li>Informații despre locul de muncă și venituri</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cum utilizăm datele</h2>
                <p className="mb-3">Utilizăm datele personale pentru următoarele scopuri:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesarea cererilor dumneavoastră de creditare</li>
                  <li>Comunicarea cu dumneavoastră privind serviciile noastre</li>
                  <li>Îmbunătățirea serviciilor oferite</li>
                  <li>Conformarea cu obligațiile legale</li>
                  <li>Marketing direct (doar cu consimțământul dumneavoastră)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Partajarea datelor</h2>
                <p>
                  Nu vindem sau închiriem datele dumneavoastră personale către terți. Putem partaja informațiile cu parteneri de încredere, 
                  instituții financiare și furnizori de servicii care ne ajută să vă oferim serviciile, doar în măsura necesară pentru 
                  îndeplinirea scopurilor menționate mai sus.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Securitatea datelor</h2>
                <p>
                  Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva accesului neautorizat, 
                  pierderii sau distrugerii. Cu toate acestea, niciun sistem de transmisie pe internet nu este 100% sigur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Drepturile dumneavoastră</h2>
                <p className="mb-3">Conform GDPR, aveți următoarele drepturi:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dreptul de acces la datele personale</li>
                  <li>Dreptul la rectificare</li>
                  <li>Dreptul la ștergere ("dreptul de a fi uitat")</li>
                  <li>Dreptul la restricționarea prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul de opoziție</li>
                  <li>Dreptul de a retrage consimțământul</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
                <p>
                  Pentru exercitarea drepturilor dumneavoastră sau pentru întrebări privind această politică, vă rugăm să ne contactați la:
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

export default PrivacyPolicy;

