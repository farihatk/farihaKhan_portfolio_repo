import ProjectSummary from "../components/ProjectSummary"
import ProjectPageNav from "../components/ProjectPageNav"
import "./ProjectPalace.css"

import CoverImage from "../assets/palace-mockup7.jpg"
import MoodboardImage from "../assets/palace-moodboard.jpg"
import LogoExplainImage from "../assets/palace-logo-explain.png"
import LogoConcept1 from "../assets/palace-var1.png"
import LogoConcept2 from "../assets/palace-var2.png"
import LogoConcept3 from "../assets/palace-var3.png"
import EnvMockup1 from "../assets/palace-envMockup1.jpg"
import EnvMockup2 from "../assets/palace-envMockup2.jpg"
import EnvMockup3 from "../assets/palace-envMockup5.jpg"
import EnvMockup4 from "../assets/palace-envMockup4.jpg"
import Mockup1 from "../assets/palace-mockup1.jpg"
import Mockup2 from "../assets/palace-mockup2.jpg"
import Mockup3 from "../assets/palace-mockup3.jpg"
import Mockup4 from "../assets/palace-mockup4.jpg"
import Mockup5 from "../assets/palace-mockup5.jpg"
import Mockup6 from "../assets/palace-mockup6.jpg"
import Mockup7 from "../assets/palace-mockup7.jpg"
import Mockup8 from "../assets/palace-mockup8.jpg"
import Mockup9 from "../assets/palace-featured.jpg"
import PosterBlueVelvet from "../assets/palace-blue-velvet.jpg"
import PosterDateNight from "../assets/palace-date-night.jpg"
import PosterOutdoorFilm from "../assets/palace-outdoor-film.jpg"
import PosterSilentMovie from "../assets/palace-silent-movie.jpg"
import PosterBreakfastClub from "../assets/palace-thebreakfastclub.jpg"

const navItems = [
    { label: "Challenge", href: "#challenge" },
    { label: "Research", href: "#research" },
    { label: "Rationale", href: "#rationale" },
    { label: "Mockup", href: "#mockup" },
]

const paletteColors = [
    { name: "Mahogany", hex: "#420000", textColor: "#fcfcfc", tall: true },
    { name: "Cashmere", hex: "#F6DBBF", textColor: "#050505" },
    { name: "Theatre Red", hex: "#881D1B", textColor: "#fcfcfc" },
    { name: "Blue Velvet", hex: "#383D97", textColor: "#fcfcfc" },
    { name: "Golden Age", hex: "#AA923B", textColor: "#fcfcfc" },
]

