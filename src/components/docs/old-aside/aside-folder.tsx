import type { PageTree } from 'fumadocs-core/server';

export default function AsideFolder({
  node,
}: {
  node: PageTree.Node;
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-2 flex items-center gap-x-2 font-medium">
        {node.name}
      </h3>
    </div>
  );
}
