import ProjectSummary from "../components/ProjectSummary"
import ProjectPageNav from "../components/ProjectPageNav"
import "./ProjectHeylo.css"

import CoverImage from "../assets/heylo-hero.jpg"
import MoodboardImage from "../assets/heylo-featured.jpg"
import LogoConcept1 from "../assets/heylo-var1.png"
import LogoConcept2 from "../assets/heylo-var2.png"
import LogoConcept3 from "../assets/heylo-var3.png"
import BrandRationaleImage from "../assets/heylo-logoExplain.png"
import Mockup1 from "../assets/heylo-mockup2.jpg"
import Mockup2 from "../assets/heylo-mockup8.jpg"
import Mockup3 from "../assets/heylo-mockup4.jpg"
import Mockup4 from "../assets/heylo-mockup5.jpg"
import Mockup5 from "../assets/heylo-mockup6.jpg"
import Mockup6 from "../assets/heylo-mockup7.jpg"
import Social1 from "../assets/heylo-social1.png"
import Social2 from "../assets/heylo-social2.png"
import Social3 from "../assets/heylo-social3.png"

const navItems = [
    { label: "Challenge", href: "#challenge" },
    { label: "Research", href: "#research" },
    { label: "Rationale", href: "#rationale" },
    { label: "Mockup", href: "#mockup" },
]

