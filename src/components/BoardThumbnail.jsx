import React from 'react';

const BoardThumbnail = ({ nodes = [], edges = [], cardLinks = [] }) => {
    if (!nodes || nodes.length === 0) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 text-xs">
                Empty
            </div>
        );
    }

    // Default dimensions if not specified in nodes
    const nodeWidth = 160;
    const nodeHeight = 100; // approximated height for deck

    // Calculate bounding box
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    nodes.forEach(node => {
        const x = node.x || 0;
        const y = node.y || 0;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
    });

    // Add some padding
    const padding = 100;
    const width = (maxX - minX) + nodeWidth + (padding * 2);
    const height = (maxY - minY) + nodeHeight + (padding * 2);
    const viewBoxX = minX - padding;
    const viewBoxY = minY - padding;

    // Calculate edges from cardLinks
    const derivedEdges = [];
    if (cardLinks && cardLinks.length > 0) {
        cardLinks.forEach(link => {
            const sourceDeckId = link.sourceDeckId || link.sourceId; // Fallback for safety
            const targetDeckId = link.targetDeckId || link.targetId;

            // Avoid self-loops and duplicates
            if (sourceDeckId !== targetDeckId) {
                const existing = derivedEdges.find(e =>
                    (e.source === sourceDeckId && e.target === targetDeckId) ||
                    (e.source === targetDeckId && e.target === sourceDeckId)
                );
                if (!existing) {
                    derivedEdges.push({ source: sourceDeckId, target: targetDeckId });
                }
            }
        });
    }

    return (
        <svg
            viewBox={`${viewBoxX} ${viewBoxY} ${width} ${height}`}
            className="w-full h-full text-gray-800 dark:text-gray-200"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* Edges from Card Links */}
            {derivedEdges.map((edge, i) => {
                const source = nodes.find(n => n.id === edge.source);
                const target = nodes.find(n => n.id === edge.target);
                if (!source || !target) return null;

                return (
                    <line
                        key={`edge-${i}`}
                        x1={source.x + nodeWidth / 2}
                        y1={source.y + nodeHeight / 2}
                        x2={target.x + nodeWidth / 2}
                        y2={target.y + nodeHeight / 2}
                        stroke="currentColor"
                        strokeWidth="4"
                        opacity="0.3"
                    />
                );
            })}

            {/* Nodes */}
            {nodes.map(node => (
                <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                    <rect
                        width={nodeWidth}
                        height={nodeHeight}
                        rx="8"
                        fill="white"
                        className="dark:fill-gray-800"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    {/* Deck Title */}
                    <foreignObject x="10" y="10" width={nodeWidth - 20} height={nodeHeight - 20}>
                        <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex items-center justify-center text-center">
                            <p className="font-serif font-bold text-lg leading-tight break-words line-clamp-3 text-black dark:text-white">
                                {node.content || 'Untitled Deck'}
                            </p>
                        </div>
                    </foreignObject>
                </g>
            ))}
        </svg>
    );
};

export default BoardThumbnail;
