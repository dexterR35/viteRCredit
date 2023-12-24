// import { CiCircleInfo } from "react-icons/ci";
// import { FaRegCircleCheck } from "react-icons/fa6";
// const FinalStep = () => {
//   return (
//     <>
//       <h2 className="p-title mt-8">Felicitari</h2>
//       <div className="w-full text-center py-2 mb-8 text-sm rounded-md">
//         <p className="p-custom text-md">
//           <div className="text-lg font-semibold mb-2">
//             Cererea a fost depusa
//             <FaRegCircleCheck className="float-right h-6 w-6 text-primary" />
//           </div>
//           Situația dvs va fi examinată cu atenție și un reprezentant va reveni
//           în cel mai scurt timp posibil cu o soluție rapidă si eficientă.
//         </p>
//       </div>
//       <p className="p-custom my-4">
//         <div className="text-lg font-semibold mb-2">
//           Info
//           <CiCircleInfo className="float-right h-6 w-6" />
//         </div>
//         Suntem conștienți că fără un istoric bancar, accesul la unele servici
//         financiare poate fi o provocare. Însă , echipa ObtineCredit.ro te va
//         ajuta sa depășești aceasta situație și sa îți ofere soluțiile potrivite
//         pentru nevoile tale financiare. Mulțumesc că ai ales sa faci parte din
//         comunitatea nostră și te asigurăm că suntem aici pentru a te sprijini.
//       </p>

//       <div className="btn-parent mt-10">
//         <a href="https://obtinecredit.ro" className="btn-sm w-full text-center">
//           <button className="">Afla mai multe</button>
//         </a>
//       </div>
//     </>
//   );
// };

// export default FinalStep;
// import { CiCircleInfo } from "react-icons/ci";
// import { FaRegCircleCheck } from "react-icons/fa6";

const FinalStep = ({ step }) => {
  let content;

  switch (step) {
    case 1:
      content = (
        <>
          {/* Step 1 content */}
          <h2 className="p-title mt-8">Content for Step 1</h2>
          {/* ... other content for Step 1 */}
        </>
      );
      break;

    case 2:
      content = (
        <>
          {/* Step 2 content */}
          <h2 className="p-title mt-8">Content for Step 2</h2>
          {/* ... other content for Step 2 */}
        </>
      );
      break;

    case 3:
      content = (
        <>
          {/* Step 3 content */}
          <h2 className="p-title mt-8">Content for Step 3</h2>
          {/* ... other content for Step 3 */}
        </>
      );
      break;

    default:
      content = null;
      break;
  }

  return (
    <>
      {content}
      {/* Common content for all steps */}
      <div className="w-full text-center py-2 mb-8 text-sm rounded-md">
        {/* ... common content */}
      </div>
      {/* ... other common content */}
      <div className="btn-parent mt-10">
        <a href="https://obtinecredit.ro" className="btn-sm w-full text-center">
          <button className="">Afla mai multe</button>
        </a>
      </div>
    </>
  );
};

export default FinalStep;
