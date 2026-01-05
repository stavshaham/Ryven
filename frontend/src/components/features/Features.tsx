import "./Features.css"

function Features(){
    const features = [
        {
            id: 0,
            icon: '⚡',
            title: 'Real-time',
            desc: 'Instant delivery powered by modern web sockets for snappy conversations.'
        },
        {
            id: 1,
            icon: '🔒',
            title: 'Secure & Private',
            desc: 'End‑to‑end practices and privacy‑first architecture keep your chats safe.'
        },
        {
            id: 2,
            icon: '🎨',
            title: 'Customizable Themes',
            desc: 'Dark, light, and brand accents—make Ryven look and feel like yours.'
        },
        {
            id: 3,
            icon: '📱',
            title: 'Works Everywhere',
            desc: 'Responsive by design—phone, tablet, and desktop with smooth performance.'
        }
    ];

    return (
        <section className="features" id="features" aria-labelledby="features-title">
            <div className="features__header">
                <h2 className="features__title" id="features-title">Why Ryven?</h2>
                <p className="features__subtitle">
                    Fast, secure, and customizable—built for modern conversations.
                </p>
            </div>

            <div className="features__grid">
                {features.map((f, i) => (
                    <article
                        className="feature-card"
                        key={f.id}
                        aria-label={f.title}
                        style={{ '--stagger': `${i * 80}ms` }}
                    >
                        <div className="feature-card__icon" aria-hidden="true">{f.icon}</div>
                        <h3 className="feature-card__title">{f.title}</h3>
                        <p className="feature-card__desc">{f.desc}</p>
                        <div className="feature-card__accent" aria-hidden="true"></div>
                    </article>
                ))}
            </div>
        </section>
    );

}

export default Features
