import ProjectSummary from "../components/ProjectSummary"
import ProjectPageNav from "../components/ProjectPageNav"
import "./ProjectMotion.css"

import CoverVideo from "../assets/bts-motion-project.mp4"
import GirlComp from "../assets/bts-girl-comp.mov"
import WaveComp from "../assets/bts-wave-comp.mp4"
import ConcertComp from "../assets/bts-concert-comp.mp4"
import TunnelComp from "../assets/bts-infinite-zoom-comp.mp4"

const navItems = [
    { label: "Inspo", href: "#inspo" },
    { label: "Concept", href: "#concept" },
    { label: "Components", href: "#components" },
    { label: "Reflection", href: "#reflection" },
]

const palette = [
    { hex: "#E63946", label: "Accent Red", textColor: "#fcfcfc" },
    { hex: "#F1FAEE", label: "Off White", textColor: "#1d3557" },
    { hex: "#A8DADC", label: "Aqua Blue", textColor: "#1d3557" },
    { hex: "#457B9D", label: "Steel Blue", textColor: "#fcfcfc" },
    { hex: "#1D3557", label: "Navy", textColor: "#fcfcfc" },
]

function GifVideo({ src, label, className = "" }) {
    return (
        <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className={`col-6 motion-comp__video ${className}`}
            aria-label={label}
        />
    )
}

