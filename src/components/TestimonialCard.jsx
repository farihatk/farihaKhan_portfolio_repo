import "./TestimonialCard.css"

function TestimonialCard({ name, role, image, quote, color }) {
  return (
    <div className={`testimonial-card testimonial-card--${color}`}>
      <div className="testimonial-card__header">
        <img src={image} alt={name} className="testimonial-card__avatar" />
        <div>
          <p className="testimonial-card__name">{name}</p>
          <p className="testimonial-card__role">{role}</p>
        </div>
      </div>
      <p className="testimonial-card__quote">{quote}</p>
    </div>
  )
}

export default TestimonialCard