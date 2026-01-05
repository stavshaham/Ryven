import "./AboutUs.css";
import { HashLink } from "react-router-hash-link";

export default function About() {
    const stats = [
        { id: 1, label: "Active Users", value: "25K+" },
        { id: 2, label: "Messages Sent", value: "120M+" },
        { id: 3, label: "Uptime", value: "99.98%" },
    ];

    const milestones = [
        { id: 1, year: "2024", title: "Ryven Founded", desc: "Started with a vision for fast, secure chat." },
        { id: 2, year: "2025", title: "Public Beta", desc: "Launched themes, real-time delivery & mobile support." },
        { id: 3, year: "2025", title: "Teams Features", desc: "Channels, mentions, admin controls and more." },
    ];

    return (
        <section className="about" id="about" aria-labelledby="about-title">
            {/* Full-width wrapper; inner container centers content on large screens */}
            <div className="about__container">
                {/* Header */}
                <header className="about__header">
                    <h2 className="about__title" id="about-title">About Ryven</h2>
                    <p className="about__subtitle">
                        Ryven is a modern chat platform built for speed, security, and simplicity—designed to keep conversations flowing.
                    </p>
                </header>

                {/* Split layout (grid); stacks on mobile */}
                <div className="about__split">
                    {/* Left column: copy + CTA + stats */}
                    <div className="about__left">
                        <h3 className="about__heading">Our Mission</h3>
                        <p className="about__text">
                            We believe messaging should feel instant, polished, and safe. Ryven brings real‑time delivery,
                            privacy‑first design, and customizable themes—so you can focus on what matters: your conversations.
                        </p>

                        <div className="about__cta">
                            <HashLink smooth to="/#features" className="about__btn about__btn--primary">
                                Explore Features
                            </HashLink>
                            <HashLink smooth to="/#contact" className="about__btn about__btn--secondary">
                                Contact Us
                            </HashLink>
                        </div>

                        <div className="about__stats">
                            {stats.map((s, i) => (
                                <div className="stat" key={s.id} style={{ animationDelay: `${i * 80}ms` }}>
                                    <div className="stat__value">{s.value}</div>
                                    <div className="stat__label">{s.label}</div>
                                    <div className="stat__accent" aria-hidden="true" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column: visual (flex + grid micro‑layout) */}
                    <div className="about__right" aria-hidden="true">
                        <div className="chatcard chatcard--left">Hey! 👋</div>
                        <div className="chatcard chatcard--right">How can I help you today?</div>
                        <div className="chatcard chatcard--left">Tell me more about Ryven.</div>
                        <div className="about__glow" />
                    </div>
                </div>

                {/* Timeline (full width of container) */}
                <div className="about__timeline">
                    <div className="timeline__line" aria-hidden="true" />
                    {milestones.map((m, i) => (
                        <div className="timeline__item" key={m.id} style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="timeline__dot" />
                            <div className="timeline__content">
                                <div className="timeline__year">{m.year}</div>
                                <div className="timeline__title">{m.title}</div>
                                <div className="timeline__desc">{m.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
