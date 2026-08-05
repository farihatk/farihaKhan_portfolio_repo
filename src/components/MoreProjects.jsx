import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './MoreProjects.css'

function MoreProjects({ currentId }) {
  const others = projects.filter(p => p.id !== currentId)

  return (
    <section className="more-projects">
      <div className="container">
        <h2 className="more-projects__title">More Projects</h2>
        <div className="grid">
          {others.map(project => (
            <Link
              key={project.id}
              to={project.path || '#'}
              className="more-projects__card col-4 col-12-sm"
            >
              {project.video
                ? <video src={project.video} autoPlay loop muted playsInline className="more-projects__img" />
                : <img src={project.img} alt={project.title} className="more-projects__img" />
              }
              <div className="more-projects__details">
                <p className="more-projects__tag">{project.tags.join(', ')}</p>
                <h3 className="more-projects__name">{project.title}</h3>
                <p className="more-projects__desc">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreProjects