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
        <Image
          src={`https://avatars.githubusercontent.com/u/${data.id}`}
          width={40}
          height={40}
          alt="avatar"
          className="flex items-center justify-center w-8 h-8 rounded-full"
        />

        <span className="ml-2 text-sm text-gray-200">
          <p>{data.login}</p>
          {data.followerCount && (
            <p>
              {data.followerCount} {singularize('Followers', data.followerCount)}
            </p>
          )}
        </span>
      </div>
      <Handle type="target" position={Position.Top} />
      {data.followerCount && data.followerCount > 0 && <Handle type="source" position={Position.Bottom} />}
    </div>
  );
}

export default memo(AvatarNode);
