(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/game-state.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BOARD_SIZE": (()=>BOARD_SIZE),
    "HOME_STRETCH_SIZE": (()=>HOME_STRETCH_SIZE),
    "PLAYER_COLORS": (()=>PLAYER_COLORS),
    "TOKEN_COUNT": (()=>TOKEN_COUNT),
    "canMoveToken": (()=>canMoveToken),
    "createInitialGameState": (()=>createInitialGameState),
    "getNextPosition": (()=>getNextPosition),
    "isSafePosition": (()=>isSafePosition)
});
const PLAYER_COLORS = [
    'red',
    'blue',
    'green',
    'yellow'
];
const TOKEN_COUNT = 4;
const BOARD_SIZE = 52;
const HOME_STRETCH_SIZE = 6;
const createInitialGameState = ()=>({
        players: PLAYER_COLORS.map((color, index)=>({
                id: index,
                color,
                name: color.charAt(0).toUpperCase() + color.slice(1),
                tokens: Array.from({
                    length: TOKEN_COUNT
                }, (_, i)=>({
                        id: i,
                        color,
                        position: -1,
                        isHome: false,
                        isSafe: false
                    })),
                isCurrent: index === 0
            })),
        currentPlayerIndex: 0,
        diceValue: 0,
        isRolling: false,
        gameStarted: false,
        winner: null
    });
