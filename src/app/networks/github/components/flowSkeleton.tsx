'use client';

import { memo } from 'react';
import { ReactFlow, Background, Controls } from 'reactflow';

function RFSkeleton() {
  return (
    <ReactFlow fitView>
      <Controls />
      <Background className="bg-gray-900" size={2} color="#dbeafe" />
    </ReactFlow>
  );
}

export default memo(RFSkeleton);
