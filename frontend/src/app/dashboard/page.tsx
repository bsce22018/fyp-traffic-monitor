import AttackStats from '../components/AttackStats/page';
import ModelControl from '../components/ModelControl/page';


export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex space-x-6 m-10">
        <AttackStats />
        <ModelControl />
      </div>
      
    </div>
  );
}