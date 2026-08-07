import "./ProjectSummary.css"

function ProjectSummary({ tag, title, role, tools, description, coverImage, coverVideo, prototypeLink }) {
  return (
    <section className="project-summary">
      <div className="container">
        <div className="project-summary__header grid">

          <div className="col-6 col-12-sm project-summary__left">
            <p className="project-summary__tag">{tag}</p>
            <h1 className="project-summary__title">{title}</h1>
            <div className="project-summary__meta">
              <p className="project-summary__meta-label">Role:</p>
              <p className="project-summary__meta-value">{role}</p>
              <p className="project-summary__meta-label">Tools:</p>
              <p className="project-summary__meta-value">{tools}</p>
            </div>
          </div>

          <div className="col-6 col-12-sm project-summary__right">
            <p className="project-summary__desc">{description}</p>
          </div>

        </div>
      </div>

      <div className={`project-summary__cover ${prototypeLink ? "project-summary__cover--prototype" : ""}`}>
        {coverVideo ? (
          <video src={coverVideo} autoPlay muted controls playsInline aria-label={`${title} project cover video`} />
        ) : (
          <img src={coverImage} alt={title} />
        )}
        {prototypeLink && (
          <a
            href={"https://www.figma.com/proto/WUKYm5zmFkG96y12pExF8Z/makio--lofi-wireframes?node-id=252-1115&viewport=-1568%2C-531%2C1&t=fe6lNXZ87Nay4VJv-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=252%3A1329&page-id=251%3A476"}
            target="_blank"
            rel="noreferrer"
            className="project-summary__prototype-overlay"
          >
            <span className="project-summary__prototype-btn">Go to Prototype</span>
          </a>
        )}
      </div>
    </section>
  )
}

export default ProjectSummary