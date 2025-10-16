// src/components/InteractiveTerminal.tsx

import { useState, useRef, useEffect, type KeyboardEvent } from 'react';

type HistoryItem = {
  command: string;
  output: string;
};

const RiddleComponent = () => (
    <div className='text-cyan-400'>
        <p className="whitespace-pre-wrap">O que tem cidades, mas não casas;{'\n'}florestas, mas não árvores;{'\n'}e água, mas não peixes?</p>
    </div>
);

const HelpComponent = () => (
    <div className='text-gray-300'>
        <p className="font-bold mb-1 text-green-400">Comandos disponíveis:</p>
        <p><span className="text-yellow-400 w-24 inline-block">help</span>      Mostra esta mensagem de ajuda.</p>
        <p><span className="text-yellow-400 w-24 inline-block">whoami</span>    Exibe o usuário atual.</p>
        <p><span className="text-yellow-400 w-24 inline-block">ls -a</span>     Lista arquivos no diretório (incluindo ocultos).</p>
        <p><span className="text-yellow-400 w-24 inline-block">cat [ARQUIVO]</span> Exibe o conteúdo de um arquivo.</p>
        <p><span className="text-yellow-400 w-24 inline-block">solve "[RESPOSTA]"</span> Tente resolver o enigma.</p>
        <p><span className="text-yellow-400 w-24 inline-block">clear</span>     Limpa o histórico do terminal.</p>
    </div>
);


export function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [command, setCommand] = useState('');
  const [isSolved, setIsSolved] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  // Scroll to bottom on new history
  useEffect(() => {
    if (terminalBodyRef.current) {
        terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = () => {
    const trimmedCommand = command.trim();
    let output = '';

    if (trimmedCommand.length === 0) {
        setHistory([...history, { command: '', output: '' }]);
        return;
    }
    
    const args = trimmedCommand.split(' ');
    const cmd = args[0].toLowerCase();
    
    switch (cmd) {
      case 'help':
        output = 'HelpComponent'; // Usamos um placeholder
        break;
      case 'whoami':
        output = 'competidor';
        break;
      case 'ls':
        if (args[1] === '-a') {
            output = '. .. .enigma.txt README.md';
        } else {
            output = 'README.md';
        }
        break;
      case 'cat':
        if(args[1] === '.enigma.txt') {
            output = 'RiddleComponent'; // Outro placeholder
        } else if (args[1] === 'README.md') {
            output = 'Bem-vindo ao terminal da Maratona de Programação!';
        }
        else {
            output = `cat: ${args[1]}: Arquivo não encontrado`;
        }
        break;
      case 'solve':
        const answer = trimmedCommand.match(/"(.*?)"/)?.[1] || '';
        if (answer.toLowerCase() === 'um mapa' || answer.toLowerCase() === 'mapa') {
            output = 'Parabéns, competidor! Você desvendou o enigma.\nA chave para a vitória é a criatividade. Boa sorte na maratona! 🚀';
            setIsSolved(true);
        } else {
            output = 'Resposta incorreta. Tente novamente!';
        }
        break;
      case 'clear':
        setHistory([]);
        setCommand('');
        return;
      default:
        output = `bash: ${command}: comando não encontrado`;
    }
    
    setHistory([...history, { command, output }]);
    setCommand('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const renderOutput = (output: string) => {
    if (output === 'HelpComponent') return <HelpComponent />;
    if (output === 'RiddleComponent') return <RiddleComponent />;
    return <p className="whitespace-pre-wrap">{output}</p>;
  }

  return (
    <div className="h-full flex flex-col">
        <div className="bg-gray-800 text-white p-2 rounded-t-lg flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs text-gray-400 ml-2">bash -- 80x24</span>
        </div>
        <div 
            ref={terminalBodyRef}
            className="bg-slate-900 rounded-b-lg p-4 text-white font-mono text-sm flex-grow overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
        >
            <p className="text-green-400">Bem-vindo ao Terminal CAPCOM!</p>
            <p className="text-gray-400 mb-2">Digite 'help' para ver a lista de comandos.</p>
            
            {history.map((item, index) => (
                <div key={index}>
                    <div className="flex">
                        <span className="text-green-400">user@capcom:~$</span>
                        <p className="flex-1 ml-2">{item.command}</p>
                    </div>
                    <div className={isSolved && item.command.startsWith('solve') ? 'text-yellow-300' : 'text-gray-300'}>
                      {renderOutput(item.output)}
                    </div>
                </div>
            ))}

            <div className="flex">
                <span className="text-green-400">user@capcom:~$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none text-white w-full focus:outline-none ml-2"
                    autoFocus
                />
            </div>
        </div>
    </div>
  );
}