function ProjectMotion() {
    return (
        <>
            <ProjectSummary
                tag="motion graphics, illustrations, video editing"
                title="BTS Swim Motion"
                role="Motion Designer, Video Editor"
                tools="After Effects, Illustrator, Photoshop"
                description="An animated music video of one of my favourite K-pop group, BTS. This project was one of my favourite experimentation with motion graphics. I got a chance to draw my own illustrations and animate them in AE. Through the process, it allowed me to learn features I didn't know were possible."
                coverVideo={CoverVideo}
            />

            <div className="project-body">
                <ProjectPageNav navItems={navItems} />

                <div className="project-content">

                    {/* ── The Inspo ── */}
                    <section id="inspo" className="motion-section">
                        <div className="motion-card">
                            <h2 className="motion-card__title">The Inspo</h2>
                            <p className="motion-card__body">
                                For this project, we were asked to create a motion video on one of our favourite songs. I immediately knew I wanted to make one for BTS, a Korean boy band that became a global sensation in the last decade. As a long term fan of the band, I wanted to combine that dedication with my new found love for motion graphics. This led to a lot of experimentation with After Effects tools and different animation techniques combined to create one smooth flowing motion music video.
                            </p>
                        </div>
                    </section>

                    {/* ── Concept & Storyboard ── */}
                    <section id="concept" className="motion-section">
                        <h2 className="motion-section__heading">Concept & Storyboard</h2>
                        <p className="motion-body">
                            The original music video for Swim follows a woman, representing the fandom who felt adrift during the group's six-year hiatus. The song is a love letter from the members telling their fans that they have been watching over them during this time. I wanted to represent this concept in my own way by positioning the animation through the eyes of a BTS fan experiencing their comeback.
                        </p>
                        <p className="motion-body">
                            To map this out, I built a hand-drawn frame-by-frame storyboard in Procreate. My original plan was to illustrate each component, vectorize in Illustrator, and then animate in After Effects. However, due to a tight deadline and limitations of my illustration skills, there were moments I had to improvise certain scenes. Still, having a storyboard made that pivoting process smoother.
                        </p>
                        {/* Add your storyboard image here: <img src={StoryboardImage} alt="Storyboard" className="motion-full-img" /> */}
                    </section>

                    {/* ── Color Palette and Visual Style ── */}
                    <section className="motion-section">
                        <h2 className="motion-section__heading">Color Palette and Visual Style</h2>
                        <div className="motion-palette">
                            <div className="motion-palette__swatch motion-palette__swatch--tall" style={{ backgroundColor: "#1D3557" }}>
                                <span className="motion-palette__label" style={{ color: "#fcfcfc" }}>Navy<br />#1D3557</span>
                            </div>
                            <div className="motion-palette__grid">
                                <div className="motion-palette__swatch" style={{ backgroundColor: "#E63946" }}>
                                    <span className="motion-palette__label" style={{ color: "#fcfcfc" }}>Accent Red<br />#E63946</span>
                                </div>
                                <div className="motion-palette__swatch" style={{ backgroundColor: "#F1FAEE" }}>
                                    <span className="motion-palette__label" style={{ color: "#1d3557" }}>Off White<br />#F1FAEE</span>
                                </div>
                                <div className="motion-palette__swatch" style={{ backgroundColor: "#A8DADC" }}>
                                    <span className="motion-palette__label" style={{ color: "#1d3557" }}>Aqua Blue<br />#A8DADC</span>
                                </div>
                                <div className="motion-palette__swatch" style={{ backgroundColor: "#457B9D" }}>
                                    <span className="motion-palette__label" style={{ color: "#fcfcfc" }}>Steel Blue<br />#457B9D</span>
                                </div>
                            </div>
                        </div>
                        <p className="motion-body">
                            Since the song is called Swim, and it is a melodious soothing song, I wanted the audience to feel calm and a feeling of longing throughout the video. For this, a predominantly blue colour palette seemed like a natural fit. BTS's new album also carries a red accent colour throughout its visual identity, so I wove that in deliberately in the beginning to represent the band members in their current era.
                        </p>
                        <p className="motion-body">
                            For the visual style, I drew inspiration from Japanese animation. I am a huge fan of its ability to blend 2D illustration with movement to create deliberate storytelling. I wanted to bring that same aesthetic into this project. Using illustrated and hand-traced components gave the animation that 2D rough crafted visual than being completely slick and digital.
                        </p>
                    </section>

                    {/* ── Components ── */}
                    <section id="components" className="motion-section">
                        <h2 className="motion-section__heading">Components</h2>

                        {/* The Girl — video left, text right */}
                        <div className="grid motion-comp">
                            <GifVideo src={GirlComp} label="The Girl component" className="motion-comp__video--girl" />
                            <div className="col-6 motion-comp__text">
                                <h3 className="motion-comp__heading">The Girl</h3>
                                <p className="motion-comp__body">Our main character, the female fan, was first hand-drawn on Procreate, then traced on Illustrator for a more polished but still organic look. Her hair was later animated using path animation on After Effects.</p>
                            </div>
                        </div>

                        {/* The Waves — text left, video right */}
                        <div className="grid motion-comp">
                            <div className="col-6 motion-comp__text">
                                <h3 className="motion-comp__heading">The Waves</h3>
                                <p className="motion-comp__body">The waves were traced using the pen tool on After Effects from a reference picture and animated using path animation. It was later used as a track matte to hide and reveal text in the video.</p>
                            </div>
                            <GifVideo src={WaveComp} label="The Waves component" className="motion-comp__video--right" />
                        </div>

                        <div className="grid motion-comp">
                            <GifVideo src={ConcertComp} label="The Concert component" />
                            <div className="col-6 motion-comp__text">
                                <h3 className="motion-comp__heading">The Concert</h3>
                                <p className="motion-comp__body">This part of the video was first illustrated on Illustrator as one composition neatly organized into named layers to make it easy to pre-compose in After Effects. Once in After Effects, I used the camera to arrange them in a parallax effect to give the illusion of more objects being revealed as the camera zooms out. </p>
                            </div>
                        </div>

                        <div className="grid motion-comp">
                            <div className="col-6 motion-comp__text">
                                <h3 className="motion-comp__heading">The Tunnel</h3>
                                <p className="motion-comp__body">One of the lines in the song goes “I can spend a lifetime watching you.” A lifetime feels infinite to me which is why I thought an infinite tunnel motion would suit this scene the best. I mostly followed a YouTube tutorial to create this using a lot of repeated shapes and parenting the elements together for a seamless animation.</p>
                            </div>
                            <GifVideo src={TunnelComp} label="The Tunnel component" className="motion-comp__video--right" />
                        </div>



                    </section>

                    {/* ── Challenge and Reflection ── */}
                    <section id="reflection" className="motion-section">
                        <h2 className="motion-section__heading">Challenge and Reflection</h2>
                        <p className="motion-body">
                            One of the biggest challenges for this project was matching my illustration skills to the ambition of my initial storyboard. I realized quickly that several components needed to be rethought, and at times that uncertainty brought me to a full creative block. That said, having the storyboard as a foundation made pivoting far more manageable. It kept me anchored to the concept even when the execution had to change.
                        </p>
                        <p className="motion-body">
                            This was my first major project in After Effects, and I leaned into it as a learning opportunity. It pushed me to trust the process even when things felt uncertain, and in the end I came away with a clearer sense of what it truly means to work as a motion designer.
                        </p>
                    </section>

                </div>
            </div>
        </>
    )
}

export default ProjectMotion