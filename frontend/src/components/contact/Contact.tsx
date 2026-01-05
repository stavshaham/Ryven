import { useState } from "react";
import "./Contact.css";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState<string>("");

    // Checking form validation
    const validate = (values: FormState): Errors => {
        const newErrors: Errors = {};

        // Checking that the name is not empty
        if (!values.name.trim()) newErrors.name = "Please enter your name.";
        // Checking that the email is not empty
        if (!values.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else {
            // Checking that the email is valid, including @
            const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
            if (!emailOk) newErrors.email = "Please enter a valid email address.";
        }

        // Checking that the subject is not empty
        if (!values.subject.trim()) newErrors.subject = "Please enter a subject.";
        // CHecking that the message has at least 10 characters
        if (!values.message.trim() || values.message.trim().length < 10) {
            newErrors.message = "Please enter a message (at least 10 characters).";
        }

        return newErrors;
    };

    // Handling changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormState]) {
            // live validation: clear error as user fixes it
            const nextErrors = { ...errors };
            delete nextErrors[name as keyof FormState];
            setErrors(nextErrors);
        }
    };

    // Handling submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const v = validate(form);
        if (Object.keys(v).length > 0) {
            setErrors(v);
            setStatus("error");
            setStatusMessage("Please fix the highlighted fields and try again.");
            return;
        }

        try {
            setStatus("sending");
            setStatusMessage("Sending…");

            // TODO: Replace with your backend endpoint
            // Example:
            // const res = await fetch("/api/contact", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(form),
            // });
            // if (!res.ok) throw new Error("Failed to send");

            // Simulate success (remove this when you hook backend)
            await new Promise(r => setTimeout(r, 800));

            setStatus("success");
            setStatusMessage("Thanks! Your message has been sent.");
            setForm(initialState);
            setErrors({});
        } catch (err) {
            console.error(err);
            setStatus("error");
            setStatusMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <section className="contact" id="contact" aria-labelledby="contact-title">
            <div className="contact__container">
                <header className="contact__header">
                    <h2 className="contact__title" id="contact-title">Contact Us</h2>
                    <p className="contact__subtitle">
                        Have a question about Ryven, feature request, or partnership idea? We’d love to hear from you.
                    </p>
                </header>

                <div className="contact__grid">
                    {/* Left: info */}
                    <div className="contact__info">
                        <div className="info__card">
                            <h3 className="info__title">Get in touch</h3>
                            <p className="info__text">
                                We typically respond within 1–2 business days. Please provide as much detail as possible.
                            </p>
                            <ul className="info__list">
                                <li><span className="info__label">Email:</span> shahamstav@gmail.com</li>
                                <li><span className="info__label">Status:</span> 99.98% uptime</li>
                                <li><span className="info__label">Docs:</span> shahamstav</li>
                            </ul>
                        </div>

                        <div className="contact__badges" aria-hidden="true">
                            <div className="badge">Secure</div>
                            <div className="badge badge--accent">Realtime</div>
                            <div className="badge">Teams</div>
                        </div>
                    </div>

                    {/* Right: form */}
                    <form className="contact__form" onSubmit={handleSubmit} noValidate>
                        <div className="form__row">
                            <div className="form__field">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                    placeholder="Jane Doe"
                                    autoComplete="name"
                                />
                                {errors.name && <div id="name-error" className="field__error">{errors.name}</div>}
                            </div>

                            <div className="form__field">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    placeholder="jane@example.com"
                                    autoComplete="email"
                                />
                                {errors.email && <div id="email-error" className="field__error">{errors.email}</div>}
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="form__field">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={form.subject}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.subject}
                                    aria-describedby={errors.subject ? "subject-error" : undefined}
                                    placeholder="Feature request / Support / Partnership"
                                />
                                {errors.subject && <div id="subject-error" className="field__error">{errors.subject}</div>}
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="form__field">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                    placeholder="Tell us more…"
                                    rows={6}
                                />
                                {errors.message && <div id="message-error" className="field__error">{errors.message}</div>}
                            </div>
                        </div>

                        <div className="form__actions">
                            <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                                {status === "sending" ? "Sending…" : "Send Message"}
                            </button>
                            {statusMessage && (
                                <div
                                    className={`form__status ${status}`}
                                    role="status"
                                    aria-live="polite"
                                >
                                    {statusMessage}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
