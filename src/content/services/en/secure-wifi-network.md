---
title: Secure Wi-Fi Network Installation
badge: Secure Wi-Fi & Networks
hero:
  title: "Secure Wi-Fi installation"
  titleHighlight: "and network security for offices and homes"
  description: "One shared Wi-Fi password, a router that has never been updated, and every device on the same network: that is how most small offices are set up. We design and install Wi-Fi networks with WPA3 encryption, separated networks for staff, guests, and smart devices, and a properly configured firewall."
  ctaConsultation: "Request a Network Review"
  ctaExpertise: "See What We Install"
sectionTitle: "What We Set Up"
serviceItems:
  - title: WPA3 & Enterprise Authentication
    emoji: "📶"
    description: "Modern encryption on every access point. For teams, each person signs in with their own credentials instead of a password taped to the wall."
    badges: ["WPA3", "802.1X", "RADIUS", "PMF"]
    features:
      - "WPA3-Personal or WPA3-Enterprise"
      - "Per-user logins that can be revoked individually"
      - "Protected management frames, WPS disabled"
  - title: Network Segmentation
    emoji: "🧩"
    description: "Separate networks so that a compromised printer, camera, or guest phone cannot reach your work computers or file server."
    badges: ["VLAN", "Guest Network", "IoT Isolation"]
    features:
      - "Dedicated networks for staff, guests, and IoT devices"
      - "Client isolation on guest Wi-Fi"
      - "Firewall rules between every segment"
  - title: Firewall & Router Hardening
    emoji: "🧱"
    description: "The router is the front door of your network. We replace or reconfigure it so that nothing is exposed to the internet by accident."
    badges: ["Firewall", "OPNsense", "OpenWrt"]
    features:
      - "Default-deny inbound firewall policy"
      - "Remote admin, UPnP, and unused services disabled"
      - "Firmware updated, default credentials removed"
  - title: Secure Remote Access
    emoji: "🔒"
    description: "Reach your office files and systems from home or on the road without opening ports to the whole internet."
    badges: ["WireGuard", "VPN", "MFA"]
    features:
      - "WireGuard VPN for staff devices"
      - "Site-to-site links between offices"
      - "No exposed remote-desktop or NAS ports"
  - title: DNS Filtering & Monitoring
    emoji: "👁️"
    description: "Block known malicious domains before a device connects to them, and know what is on your network."
    badges: ["DNS Filtering", "Encrypted DNS", "Alerts"]
    features:
      - "Malware and phishing domain blocking"
      - "Inventory of connected devices"
      - "Alerts for unknown devices and failed logins"
  - title: Coverage & Reliability
    emoji: "🗺️"
    description: "Security is no use if people switch to a phone hotspot because the Wi-Fi drops. We plan coverage so the secure network is also the one that works."
    badges: ["Site Survey", "Wi-Fi 6/6E", "Roaming"]
    features:
      - "Access point placement and channel planning"
      - "Seamless roaming between access points"
      - "Wired backhaul wherever possible"
cta:
  title: "Not sure who can see what on your network?"
  description: "Describe your space, your devices, and your current router. We will tell you what is exposed today and what a clean, secure setup would look like."
  btnConsultation: "Request a Network Review"
  btnAllServices: "All Services"
