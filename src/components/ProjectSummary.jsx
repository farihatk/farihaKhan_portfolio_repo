import "./ProjectSummary.css"

function ProjectSummary({ tag, title, role, tools, description, coverImage, coverVideo }) {
  return (
    <section className="project-summary">
      <div className="container">
        <div className="project-summary__header grid">

          <div className="col-6 project-summary__left">
            <p className="project-summary__tag">{tag}</p>
            <h1 className="project-summary__title">{title}</h1>
            <div className="project-summary__meta">
              <p className="project-summary__meta-label">Role:</p>
              <p className="project-summary__meta-value">{role}</p>
              <p className="project-summary__meta-label">Tools:</p>
              <p className="project-summary__meta-value">{tools}</p>
            </div>
          </div>

          <div className="col-6 project-summary__right">
            <p className="project-summary__desc">{description}</p>
          </div>

        </div>
      </div>

      <div className="project-summary__cover">
        {coverVideo ? (
          <video src={coverVideo} autoPlay muted controls playsInline />
        ) : (
          <img src={coverImage} alt={title} />
        )}
      </div>
    </section>
  )
}

export default ProjectSummary