export default function QuizzPreview({ width }) {
  return (
    <div className="progress">
      <div
        className="progress-fill"
        style={{ width: `${width}%`, height: "25px" }}
      >
        {width}%
      </div>
    </div>
  );
}
