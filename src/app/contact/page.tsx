export default function Contact() {
  const now = new Date();
  const horaBrasil12h = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", hour12: true });

  return (
    <section className=" ">
      <div className="flex items-center justify-center p-6">
        <div className="relative -z-10">
          <div className="w-16 h-16 border-t border-l border-gray-200 absolute left-0 top-0" />
          <div className="w-16 h-16 border-t border-r border-gray-200 absolute right-0 top-0" />
          <div className="w-16 h-16 border-b border-l border-gray-200 absolute left-0 bottom-0" />
          <div className="w-16 h-16 border-b border-r border-gray-200 absolute right-0 bottom-0" />
          <p className="text-center font-mono opacity-60">
            Located in Brasil, working globally. // 23.5505° S, 46.6333° W // {horaBrasil12h}
          </p>
          <h1 className="text-[20vw] font-bold -z-10 mix-blend-screen">CONTACT</h1>
        </div>
      </div>

      <form className="flex items-center justify-center flex-col gap-6 max-w-96 mx-auto -mt-20">
        <p className="font-mono">&sol;&sol; If you need us, just call</p>
        <div className="flex justify-center items-end  w-full gap-4">
          <input
            type="email"
            maxLength={256}
            placeholder="Your email address"
            className="py-4 px-3 bg-transparent border-b border-gray-400 w-full text-xl outline-none"
          />
          <button type="submit" className="relative">
            <div className="p-2">
              <div className="py-2 px-5 h-7 flex items-center justify-center bg-[#64e79e] flex-row">
                <div className="w-2 h-2 border-t border-l border-gray-200 absolute left-0 top-0" />
                <div className="w-2 h-2 border-t border-r border-gray-200 absolute right-0 top-0" />
                <div className="w-2 h-2 border-b border-l border-gray-200 absolute left-0 bottom-0" />
                <div className="w-2 h-2 border-b border-r border-black-200 absolute right-0 bottom-0" />
                <div className="text-xs flex-1 text-black font-mono flex justify-center items-center gap-3">
                  SUBMIT <div className="w-1 h-1 bg-black"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </form>
    </section>
  );
}
