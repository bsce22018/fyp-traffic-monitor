import AttackStats from '../components/AttackStats/page';
import ModelControl from '../components/ModelControl/page';
import OutputConsole from '../components/OutputConsole/page';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <AttackStats />
      <ModelControl />
      <OutputConsole />
    </div>
  );
}
