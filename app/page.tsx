"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Sparkles,
  Cloud,
  Server,
  Rocket,
  Cpu,
  Network,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "PT Carakan Sadhana Dirgantara",
    period: "2023 - 2025",
    summary:
      "Owning on-prem & cloud infrastructure, CI/CD, Kubernetes, and automation for production workloads.",
    items: [
      "Designed and operated hybrid infrastructure using OpenStack, VMware, Azure, and Contabo.",
      "Built CI/CD pipelines to ship services faster with safe rollbacks.",
      "Maintained mail servers and automated routine operations for reliability.",
      "Implemented WebRTC with TURN/Redis for real-time communication platforms.",
    ],
  },
  {
    role: "Marketing Specialist & Field Supervisor",
    company: "PT Putra Jaya Mandiri Abadi",
    period: "2020 - 2022",
    summary:
      "Bridged technical deployment in the field with business and customer expansion.",
    items: [
      "Led network expansion projects and supervised on-site deployments.",
      "Coordinated outreach programs to grow customer base and brand awareness.",
    ],
  },
];

const techSkills = [
  "Linux Server Management",
  "OpenStack & VMware",
  "Docker & Kubernetes",
  "Azure & Contabo Cloud",
  "CI/CD (Git, pipelines)",
  "Hypervisor Management",
  "IoT Research & Prototyping",
];

const softSkills = [
  "Clear technical communication",
  "Strong collaboration & teamwork",
  "Calm under incident pressure",
  "Ownership & accountability",
  "Always learning & sharing",
];

