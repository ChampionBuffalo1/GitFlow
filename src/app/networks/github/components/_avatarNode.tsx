import { Handle, Position } from 'reactflow';

export default function SkeletonAvatarNode({ data }: { data: { reversify?: boolean } }) {
  return (
    <div className="p-2 border border-blue-300 rounded-md shadow w-52 bg-zinc-800">
      <div className="flex animate-pulse">
        {/* Image */}
        <div className="rounded-full w-14 h-14 bg-slate-200"></div>
        <div className="flex-1">
          {/* Username */}
          <div className="h-[0.8rem] rounded-md bg-gray-600 mt-3 ml-3"></div>
          <div className="w-20 h-3 mt-4 ml-8 mr-6 bg-gray-600 rounded-md"></div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="h-2 bg-white"></div>
        </div>
      </div>
      <Handle type={reverse('target', data.reversify)} position={Position.Top} />
      <Handle type={reverse('source', data.reversify)} position={Position.Bottom} />
    </div>
  );
}

type HandleType = 'source' | 'target';
const reverse = (label: HandleType, reverse?: boolean): HandleType => {
  if (reverse) {
    if (label === 'source') return 'target';
    else return 'source';
  }
  return label;
};
