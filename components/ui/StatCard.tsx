type StatCardProps = {
  number: string;
  label: string;
};

export default function StatCard({
  number,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <h3 className="text-3xl font-bold text-blue-600">
        {number}
      </h3>

      <p className="mt-2 text-gray-600">
        {label}
      </p>
    </div>
  );
}