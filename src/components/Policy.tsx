'use client';

import { PrintIcon } from './common/SvgIcon';

interface PolicyProps {
  title: string;
}

export default function Policy({ title }: PolicyProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full space-y-16">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 text-left text-[42px] text-white font-aeonik-pro">
        <div className="flex flex-col items-center md:items-start justify-center gap-2.5">
          <div className="relative tracking-[-0.03em] leading-[56px]">
            {title}
          </div>
          <div className="relative text-xl tracking-[-0.01em] leading-7 font-inter-variable opacity-[0.6]">
            Effective Date : October 25, 2025
          </div>
        </div>
        <div className="flex items-center justify-end text-num-16 text-gray-100 font-inter-variable">
          <button
            onClick={handlePrint}
            className="space-x-2 shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.25)] rounded-xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.2)),_#fafafa] flex items-center justify-center p-3 text-base text-gray-300 hover:[background:linear-gradient(180deg,_rgba(0,_0,_0,_0.3),_rgba(0,_0,_0,_0.1)),_#fafafa] transition-[background] duration-300 ease-in-out cursor-pointer"
          >
            <PrintIcon />
            <div className="tracking-[-0.01em] leading-[19.5px] font-semibold">
              Print this Page
            </div>
          </button>
        </div>
      </div>
      <div className="w-full relative flex flex-col items-start gap-[45px] text-left text-num-28 text-white font-aeonik-pro">
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            1. The Service
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Tryfinder providet platforma nubila communicationis et engagementis.
            Clientes sunt responsabiles pro Submissionibus Usoris. Tryfinder
            praebere potest templates, APIs, et integrationes ad usum
            convenientem.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">{`2. Subscriptions & Payments`}</div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            <p className="m-0">
              Subscriptiones renovantur automatice nisi cancellatae sint.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Feoda in antecessum solvuntur et non sunt refundibilia nisi iure
              requisitum sit.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Cancellare potes quovis tempore in Settings → Billing.
              Notificationes renovationis praebentur ut lex requirit.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Clientes sunt responsabiles pro omnibus tributis, vectigalibus, et
              oneribus.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Solutiones per tertios processores fieri possunt; Tryfinder non
              tenetur pro erroribus processoris.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Si solutio deficiat, Tryfinder potest accessum suspendere donec
              summae debitae solvantur.
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            3. Ownership
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Tryfinder retinet proprietatem Servitii. Clientes possident suas
            Submissiones Usoris et Tryfinder concedunt licentiam limitatam ad
            hospitandum, tractandum, et transmittendum eas, solum ut Servitium
            praestetur et melior fiat. Tryfinder non utitur Contento Cliente ad
            exercitandum exempla tertiarum partium nisi opt-in factum est.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            4. Restrictions
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            <ul className="m-0 font-inherit text-[length:inherit] pl-[21px] list-disc">
              <li className="mb-0">
                Copiare, mutare, re-engineerare, sublicentiare, revendere, aut
                Servitium perturbare.
              </li>
              <li className="mb-0">
                Contribuere contentum illicitum vel infringens.
              </li>
              <li className="mb-0">Mittere spam aut codicem malignum.</li>
              <li className="mb-0">Tentare accessum non auctoratum.</li>
              <li className="mb-0">Uti Servitio contra leges exportationis.</li>
              <li>
                Facere probationem vulnerabilitatis sine scriptis auctoritate
              </li>
            </ul>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            5. Third-Party Services
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Integrationes possunt connecti ad plataformas tertiarum partium,
            quae suis condicionibus reguntur. Tryfinder non est responsalis pro
            earum operatione.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            6. Confidentiality
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Utraque pars convenit tueri Informationem Confidencialem alterius
            eodem gradu curae quo propriam, sed non minus quam rationabiliter.
            Informatio publica, independenter evoluta, vel legitime obtenta non
            censetur confidencialis. Revelatio permittitur si iure requiritur,
            cum praevia notitia ubi licet.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">{`7. Data & Privacy`}</div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Data Clientis tractantur secundum Addendum de Processione Datae.
            Aggregata et anonymata Data Servitii uti possunt ad analytics et
            emendationem producti. Tryfinder possidet Data Servitii anonymata.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">{`8. Intellectual Property & DMCA`}</div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Tryfinder cum DMCA conformatur. Agentem Copyright dedicatum et
            politicam repetitorum violatorum servat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">{`9. AI Features & Beta Services`}</div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Quaedae functiones utuntur AI ad contentum generandum. Exitūs AI
            possunt esse inaccurati nec consilium professionalem constituunt.
            Recognitio humana commendatur ante usum. Functiones Beta sunt
            experimentales et mutari possunt sine praenuntio.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            10. Warranty Disclaimer
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Servitium praebetur “UT EST”, sine ullis warrantis. Tryfinder negat
            omnes warrantias implicitas, etiam mercantabilitatis, idoneitatis ad
            certum finem, et non-violations.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            11. Limitation of Liability
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Responsabilitas Tryfinder limitatur ad feoda soluta in duodecim
            mensibus prioribus. Tryfinder non tenetur pro damnis indirectis,
            incidentalibus, specialibus, vel consequentibus (interclusis lucris
            amissis, damno datorum, aut interruptionibus negotiis).
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">{`12. Term & Termination`}</div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Utraque pars terminare potest propter gravem violationem (cura 30
            dierum). Post terminationem, Data Clientis delebitur intra 30 dies,
            cum retentione cryptata in subsidiis usque ad 90 dies. Clientes
            possunt exportare data ante terminationem.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            13. Compliance
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Tu spondes te conformem esse legibus sanctionum et exportationis.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            14. Governing Law
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Haec Conventio regitur legibus Delaware, USA. Controversiae
            solventur in iudiciis civitatis vel foederalibus New Castle County,
            Delaware.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            15. Modifications
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Possumus renovare hos Terminos cum saltem 30 dierum
            praenotificatione per email aut notificationem in app. Si dissentis,
            potes terminare antequam mutationes effectum capiant.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px]">
          <div className="self-stretch relative tracking-num--0_03 leading-num-32">
            16. Entire Agreement
          </div>
          <div className="self-stretch relative text-num-16 tracking-num--0_01 leading-num-24 font-inter opacity-num-0_6">
            Haec Conventio, Privacy Policy, et Data Processing Addendum
            constituunt totam conventionem inter te et Tryfinder.
          </div>
        </div>
      </div>
    </div>
  );
}
