import { useState, useRef } from "react";
import { Link } from "react-router";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const captchaToken = captchaRef.current?.getValue();
    if (!captchaToken) {
      setErrorMsg("Please complete the CAPTCHA verification.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to send message. Please try again.");
      setStatus("error");
      captchaRef.current?.reset();
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMsg("");
    setFormData({ name: "", email: "", message: "" });
    captchaRef.current?.reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Have a project in mind? Let's talk about how I can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[2fr,1fr] gap-12">
          {/* Contact Form */}
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardContent className="p-8 md:p-12">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                    Check your inbox for a confirmation email.
                  </p>
                  <Button variant="outline" onClick={handleReset}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="border-zinc-200 dark:border-zinc-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="border-zinc-200 dark:border-zinc-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="border-zinc-200 dark:border-zinc-800 resize-none"
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div>
                    <ReCAPTCHA
                      ref={captchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      theme="light"
                    />
                  </div>

                  {/* Error message */}
                  {errorMsg && (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
                    I typically respond within 24 hours
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:vr3750@gmail.com"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                    >
                      vr3750@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      India (Available for Remote Jobs)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Prefer to schedule a call?</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Book a free 30-minute consultation to discuss your project.
                </p>
                <Link to="/schedule-call">
                  <Button className="w-full">Schedule a Call</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Connect</h3>
                <div className="space-y-4 text-sm font-medium">
                  <a
                    href="https://www.linkedin.com/in/vivek-singh-rajawat-bba2601a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    LinkedIn
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                  <a
                    href="https://github.com/viveksinghrajawat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    GitHub
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Most projects take 4-12 weeks depending on scope and complexity. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "How do you handle project communication?",
                answer: "I provide regular updates via your preferred channel (Slack, email, etc.) and schedule weekly check-ins to ensure we're aligned.",
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes! I offer maintenance packages and can provide ongoing support after launch to ensure your project continues to succeed.",
              },
              {
                question: "What's your pricing structure?",
                answer: "Pricing depends on project scope and requirements. I offer both fixed-price and hourly arrangements. Let's discuss your needs to provide an accurate quote.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
