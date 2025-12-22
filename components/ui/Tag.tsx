interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="px-3 py-1 text-sm rounded-full bg-slate-50 text-slate-600">
      {label}
    </span>
  );
}
