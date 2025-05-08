import LogsTable from '../components/LogsTable/page';

export default function LogsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Attack Logs</h1>
      <LogsTable />
    </div>
  );
}
