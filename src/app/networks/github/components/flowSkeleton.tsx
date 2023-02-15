'use client';

import type { Node, Edge } from 'reactflow';
import SkeletonAvatarNode from './_avatarNode';
import { memo, useEffect, useState } from 'react';
import { ReactFlow, Background, Controls } from 'reactflow';

const nodeTypes = { avatarLoader: SkeletonAvatarNode };

function RFSkeleton() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    const [newNodes, newEdges] = getNodesAndEdges(window.innerHeight, window.innerWidth);
    setNodes(newNodes);
    setEdges(newEdges);
  }, []);
  return (
    <ReactFlow fitView nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
      <Controls />
      <Background className="bg-gray-900" size={2} color="#dbeafe" />
    </ReactFlow>
  );
}

export default memo(RFSkeleton);

const getNodesAndEdges = (height: number, width: number): [Node<{ reversify?: boolean }>[], Edge[]] => {
  const midX = width / 2,
    midY = height / 2;
  // Could easily be static data but it was really messy to look at
  // One could easily use the functions below to generate the node and edges and paste the data in here
  return [
    generateNodes([
      [midX, midY],
      [midX, midY + 300],
      [midX - 250, midY + 230],
      [midX + 250, midY + 190],
      [midX, midY - 300]
    ]),
    new Array(4).fill(0, 0, 4).map((_, i) => ({
      id: `e0-${i + 1}`,
      type: 'step',
      source: '0',
      target: (i + 1).toString()
    }))
  ];
};

const generateNodes = (args: [number, number][]) =>
  args.map(([x, y], idx) => ({
    id: idx.toString(),
    data: {
      reversify: idx === 4
    },
    type: 'avatarLoader',
    position: {
      x,
      y
    }
  }));
