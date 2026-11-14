---
title: Cybersecurity Consulting for Small Businesses
badge: IT Security Consulting
hero:
  title: "Cybersecurity consulting"
  titleHighlight: "for small businesses"
  description: "Most small businesses are not breached by sophisticated attackers. They are breached through a reused password, an unpatched laptop, or a backup nobody ever tested. We find those gaps, fix them with you, and leave you with a setup your team can actually live with."
  ctaConsultation: "Request a Security Review"
  ctaExpertise: "See What We Cover"
sectionTitle: "IT Security Services"
serviceItems:
  - title: IT Security Audit
    emoji: "🔍"
    description: "A hands-on review of your accounts, devices, network, servers, and backups - not a questionnaire. You get a prioritized list of what to fix first and why."
    badges: ["Audit", "Risk Assessment", "Report"]
    features:
      - "Inventory of devices, accounts, and exposed services"
      - "Findings ranked by real-world risk and effort"
      - "Plain-language report for non-technical owners"
  - title: Accounts, Passwords & MFA
    emoji: "🔑"
    description: "Stolen credentials are the most common way in. We roll out a password manager, multi-factor authentication, and hardware security keys without bringing work to a halt."
    badges: ["MFA", "Passkeys", "YubiKey", "Password Manager"]
    features:
      - "Password manager rollout and migration"
      - "MFA and hardware keys on email, banking, and admin accounts"
      - "Clean offboarding and shared-account cleanup"
  - title: Device & Workstation Hardening
    emoji: "💻"
    description: "Laptops and phones carry your business. We encrypt them, lock them down, and keep them patched - on Linux, macOS, and Windows."
    badges: ["Disk Encryption", "Patching", "Linux"]
    features:
      - "Full-disk encryption on every device"
      - "Automatic security updates and firmware patching"
      - "Hardened Linux workstations for sensitive roles"
  - title: Network & Wi-Fi Security
    emoji: "📡"
    description: "A flat network with one shared Wi-Fi password lets a single infected device reach everything. We segment, encrypt, and monitor your office network."
    badges: ["WPA3", "VLAN", "Firewall", "VPN"]
    features:
      - "Separate networks for staff, guests, and IoT devices"
      - "Firewall configuration and secure remote access"
      - "Router and access point firmware maintenance"
  - title: Backup & Ransomware Resilience
    emoji: "🛟"
    description: "A backup you have never restored is a hope, not a backup. We set up encrypted, versioned, off-site backups and prove they restore."
    badges: ["3-2-1 Backup", "Encryption", "Restore Tests"]
    features:
      - "3-2-1 backup strategy with an offline or immutable copy"
      - "Scheduled restore tests with documented results"
      - "A written recovery plan for the day something breaks"
  - title: Server & Cloud Hardening
    emoji: "🛡️"
    description: "We have run production infrastructure for 20 years. We harden your Linux servers, cloud accounts, and web applications the way we harden our own."
    badges: ["Linux", "SSH", "Cloud IAM", "TLS"]
    features:
      - "SSH, firewall, and access control hardening"
      - "Secrets management and least-privilege cloud IAM"
      - "Patch management and vulnerability scanning"
  - title: Emergency Patching & Incident Response
    emoji: "🚨"
    description: "When a critical vulnerability such as PHP2Shell is disclosed, the window between announcement and mass exploitation is measured in hours. We find what is affected, patch it, and check whether anyone got in first."
    badges: ["PHP2Shell", "CVE Response", "Patching"]
    features:
      - "Inventory of affected servers and software versions"
      - "Patching, mitigation, and upgrades off unsupported versions"
      - "Compromise checks: web shells, unknown accounts, altered files"
cta:
  title: "Not sure how exposed you are?"
  description: "Tell us how your business works today - how many people, which devices, where the data lives. We will tell you honestly where the real risks are and what a sensible fix costs."
  btnConsultation: "Request a Security Review"
  btnAllServices: "All Services"
