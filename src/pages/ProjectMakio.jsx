import ProjectSummary from "../components/ProjectSummary"
import ProjectPageNav from "../components/ProjectPageNav"
import MoreProjects from "../components/MoreProjects"

import "./ProjectMakio.css"

import CoverImage      from "../assets/makio-cover.jpg"
import PersonaImage    from "../assets/makioUserPersona.jpg"
import JourneyMap      from "../assets/makioUserJourney.jpg"
import UserFlow1       from "../assets/makioUserFlow1.jpg"
import UserFlow2       from "../assets/makioUserFlow2.jpg"
import HomeBefore      from "../assets/makioOldHome.jpg"
import HomeAfter       from "../assets/makioHomeScreen.jpg"
import EventsBefore    from "../assets/makioOldEvent.jpg"
import EventsAfter     from "../assets/makioEventsScreen.jpg"
import ProfileBefore   from "../assets/makioOldProfile.jpg"
import ProfileAfter    from "../assets/makioProfileScreen.jpg"
import DesignSystem    from "../assets/makioDesignSystem.jpg"

const navItems = [
    { label: "Challenge",   href: "#challenge"  },
    { label: "Research",    href: "#research"   },
    { label: "Insights",    href: "#insights"   },
    { label: "Iterations",  href: "#iterations" },
]

const researchFeatures = [
    { label: "Personalized recommendation based on user interest", value: 9 },
    { label: "Browsing inspiration",                               value: 8 },
    { label: "Save/Bookmark all types of app content",            value: 7 },
    { label: "Browsing local creative events",                     value: 6 },
    { label: "Finding learning content for new/existing hobby",   value: 6 },
    { label: "Discussion platform for sharing and feedback",       value: 4 },
    { label: "Buying/Selling crafts",                             value: 3 },
]

const insights = [
    {
        number: "01",
        title:  "Scattered Content",
        body:   "Saving inspiration images and tutorials across multiple platforms creates friction in the creative process.",
    },
    {
        number: "02",
        title:  "Hard to Find Community",
        body:   "Difficult to find and connect with other creatives with similar interests, leading to demotivation and isolation.",
    },
    {
        number: "03",
        title:  "Lack of Feedback",
        body:   "Due to lack of community, difficult to receive constructive feedback, hindering growth in the creative practice.",
    },
]

const solutions = [
    {
        number: "01",
        title:  "Curated Inspiration Feed",
        body:   "One platform pulling from several creative APIs to provide users with a feed that is personal and reflective of their creative practice.",
    },
    {
        number: "02",
        title:  "Events and Direct Messaging",
        body:   "Local creative event suggestions and the ability to message individual users to grow network and connections.",
    },
    {
        number: "03",
        title:  "Community Forum",
        body:   "A designated discussion platform to upload user's work and get feedback from the Makio community.",
    },
]

const iterations = [
    {
        title:  "1. Navigation, tags and icons redesign",
        body:   "Initial design of the navigation tabs, tags and icons lacked contrast and made the layout look either empty or difficult to read. Gradient was removed from tags and icons, and the navigation tabs were given a strong contrast colour to illustrate a more balanced interface.",
        before: HomeBefore,
        after:  HomeAfter,
    },
    {
        title:  "2. Event page layout redesign",
        body:   "Originally, it seemed like a good idea to have three different sections on the Event screen. However, later it seemed redundant since two of the three sections were recommended events. That was consolidated into one recommended section with any upcoming events highlighted at the top.",
        before: EventsBefore,
        after:  EventsAfter,
    },
    {
        title:  "3. Profile page redesign",
        body:   "The initial profile screen was experimental but looked inconsistent in the end. Hence, it was redesigned with a more traditional layout to be more consistent with the UI and brand.",
        before: ProfileBefore,
        after:  ProfileAfter,
    },
]