function ProjectHeylo() {
    return (
        <>
            <ProjectSummary
                tag="brand identity, content creation"
                title="Heylo"
                role="Brand Designer, Content Creator"
                tools="Illustrator, Photoshop, InDesign, Figma"
                description="Heylo is a bold and energetic branding concept study for a plant-based skin-care line aimed at teens. This project allowed me to step out of my comfort zone by experimenting with vibrant neon colors and expressive typography. The idea was to play with and bend design rules without breaking them."
                coverImage={CoverImage}
            />

            <div className="project-body">
                <ProjectPageNav navItems={navItems} />

                <div className="project-content">

                    {/* ── Challenge & Solution ── */}
                    <section id="challenge" className="heylo-section">
                        <div className="heylo-card">
                            <h2 className="heylo-card__title">The Challenge</h2>
                            <p className="heylo-card__body">
                                How do we create a visual identity that reflected the energy of Gen Z youth while preserving the credibility of clean and safe skin-care?
                            </p>
                        </div>
                        <div className="heylo-card">
                            <h2 className="heylo-card__title">Solution</h2>
                            <p className="heylo-card__body">
                                Building a brand identity that uses colors to communicate energy and visual white-space to balance the minimalism of plant-based products.
                            </p>
                        </div>
                    </section>

                    {/* ── Concept Research ── */}
                    <section id="research" className="heylo-section">
                        <div className="heylo-research">
                            <h2 className="heylo-section__heading">Concept Research</h2>
                            <p className="heylo-body">
                                Research showed that for Gen-Z teens, skin care is not just a routine, but a form of self-expression. For 13-18 year olds, the brands they connect with are an extension of who they are. The same generation showed a strong interest in Y2K aesthetics — the bold colors, chunky typography, and tactile culture of the early 2000s. In a world that is largely digital, they enjoy having something tangible and visually expressive.
                            </p>
                            <p className="heylo-body">
                                These two insights shaped Heylo's identity. The chosen brand identity was meant to be a reflection of the audience themselves — a brand that looks the way its users want to feel. This is reflected on the moodboard below.
                            </p>
                        </div>
                    </section>

                    {/* ── Moodboard ── */}
                    <section className="heylo-section">
                        <h2 className="heylo-section__heading">Moodboard</h2>
                        <img src={MoodboardImage} alt="Moodboard" className="heylo-full-img" />
                    </section>

                    {/* ── Logo Exploration ── */}
                    <section className="heylo-section">
                        <h2 className="heylo-section__heading">Logo Exploration</h2>
                        <div className="heylo-logo-section">

                            <div className="heylo-logo-left">
                                <div className="heylo-concept">
                                    <p className="heylo-concept__label">concept 1</p>
                                    <img src={LogoConcept1} alt="Logo concept 1" className="heylo-concept__img" />
                                    <p className="heylo-concept__critique">generic and too close to existing concepts</p>
                                </div>
                                <div className="heylo-concept">
                                    <p className="heylo-concept__label">concept 2</p>
                                    <img src={LogoConcept2} alt="Logo concept 2" className="heylo-concept__img" />
                                    <p className="heylo-concept__critique">unique and scalable</p>
                                </div>
                                <div className="heylo-concept">
                                    <p className="heylo-concept__label">concept 3</p>
                                    <img src={LogoConcept3} alt="Logo concept 3" className="heylo-concept__img" />
                                    <p className="heylo-concept__critique">over-customized and not very scalable</p>
                                </div>
                            </div>

                            <div className="heylo-logo-right">
                                <p className="heylo-body">
                                    Three concepts were developed and brought forward for review. Concepts 1 and 3 captured the brand's playful tone but risked feeling similar to existing identities in the space. Concept 2 was selected for its distinctiveness. Its chunky, retro-inspired letterforms felt closer to the brand's visual. Its approach to expressing energy and play through stars customized within the type set Heylo apart rather than blending in.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* ── Brand Rationale ── */}
                    <section id="rationale" className="heylo-section">
                        <h2 className="heylo-section__heading">Brand Rationale</h2>
                        <img src={BrandRationaleImage} alt="Brand rationale" className="heylo-full-img" />
                    </section>

                    {/* ── Final Logo ── */}
                    <section className="heylo-section">
                        <h3 className="heylo-subsection__heading">Final Logo</h3>
                        <p className="heylo-body">
                            The final logo is built on a customized version of the typeface Cosmos. The counters of the "e" and "o" were replaced with star shapes — a subtle nod to glowing skin and the brand's energetic character. The ascenders and descenders were extended to give the wordmark more breathing room and a sense of balance across the full lockup. The overall weight of the letterforms was also reduced to complement the brand's softer, more delicate side and the quiet vulnerability of the teenage experience.
                        </p>
                    </section>

                    {/* ── Color Palette ── */}
                    <section className="heylo-section">
                        <h3 className="heylo-subsection__heading">Color Palette</h3>
                        <div className="heylo-palette">
                            <div className="heylo-palette__swatch heylo-palette__swatch--tall" style={{ backgroundColor: "#15123E" }}>
                                <span className="heylo-palette__label" style={{ color: "#fcfcfc" }}>Blueberry<br />#15123E</span>
                            </div>
                            <div className="heylo-palette__grid">
                                <div className="heylo-palette__swatch" style={{ backgroundColor: "#9C9ECE" }}>
                                    <span className="heylo-palette__label" style={{ color: "#050505" }}>Spring Blue<br />#9C9ECE</span>
                                </div>
                                <div className="heylo-palette__swatch" style={{ backgroundColor: "#DB599F" }}>
                                    <span className="heylo-palette__label" style={{ color: "#fcfcfc" }}>Electric Rose<br />#DB599F</span>
                                </div>
                                <div className="heylo-palette__swatch" style={{ backgroundColor: "#D6D6EB" }}>
                                    <span className="heylo-palette__label" style={{ color: "black" }}>Dew Grey<br />#D6D6EB</span>
                                </div>
                                <div className="heylo-palette__swatch" style={{ backgroundColor: "#D6E160" }}>
                                    <span className="heylo-palette__label" style={{ color: "#050505" }}>Lime<br />#D6E160</span>
                                </div>
                            </div>
                        </div>
                        <p className="heylo-body">
                            The palette was developed with packaging versatility and Y2K influence in mind. The colors are organized into two complementary sets — Lime, Spring Blue, and Blueberry form one combination, while Spring Blue, Dew Grey, and Pink form another, allowing for product variation while maintaining cohesion across the line.
                        </p>
                        <p className="heylo-body">
                            Electric Rose and Lime echo the boldness of early 2000s aesthetics while Lime also serves as a quiet nod to the brand's plant-based roots. Dew Grey and Spring Blue bring freshness and softness to balance the more vibrant tones. Blueberry adds depth and contrast, grounding the overall palette.
                        </p>
                    </section>

                    {/* ── Typography ── */}
                    <section className="heylo-section">
                        <h3 className="heylo-subsection__heading">Typography</h3>
                        <div className="heylo-typography">
                            <div className="heylo-type-showcase">
                                <p className="heylo-type__name" style={{ color: "#DB599F", fontFamily: "'New Kansas', serif" }}>New Kansas Medium</p>
                                <p className="heylo-type__size">Regular 64px</p>
                                <p className="heylo-type__example" style={{ fontFamily: "'New Kansas', serif", fontSize: "64px" }}>Example Title Text</p>
                                <p className="heylo-type__name" style={{ color: "#DB599F", fontFamily: "'Figtree', sans-serif", marginTop: "1.5rem" }}>Figtree</p>
                                <p className="heylo-type__size">Bold 36px</p>
                                <p className="heylo-type__example heylo-type__example--bold" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "36px" }}>Example Subtitle Text</p>
                                <p className="heylo-type__size">Regular 16px</p>
                                <p className="heylo-type__example" style={{ fontFamily: "'Figtree', sans-serif", fontSize: "24px" }}>This is an example of a body text.</p>
                            </div>
                            <div className="heylo-type-desc">
                                <p className="heylo-body">
                                    New Kansas was selected as the primary typeface for its soft serif character, pairing naturally with Blueberry from the color palette to position Heylo as elevated without feeling overly luxurious. Figtree accompanies it as the sans-serif pairing — its rounded forms reinforce the brand's friendly voice while keeping body copy clean and readable for a younger audience.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ── Mockups ── */}
                    <section id="mockup" className="heylo-section">
                        <h2 className="heylo-section__heading">Mockups</h2>
                        <img src={Mockup1} alt="Mockup" className="heylo-full-img" />
                        <div className="heylo-img-row">
                            <img src={Mockup2} alt="Mockup" className="heylo-half-img" />
                            <img src={Mockup3} alt="Mockup" className="heylo-half-img" />
                        </div>
                        <img src={Mockup4} alt="Mockup" className="heylo-full-img" />
                        <div className="heylo-img-row">
                            <img src={Mockup5} alt="Mockup" className="heylo-half-img" />
                            <img src={Mockup6} alt="Mockup" className="heylo-half-img" />
                        </div>
                    </section>

                    {/* ── Social Media Assets ── */}
                    <section className="heylo-section">
                        <h2 className="heylo-section__heading">Social Media Assets</h2>
                        <div className="heylo-social-row">
                            <img src={Social1} alt="Social media asset" className="heylo-social-img" />
                            <img src={Social2} alt="Social media asset" className="heylo-social-img" />
                            <img src={Social3} alt="Social media asset" className="heylo-social-img" />
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default ProjectHeylo