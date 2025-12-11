import Card from './ui/Card';
import './RecommendedForYou.css';

function RecommendedForYou({ trip }) {
  const tips = [];

  if (trip.skipass?.durationDays >= 6) {
    tips.push('You enjoy longer days—consider a ski-in/ski-out hotel for zero time wasted.');
  }
  if (trip.roomBoard?.label === 'Full Board') {
    tips.push('Full Board selected. Add a spa evening to balance the busy slopes.');
  }
  if ((trip.addOns || []).length === 0) {
    tips.push('Add lessons or gear rental to make the most of your arrival day.');
  }
  if (tips.length === 0) {
    tips.push('Your picks look balanced. We will keep monitoring prices for savings.');
  }

  return (
    <Card title="Recommended for you" subtitle="Smart picks tuned to your current choices">
      <ul className="recommendations">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </Card>
  );
}

export default RecommendedForYou;