function DownArrow() {
    return (
        <svg className="makio-arrow-down" width="28" height="52" viewBox="0 0 28 52" fill="none">
            <path d="M14 4 Q13 18 14 32" stroke="#CAD83B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M6 32 Q14 46 22 32" stroke="#CAD83B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    )
}

function RightArrow() {
    return (
        <svg className="makio-arrow-right" width="100" height="36" viewBox="0 0 100 36" fill="none">
            <path d="M4 18 Q34 16 65 18" stroke="#CAD83B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M66 8 Q82 18 66 28" stroke="#CAD83B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    )
}

function ProjectMakio() {
    return (
        <>
            <ProjectSummary
                tag="ui/ux, product design, user research"
                title="Makio"
                role="Product designer, UX Researcher"
                tools="Figma, Google Forms"
                description="Makio is a community app for users who enjoy creative hobbies. This case study came from my own pain points as a creative — I found it hard to maintain a consistent practice and connect with others who share similar hobbies. I decided to design an all-in-one platform built specifically for creatives."
                coverImage={CoverImage}
                prototypeLink="PROTOTYPE_LINK_HERE"
            />

            <div className="project-body">
                <ProjectPageNav navItems={navItems} />

                <div className="project-content container">

                    {/* ── Challenge ── */}
                    <section id="challenge" className="makio-section">

                        <div className="makio-card">
                            <h2>The Challenge</h2>
                            <p className="makio-challenge__quote">
                                "Pinterest and Instagram were not made for creatives."
                            </p>
                            <p className="makio-card__body">
                                Jumping between apps to save ideas, share work, and find community creates friction that gets in the way of the creative process. These apps also do not have a community model to actually meet and connect with others with similar creative interests.
                            </p>
                        </div>

                        <div className="makio-card">
                            <h2>Solution</h2>
                            <p className="makio-card__body">
                                Makio aims to solve this challenge by providing users with a niche platform that focuses on creative hobbyists. It brings together a curated inspiration feed, local events suggestions, and peer feedback through community forums. Content is tailored to each user's interests, whether they're an artist, photographer, or any other kind of maker.
                            </p>
                        </div>

                        <div className="makio-design-goal">
                            <p className="makio-design-goal__title">Design Goal</p>
                            <p className="makio-design-goal__text">
                                How might we create a space that allows creatives to grow in their practice while preserving community digitally?
                            </p>
                        </div>

                    </section>

                    {/* ── User Research ── */}
                    <section id="research" className="makio-section">
                        <h2>User Research</h2>
                        <p className="makio-body">
                            A Google Form survey was conducted to test this initial hypothesis and these were some of the highlights. It was clear that creative inspiration and content organization was very important to users.
                        </p>

                        <div className="grid makio-stats">
                            <div className="makio-stat col-4 col-12-sm">
                                <p className="makio-stat__number">13</p>
                                <p className="makio-stat__label">Users surveyed</p>
                            </div>
                            <div className="makio-stat col-4 col-12-sm">
                                <p className="makio-stat__number">62%</p>
                                <p className="makio-stat__label">Users valued community</p>
                            </div>
                            <div className="makio-stat col-4 col-12-sm">
                                <p className="makio-stat__number">39%</p>
                                <p className="makio-stat__label">Users wanted to join community events</p>
                            </div>
                        </div>

                        <h3>Most Wanted Features</h3>
                        <div className="makio-bar-chart">
                            {researchFeatures.map((f) => (
                                <div key={f.label} className="makio-bar-chart__row">
                                    <span className="makio-bar-chart__label">{f.label}</span>
                                    <div className="makio-bar-chart__track">
                                        <div
                                            className="makio-bar-chart__fill"
                                            style={{ width: `${(f.value / 9) * 100}%` }}
                                        />
                                    </div>
                                    <span className="makio-bar-chart__value">{f.value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── User Persona ── */}
                    <section className="makio-section">
                        <h2>User Persona</h2>
                        <p className="makio-body">
                            The data above helped to consolidate and create an example of the ideal target audience for Makio.
                        </p>
                        <img src={PersonaImage} alt="User Persona" className="makio-full-img" />
                    </section>

                    {/* ── Journey Map ── */}
                    <section className="makio-section">
                        <h2>Journey Map</h2>
                        <img src={JourneyMap} alt="User Journey Map" className="makio-full-img" />
                    </section>

                    {/* ── User Flow ── */}
                    <section className="makio-section">
                        <h2>User Flow</h2>
                        <p className="makio-userflow__subtitle">User Log In/Sign-up Flow</p>
                        <img src={UserFlow1} alt="User Log In / Sign-up Flow" className="makio-full-img" />
                        <p className="makio-userflow__subtitle">User Event Sign-up Flow</p>
                        <img src={UserFlow2} alt="User Event Sign-up Flow" className="makio-full-img makio-gap" />
                    </section>

                    {/* ── Key Insights and Solutions ── */}
                    <section id="insights" className="makio-section">
                        <h2>Key Insights and Solutions</h2>

                        <div className="grid">
                            {insights.map((card) => (
                                <div key={card.number} className="makio-insight-card makio--insight col-4 col-12-sm">
                                    <p className="makio-insight__num">{card.number}</p>
                                    <h3 className="makio-insight__title">{card.title}</h3>
                                    <p className="makio-insight__body">{card.body}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid makio-arrows-row">
                            <div className="col-4"><DownArrow /></div>
                            <div className="col-4"><DownArrow /></div>
                            <div className="col-4"><DownArrow /></div>
                        </div>

                        <div className="grid">
                            {solutions.map((card) => (
                                <div key={card.number} className="makio-insight-card makio--solution col-4 col-12-sm">
                                    <p className="makio-insight__num">{card.number}</p>
                                    <h3 className="makio-insight__title">{card.title}</h3>
                                    <p className="makio-insight__body">{card.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Iterations ── */}
                    <section id="iterations" className="makio-section">
                        <h2>Iterations</h2>
                        <p className="makio-body">
                            Based on initial presentation of the high fidelity wireframes and feedback, generous changes were made to the user interface to improve content layout and hierarchy in order to reduce overwhelm and simplify the platform further.
                        </p>

                        {iterations.map((iter) => (
                            <div key={iter.title} className="makio-iteration">
                                <h3 className="makio-iteration__title">{iter.title}</h3>
                                <p className="makio-body">{iter.body}</p>
                                <div className="makio-before-after">
                                    <div className="makio-before-after__side">
                                        <span className="makio-before-after__label">Before</span>
                                        <img src={iter.before} alt={`${iter.title} — before`} className="makio-phone-screen" />
                                    </div>
                                    <div className="makio-before-after__arrow" aria-hidden="true">
                                        <RightArrow />
                                    </div>
                                    <div className="makio-before-after__side">
                                        <span className="makio-before-after__label makio-before-after__label--after">After</span>
                                        <img src={iter.after} alt={`${iter.title} — after`} className="makio-phone-screen" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* ── Design System ── */}
                    <section className="makio-section">
                        <h2>Design System</h2>
                        <img src={DesignSystem} alt="Makio Design System" className="makio-full-img" />
                    </section>

                    {/* ── Reflection ── */}
                    <section className="makio-section">
                        <h2>Reflection</h2>
                        <p className="makio-body">
                            Designing a creative app, I thought the visual aesthetic should be the focus. However, I quickly realized that no matter the application, user interface and comfort always comes first. It is also important to flesh out the layout spacing and typography ahead of time before starting to design the high fidelity wireframes. This case study truly helped me understand the concept of "less is more" and what is most important in UI/UX.
                        </p>
                    </section>

                </div>
            </div>
            <MoreProjects currentId={3} />
        </>
    )
}

export default ProjectMakio