import "./TestimonialCard.css"

function TestimonialCard({ name, role, quote, color }) {
  return (
    <div className={`testimonial-card testimonial-card--${color}`}>
      <div className="testimonial-card__header">
        <p className="testimonial-card__name">{name}</p>
      </div>
      <p className="testimonial-card__quote">{quote}</p>
    </div>
  )
}

export default TestimonialCard