faqTitle: "Cybersecurity consulting: common questions"
faq:
  - question: "What does a small business IT security audit include?"
    answer: "We review how people sign in (passwords, MFA, shared accounts), every laptop, phone, and server in use, your office network and Wi-Fi, your email and domain configuration, and your backups. You receive a written report that ranks each finding by risk and effort, so you know what to fix this week and what can wait."
  - question: "How long does a security audit take?"
    answer: "For a business of up to about 20 people, the review itself usually takes a few days of work spread over one to two weeks, depending on how many systems are involved and how quickly we get access. Fixing the findings is scoped separately, so you can decide what to do in-house."
  - question: "Do you only advise, or do you also implement the fixes?"
    answer: "Both. We are engineers first, so we can configure the firewall, roll out the password manager, encrypt the laptops, and set up the backups ourselves. If you have an IT provider, we can hand them a precise task list instead."
  - question: "We are only five people. Is this really necessary?"
    answer: "Attackers rarely pick targets by size. Phishing, credential stuffing, and ransomware are automated and hit whoever is exposed. A five-person business usually needs a short list of things done properly - MFA, encrypted devices, a segmented network, tested backups - not an enterprise security program."
  - question: "What is PHP2Shell and is my website affected?"
    answer: "PHP2Shell is the name given to two critical remote code execution vulnerabilities in PHP itself (CVE-2026-109618 and CVE-2026-109619), disclosed in October 2026 and exploited in the wild. Any server that runs PHP to serve a website is potentially affected, whatever the application - WordPress, Symfony, Laravel, a shop system, or custom code. Fixed releases exist for PHP 8.2 to 8.5. PHP 8.1 and older no longer receive fixes from the PHP project, so those servers need an upgrade or a distribution that still backports security patches."
  - question: "How do I fix PHP2Shell on my server?"
    answer: "Update PHP to a fixed release (8.5.12, 8.4.27, 8.3.36, 8.2.35 or later) or install your Linux distribution's patched packages, then restart PHP-FPM or the web server so the new version is actually running. Apply the additional hardening the PHP project recommends, such as disabling session upload progress. Because exploitation began around disclosure, also check for signs of compromise: unknown PHP files, new admin users, unexpected scheduled tasks, and outbound connections. If you are on PHP 8.1 or older, plan the upgrade now."
  - question: "Can you help with GDPR and NIS2 security requirements?"
    answer: "We implement the technical and organizational measures those regulations expect - access control, encryption, backups, logging, incident procedures - and document them. We are not a law firm and do not issue certifications, so legal interpretation stays with your counsel or data protection officer."
  - question: "Which countries do you work in?"
    answer: "We work with businesses in France, Switzerland, and Germany, on-site where hardware and networks are involved and remotely for audits, servers, and cloud accounts. We work in English, French, and German."
seo:
  title: "Cybersecurity Consulting for Small Business | House of Agile"
  description: "IT security consulting for SMEs: security audits, MFA and password rollout, device and network hardening, tested backups. France, Switzerland, Germany."
  ogTitle: "Cybersecurity Consulting for Small Businesses"
  ogDescription: "Security audits, hardened devices and networks, and backups that actually restore - practical IT security for businesses without a security team."
---

## Security that fits a small business

Enterprise security advice assumes a security department, a budget line, and a compliance officer. Most businesses we work with have none of those. They have an owner who also approves invoices, a handful of laptops, a shared mailbox, and a NAS in the corner that has not been updated in three years.

That is the environment we work in, with clients in France, Switzerland, and Germany. We bring 20 years of running production infrastructure - servers, cloud platforms, networks - and apply it at the scale of a law office, an agency, a medical practice, a small manufacturer, or a town hall.

## Where breaches actually start

The same handful of weaknesses show up in almost every review we do:

- **Reused and shared passwords** with no multi-factor authentication on email or banking
- **Unencrypted laptops** that expose every client file if they are lost or stolen
- **One flat network** where the guest phone, the printer, and the accounting PC can all see each other
- **Backups that were configured once** and have never been restored
- **Former employees and contractors** who still have working accounts
- **Routers, NAS boxes, and old servers** running firmware with known vulnerabilities

None of these need exotic tools to fix. They need someone to sit down, do the work carefully, and document it.

## How an engagement works

1. **Review.** We look at your real setup - accounts, devices, network, servers, backups - with your team, not from a checklist sent by email.
2. **Prioritize.** You get a short written report: what is exposed, how likely it is to hurt you, and what it takes to fix. No scare tactics, no 80-page PDF.
3. **Fix.** We implement the changes ourselves or brief your existing IT provider. Most businesses close their biggest gaps within a few weeks.
4. **Maintain.** Optional periodic check-ins: patching, restore tests, account reviews, and a number to call when something looks wrong.

## Case in point: PHP2Shell

In October 2026 two critical vulnerabilities in PHP - quickly named **PHP2Shell** (CVE-2026-109618 and CVE-2026-109619) - allowed attackers to run their own code on web servers without logging in. Every kind of PHP hosting was affected, exploitation was already under way when the fixes were published, and older PHP versions received no fix at all.

For the clients whose servers we look after, we responded straight away:

- **Inventory.** Which servers run PHP, in which version, behind which web server.
- **Patch.** Fixed PHP releases rolled out and services restarted, with the recommended configuration hardening applied on top.
- **Legacy versions.** For applications stuck on PHP versions that no longer receive fixes, a protected interim setup and a concrete upgrade path.
- **Verify.** A check of each server for traces of compromise before declaring it clean.

This is what a security partner is for. Not a yearly report, but someone who already knows your systems on the day a vulnerability like this lands. If you run a PHP site and are not sure whether it was patched, [get in touch](/#contact) - checking takes minutes.

## Specialist services

Some of our security work has grown into dedicated services:

- [Hardened Linux workstations on Lenovo ThinkPad](/services/secure-linux-workstations/) for people who handle sensitive data
- [Secure Wi-Fi and network installation](/services/secure-wifi-network/) for offices, practices, and homes
- [Data recovery](/services/data-recovery/) from old drives, laptops, and phones - for when prevention came too late
- [DevOps and cloud infrastructure](/services/devops-cloud-platforms/) for hardened servers and deployment pipelines

## What we do not do

We do not sell security products, and we do not earn commissions on hardware or licenses. We do not issue compliance certificates. We do not run fear-based sales. If your setup is already reasonable, we will tell you so and suggest the two or three things worth improving.
