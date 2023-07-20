export default function FoodButton({ icon, onChoose, label }) {
  return (
    <button onClick={onChoose}>
      <span role="img" aria-label={label}>
        {icon}
      </span>
    </button>
  );
}