function ProjectPalace() {
    return (
        <>
            <ProjectSummary
                tag="brand identity, poster design"
                title="The Palace"
                role="Brand Designer, Graphic Designer"
                tools="Illustrator, Photoshop"
                description="The Palace is an indie movie theatre housed in a renovated historic building. My love for movies made this project the most memorable. It pushed me to think differently about how the old and vintage can be brought into a modern context."
                coverImage={CoverImage}
            />

            <div className="project-body">
                <ProjectPageNav navItems={navItems} />

                <div className="project-content container">

                    {/* ── Challenge & Solution ── */}
                    <section id="challenge" className="palace-section">
                        <div className="palace-card">
                            <h2 className="palace-card__title">The Challenge</h2>
                            <p className="palace-card__body">
                                How do we honour the history and elegance of nostalgic film culture while making it feel relevant to today's audience?
                            </p>
                        </div>
                        <div className="palace-card">
                            <h2 className="palace-card__title">Solution</h2>
                            <p className="palace-card__body">
                                Building a brand identity that struck a balance between nostalgia that resonates with those who grew up with cinema, and the contemporary, to be relevant to a younger audience.
                            </p>
                        </div>
                    </section>

                    {/* ── Concept Research ── */}
                    <section id="research" className="palace-section">

                        <div className="palace-research">
                            <h2 className="palace-section__heading">Concept Research</h2>
                            <h3 className="palace-research__subheading">History of Indie Cinema:</h3>
                            <p className="palace-body">
                                Before starting the design process, it was important to understand what the theatre was offering: indie, classic, art house films and cult favourites. I spent time studying the history of independent cinema and its roots as a revolutionary movement against mainstream Hollywood. I drew out two key brand voices: elegant and confident.
                            </p>
                            <h3 className="palace-research__subheading">20th Century Architecture:</h3>
                            <p className="palace-body">
                                Because indie cinema flourished in the 20th century, I drew visual inspirations from architectural styles of that era such as arches, columns, and triangular and dome rooftops. These structural details later helped me create the logo design itself.
                            </p>
                        </div>
                    </section>

                    <section className="palace-section">
                        <h2 className="palace-section__heading">Moodboard</h2>
                        <img src={MoodboardImage} alt="Moodboard" className="palace-full-img" />
                    </section>

                    {/* ── Logo Exploration ── */}
                    <section className="palace-section">
                        <h2 className="palace-section__heading">Logo Exploration</h2>
                        <div className="palace-logo-section">

                            <div className="palace-logo-left">
                                <div className="palace-concept">
                                    <p className="palace-concept__label">concept 1</p>
                                    <img src={LogoConcept1} alt="Logo concept 1" className="palace-concept__img" />
                                    <p className="palace-concept__critique">Most preferred but a little crowded</p>
                                </div>
                                <div className="palace-concept">
                                    <p className="palace-concept__label">concept 2</p>
                                    <img src={LogoConcept2} alt="Logo concept 2" className="palace-concept__img" />
                                    <p className="palace-concept__critique">Simple but loses elegance</p>
                                </div>
                                <div className="palace-concept">
                                    <p className="palace-concept__label">concept 3</p>
                                    <img src={LogoConcept3} alt="Logo concept 3" className="palace-concept__img" />
                                    <p className="palace-concept__critique">Crowded and not scalable</p>
                                </div>
                            </div>

                            <div className="palace-logo-right">
                                <p className="palace-body">
                                    When exploring options for logos, concept 1 was a good candidate but the film strip overpowered the arch in the middle. Concept 2 was simple but it did not necessarily fit the brand voice and identity. Concept 3 simply felt crowded and was not very scalable.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* ── Brand Rationale ── */}
                    <section className="palace-section">
                        <h2 className="palace-section__heading">Brand Rationale</h2>
                        <img src={Mockup3} alt="Brand rationale" className="palace-section__cover" />
                    </section>

                    <section id="rationale" className="palace-section">
                        <h3 className="palace-subsection__heading">Final Logo</h3>
                        <img src={LogoExplainImage} alt="Brand rationale" className="palace-full-img" />
                        <p className="palace-body">
                            The final logo was based on concept 1 and the architectural structure of an arch column. This graphic properly represented the historical background of the building itself, as well as the elegance of the name of the brand, "The Palace". It also acted as a door to welcome people into the theatre. In terms of modernity, the film strip around it was removed to keep it clean and simple. The protruded section in the middle represents a keystone, a component that connects two sides of an arch. This helps represent the connection between the nostalgic and the contemporary.
                        </p>
                    </section>

                    {/* ── Color Palette ── */}
                    <section className="palace-section">
                        <h3 className="palace-subsection__heading">Color Palette</h3>

                        <div className="palace-palette">
                            <div className="palace-palette__swatch palace-palette__swatch--tall" style={{ backgroundColor: "#420000" }}>
                                <span className="palace-palette__label" style={{ color: "#fcfcfc" }}>Mahogany<br />#420000</span>
                            </div>
                            <div className="palace-palette__grid">
                                <div className="palace-palette__swatch" style={{ backgroundColor: "#F6DBBF" }}>
                                    <span className="palace-palette__label" style={{ color: "#050505" }}>Cashmere<br />#F6DBBF</span>
                                </div>
                                <div className="palace-palette__swatch" style={{ backgroundColor: "#881D1B" }}>
                                    <span className="palace-palette__label" style={{ color: "#fcfcfc" }}>Theatre Red<br />#881D1B</span>
                                </div>
                                <div className="palace-palette__swatch" style={{ backgroundColor: "#383D97" }}>
                                    <span className="palace-palette__label" style={{ color: "#fcfcfc" }}>Blue Velvet<br />#383D97</span>
                                </div>
                                <div className="palace-palette__swatch" style={{ backgroundColor: "#AA923B" }}>
                                    <span className="palace-palette__label" style={{ color: "#fcfcfc" }}>Golden Age<br />#AA923B</span>
                                </div>
                            </div>
                        </div>

                        <p className="palace-body">
                            The color palette was inspired by colors that were popular during the Golden Age of Hollywood. Theatre red was a must have due to its historical connection with movie theatres or events (e.g. Red Carpet events). Mahogany and Cashmere were contrasting colors to be used for backgrounds and texts. While Blue Velvet and Golden Age are accent colors to add some variation to posters and merchandise.
                        </p>
                    </section>

                    {/* ── Typography ── */}
                    <section className="palace-section">
                        <h3 className="palace-subsection__heading">Typography</h3>
                        <div className="palace-typography">
                            <div className="palace-type-showcase">
                                <div className="palace-type-block">
                                    <p className="palace-type__name" style={{ color: "#881D1B", fontFamily: "'Desire Pro', serif" }}>Desire Pro</p>
                                    <p className="palace-type__size">Regular 64px</p>
                                    <p className="palace-type__example" style={{ fontFamily: "'Desire Pro', serif", fontSize: "64px" }}>Example Title Text</p>
                                </div>
                                <div className="palace-type-block">
                                    <p className="palace-type__name" style={{ color: "#881D1B", fontFamily: "'Figtree', sans-serif" }}>Figtree</p>
                                    <p className="palace-type__size">Bold 36px</p>
                                    <p className="palace-type__example palace-type__example--bold" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "36px" }}>Example Subtitle Text</p>
                                    <p className="palace-type__size">Regular 24px</p>
                                    <p className="palace-type__example" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "24px" }}>This is an example of a body text.</p>
                                </div>
                            </div>
                            <p className="palace-body">
                                Desire Pro holds the elegance of the brand is the main font for the logo. It also draws attention for title texts.
                                Figtree is a contrasted font against the above. It helps to visually differentiate from the title. It also acts as a readable body text for improved accessibility.
                            </p>
                        </div>
                    </section>

                    {/* ── Mock ups ── */}
                    <section id="mockup" className="palace-section">
                        <h2 className="palace-section__heading">Mock ups</h2>
                        <div className="grid">
                            <img src={Mockup2} alt="Environment mockup" className="palace-mockup-full col-12" />
                            <img src={Mockup8} alt="Mockup" className="palace-half-img col-6 col-12-sm" />
                            <img src={Mockup4} alt="Mockup" className="palace-half-img col-6 col-12-sm" />
                            <img src={Mockup9} alt="Environment mockup" className="palace-mockup-full col-12" />
                            <img src={Mockup5} alt="Mockup" className="palace-half-img col-6 col-12-sm" />
                            <img src={Mockup6} alt="Mockup" className="palace-half-img col-6 col-12-sm" />

                        </div>
                    </section>

                    {/* Environmental Mockups */}
                    <section className="palace-section">
                        <h2 className="palace-section__heading">Environmental Mock ups</h2>
                        <div className="grid">
                            <img src={EnvMockup4} alt="Mockup" className="palace-half-img col-6 col-12-sm" />
                            <img src={EnvMockup2} alt="Mockup" className="palace-half-img col-6 col-12-sm" />
                            <img src={EnvMockup3} alt="Mockup" className="palace-half-img col-6 col-12-sm" />
                            <img src={EnvMockup1} alt="Mockup" className="palace-half-img col-6 col-12-sm" />
                        </div>
                    </section>

                    {/* ── Promotional Posters ── */}
                    <section className="palace-section">
                        <h2 className="palace-section__heading">Promotional Posters</h2>
                        <div className="grid">
                            <img src={PosterBlueVelvet} alt="Blue Velvet poster" className="palace-poster-img col-3 col-6-sm" />
                            <img src={PosterDateNight} alt="Date Night poster" className="palace-poster-img col-3 col-6-sm" />
                            <img src={PosterOutdoorFilm} alt="Outdoor Film Festival poster" className="palace-poster-img col-3 col-6-sm" />
                            <img src={PosterSilentMovie} alt="Silent Movie poster" className="palace-poster-img col-3 col-6-sm" />
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default ProjectPalace