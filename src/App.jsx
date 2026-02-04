import { Terminal, Cpu, Code2, Construction } from 'lucide-react';

function App() {
  const currentStatus = {
    name: "Abdur Rehman",
    roles: ["Software Engineer", "AI Researcher"],
    ongoing_process: "MSCS",
    focus: "Self-Optimization",
    status: "Compiling..."
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-mono p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
        
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>

        {/* Terminal Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <Terminal size={18} />
            <span>abdur-rehman ~ % whoami</span>
          </div>

          <h1 className="text-4xl font-bold text-white tracking-tight">
            Abdur Rehman
          </h1>
          
          <div className="flex flex-wrap gap-4 text-slate-400">
            <span className="flex items-center gap-1"><Code2 size={16}/> Software Engineer</span>
            <span className="flex items-center gap-1"><Cpu size={16}/> AI Researcher</span>
          </div>

          <hr className="border-slate-800" />

          <div className="space-y-2">
            <p className="text-emerald-500 flex items-center gap-2">
              <Construction size={18} /> Current Thread:
            </p>
            <pre className="bg-slate-900/50 p-4 rounded text-sm sm:text-base leading-relaxed">
              <code>
                {`while (isAlive) {`} <br />
                {`  knowledge += study("MSCS");`} <br />
                {`  skills.refactor();`} <br />
                {`  status = "REFINING_SELF";`} <br />
                {`}`}
              </code>
            </pre>
          </div>

          <div className="pt-4 text-xs text-slate-500 animate-pulse">
            [SYSTEM]: Building version 2.0 (MSCS in progress...)
          </div>
        </div>
      </div>
      
      <footer className="mt-8 text-slate-600 text-sm">
        github.com/mydomain
      </footer>
    </div>
  );
}

export default App;