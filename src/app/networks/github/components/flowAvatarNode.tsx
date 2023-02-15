'use client';
import { memo } from 'react';
import Image from 'next/image';
import { singularize } from '@/utils';
import { GhUser } from '@/utils/types';
import { Handle, Position } from 'reactflow';

function AvatarNode({ data }: { data: GhUser }) {
  return (
    <div className="px-4 py-2 bg-gray-600 rounded-md border-1">
      <div className="flex">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#3c444f]">
          <Image
            src={`https://avatars.githubusercontent.com/u/${data.id}`}
            width={40}
            height={40}
            alt="avatar"
            className="rounded-full"
          />
        </div>
        <div className="ml-2">
          <p className="text-sm text-gray-200">{data.login}</p>
          <p className="text-sm text-gray-200">
            {data.followerCount} {singularize('Followers', data.followerCount)}
          </p>
        </div>
      </div>
      <Handle type="target" position={Position.Top} />
      {data.followerCount > 0 && <Handle type="source" position={Position.Bottom} />}
    </div>
  );
}

export default memo(AvatarNode);
