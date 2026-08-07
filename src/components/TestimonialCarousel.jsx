import useEmblaCarousel from 'embla-carousel-react'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '../data/testimonials'
import './TestimonialCarousel.css'

function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    loop: true,
  })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="t-embla">
      <div className="t-embla__viewport" ref={emblaRef}>
        <div className="t-embla__container">
          {testimonials.map(t => (
            <div className="t-embla__slide" key={t.id}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      <button className="t-embla__btn t-embla__btn--prev" onClick={scrollPrev} aria-label="Previous testimonial">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button className="t-embla__btn t-embla__btn--next" onClick={scrollNext} aria-label="Next testimonial">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  )
}

export default TestimonialCarousel