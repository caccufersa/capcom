import { useState, useRef, useEffect } from 'react';

interface CommandHistory {
    command: string;
    output: string;
    isError?: boolean;
}

const welcomeMessage = `
┌──────────────────────────────────────────────────────────┐
│  CAPCOM 2025 - Maratona de Programação                  │
│  Terminal Interativo v1.0                                │
│  Digite 'help' para ver os comandos disponíveis          │
└──────────────────────────────────────────────────────────┘
`;

const commands: { [key: string]: { description: string; output: string } } = {
    help: {
        description: 'Mostra todos os comandos disponíveis',
        output: `
Comandos disponíveis:
  help          - Mostra esta mensagem
  about         - Informações sobre a maratona
  rules         - Regras da competição
  problems      - Exemplos de problemas
  schedule      - Horário do evento
  team          - Informações sobre equipes
  prizes        - Premiação
  clear         - Limpa o terminal
  whoami        - Quem é você?
  date          - Data atual
  ls            - Lista os arquivos
  cat [file]    - Lê um arquivo (ex: cat rules.txt)
`
    },
    about: {
        description: 'Informações sobre a maratona',
        output: `
╔═══════════════════════════════════════════════════════════╗
║            MARATONA DE PROGRAMAÇÃO CAPCOM 2025            ║
╚═══════════════════════════════════════════════════════════╝

🎯 Duração: 4 horas intensas de programação
💻 Linguagens: C++, Java, Python
👥 Equipes: 1 a 3 membros por time
🏆 Premiação para o TOP 3

Prepare-se para resolver problemas algorítmicos desafiantes!
`
    },
    rules: {
        description: 'Regras da competição',
        output: `
📋 REGRAS DA MARATONA:

✓ Cada equipe pode ter de 1 a 3 integrantes
✓ Apenas 1 computador por equipe
✓ Consulta a materiais é permitida
✓ Sem comunicação entre equipes
✓ Cada problema aceito soma pontos
✓ Desempate por tempo de submissão
✓ Linguagens: C++, Java ou Python
`
    },
    problems: {
        description: 'Exemplos de problemas',
        output: `
🧩 EXEMPLOS DE PROBLEMAS:

[FÁCIL]    Hello World Reverso
[MÉDIO]    Algoritmo de Dijkstra
[MÉDIO]    Árvore Binária de Busca
[DIFÍCIL]  Programação Dinâmica
[DIFÍCIL]  Algoritmos em Grafos
[EXPERT]   Problema NP-Completo

Dica: Comece pelos problemas mais fáceis!
`
    },
    schedule: {
        description: 'Horário do evento',
        output: `
📅 PROGRAMAÇÃO - 23 de Outubro, 2025

08:00 - Credenciamento
09:00 - Abertura e instruções
09:30 - INÍCIO DA MARATONA
13:30 - FIM DA MARATONA
14:00 - Correção e resultados
15:00 - Premiação

Local: UFERSA - Campus Pau dos Ferros
`
    },
    team: {
        description: 'Informações sobre equipes',
        output: `
👥 FORMAÇÃO DE EQUIPES:

Mínimo: 1 integrante (individual)
Máximo: 3 integrantes
Recomendado: 3 para melhor estratégia

💡 DICAS:
- Divida os problemas entre os membros
- Um digita enquanto outros pensam
- Comunique-se constantemente
- Organize por nível de dificuldade
`
    },
    prizes: {
        description: 'Premiação',
        output: `
🏆 PREMIAÇÃO:

🥇 1º Lugar - Troféu + Certificado + Prêmios
🥈 2º Lugar - Certificado + Prêmios
🥉 3º Lugar - Certificado + Prêmios

Todos os participantes recebem certificado!
`
    },
    whoami: {
        description: 'Quem é você?',
        output: 'participante@capcom2025'
    },
    date: {
        description: 'Data atual',
        output: new Date().toLocaleString('pt-BR', { 
            dateStyle: 'full', 
            timeStyle: 'long' 
        })
    },
    ls: {
        description: 'Lista os arquivos',
        output: `
total 24K
-rw-r--r-- 1 capcom capcom  4.2K out 14 2025 about.txt
-rw-r--r-- 1 capcom capcom  3.1K out 14 2025 rules.txt
-rw-r--r-- 1 capcom capcom  2.8K out 14 2025 schedule.txt
-rw-r--r-- 1 capcom capcom  1.9K out 14 2025 problems.txt
-rwxr-xr-x 1 capcom capcom  5.4K out 14 2025 main.cpp
drwxr-xr-x 2 capcom capcom  4.0K out 14 2025 solutions/
`
    }
};

export default function Terminal() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandHistory[]>([
        { command: '', output: welcomeMessage }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        
        if (trimmedCmd === '') {
            return;
        }

        if (trimmedCmd === 'clear') {
            setHistory([{ command: '', output: welcomeMessage }]);
            setInput('');
            return;
        }

        let output = '';
        let isError = false;

        if (trimmedCmd.startsWith('cat ')) {
            const file = trimmedCmd.substring(4).trim();
            const fileMap: { [key: string]: string } = {
                'rules.txt': commands.rules.output,
                'about.txt': commands.about.output,
                'schedule.txt': commands.schedule.output,
                'problems.txt': commands.problems.output,
            };
            
            if (fileMap[file]) {
                output = fileMap[file];
            } else {
                output = `cat: ${file}: Arquivo não encontrado`;
                isError = true;
            }
        } else if (commands[trimmedCmd]) {
            output = commands[trimmedCmd].output;
        } else {
            output = `bash: ${trimmedCmd}: comando não encontrado\nDigite 'help' para ver os comandos disponíveis`;
            isError = true;
        }

        setHistory([...history, { command: cmd, output, isError }]);
        setInput('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div className="bg-[#0a0a0a]">

            {/* Terminal Content */}
            <div 
                ref={terminalRef}
                className="font-mono text-sm overflow-y-auto cursor-text"
                onClick={() => inputRef.current?.focus()}
                style={{ 
                    fontFamily: "'Ubuntu Mono', 'Courier New', monospace",
                    lineHeight: '1.5'
                }}
            >
                {history.map((entry, index) => (
                    <div key={index} className="mb-2">
                        {entry.command && (
                            <div className="flex items-start gap-1 mb-1">
                                <span className="text-[#28c840] font-semibold">participante@capcom</span>
                                <span className="text-[#b3b3b3]">:</span>
                                <span className="text-[#3b8eea] font-semibold">~</span>
                                <span className="text-[#b3b3b3]">$</span>
                                <span className="text-[#e0e0e0] ml-1">{entry.command}</span>
                            </div>
                        )}
                        {entry.output && (
                            <pre className={`whitespace-pre-wrap leading-relaxed ${entry.isError ? 'text-[#ff5555]' : 'text-[#d0d0d0]'}`}>
                                {entry.output}
                            </pre>
                        )}
                    </div>
                ))}
                
                {/* Input Line */}
                <div className="flex items-start gap-1">
                    <span className="text-[#28c840] font-semibold">participante@capcom</span>
                    <span className="text-[#b3b3b3]">:</span>
                    <span className="text-[#3b8eea] font-semibold">~</span>
                    <span className="text-[#b3b3b3]">$</span>
                    <div className="flex-1 flex items-center ml-1">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-1 bg-transparent text-[#e0e0e0] outline-none font-mono caret-[#28c840]"
                            autoFocus
                            spellCheck={false}
                        />
                        <span className="animate-pulse text-[#28c840] font-bold">█</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
