import React from 'react'

function Footer() {
  return (
    <div className="w-full h-80 bg-orange-300 rounded-tl-3xl rounded-tr-3xl inline-flex flex-col justify-start items-start">
    <div className="w-full max-w-[1280px] px-8 py-12 inline-flex justify-between items-start">
        <div className="max-w-80 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-Primary-Normal text-lg font-bold font-['Manrope'] leading-7 text-[#5C97F8]">SanctuaryHealth</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center text-black text-base font-normal font-['Manrope'] leading-6">Transforming medical accessibility for the<br/>next billion users through human-centric<br/>digital sanctuary design.</div>
            </div>
        </div>
        <div className="flex justify-start items-start gap-12">
            <div className="self-stretch inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-Primary-Normal text-base font-bold font-['Manrope'] leading-6 text-[#5C97F8]">Resources</div>
                </div>
                <div className="self-stretch opacity-80 flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-base font-normal font-['Manrope'] leading-6">Patient Rights</div>
                </div>
                <div className="self-stretch opacity-80 flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-base font-normal font-['Manrope'] leading-6">Support</div>
                </div>
            </div>
            <div className="self-stretch inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center text-Primary-Normal text-base font-bold font-['Manrope'] leading-6 text-[#5C97F8]">Company</div>
                </div>
                <div className="self-stretch opacity-80 flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-base font-normal font-['Manrope'] leading-6">Careers</div>
                </div>
                <div className="self-stretch opacity-80 flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-base font-normal font-['Manrope'] leading-6">Terms of Service</div>
                </div>
                <div className="self-stretch opacity-80 flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-base font-normal font-['Manrope'] underline leading-6">Privacy Policy</div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full max-w-[1280px] p-8 border-t border-slate-200 flex flex-col justify-start items-start">
        <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch text-center justify-center text-slate-500 text-base font-normal font-['Manrope'] leading-6">© 2024 SanctuaryHealth. Professional Authority. Empathetic Care.</div>
        </div>
    </div>
</div>
  )
}

export default Footer
