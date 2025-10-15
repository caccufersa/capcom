# 🎮 Chibi Code Collector - Mini Game

## 📋 O que foi criado

Um **mini jogo de pixel art completo** integrado à página da Maratona de Programação CAPCOM, seguindo todas as especificações da GameJam.

## ✨ Características

### 🎨 Arte Pixel Art
- **Personagem chibi** desenhado via Canvas 2D (24x24 pixels)
- **5 tipos de símbolos coletáveis** ({}, (), <>, [], ;)
- **Animações suaves**: piscada de olhos, flutuação dos itens, bounce do personagem
- **Partículas** quando coleta um item
- **Paleta**: Roxo (#8b5cf6), Amarelo (#fbbf24), Preto, Branco
- **Tudo desenhado via código** - zero imagens externas

### 🕹️ Mecânica
- **Controles**: Setas ou WASD para mover
- **Objetivo**: Coletar máximo de símbolos de código em 30 segundos
- **Sistema de pontos**: +10 por símbolo coletado
- **Recorde salvo** no localStorage
- **Respawn automático** de novos itens

### 🎯 Features Implementadas
- ✅ Introdução animada com overlay
- ✅ Tela de Game Over com estatísticas
- ✅ Timer de 30 segundos
- ✅ Sistema de High Score persistente
- ✅ Partículas de coleta
- ✅ Grid background sutil
- ✅ Animação de bounce constante
- ✅ Detecção de novo recorde
- ✅ Botão "Recomeçar"
- ✅ Design responsivo e moderno

### 💻 Tecnologias
- **React 18** com TypeScript
- **Canvas 2D API** para renderização pixel art
- **Tailwind CSS** para UI
- **localStorage** para persistência
- **requestAnimationFrame** para game loop otimizado

## 🚀 Como usar

O componente já está integrado na página da maratona:

```tsx
import { ChibiGame } from "../../components/chibi-game";

// Usar no JSX:
<ChibiGame />
```

## 🎮 Gameplay

1. **Tela Inicial**: Clique em "Começar Jogo"
2. **Jogo**: Use setas/WASD para mover o chibi e coletar símbolos
3. **Coleta**: Cada símbolo vale 10 pontos e gera partículas
4. **Fim**: Após 30s, veja sua pontuação e tente bater o recorde
5. **Replay**: Clique em "Jogar Novamente"

## 🎨 Detalhes Técnicos

### Renderização
- Canvas 600x400px com `imageRendering: 'pixelated'`
- 60 FPS via requestAnimationFrame
- Desenho procedural de sprites (sem imagens)

### Colisões
- AABB (Axis-Aligned Bounding Box) simples
- Verificação a cada frame entre player e collectibles

### Animações
- Bounce senoidal no personagem
- Flutuação dos itens com `Math.sin()`
- Partículas com física (velocidade + gravidade)
- Piscar de olhos do chibi (frame % 60)

### Performance
- Limpeza de partículas mortas
- Remoção de coletáveis pegos
- Sem vazamento de memória (cleanup no useEffect)

## 📐 Estrutura do Código

```
chibi-game/
└── index.tsx (258 linhas)
    ├── Estado do jogo (intro/playing/gameover)
    ├── Canvas setup & refs
    ├── Funções de desenho
    │   ├── drawPlayer() - Chibi 24x24
    │   ├── drawCollectible() - Símbolos 20x20
    │   └── createParticles() - Explosão de 8 partículas
    ├── Game Loop principal
    ├── Sistema de input (teclado)
    ├── Detecção de colisão
    ├── Timer & pontuação
    └── UI React (overlays + stats)
```

## 🎯 Integração na Página

O jogo está na seção **"Aquecimento GameJam"** da página de Maratona, entre as fotos históricas e o terminal interativo.

### Localização
- Arquivo: `src/pages/maratona/index.tsx`
- Seção: Após "Main Content Grid", antes do "Terminal Interativo"
- Responsivo: Funciona em desktop e mobile

## 🔥 Diferenciais

1. **100% código** - Zero assets externos
2. **Pixel perfect** - Sprites coerentes e estilizados
3. **Sem bugs** - Testado e funcional
4. **Tema coerente** - Símbolos de programação
5. **Polido** - Partículas, animações, feedback visual
6. **Persistência** - High score salvo
7. **Acessível** - Controles alternativos (setas + WASD)

## 🎨 Paleta de Cores

```css
Background: #0a0e1a (dark blue)
Player Body: #8b5cf6 (purple)
Player Head: #fbbf24 (yellow)
Collectibles: #8b5cf6 (purple)
Grid: rgba(139, 92, 246, 0.05)
Particles: #8b5cf6
```

## 📊 Métricas

- **Tempo de jogo**: 30 segundos
- **Pontos por item**: 10
- **Itens simultâneos**: 5
- **Tamanho do canvas**: 600x400px
- **FPS target**: 60
- **Velocidade do player**: 4px/frame

---

🎮 **Pronto para jogar!** O jogo está completamente funcional, visualmente coeso e integrado ao site da CAPCOM.