faqTitle: "Secure Wi-Fi: common questions"
faq:
  - question: "How do I know if my office Wi-Fi is secure?"
    answer: "Check five things: the network uses WPA3 or at least WPA2 with a long, unique password; WPS is switched off; the router firmware has been updated in the last few months; guests and smart devices are on a separate network from work computers; and the router's admin interface is not reachable from the internet. If you are unsure about any of them, the network needs a review."
  - question: "What is the difference between WPA2 and WPA3?"
    answer: "WPA3 replaces the WPA2 handshake with a method that resists offline password guessing, so an attacker who records your Wi-Fi traffic cannot crack the password at leisure. It also makes protected management frames mandatory, which blocks common disconnect attacks. Older devices that only support WPA2 can be placed on their own restricted network."
  - question: "Why should guests and smart devices be on a separate network?"
    answer: "Guest phones, printers, cameras, TVs, and other smart devices are rarely updated and often poorly secured. On a single flat network, one compromised device can scan and attack everything else. Segmentation with VLANs and firewall rules means a problem on one network stays there."
  - question: "Do we need to buy new hardware?"
    answer: "Not always. If your current router and access points support WPA3, VLANs, and still receive firmware updates, we reconfigure them. If they are end-of-life or consumer devices that cannot separate networks, we recommend specific replacements. We do not sell hardware or take commissions, so the recommendation is purely technical."
  - question: "Is this only for offices, or also for homes?"
    answer: "Both. Home offices matter more than ever: work laptops share a network with children's tablets, smart speakers, and cameras. A home setup is simpler than an office one but follows the same principles - strong encryption, a separate network for work, an isolated network for smart devices."
  - question: "What is WPA3-Enterprise and do we need it?"
    answer: "With WPA3-Enterprise each person connects with individual credentials or a certificate, verified by an authentication server. When someone leaves, you revoke one account instead of changing the Wi-Fi password for everyone. It is worth it from roughly ten users upward, or earlier if you handle sensitive data."
seo:
  title: "Secure Wi-Fi Installation & Network Security for Business"
  description: "Secure Wi-Fi installation for offices and homes: WPA3, VLAN segmentation, guest and IoT isolation, firewall hardening and WireGuard VPN. Independent advice."
  ogTitle: "Secure Wi-Fi Network Setup for Offices and Homes"
  ogDescription: "WPA3 encryption, separated staff, guest and IoT networks, a hardened firewall, and VPN remote access - installed and documented."
---

## The network nobody set up on purpose

Most small-office WiFi networks were never designed. An internet provider installed a router, someone chose a Wi-Fi password, and over the years printers, phones, a NAS, cameras, a smart TV, and every visitor's device joined the same network.

The result is a flat network where everything can talk to everything. One infected laptop or one vulnerable camera is enough to reach the accounting PC and the file server.

## What a secure Wi-Fi network looks like

- **Strong encryption everywhere.** WPA3 where devices support it, with legacy devices fenced off rather than weakening the whole network.
- **Separate networks by trust level.** Staff devices, guests, and smart devices each get their own network, with firewall rules deciding what may cross.
- **Individual access.** In a team, people sign in as themselves. Access ends when they leave.
- **A hardened edge.** A firewall that exposes nothing by default, with remote access only through a VPN.
- **Maintained firmware.** Routers and access points are computers. They need security updates like any other.
- **Visibility.** You know which devices are connected and get told when something unfamiliar appears.

## Who we set this up for

- **Small offices and agencies** that have outgrown the provider's router
- **Medical practices, law firms, and accountants** with confidentiality obligations
- **Shops, cafes, and coworking spaces** that offer guest Wi-Fi next to payment terminals and back-office systems
- **Town halls and public buildings** with public Wi-Fi and internal administration on the same premises
- **Home offices** where work devices share a connection with family and smart-home devices

## How it works

1. **Survey.** We map your space, devices, cabling, and current configuration, and test what is reachable from the guest network and from the internet.
2. **Design.** A short document: which networks, which rules, which hardware stays, which goes.
3. **Installation.** We configure the firewall, switches, and access points, migrate devices to their new networks, and verify the isolation actually holds.
4. **Documentation and handover.** Network diagram, credentials in your password manager, and a short guide for adding devices and guests.
5. **Maintenance (optional).** Firmware updates, configuration backups, and periodic reviews.

## Part of a bigger picture

We install and maintain networks on-site for clients in France, Switzerland, and Germany.

A secure network protects devices from each other, but the devices themselves still need care. We also provide [hardened Linux workstations](/services/secure-linux-workstations/) and broader [IT security consulting](/services/cybersecurity-consulting/) covering accounts, backups, and servers.