const isSafePosition = (position)=>{
    const safePositions = [
        0,
        8,
        13,
        21,
        26,
        34,
        39,
        47
    ];
    return safePositions.includes(position);
};
const canMoveToken = (token, diceValue)=>{
    if (token.isHome) return false;
    if (token.position === -1 && diceValue !== 6) return false;
    return true;
};
const getNextPosition = (currentPosition, diceValue, playerColor)=>{
    if (currentPosition === -1 && diceValue === 6) return 0;
    if (currentPosition === -1) return -1;
    const nextPosition = (currentPosition + diceValue) % BOARD_SIZE;
    return nextPosition;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-ludo-game.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLudoGame": (()=>useLudoGame)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-state.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useLudoGame() {
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialGameState"])());
    const [selectedToken, setSelectedToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const rollDice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLudoGame.useCallback[rollDice]": ()=>{
            if (gameState.isRolling || gameState.winner) return;
            setGameState({
                "useLudoGame.useCallback[rollDice]": (prev)=>({
                        ...prev,
                        isRolling: true
                    })
            }["useLudoGame.useCallback[rollDice]"]);
            setTimeout({
                "useLudoGame.useCallback[rollDice]": ()=>{
                    const diceValue = Math.floor(Math.random() * 6) + 1;
                    setGameState({
                        "useLudoGame.useCallback[rollDice]": (prev)=>({
                                ...prev,
                                diceValue,
                                isRolling: false,
                                gameStarted: true
                            })
                    }["useLudoGame.useCallback[rollDice]"]);
                    // Check for valid moves after a short delay
                    setTimeout({
                        "useLudoGame.useCallback[rollDice]": ()=>{
                            setGameState({
                                "useLudoGame.useCallback[rollDice]": (current)=>{
                                    const currentPlayer = current.players[current.currentPlayerIndex];
                                    const hasValidMoves = currentPlayer.tokens.some({
                                        "useLudoGame.useCallback[rollDice].hasValidMoves": (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMoveToken"])(token, diceValue)
                                    }["useLudoGame.useCallback[rollDice].hasValidMoves"]);
                                    // If no valid moves, automatically move to next player after showing the result
                                    if (!hasValidMoves) {
                                        return {
                                            ...current,
                                            currentPlayerIndex: (current.currentPlayerIndex + 1) % current.players.length,
                                            diceValue: 0
                                        };
                                    }
                                    return current;
                                }
                            }["useLudoGame.useCallback[rollDice]"]);
                        }
                    }["useLudoGame.useCallback[rollDice]"], 2000); // Show "No valid moves" for 2 seconds before moving to next player
                }
            }["useLudoGame.useCallback[rollDice]"], 1000);
        }
    }["useLudoGame.useCallback[rollDice]"], [
        gameState.isRolling,
        gameState.winner
    ]);
    const getMovableTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLudoGame.useCallback[getMovableTokens]": ()=>{
            const currentPlayer = gameState.players[gameState.currentPlayerIndex];
            if (!currentPlayer || gameState.diceValue === 0) return [];
            return currentPlayer.tokens.filter({
                "useLudoGame.useCallback[getMovableTokens]": (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMoveToken"])(token, gameState.diceValue)
            }["useLudoGame.useCallback[getMovableTokens]"]).map({
                "useLudoGame.useCallback[getMovableTokens]": (token)=>({
                        playerId: currentPlayer.id,
                        tokenId: token.id
                    })
            }["useLudoGame.useCallback[getMovableTokens]"]);
        }
    }["useLudoGame.useCallback[getMovableTokens]"], [
        gameState.players,
        gameState.currentPlayerIndex,
        gameState.diceValue
    ]);
    const moveToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLudoGame.useCallback[moveToken]": (playerId, tokenId)=>{
            const player = gameState.players.find({
                "useLudoGame.useCallback[moveToken].player": (p)=>p.id === playerId
            }["useLudoGame.useCallback[moveToken].player"]);
            const token = player?.tokens.find({
                "useLudoGame.useCallback[moveToken]": (t)=>t.id === tokenId
            }["useLudoGame.useCallback[moveToken]"]);
            if (!player || !token || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canMoveToken"])(token, gameState.diceValue)) return;
            setGameState({
                "useLudoGame.useCallback[moveToken]": (prev)=>{
                    const newState = {
                        ...prev
                    };
                    const newPlayers = [
                        ...newState.players
                    ];
                    const playerIndex = newPlayers.findIndex({
                        "useLudoGame.useCallback[moveToken].playerIndex": (p)=>p.id === playerId
                    }["useLudoGame.useCallback[moveToken].playerIndex"]);
                    const newPlayer = {
                        ...newPlayers[playerIndex]
                    };
                    const newTokens = [
                        ...newPlayer.tokens
                    ];
                    const tokenIndex = newTokens.findIndex({
                        "useLudoGame.useCallback[moveToken].tokenIndex": (t)=>t.id === tokenId
                    }["useLudoGame.useCallback[moveToken].tokenIndex"]);
                    const newToken = {
                        ...newTokens[tokenIndex]
                    };
                    // Calculate new position
                    const newPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextPosition"])(newToken.position, newState.diceValue, newToken.color);
                    // Handle token entering the board
                    if (newToken.position === -1 && newState.diceValue === 6) {
                        newToken.position = getStartPosition(newToken.color);
                    } else if (newToken.position >= 0) {
                        // Handle normal movement
                        const targetPosition = (newToken.position + newState.diceValue) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_SIZE"];
                        // Check if token reaches home stretch
                        if (shouldEnterHomeStretch(newToken.position, newState.diceValue, newToken.color)) {
                            const homeStretchStart = 52 + playerId * 6;
                            const stepsIntoHomeStretch = newToken.position + newState.diceValue - getHomeStretchEntryPosition(newToken.color);
                            newToken.position = homeStretchStart + stepsIntoHomeStretch;
                            // Check if token reaches home
                            if (newToken.position >= homeStretchStart + 6) {
                                newToken.isHome = true;
                                newToken.position = homeStretchStart + 5; // Final position
                            }
                        } else {
                            newToken.position = targetPosition;
                        }
                    }
                    // Update token safety status
                    newToken.isSafe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafePosition"])(newToken.position);
                    // Handle capturing opponent tokens
                    if (!newToken.isSafe && newToken.position >= 0 && newToken.position < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_SIZE"]) {
                        newPlayers.forEach({
                            "useLudoGame.useCallback[moveToken]": (otherPlayer, otherPlayerIndex)=>{
                                if (otherPlayer.id !== playerId) {
                                    otherPlayer.tokens.forEach({
                                        "useLudoGame.useCallback[moveToken]": (otherToken, otherTokenIndex)=>{
                                            if (otherToken.position === newToken.position && !otherToken.isSafe) {
                                                newPlayers[otherPlayerIndex] = {
                                                    ...otherPlayer,
                                                    tokens: otherPlayer.tokens.map({
                                                        "useLudoGame.useCallback[moveToken]": (t, i)=>i === otherTokenIndex ? {
                                                                ...t,
                                                                position: -1,
                                                                isSafe: false
                                                            } : t
                                                    }["useLudoGame.useCallback[moveToken]"])
                                                };
                                            }
                                        }
                                    }["useLudoGame.useCallback[moveToken]"]);
                                }
                            }
                        }["useLudoGame.useCallback[moveToken]"]);
                    }
                    // Update the moved token
                    newTokens[tokenIndex] = newToken;
                    newPlayer.tokens = newTokens;
                    newPlayers[playerIndex] = newPlayer;
                    // Check for winner
                    const winner = checkWinner(newPlayers);
                    // Determine next player (stay if rolled 6 or captured, otherwise next player)
                    let nextPlayerIndex = newState.currentPlayerIndex;
                    if (newState.diceValue !== 6) {
                        nextPlayerIndex = (newState.currentPlayerIndex + 1) % newPlayers.length;
                    }
                    return {
                        ...newState,
                        players: newPlayers,
                        currentPlayerIndex: nextPlayerIndex,
                        diceValue: 0,
                        winner
                    };
                }
            }["useLudoGame.useCallback[moveToken]"]);
            setSelectedToken(null);
        }
    }["useLudoGame.useCallback[moveToken]"], [
        gameState
    ]);
    const getStartPosition = (color)=>{
        const startPositions = {
            red: 1,
            blue: 14,
            green: 27,
            yellow: 40
        };
        return startPositions[color];
    };
    const getHomeStretchEntryPosition = (color)=>{
        const entryPositions = {
            red: 51,
            blue: 12,
            green: 25,
            yellow: 38
        };
        return entryPositions[color];
    };
    const shouldEnterHomeStretch = (currentPosition, diceValue, color)=>{
        const entryPosition = getHomeStretchEntryPosition(color);
        const newPosition = currentPosition + diceValue;
        return currentPosition < entryPosition && newPosition >= entryPosition;
    };
    const checkWinner = (players)=>{
        for (const player of players){
            if (player.tokens.every((token)=>token.isHome)) {
                return player.color;
            }
        }
        return null;
    };
    const resetGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLudoGame.useCallback[resetGame]": ()=>{
            setGameState((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$state$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInitialGameState"])());
            setSelectedToken(null);
        }
    }["useLudoGame.useCallback[resetGame]"], []);
    const handleTokenClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLudoGame.useCallback[handleTokenClick]": (playerId, tokenId)=>{
            if (gameState.currentPlayerIndex !== playerId || gameState.diceValue === 0) return;
            const movableTokens = getMovableTokens();
            const isMovable = movableTokens.some({
                "useLudoGame.useCallback[handleTokenClick].isMovable": (mt)=>mt.playerId === playerId && mt.tokenId === tokenId
            }["useLudoGame.useCallback[handleTokenClick].isMovable"]);
            if (isMovable) {
                if (selectedToken?.playerId === playerId && selectedToken?.tokenId === tokenId) {
                    // Move the selected token
                    moveToken(playerId, tokenId);
                } else {
                    // Select the token
                    setSelectedToken({
                        playerId,
                        tokenId
                    });
                }
            }
        }
    }["useLudoGame.useCallback[handleTokenClick]"], [
        gameState.currentPlayerIndex,
        gameState.diceValue,
        getMovableTokens,
        moveToken,
        selectedToken
    ]);
    return {
        gameState,
        selectedToken,
        movableTokens: getMovableTokens(),
        rollDice,
        handleTokenClick,
        resetGame
    };
}
_s(useLudoGame, "kAK9GZSclUpqWyCFlq+E/C2dgrk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/token.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Token": (()=>Token)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
const colorClasses = {
    red: 'bg-red-500 border-red-700',
    blue: 'bg-blue-500 border-blue-700',
    green: 'bg-green-500 border-green-700',
    yellow: 'bg-yellow-500 border-yellow-700'
};
function Token({ token, onClick, isSelected, isMovable }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: !isMovable,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-8 h-8 rounded-full border-2 transition-all duration-200', 'hover:scale-110 active:scale-95', 'disabled:opacity-50 disabled:cursor-not-allowed', colorClasses[token.color], isSelected && 'ring-2 ring-white ring-offset-2 ring-offset-gray-800', isMovable && 'cursor-pointer hover:shadow-lg'),
        "aria-label": `${token.color} token ${token.id + 1}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white text-xs font-bold",
            children: token.id + 1
        }, void 0, false, {
            fileName: "[project]/src/components/token.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/token.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Token;
var _c;
__turbopack_context__.k.register(_c, "Token");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ludo-board.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LudoBoard": (()=>LudoBoard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/token.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
const playerColors = {
    red: 'bg-red-100 border-red-300',
    blue: 'bg-blue-100 border-blue-300',
    green: 'bg-green-100 border-green-300',
    yellow: 'bg-yellow-100 border-yellow-300'
};
const homeColors = {
    red: 'bg-red-200',
    blue: 'bg-blue-200',
    green: 'bg-green-200',
    yellow: 'bg-yellow-200'
};
function LudoBoard({ players, onTokenClick, selectedToken, movableTokens }) {
    const renderHomeArea = (color, position)=>{
        const player = players.find((p)=>p.color === color);
        if (!player) return null;
        const homeTokens = player.tokens.filter((token)=>token.position === -1);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-24 h-24 border-2 rounded-lg p-2', homeColors[color], playerColors[color]),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-1 h-full",
                children: Array.from({
                    length: 4
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center",
                        children: homeTokens[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Token"], {
                            token: homeTokens[index],
                            onClick: ()=>onTokenClick(player.id, homeTokens[index].id),
                            isSelected: selectedToken?.playerId === player.id && selectedToken?.tokenId === homeTokens[index].id,
                            isMovable: movableTokens.some((mt)=>mt.playerId === player.id && mt.tokenId === homeTokens[index].id)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 45,
                            columnNumber: 17
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/components/ludo-board.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ludo-board.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ludo-board.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    };
    const renderPathCell = (index)=>{
        const tokensOnCell = players.flatMap((player)=>player.tokens.filter((token)=>token.position === index).map((token)=>({
                    ...token,
                    playerId: player.id
                })));
        const isSafeCell = [
            0,
            8,
            13,
            21,
            26,
            34,
            39,
            47
        ].includes(index);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-8 h-8 border border-gray-300 flex items-center justify-center relative', isSafeCell && 'bg-yellow-100 border-yellow-400'),
            children: tokensOnCell.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: tokensOnCell.length === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Token"], {
                    token: tokensOnCell[0],
                    onClick: ()=>onTokenClick(tokensOnCell[0].playerId, tokensOnCell[0].id),
                    isSelected: selectedToken?.playerId === tokensOnCell[0].playerId && selectedToken?.tokenId === tokensOnCell[0].id,
                    isMovable: movableTokens.some((mt)=>mt.playerId === tokensOnCell[0].playerId && mt.tokenId === tokensOnCell[0].id)
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 84,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs font-bold",
                    children: tokensOnCell.length
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 96,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ludo-board.tsx",
                lineNumber: 82,
                columnNumber: 11
            }, this)
        }, index, false, {
            fileName: "[project]/src/components/ludo-board.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    };
    const renderHomeStretch = (color)=>{
        const player = players.find((p)=>p.color === color);
        if (!player) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex', color === 'red' || color === 'yellow' ? 'flex-col' : 'flex-row'),
            children: Array.from({
                length: 6
            }).map((_, index)=>{
                const stretchPosition = 52 + player.id * 6 + index;
                const tokensOnCell = player.tokens.filter((token)=>token.position === stretchPosition);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-8 h-8 border border-gray-300 flex items-center justify-center', homeColors[color]),
                    children: tokensOnCell.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$token$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Token"], {
                        token: tokensOnCell[0],
                        onClick: ()=>onTokenClick(player.id, tokensOnCell[0].id),
                        isSelected: selectedToken?.playerId === player.id && selectedToken?.tokenId === tokensOnCell[0].id,
                        isMovable: movableTokens.some((mt)=>mt.playerId === player.id && mt.tokenId === tokensOnCell[0].id)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ludo-board.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 115,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/ludo-board.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-lg shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-15 gap-0 w-fit mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-6 grid grid-cols-6",
                    children: Array.from({
                        length: 6
                    }).map((_, i)=>renderPathCell(i))
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-3 flex items-center justify-center",
                    children: renderHomeArea('green', 'top-left')
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-6 grid grid-cols-6",
                    children: Array.from({
                        length: 6
                    }).map((_, i)=>renderPathCell(i + 6))
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-6 flex flex-col",
                    children: Array.from({
                        length: 3
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: Array.from({
                                length: 6
                            }).map((_, j)=>renderPathCell(47 - i * 6 - j))
                        }, i, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-3 grid grid-cols-3 gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: renderHomeArea('red', 'top-left')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-bold text-gray-600",
                                    children: "🏠"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ludo-board.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ludo-board.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: renderHomeArea('blue', 'top-right')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: renderHomeStretch('red')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: renderHomeStretch('blue')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: renderHomeArea('yellow', 'bottom-left')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: renderHomeStretch('yellow')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: renderHomeArea('green', 'bottom-right')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-6 flex flex-col",
                    children: Array.from({
                        length: 3
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: Array.from({
                                length: 6
                            }).map((_, j)=>renderPathCell(13 + i * 6 + j))
                        }, i, false, {
                            fileName: "[project]/src/components/ludo-board.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-6 grid grid-cols-6",
                    children: Array.from({
                        length: 6
                    }).map((_, i)=>renderPathCell(31 + i))
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-3 flex items-center justify-center",
                    children: renderHomeStretch('green')
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-6 grid grid-cols-6",
                    children: Array.from({
                        length: 6
                    }).map((_, i)=>renderPathCell(37 + i))
                }, void 0, false, {
                    fileName: "[project]/src/components/ludo-board.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ludo-board.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ludo-board.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c = LudoBoard;
var _c;
__turbopack_context__.k.register(_c, "LudoBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/player-panel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerPanel": (()=>PlayerPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
const playerColorClasses = {
    red: 'bg-red-500 text-white',
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-white'
};
const playerBorderClasses = {
    red: 'border-red-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    yellow: 'border-yellow-500'
};
function PlayerPanel({ players, currentPlayerIndex, diceValue }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold text-center mb-4",
                children: "Players"
            }, void 0, false, {
                fileName: "[project]/src/components/player-panel.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: players.map((player, index)=>{
                    const isCurrentPlayer = index === currentPlayerIndex;
                    const tokensAtHome = player.tokens.filter((token)=>token.position === -1).length;
                    const tokensOnBoard = player.tokens.filter((token)=>token.position >= 0 && !token.isHome).length;
                    const tokensFinished = player.tokens.filter((token)=>token.isHome).length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-3 rounded-lg border-2 transition-all duration-200', isCurrentPlayer ? `${playerBorderClasses[player.color]} bg-gray-50` : 'border-gray-200'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold', playerColorClasses[player.color]),
                                                children: player.name.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: player.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this),
                                            isCurrentPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full",
                                                children: "Current Turn"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/player-panel.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    isCurrentPlayer && diceValue > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold bg-gray-100 px-2 py-1 rounded",
                                        children: [
                                            "Rolled: ",
                                            diceValue
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/player-panel.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/player-panel.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-gray-600",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-bold",
                                                children: tokensAtHome
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/player-panel.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-gray-600",
                                                children: "Playing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-bold",
                                                children: tokensOnBoard
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/player-panel.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-gray-600",
                                                children: "Finished"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-bold",
                                                children: tokensFinished
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/player-panel.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/player-panel.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/player-panel.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 mt-2 justify-center",
                                children: player.tokens.map((token)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-3 h-3 rounded-full border', token.isHome ? 'bg-green-400 border-green-600' : token.position >= 0 ? `${playerColorClasses[player.color]} opacity-80` : 'bg-gray-300 border-gray-400'),
                                        title: token.isHome ? 'Finished' : token.position >= 0 ? `Position: ${token.position}` : 'At home'
                                    }, token.id, false, {
                                        fileName: "[project]/src/components/player-panel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/player-panel.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)
                        ]
                    }, player.id, true, {
                        fileName: "[project]/src/components/player-panel.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/player-panel.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/player-panel.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = PlayerPanel;
var _c;
__turbopack_context__.k.register(_c, "PlayerPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/dice.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dice": (()=>Dice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const DiceFace = ({ value })=>{
    const getDotPositions = (num)=>{
        const positions = {
            1: [
                'center'
            ],
            2: [
                'top-left',
                'bottom-right'
            ],
            3: [
                'top-left',
                'center',
                'bottom-right'
            ],
            4: [
                'top-left',
                'top-right',
                'bottom-left',
                'bottom-right'
            ],
            5: [
                'top-left',
                'top-right',
                'center',
                'bottom-left',
                'bottom-right'
            ],
            6: [
                'top-left',
                'top-right',
                'middle-left',
                'middle-right',
                'bottom-left',
                'bottom-right'
            ]
        };
        return positions[num] || [];
    };
    const dotPositions = getDotPositions(value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-12 h-12 grid grid-cols-3 grid-rows-3 gap-1 p-1",
        children: Array.from({
            length: 9
        }).map((_, index)=>{
            const positions = [
                'top-left',
                'top-center',
                'top-right',
                'middle-left',
                'center',
                'middle-right',
                'bottom-left',
                'bottom-center',
                'bottom-right'
            ];
            const position = positions[index];
            const shouldShow = dotPositions.includes(position);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-2 h-2 rounded-full transition-all duration-200', shouldShow ? 'bg-gray-800' : 'bg-transparent')
            }, index, false, {
                fileName: "[project]/src/components/dice.tsx",
                lineNumber: 40,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/dice.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_c = DiceFace;
function Dice({ value, isRolling, onRoll, disabled }) {
    _s();
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dice.useEffect": ()=>{
            if (isRolling) {
                const interval = setInterval({
                    "Dice.useEffect.interval": ()=>{
                        setDisplayValue(Math.floor(Math.random() * 6) + 1);
                    }
                }["Dice.useEffect.interval"], 100);
                setTimeout({
                    "Dice.useEffect": ()=>{
                        clearInterval(interval);
                        setDisplayValue(value);
                    }
                }["Dice.useEffect"], 1000);
                return ({
                    "Dice.useEffect": ()=>clearInterval(interval)
                })["Dice.useEffect"];
            } else {
                setDisplayValue(value);
            }
        }
    }["Dice.useEffect"], [
        isRolling,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onRoll,
        disabled: disabled || isRolling,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-16 h-16 bg-white rounded-lg shadow-lg border-2 border-gray-300', 'flex items-center justify-center transition-all duration-200', 'hover:shadow-xl active:scale-95', 'disabled:opacity-50 disabled:cursor-not-allowed', isRolling && 'animate-bounce'),
        "aria-label": "Roll dice",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiceFace, {
            value: displayValue
        }, void 0, false, {
            fileName: "[project]/src/components/dice.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dice.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(Dice, "Lqc8yQgp4qAbMjipQh0276ZQpcw=");
_c1 = Dice;
var _c, _c1;
__turbopack_context__.k.register(_c, "DiceFace");
__turbopack_context__.k.register(_c1, "Dice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/game-controls.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GameControls": (()=>GameControls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const winnerColors = {
    red: 'text-red-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600'
};
function GameControls({ diceValue, isRolling, onRollDice, onResetGame, gameStarted, winner, currentPlayerName, canRoll }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-lg p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center space-y-4",
            children: [
                winner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold",
                            children: "🎉 Game Over! 🎉"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game-controls.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xl font-semibold', winnerColors[winner]),
                            children: [
                                winner.charAt(0).toUpperCase() + winner.slice(1),
                                " Wins!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/game-controls.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onResetGame,
                            className: "w-full bg-green-600 hover:bg-green-700",
                            children: "Play Again"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game-controls.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game-controls.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: !gameStarted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-800",
                                children: "Ludo Game"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game-controls.tsx",
                                lineNumber: 56,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Roll the dice to start playing!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/game-controls.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dice"], {
                                value: diceValue || 1,
                                isRolling: isRolling,
                                onRoll: onRollDice,
                                disabled: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/game-controls.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game-controls.tsx",
                        lineNumber: 55,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-semibold text-gray-800",
                                children: [
                                    currentPlayerName,
                                    "'s Turn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/game-controls.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dice"], {
                                value: diceValue || 1,
                                isRolling: isRolling,
                                onRoll: onRollDice,
                                disabled: !canRoll || isRolling
                            }, void 0, false, {
                                fileName: "[project]/src/components/game-controls.tsx",
                                lineNumber: 71,
                                columnNumber: 17
                            }, this),
                            diceValue > 0 && !isRolling && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600",
                                children: canRoll ? 'Click a token to move' : 'No valid moves available'
                            }, void 0, false, {
                                fileName: "[project]/src/components/game-controls.tsx",
                                lineNumber: 79,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: onResetGame,
                                    variant: "outline",
                                    className: "w-full",
                                    children: "Reset Game"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/game-controls.tsx",
                                    lineNumber: 85,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/game-controls.tsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/game-controls.tsx",
                        lineNumber: 66,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/game-controls.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this),
                gameStarted && !winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-gray-500 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "• Roll 6 to move tokens out of home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game-controls.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "• Land on opponents to send them home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game-controls.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "• Get all tokens to the center to win"
                        }, void 0, false, {
                            fileName: "[project]/src/components/game-controls.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/game-controls.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/game-controls.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/game-controls.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = GameControls;
var _c;
__turbopack_context__.k.register(_c, "GameControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LudoGamePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ludo$2d$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-ludo-game.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ludo$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ludo-board.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$player$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/player-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game-controls.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LudoGamePage() {
    _s();
    const { gameState, selectedToken, movableTokens, rollDice, handleTokenClick, resetGame } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ludo$2d$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLudoGame"])();
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const canRoll = gameState.diceValue === 0 && !gameState.isRolling && !gameState.winner;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-800 mb-2",
                            children: "Ludo Game"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Classic board game for 2-4 players"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ludo$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LudoBoard"], {
                                players: gameState.players,
                                onTokenClick: handleTokenClick,
                                selectedToken: selectedToken,
                                movableTokens: movableTokens
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GameControls"], {
                                    diceValue: gameState.diceValue,
                                    isRolling: gameState.isRolling,
                                    onRollDice: rollDice,
                                    onResetGame: resetGame,
                                    gameStarted: gameState.gameStarted,
                                    winner: gameState.winner,
                                    currentPlayerName: currentPlayer?.name || '',
                                    canRoll: canRoll
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$player$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerPanel"], {
                                    players: gameState.players,
                                    currentPlayerIndex: gameState.currentPlayerIndex,
                                    diceValue: gameState.diceValue
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-white rounded-lg shadow-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "How to Play"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-gray-800 mb-2",
                                            children: "Basic Rules:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Roll a 6 to move tokens out of home"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Move tokens clockwise around the board"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Land on opponents to send them home"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Safe squares protect your tokens"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-gray-800 mb-2",
                                            children: "Winning:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Get all 4 tokens to the center"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Tokens must enter the home stretch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Exact count needed to reach home"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• First player to finish wins!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(LudoGamePage, "/4lTjxtbTfrVpjWsn+hliAQ/Wtc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$ludo$2d$game$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLudoGame"]
    ];
});
_c = LudoGamePage;
var _c;
__turbopack_context__.k.register(_c, "LudoGamePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_338b881a._.js.map