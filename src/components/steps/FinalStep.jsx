import { FcHighPriority, FcApproval } from "react-icons/fc";
const FinalstepCase = ({ stepCase }) => {
  let content;
  console.log(stepCase, "stepCases");
  switch (stepCase) {
    case 1:
      content = (
        <div className="p-custom my-4">
          <div className="text-lg font-semibold mb-2">
            Info
            <FcHighPriority className="float-right h-6 w-6" />
          </div>
          Suntem conștienți că fără un istoric bancar, accesul la unele servici
          financiare poate fi o provocare. Însă , echipa ObtineCredit.ro te va
          ajuta sa depășești aceasta situație și sa îți ofere soluțiile
          potrivite pentru nevoile tale financiare. Mulțumesc că ai ales sa faci
          parte din comunitatea nostră și te asigurăm că suntem aici pentru a te
          sprijini.
        </div>
      );
      break;

    case 2:
      content = (
        <div className="p-custom my-4">
          <div className="text-lg font-semibold mb-2">
            Info
            <FcHighPriority className="float-right h-6 w-6" />
          </div>
          Un consultant îți va explica întregul proces într-un mod rapid și
          simplu, astfel încât să poți obține refinanțarea potrivită pentru
          nevoile tale. De asemenea, trebuie să ții cont că procesul poate dura
          între 1 și 4 zile.
        </div>
      );
      break;

    case 3:
      content = (
        <div className="p-custom my-4">
          <div className="text-lg font-semibold mb-2">
            Info
            <FcHighPriority className="float-right h-6 w-6" />
          </div>
          Un consultant îți va explica întregul proces într-un mod rapid și
          simplu, astfel încât să poți obține refinanțarea potrivită pentru
          nevoile tale. De asemenea, trebuie să ții cont că procesul poate dura
          între 1 și 4 zile.
        </div>
      );
      break;

    default:
      content = null;
      break;
  }

  return (
    <>
      <h2 className="p-title mt-8">Felicitari</h2>

      <div className="w-full text-center py-2 mb-8 text-sm rounded-md">
        <div className="p-custom text-md">
          <div className="text-lg font-semibold mb-2">
            Cererea a fost depusă
            <FcApproval className="float-right h-6 w-6 text-primary" />
          </div>
          Situația dvs va fi examinată cu atenție și un reprezentant va reveni
          în cel mai scurt timp posibil cu o soluție rapidă si eficientă.
        </div>
      </div>
      {content}
      <div className="btn-parent mt-10">
        <a href="https://obtinecredit.ro" className="btn-sm w-full text-center">
          <button className="">Află mai multe</button>
        </a>
      </div>
    </>
  );
};

export default FinalstepCase;
