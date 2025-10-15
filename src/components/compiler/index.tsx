import { useState } from 'react';
import { FaPlay, FaCheck, FaTimes } from 'react-icons/fa';

// Compiler component for code editing and execution
export default function Compiler() {
    const [code, setCode] = useState('#include <iostream>\n\nint main() {\n    std::cout << "Hello CAPCOM!" << std::endl;\n    return 0;\n}');
    const [output, setOutput] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isRunning, setIsRunning] = useState(false);
    
    const runCode = async () => {
        setIsRunning(true);
        setStatus('idle');
        
        // Simula compilação e execução
        setTimeout(() => {
            setOutput('Hello CAPCOM!\n\nPrograma finalizado com código de saída 0.');
            setStatus('success');
            setIsRunning(false);
        }, 1500);
    };

    const getLineNumbers = () => {
        const lines = code.split('\n').length;
        return Array.from({ length: lines }, (_, i) => i + 1).join('\n');
    };

    return (
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-slate-800/80 border-b border-slate-700 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-3 text-slate-400 text-xs font-mono">compiler.cpp</span>
                </div>
                <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="flex items-center gap-2 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isRunning ? (
                        <>
                            <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Executando...
                        </>
                    ) : (
                        <>
                            <FaPlay size={10} />
                            Executar
                        </>
                    )}
                </button>
            </div>

            {/* Code Editor */}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-slate-800/50 border-r border-slate-700 text-slate-500 text-xs font-mono text-right pr-3 pt-4 leading-6 select-none">
                    {getLineNumbers()}
                </div>
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full bg-transparent text-emerald-400 font-mono text-sm p-4 pl-16 min-h-[300px] resize-none focus:outline-none"
                    spellCheck={false}
                    style={{ 
                        tabSize: 4,
                        fontFamily: "'Fira Code', 'Consolas', monospace"
                    }}
                />
            </div>

            {/* Output */}
            {output && (
                <div className="border-t border-slate-700 bg-slate-950/80">
                    <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700 flex items-center gap-2">
                        {status === 'success' && <FaCheck className="text-emerald-400" size={12} />}
                        {status === 'error' && <FaTimes className="text-red-400" size={12} />}
                        <span className="text-slate-400 text-xs font-mono">Output:</span>
                    </div>
                    <pre className="p-4 text-slate-300 font-mono text-sm whitespace-pre-wrap">
                        {output}
                    </pre>
                </div>
            )}
        </div>
    );
}