export default function Page() {
  const [active, setActive] = React.useState<string>("home");

  const handleScrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <button
            onClick={() => handleScrollTo("home")}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-cyan-300 hover:text-cyan-200"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-slate-950">
              B
            </div>
            <span>bagusdai.net</span>
          </button>

          <div className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
            <NavItem
              label="Home"
              target="home"
              active={active}
              onClick={handleScrollTo}
            />
            <NavItem
              label="Experience"
              target="experience"
              active={active}
              onClick={handleScrollTo}
            />
            <NavItem
              label="Skills"
              target="skills"
              active={active}
              onClick={handleScrollTo}
            />
            <NavItem
              label="Contact"
              target="contact"
              active={active}
              onClick={handleScrollTo}
            />
          </div>
        </div>
      </nav>

      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-16 pt-10 md:px-8 md:pt-14">
        {/* HERO */}
        <section id="home" className="grid items-center gap-10 lg:grid-cols-[1.3fr,1fr]">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              <span>DevOps • Cloud • Automation</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Turning infrastructure problems
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  into automated, reliable systems.
                </span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                I&apos;m <span className="font-semibold">Bagus Dai Putranto</span>, a
                DevOps engineer who loves shipping stable releases, cleaning up flaky
                pipelines, and making infrastructure observable & predictable.
                From on-prem racks to public cloud, I enjoy owning the stack end-to-end.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
              >
                <a href="mailto:bagusputre5@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Book me for your next project
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
              >
                <a
                  href="https://www.linkedin.com/in/bagus-dai-putranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
              >
                <a href="https://bagusdai.net" target="_blank" rel="noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Personal Site
                </a>
              </Button>
            </div>

            {/* stats */}
            <div className="grid gap-3 text-xs sm:grid-cols-3">
              <StatCard
                icon={<Cloud className="h-4 w-4" />}
                label="Hybrid environments"
                value="On-prem + Cloud"
              />
              <StatCard
                icon={<Rocket className="h-4 w-4" />}
                label="CI/CD focus"
                value="From commit to deploy"
              />
              <StatCard
                icon={<Server className="h-4 w-4" />}
                label="Infra coverage"
                value="Mail, WebRTC, apps"
              />
            </div>
          </div>

          {/* Right – big profile */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -translate-y-4 translate-x-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/40 via-emerald-500/30 to-sky-500/10 blur-3xl" />
              <Card className="relative z-10 w-full max-w-xs border-slate-800 bg-slate-900/90">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-emerald-400 to-sky-500 blur-sm" />
                    <Avatar className="relative h-32 w-32 border-4 border-slate-950">
                      <AvatarImage src="/profil.jpg" alt="Bagus Dai Putranto" />
                      <AvatarFallback>BD</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold">Bagus Dai Putranto</p>
                    <p className="text-xs text-cyan-300">
                      DevOps Engineer • Cloud & Automation
                    </p>
                  </div>

                  <Separator className="bg-slate-800" />

                  <div className="space-y-1 text-xs text-slate-300">
                    <ContactItem icon={<MapPin className="h-3 w-3" />} label="Yogyakarta, Indonesia" />
                    <ContactItem icon={<Phone className="h-3 w-3" />} label="+62 811-256-039" />
                    <ContactItem icon={<Mail className="h-3 w-3" />} label="bagusputre5@gmail.com" />
                  </div>

                  <Separator className="bg-slate-800" />

                  <div className="flex gap-2 text-xs">
                    <Badge className="bg-slate-800 text-slate-100">Open to work</Badge>
                    <Badge variant="outline" className="border-cyan-400 text-cyan-300">
                      SRE / DevOps
                    </Badge>
                  </div>

                  <div className="mt-2 flex gap-3 text-slate-400">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-700 bg-slate-900/80 p-2 hover:border-cyan-400 hover:text-cyan-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bagus-dai-putranto"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-slate-700 bg-slate-900/80 p-2 hover:border-cyan-400 hover:text-cyan-300"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-4">
          <SectionHeader
            title="Experience"
            subtitle="How I’ve been mixing infrastructure, automation, and real-world deployments."
          />
          <div className="grid gap-6 lg:grid-cols-[1.6fr,1fr]">
            {/* Timeline */}
            <Card className="border-slate-800 bg-slate-900/85">
              <CardContent className="relative space-y-6 p-6">
                <div className="absolute left-4 top-6 bottom-6 w-px bg-slate-700" />
                {experiences.map((exp, idx) => (
                  <div key={exp.company} className="relative flex gap-4">
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-950 text-[10px] font-semibold text-cyan-300">
                      {idx + 1}
                    </div>
                    <div className="flex-1 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div>
                          <p className="text-sm font-semibold text-slate-50">
                            {exp.role}
                          </p>
                          <p className="text-xs font-medium uppercase tracking-wide text-cyan-300">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs text-slate-400">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                        {exp.summary}
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300 sm:text-sm">
                        {exp.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education mini card */}
            <Card className="border-slate-800 bg-slate-900/85">
              <CardHeader>
                <CardTitle className="text-sm">Education</CardTitle>
                <CardDescription className="text-xs">
                  A mix of automation engineering and computer networking.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    2021 – 2025
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    Institut Teknologi Sepuluh Nopember
                  </p>
                  <p className="text-slate-200">Electrical Automation Engineer</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    2017 – 2020
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    SMK Negeri 1 Seyegan
                  </p>
                  <p className="text-slate-200">Computer & Network Engineer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-4">
          <SectionHeader
            title="Toolbox & Soft Skills"
            subtitle="What I bring to your infra team, both technically and as a teammate."
          />
          <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
            {/* Technical */}
            <Card className="border-slate-800 bg-slate-900/85">
              <CardHeader>
                <CardTitle className="text-sm">Technical Stack</CardTitle>
                <CardDescription className="text-xs">
                  Tools I&apos;m comfortable owning in production.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <SkillRow
                    icon={<Server className="h-4 w-4" />}
                    label="Linux server & hypervisor management"
                  />
                  <SkillRow
                    icon={<Cloud className="h-4 w-4" />}
                    label="OpenStack, VMware, Azure, AWS"
                  />
                  <SkillRow
                    icon={<Cpu className="h-4 w-4" />}
                    label="Docker & Kubernetes for container orchestration"
                  />
                  <SkillRow
                    icon={<Network className="h-4 w-4" />}
                    label="CI/CD pipelines & deployment automation"
                  />
                </div>
                <Separator className="bg-slate-800" />
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-slate-700 bg-slate-950/60 text-xs text-slate-100"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft */}
            <Card className="border-slate-800 bg-slate-900/85">
              <CardHeader>
                <CardTitle className="text-sm">Soft Skills</CardTitle>
                <CardDescription className="text-xs">
                  The non-technical bits that keep teams sane.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-slate-800 text-slate-50 hover:bg-slate-700 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  I enjoy being the bridge between code, infra, and people —
                  translating incidents into action items and keeping everyone on
                  the same page.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="space-y-4">
          <SectionHeader
            title="Let’s talk about your infrastructure"
            subtitle="Ping me if you need someone to clean up your pipelines, stabilize deployments, or design a more resilient stack."
          />
          <Card className="border-slate-800 bg-slate-900/85">
            <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-50">
                  Ready for freelance, remote, or full-time DevOps roles.
                </p>
                <p className="text-xs text-slate-300 md:max-w-md">
                  Share a short description of your current infra setup or pain
                  point, and I&apos;ll happily discuss possible approaches.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                >
                  <a href="mailto:bagusputre5@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Bagus
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
                >
                  <a
                    href="https://wa.me/62811256039"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Chat via WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function NavItem({
  label,
  target,
  active,
  onClick,
}: {
  label: string;
  target: string;
  active: string;
  onClick: (id: string) => void;
}) {
  const isActive = active === target;
  return (
    <button
      onClick={() => onClick(target)}
      className={`relative pb-1 transition-colors ${
        isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-200"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] w-7 rounded-full bg-cyan-400" />
      )}
    </button>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-1">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <p className="max-w-2xl text-xs text-slate-300 sm:text-sm">{subtitle}</p>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
        {icon}
      </div>
      <div className="space-y-0.5">
        <p className="text-[11px] uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="text-xs font-medium text-slate-100">{value}</p>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[11px] text-slate-300">
      <span className="text-cyan-400">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  );
}

function SkillRow({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/50 p-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
        {icon}
      </span>
      <span className="text-xs sm:text-sm text-slate-200">{label}</span>
    </div>
  );
}
