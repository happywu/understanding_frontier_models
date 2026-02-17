# Commercial Products & Platforms: Agentic Video Generation Landscape

> **Last updated:** February 2026
>
> This document surveys the commercial/closed-source product landscape for AI-orchestrated video production -- companies, products, startups, and platforms that are monetizing LLM-orchestrated or AI-driven video workflows. This is not an academic survey but a market-oriented reference.

---

## Table of Contents

1. [Market Overview & Size](#1-market-overview--size)
2. [TapNow -- AI Visual Creation Engine](#2-tapnow--ai-visual-creation-engine)
3. [AI Video Generation Platforms](#3-ai-video-generation-platforms)
4. [AI Avatar / Talking Head Products](#4-ai-avatar--talking-head-products)
5. [AI Video Editing Products](#5-ai-video-editing-products)
6. [AI Commercial / Ad Video Products](#6-ai-commercial--ad-video-products)
7. [AI Film / Long-form / Creative Video Products](#7-ai-film--long-form--creative-video-products)
8. [AI Sports / News Video Products](#8-ai-sports--news-video-products)
9. [Enterprise / B2B Video Platforms](#9-enterprise--b2b-video-platforms)
10. [Emerging Startups & Agentic Video (2024-2026)](#10-emerging-startups--agentic-video-2024-2026)
11. [Market Segmentation & Revenue Models](#11-market-segmentation--revenue-models)

---

## 1. Market Overview & Size

### Total Addressable Market (TAM) Estimates

| Source | Market Scope | 2024/2025 Value | Projected Value | CAGR |
|--------|-------------|-----------------|-----------------|------|
| Fortune Business Insights | AI Video Generator | $614.8M (2024) | $2,562.9M by 2032 | 20.0% |
| Grand View Research | AI Video Generator | ~$550M (2024) | $1,959.2M by 2030 | 19.9% |
| Market Research Future | AI Video Generator | $4.1B (2024) | $82.6B by 2035 | 31.4% |
| Market.us | AI Video (broad) | ~$4.2B (2025) | $12.8B by 2027 | 36.2% |
| Agentic AI (overall) | All agentic AI | - | >$50B by 2030 | - |

> **Note:** Wide variance reflects different market definitions. Narrow "video generation tools" estimates are ~$700M-$1B in 2025. Broader "AI video" including analytics, editing, and production can reach $30B+.

### Regional Distribution (2024)
- **North America:** 40.6% market share (dominant)
- **Asia Pacific:** Fastest growth at 23.8% CAGR, ~$150M in 2025
- **Europe:** Growing steadily, especially UK and Germany

### Key Growth Drivers
- Demand for scalable, cost-effective video production
- Marketing/advertising automation (largest segment)
- Education and corporate training digitization
- Social media content explosion (short-form video)
- Advances in diffusion models and transformer architectures
- Cloud computing cost reduction

---

## 2. TapNow -- AI Visual Creation Engine

> **Note:** The user mentioned "TabNow" -- this is almost certainly **TapNow** (tapnow.ai), an AI visual creation engine.

### Overview
- **Product:** TapNow (tapnow.ai)
- **Category:** AI visual creation engine for e-commerce, ads, films, and creative storytelling
- **Target Users:** E-commerce businesses, marketers, filmmakers, creative professionals

### How It Works
TapNow uses a **node-based workflow system** called **Tapflow** -- a visual workflow board where users input text, scripts, or images, and the AI processes these through a creation board to generate various visual content. The platform integrates multiple best-in-class AI models rather than relying on a single proprietary model.

### Key Features
- **Script-to-Video:** Turn scripts into cinematic videos, including TVC (TV commercial) production
- **Image-to-Video:** Convert static images into video content
- **One-Click Graphic Design:** Automated generation of ads, banners, social media visuals
- **Visual Workflow Board:** Node-based scene planning and content assembly
- **Virtual Model Integration:** AI-generated presenters/models for commercial content
- **Template-Based Design:** Pre-built workflows for common use cases
- **Multi-Model Integration:** Integrates leading image/video models including Midjourney, Imagen, Runway, and TopazLabs
- **TapTV:** Creator community for sharing processes and showcasing projects

### Technical Pipeline
The platform acts as an **orchestration layer** across multiple generative models. Users design workflows visually, connecting different AI models for different stages of production (concept generation, image creation, video synthesis, upscaling, etc.). This is a form of **agentic workflow** where the platform coordinates multiple AI capabilities.

### Pricing
- **Free Tier:** Available, no credit card required
- **Paid Plans:** Annual billing at ~$90/year (50% off promotional), includes:
  - 1,500 "Tapies" (credits)
  - 4 concurrent generations
  - Up to 150 videos
  - Up to ~670 images
- **Enterprise:** Custom pricing for larger organizations

### Assessment
TapNow represents the emerging pattern of **multi-model orchestration platforms** -- rather than building a single foundation model, it orchestrates best-in-class models through a visual workflow interface. This is a lightweight form of agentic video production where the "agent" is the workflow engine coordinating multiple specialized AI services.

---

## 3. AI Video Generation Platforms

These are the core foundation-model companies building and monetizing video generation technology.

### 3.1 Runway

| Attribute | Details |
|-----------|---------|
| **Company** | Runway AI, Inc. |
| **Founded** | 2018 |
| **Headquarters** | New York, NY |
| **Valuation** | $5.3B (Feb 2026, Series E) |
| **Total Funding** | $860M over 7 rounds |
| **Key Investors** | General Atlantic, NVIDIA, Adobe Ventures, Fidelity, AllianceBernstein, AMD Ventures |
| **Latest Round** | $315M Series E (Feb 10, 2026) |

#### Core Technology
Runway is pursuing **"world models"** -- AI systems that construct internal representations of environments to reason about physics, identity, causality, and time. Unlike LLMs that predict tokens, world models build understanding of how environments work.

#### Key Products & Features

**Gen-4.5 (Latest, 2026)**
- Text-to-video with native audio, long-form, multi-shot generation
- Character consistency across scenes
- Advanced editing tools

**Aleph (July 2025)**
- In-video object manipulation and editing
- Remove objects, transform scenes, generate missing angles, modify lighting
- 15 credits/second

**Act-Two (July 2025)**
- Professional motion capture without expensive mocap equipment
- Upload a driving performance video (any camera, including smartphones) + character reference image
- 5 credits/second for 3-second clips

**Workflows**
- Custom AI pipeline builder
- Chain multiple AI operations together

#### Pricing (2025-2026)
| Plan | Monthly | Annual | Credits | Features |
|------|---------|--------|---------|----------|
| Standard | $15 | $12/mo | Included | All apps & workflows, Gen-4.5, Gen-4, Act-Two, Veo, 100GB storage |
| Pro | $35 | $28/mo | 2,250/mo | Custom voice, 500GB, up to 10 users |
| Unlimited | $95 | $76/mo | Unlimited relaxed | Unlimited Aleph, Gen-4.5, Gen-4 Turbo, Act-Two & Gen-3 Alpha Turbo |

**API Pricing:** Available at docs.dev.runwayml.com with per-second billing.

#### Agentic Approach
Runway's Workflows feature is explicitly agentic -- users build multi-step pipelines that chain generation, editing, and refinement steps. The company's world-models research aims for AI that can autonomously plan and execute within simulated environments.

---

### 3.2 Pika Labs

| Attribute | Details |
|-----------|---------|
| **Company** | Pika Labs, Inc. |
| **Founded** | April 2023 |
| **Headquarters** | Palo Alto, CA |
| **Valuation** | ~$900M (early 2026), projected >$1.5B by end 2026 |
| **Total Funding** | $135M |
| **Key Investors** | Spark Capital, Lightspeed Venture Partners, Greycroft, Jared Leto, Adam D'Angelo |
| **Revenue** | $7.6M ARR (Oct 2024) |

#### Key Features

**Pika 2.5 (Latest)**
- Text-to-video, image-to-video
- All resolutions supported
- Advanced motion and physics simulation

**Scene Ingredients (Pika 2.0+)**
- Upload your own characters, objects, props
- Personalize AI-generated videos with custom visual elements
- Maintain consistency across generations

**Pikaffects**
- Special effects that manipulate objects within videos
- Effects include: Inflate, Melt, Explode, Crush, Squish, and more
- Transform ordinary scenes into extraordinary visual experiences

**Additional Features:**
- **Pikaframes:** Frame-level control
- **Pikascenes:** Scene composition tools
- **Pikadditions:** Add elements to existing video
- **Pikaswaps:** Swap elements within video
- **Pikatwists:** Creative transformations

#### Pricing
| Plan | Price | Credits | Key Features |
|------|-------|---------|-------------|
| Free | $0 | 80 | Basic features, watermark, no commercial use |
| Standard | $8/mo | More | Access to Pika 2.5, all Pikaffects |
| Pro | $28/mo | More | Higher quality, priority |
| Fancy | $76/mo | Most | All features, highest priority |

---

### 3.3 Kling AI (Kuaishou)

| Attribute | Details |
|-----------|---------|
| **Company** | Kuaishou Technology (publicly traded, HK:1024) |
| **Product** | Kling AI (klingai.com) |
| **Market Cap** | ~$41B (Kuaishou, Jan 2026) |
| **Kling ARR** | $240M (December 2025) -- achieved in 19 months |
| **Users** | 60M+ creators worldwide, 12M+ MAU |
| **Videos Generated** | 600M+ total |
| **Enterprise Partners** | 30,000+ |

#### Key Features

**Kling 2.6 (December 2025)**
- First model in the family with **synchronized audio-video generation in a single pass**
- Voiceovers, dialogue, sound effects, ambient atmosphere, singing, and rap
- Up to 1080p at 30-48 FPS

**Kling 2.5 Turbo (September 2025)**
- 40% faster generation than previous versions
- Extended videos up to 3 minutes via extension feature

**Core Capabilities:**
- Text-to-video, image-to-video
- Advanced motion control (went viral on social media)
- Multiple aspect ratios
- Video extension for longer content

#### Pricing
| Tier | Price | Details |
|------|-------|---------|
| Free | $0 | 66 daily credits |
| Standard | $6.99/mo | More credits, priority |
| Pro | $29.99/mo | Higher limits |
| Premium | $59.99/mo | Highest consumer tier |
| Enterprise | up to $180/mo | Full access |
| API | ~$0.07-$0.14/sec | Enterprise: $4,200/3 months |

---

### 3.4 Luma AI (Dream Machine / Ray2)

| Attribute | Details |
|-----------|---------|
| **Company** | Luma AI |
| **Founded** | 2021 |
| **Headquarters** | Palo Alto, CA |
| **Valuation** | $4B (Nov 2025) |
| **Total Funding** | $1.07B over 6 rounds |
| **Key Investors** | Humain (PIF/Saudi), AMD Ventures, Andreessen Horowitz, Amplify Partners, Matrix Partners |
| **Latest Round** | $900M Series C (Nov 2025) -- led by Humain |

#### Key Features

**Ray2 (January 2025)**
- 10x more compute than Ray1
- Ultra-realistic 5-9 second videos, extendable to 60 seconds
- Natural motion, coherent physics
- 1080p with 4K upscaling
- Text-to-video, image-to-video, video-to-video

**Modify Video (June 2025)**
- Reimagine existing videos without reshooting
- AI-enhanced footage with reference images and frame selections

#### Pricing
| Plan | Price | Credits | Notes |
|------|-------|---------|-------|
| Free | $0 | Limited | Personal use, watermarked |
| Lite | $9.99/mo | 3,200/mo | Personal use, watermarked |
| Plus | $29.99/mo | 10,000/mo | Commercial use, no watermark |
| Unlimited | $94.99/mo | 10,000 fast + unlimited relaxed | Full access |

#### Strategic Note
Luma's $900M Series C from Saudi Arabia's Humain includes a partnership to build a 2-gigawatt AI supercluster ("Project Halo") in Saudi Arabia, signaling massive infrastructure ambitions.

---

### 3.5 Hailuo AI (MiniMax)

| Attribute | Details |
|-----------|---------|
| **Company** | MiniMax (Shanghai, China) |
| **Founded** | 2022 |
| **Product** | Hailuo AI video |
| **IPO** | Hong Kong Stock Exchange, Jan 9, 2026 -- raised HK$4.2B ($537.7M) at ~$6.5B valuation |
| **Key Investors** | Alibaba, Tencent, MiHoYo, Hillhouse Investment |

#### Key Features

**Hailuo 2.3 (Latest)**
- Enhanced dynamic expression and realistic visuals
- Improved physical actions, stylization, character micro-expressions
- Better anime, illustration, ink wash painting, game CG support
- Same pricing as Hailuo 02 -- "more for same price"

**Hailuo 02 (June 2025)**
- Text-to-video, image-to-video, subject reference
- Consistent characters across scenes
- Synchronized dialogue and sound effects

**Media Agent**
- Evolution from "Video Agent" to comprehensive multi-modal creation agent
- Launched simultaneously worldwide

#### Pricing
| Plan | Price |
|------|-------|
| Standard | $9.99/mo (1,000 credits) |
| Unlimited | $94.99/mo (unlimited credits) |
| API | ~$0.28/video via fal platform |

---

### 3.6 Vidu (Shengshu Technology)

| Attribute | Details |
|-----------|---------|
| **Company** | Shengshu Technology (China) |
| **Product** | Vidu (vidu.com) |
| **Architecture** | Proprietary U-ViT (first in industry) |

#### Key Features
- **Reference-to-Video:** Up to 7 reference images for faces, gestures, scenes, props
- **Multiple-Entity Consistency:** Industry-first capability for merging unrelated elements
- Text-to-video, image-to-video in various aspect ratios
- Clips up to 8 seconds with synchronized dialogue and sound effects
- Generation in under 10 seconds
- **Vidu Q2:** Image generation with unlimited free 1080p access

#### Pricing
- Free tier available
- Paid tiers up to 600 yuan (~$84)/month
- **API:** ~$0.0375/second (55% below industry standard, half the cost of Vidu 1.5)

---

### 3.7 Jimeng / Seedance (ByteDance)

| Attribute | Details |
|-----------|---------|
| **Company** | ByteDance (via Faceu Technology) |
| **Products** | Jimeng (China) / Dreamina (international) |
| **Latest Model** | Seedance 2.0 (Feb 2026) |

#### Key Features

**Seedance 2.0 (February 2026)**
- **Quad-modal input:** Text + up to 9 images + 3 videos + 3 audio files simultaneously
- Native 2K resolution output
- 4-15 second cinematic clips
- 30% faster than other models
- Synchronized audio generation
- Multi-shot narrative coherence
- Watermark-free commercial downloads
- Integrated into CapCut

#### Positioning
ByteDance positions Seedance 2.0 as a production tool for **advertising, e-commerce, and film**, enabling creative teams to go from script to near-finished footage faster and cheaper than traditional production.

---

### 3.8 Google Veo 2/3 (Integrated with Gemini)

| Attribute | Details |
|-----------|---------|
| **Company** | Google DeepMind |
| **Products** | Veo 2, Veo 3, Veo 3.1, Veo 3 Fast |
| **Integration** | Gemini app, Flow app, Gemini API, Vertex AI |

#### Key Features

**Veo 3.1 (October 2025)**
- Richer native audio with natural conversations and sound effects
- Image-to-video with simultaneous audio generation
- Enhanced realism and character consistency
- Improved narrative control

**General Capabilities:**
- Text-to-video up to 8 seconds per generation
- Image-to-video animation with realistic motion and physics
- HD quality up to 1080p (Ultra subscribers), 720p (Pro)
- Vertical 9:16 format support

#### Pricing
| Access Method | Price | Video Allowance |
|--------------|-------|----------------|
| Google AI Pro | $19.99/mo | ~90 Veo 3.1 Fast videos/mo |
| Google AI Ultra | $249.99/mo | ~2,500 Veo 2 or Veo 3.1 Fast videos via Flow |
| Gemini API | $0.35/sec | Pay-per-use |
| Vertex AI | $0.50/sec | Pay-per-use |
| Third-party (fal.ai) | ~$0.10/sec | Veo 3.1 Fast |

---

### 3.9 OpenAI Sora

| Attribute | Details |
|-----------|---------|
| **Company** | OpenAI |
| **Products** | Sora (Dec 2024), Sora 2 (Sep 2026) |
| **Access** | ChatGPT Plus and Pro subscribers |
| **Partnership** | $1B deal with Disney for licensed character generation |

#### Key Features

**Sora 2 (September 2026)**
- Videos up to 25 seconds (up from 6 seconds in Sora 1)
- Synchronized dialogue, sound effects, and music from a single prompt
- Character cameos
- Enhanced visual quality
- Eliminated previous length restrictions

#### Pricing
| Plan | Price | Sora Access |
|------|-------|-------------|
| Plus | $20/mo | Up to 50 videos at 480p, fewer at 720p |
| Pro | $200/mo | 10x more usage, higher resolutions, longer durations |
| API | Per-second billing | Available to developers |

> **Policy Change (Jan 2026):** Free users can no longer generate images/videos -- Plus/Pro only.

---

## 4. AI Avatar / Talking Head Products

This is one of the largest and most commercially mature segments of AI video.

### 4.1 HeyGen

| Attribute | Details |
|-----------|---------|
| **Founded** | 2020 |
| **Headquarters** | Los Angeles, CA |
| **Valuation** | $500M (2023 Series A) |
| **Total Funding** | $74M ($60M Series A led by Benchmark) |
| **ARR** | $95M (Sep 2025), up from $57.5M end-2024 |
| **Users** | Millions of creators |

#### Key Features
- 230+ AI avatars in 140+ languages
- Text-to-video with avatar presenters
- **Video Agent:** Handles entire production workflow from a single prompt (agentic approach)
- **Avatar IV:** Latest generation avatar technology
- **LiveAvatar:** Real-time interactive AI avatars
- Voice cloning with natural intonation
- Video translation and lip-sync dubbing

#### Pricing
| Plan | Price | Key Features |
|------|-------|-------------|
| Free | $0/mo | Up to 3 min/video |
| Creator | $29/mo | Unlimited avatar videos, solo creators |
| Business | $39/seat/mo (min 2) | Team features |
| Pro | $99/mo | More AI capacity, higher quality |
| Enterprise | Custom | Custom pricing |

#### Agentic Features
HeyGen's **Video Agent** is notable -- it takes a single prompt and autonomously handles scripting, avatar selection, scene composition, voice generation, and final editing. This is a genuinely agentic approach to video production.

---

### 4.2 Synthesia

| Attribute | Details |
|-----------|---------|
| **Founded** | 2017 |
| **Headquarters** | London, UK & Copenhagen, Denmark |
| **Valuation** | $4B (Oct 2025) |
| **Total Funding** | ~$380M ($180M Jan 2025 at $2.1B; $200M Oct 2025 led by GV at $4B) |
| **Users** | 1M+ users, 60,000+ companies |
| **Enterprise Adoption** | 90% of the Fortune 100 |
| **Notable Customers** | Zoom, SAP, Heineken, Reuters, BBC |

#### Key Features
- 240+ avatars in 160+ languages
- Custom AI avatar creation (digital twin)
- AI Dubbing with lip-sync correction for 30+ languages
- 1-click translation to 80+ languages (Enterprise)
- **Video Agents** (coming early 2026, Enterprise only) -- for interactive training simulations
- ChatGPT-integrated script generation
- SOC 2 and GDPR compliant

#### Pricing
| Plan | Price | Features |
|------|-------|----------|
| Free | $0/mo | 360 credits/mo, up to 3 min video |
| Starter | $18/mo (annual) | Basic avatar access |
| Creator | $64/mo (annual) | 30 min/mo, 180+ avatars, 5 personal avatars |
| Enterprise | Custom | Unlimited minutes, SSO, dedicated support |

#### Agentic Features
Synthesia's upcoming **Video Agents** for Enterprise represent a genuinely agentic approach -- AI agents that can engage in interactive, branching conversations for training simulations, not just static video generation.

---

### 4.3 D-ID

| Attribute | Details |
|-----------|---------|
| **Founded** | 2017 |
| **Headquarters** | Tel Aviv, Israel |
| **Total Funding** | $48M over 7 rounds |
| **Revenue** | $33.6M (2024) |
| **CES 2026** | Innovation Award for AI Agents 2.0 |

#### Key Features
- **Creative Reality Studio:** Self-service platform for talking avatar videos
- **AI Agents 2.0 (2026):** Real-time face-to-face conversational AI
- Customizable avatars (pre-made, uploaded, or AI-generated)
- Voice cloning and multilingual voiceover
- Translation to 40+ languages
- Integration with Canva, PowerPoint
- Strategic pivot from pure video generation to **conversational AI platform**

#### Pricing
| Plan | Price | Video Minutes |
|------|-------|--------------|
| Trial | $0 | 14-day trial |
| Lite | $5.99/mo | 10 min/mo |
| Pro | $49.99/mo | 15 min/mo |
| Advanced | $299.99/mo | 65 min/mo |
| Enterprise | Custom | Custom |

---

### 4.4 Colossyan

| Attribute | Details |
|-----------|---------|
| **Founded** | 2020 |
| **Headquarters** | Budapest, Hungary |
| **Funding** | $22M (Feb 2024, led by Lakestar) |
| **Growth** | 600% YoY (2023-2024), 61% revenue increase (2025) |
| **Customers** | 1,000+ including BMW, Porsche, Vodafone, Paramount, P&G, HP, BASF |

#### Key Features
- 200+ AI avatars in 70+ languages
- Focus on **enterprise training** and L&D
- ChatGPT-integrated AI assistant for script generation
- Custom avatars with voice cloning
- Automatic grammar correction, tone/audience optimization

#### Pricing
| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | 5 min/mo, 2 avatars, 720p |
| Starter | $19/mo (annual) | 15 min/mo, 70+ avatars |
| Creator | $49/mo (annual) | More features |
| Enterprise | Custom | Unlimited, SSO, dedicated support |

---

### 4.5 Elai.io

| Attribute | Details |
|-----------|---------|
| **Product** | Elai.io |
| **Focus** | Text-to-video with AI avatars and interactive elements |

#### Key Features
- 80+ avatars (selfie, studio, photo, animated mascot types)
- Voice cloning in 28 languages
- Interactive quizzes, branching scenarios (for training)
- Automated translations in 75+ languages
- Custom AI avatars from user footage

#### Pricing
| Plan | Price |
|------|-------|
| Free | Limited |
| Basic | $23/mo |
| Advanced | $100/mo |
| Custom | Contact sales |

---

### 4.6 Tavus

| Attribute | Details |
|-----------|---------|
| **Founded** | ~2020 |
| **Headquarters** | San Francisco, CA |
| **Funding** | $24.1M total ($18M Series A Mar 2024, $6.1M seed led by Sequoia) |
| **Key Investors** | Sequoia, Accel, Index Ventures, Lightspeed, Y Combinator |

#### Key Features
- **Conversational Video Interface (CVI):** Real-time face-to-face AI conversations
- ~600ms round-trip latency
- 100+ stock or personalized replica avatars
- Custom LLM and TTS integration
- Digital twin creation for personalized video at scale
- 30+ language support
- SOC 2 and HIPAA compliant
- White-labeling available

#### Pricing
| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | 25 live minutes |
| Starter | $39-59/mo | 3 Personal Replicas, pay-as-you-go |
| Growth | $375/mo | 10 Replicas, 15 concurrent conversations |
| Enterprise | Custom | Premium support, white-labeling |

---

### 4.7 AKOOL

| Attribute | Details |
|-----------|---------|
| **Recognition** | #1 on Inc 5000 (fastest-growing) |
| **Focus** | Enterprise AI video suite |

#### Key Features
- AI-generated avatars and voices in 175+ languages
- Face swap (images and videos)
- Talking photos
- Multilingual video translation and dubbing
- Image generation
- Hyper-personalization at scale
- Credits-based system

#### Pricing
- **Basic (Free):** Core features exploration
- **Pro:** from $30/mo
- **Pro Max:** Higher tier
- **Business:** Full suite
- **Enterprise:** Custom, dedicated CSM, VIP processing
- 30% discount for annual billing

---

### 4.8 Captions App

| Attribute | Details |
|-----------|---------|
| **Company** | Mirage (formerly Captions) |
| **Headquarters** | New York, NY |
| **Total Funding** | $100M ($60M Series C, Jul 2024 at $500M valuation) |
| **Key Investors** | Kleiner Perkins, Sequoia Capital, a16z, Adobe Ventures, HubSpot Ventures |
| **Users** | 10M+ global creators, 3M+ videos/month |

#### Key Features
- AI video generation from text
- AI Edit: command-based video editing
- AI Dubbing with lip-sync correction for multi-language content
- AI Twins and actors (create videos without being on camera)
- Eye contact correction
- Background noise removal
- Auto-generated subtitles

---

### 4.9 Hour One

| Attribute | Details |
|-----------|---------|
| **Focus** | AI avatar videos for enterprise |
| **Avatars** | 100+ unique avatars |

#### Key Features
- AI-powered Video Wizard with ChatGPT integration
- Script Wizard for content generation
- 3D templates (higher plans)
- 100+ languages and dialects
- AI meeting summary with avatar narration
- Mobile app (iOS) for avatar capture
- Up to 4K resolution output

#### Pricing
| Plan | Price |
|------|-------|
| Free Trial | $0 (3 free min/day) |
| Lite | $30/mo |
| Business | $112/mo (20-40 min) |
| Enterprise | Custom (unlimited) |

---

## 5. AI Video Editing Products

### 5.1 Descript

| Attribute | Details |
|-----------|---------|
| **Founded** | 2017 (by Andrew Mason, Groupon founder) |
| **Headquarters** | San Francisco, CA |
| **Total Funding** | $101M ($50M Series C led by OpenAI Startup Fund, Nov 2022) |
| **Valuation** | ~$550M |
| **Acquisitions** | SquadCast (2023), Lyrebird |

#### Key Features
- **Text-based video editing:** Edit video by editing the transcript
- **Overdub:** AI voice cloning -- fix words or add sentences by typing
- **Studio Sound:** One-click audio cleanup (background noise removal)
- **Eye Contact AI:** Adjust gaze to appear looking at camera
- **Filler Word Removal:** Automatic removal of "ums" and "ahs"
- **AI Co-editor:** Makes polished edits from a prompt
- **AI Video Generation:** Built-in generative video
- 4K export capability

#### Pricing (Sep 2025 overhaul)
| Plan | Price | Media Hours | AI Credits |
|------|-------|------------|------------|
| Free | $0 | 60 min/mo | 100 (one-time) |
| Creator | $24/user/mo (annual) | 30 hrs | 800/mo |
| Business | $50/user/mo (annual) | 40 hrs | 1,500/mo |

---

### 5.2 CapCut (ByteDance)

| Attribute | Details |
|-----------|---------|
| **Company** | ByteDance |
| **Users** | Hundreds of millions globally |
| **Price** | Free (with Pro tier) |

#### Key AI Features
- **Auto Captions:** AI-generated multilingual subtitles
- **AI Avatars:** Digital presenters
- **Text-to-Speech & Script-to-Video**
- **AI Clipper:** Auto-cut long-form into 9:16 viral shorts
- **AI Masking:** High-precision background/object removal
- **Studio Audio:** Pro-grade noise reduction, vocal isolation
- **Seedance 2.0 Integration (Feb 2026):** ByteDance's generative video directly in CapCut
- **Log Footage Support:** S-Log3, V-Log, C-Log with auto-LUT detection
- **3D Modeling Tools**

#### Pricing
| Plan | Price |
|------|-------|
| Free | $0 (most features) |
| Pro | ~$7.99/mo | Extended features |

---

### 5.3 Opus Clip

| Attribute | Details |
|-----------|---------|
| **Founded** | ~2022 |
| **Valuation** | $215M (Mar 2025) |
| **Total Funding** | $50M ($20M from SoftBank Vision Fund 2) |
| **Users** | 10M+ (5M within first 7 months) |
| **Key Investors** | SoftBank Vision Fund 2, DCM Ventures, AIGrant |

#### Key Features
- **ClipAnything:** Turn any video genre into viral clips
- **ReframeAnything:** Auto-resize landscape to vertical, speaker-centered
- **Virality Score:** 0-100 prediction of social media performance
- **Animated Captions:** Auto-styled with keyword highlights and emojis
- **Agent Opus:** AI video agent automating end-to-end short-form creation (sources assets from web, assembles scripts, outputs platform-ready videos)
- **Zapier Integration:** Auto-import from Zoom, Dropbox, etc.

#### Pricing
| Plan | Price | Processing Minutes |
|------|-------|--------------------|
| Free | $0 | 60 min/mo |
| Starter | $15/mo | 150 min/mo |
| Pro | $29/mo | More + advanced features |
| Business | Custom | Enterprise |

#### Agentic Features
**Agent Opus** is explicitly agentic -- it autonomously handles the entire workflow from long-form content to platform-ready short clips, including sourcing supplementary assets from the web.

---

### 5.4 Pictory

| Attribute | Details |
|-----------|---------|
| **Focus** | Text/blog-to-video conversion |

#### Key Features
- AI converts blog posts and scripts into videos
- 3M+ video clips and 15K+ music tracks library
- AI voice narration
- Brand customization (colors, fonts, logos)
- Auto-caption synchronization

#### Pricing
| Plan | Monthly | Annual |
|------|---------|--------|
| Starter | $25 | $19/mo |
| Professional | $49 | $39/mo |
| Teams | $119 | $99/mo |

---

### 5.5 InVideo AI

| Attribute | Details |
|-----------|---------|
| **Focus** | AI text-to-video generation |

#### Key Features
- Complete video drafts from text prompts (script, media, voiceover, edits)
- **Magic Box:** Text-based editing interface
- 16M+ royalty-free stock assets
- AI dubbing in 50+ languages
- **Sora 2 Integration:** Cinematic photorealistic video up to 60 seconds
- **VEO 3.1 Integration:** Character consistency across multi-scene narratives

#### Pricing
| Plan | Price |
|------|-------|
| Plus | $28/mo |
| Max | $50/mo |
| Generative | $100/mo |

---

### 5.6 Wondershare Filmora

| Attribute | Details |
|-----------|---------|
| **Company** | Wondershare |
| **Latest Version** | Filmora V15 |

#### Key AI Features
- **AI Mate:** Intelligent editing assistant with AIGC Mode for script/video generation
- **Veo 3 Integration:** Text-to-video with cinematic output
- **Smart Short Clip:** Auto-break long videos into social-optimized clips
- **AI Video Enhancer & Smart Scene Cut**
- **AI Music Generator:** Royalty-free music creation
- **Vocal Separation:** One-click vocals/background split
- **Loudness Normalization:** Auto-match platform standards
- Multi-camera editing, planar tracking

---

### 5.7 Adobe Premiere Pro (Firefly Video)

| Attribute | Details |
|-----------|---------|
| **Company** | Adobe Inc. |
| **AI Brand** | Adobe Firefly |
| **Key Feature** | Industry's first "commercially safe" video model |

#### Key AI Features (2025-2026)

**Generative Extend (GA Spring 2025)**
- Add extra frames to beginning/end of clips
- Smooth transitions, hold reactions, hide camera movements
- 2026: Native 4K generation, 9:16 vertical format

**Object Mask**
- AI-powered hover-and-click masking of complex moving subjects
- Track up to 20x faster than previous versions

**Camera Motion Control**
- Upload start frame + reference video showing desired camera motion
- AI recreates cinematic movements

**Media Intelligence**
- Auto-recognize clip content (objects, locations, camera angles)
- Instant search across projects

**Firefly Boards**
- Storyboarding and B-roll generation
- Text-to-Video and Image-to-Video prompts
- Direct import to Premiere Pro Project Bin
- Topaz Astra upscaling integration

**Rephrase.ai Integration (acquired Nov 2023)**
- Type dialogue in Premiere Pro, photorealistic avatar speaks it
- Personalized video ads from spreadsheets in Adobe Express

---

### 5.8 DaVinci Resolve (Blackmagic Design)

| Attribute | Details |
|-----------|---------|
| **Company** | Blackmagic Design |
| **Latest Version** | DaVinci Resolve 20.3 |
| **Price** | Free (full version) / $295 one-time (Studio) |

#### AI Features (DaVinci Neural Engine)
- **AI IntelliScript:** Create timelines from text scripts
- **AI Animated Subtitles:** Words animate as spoken
- **AI Multicam SmartSwitch:** Auto-assemble based on speaker detection
- **AI Audio Assistant:** Intelligent professional audio mixing
- **AI Set Extender:** Scene extension from text prompts (fill missing regions)
- **AI Cinematic Haze:** Atmospheric fog using AI depth maps
- Support for up to 32K resolution on M5 Macs

---

## 6. AI Commercial / Ad Video Products

### 6.1 Creatify

| Attribute | Details |
|-----------|---------|
| **Focus** | AI ad video generation for e-commerce |
| **Differentiator** | URL-to-video technology |

#### Key Features
- **URL-to-Video:** Paste product link (Shopify, Amazon, etc.) -- AI scrapes and generates 5-10 video ad variations
- 1,000+ AI avatars, 100+ voices in 29 languages
- **AdMax:** AI Ad Library, competitor analysis, AI scriptwriter, ROAS tracking
- Full video editor with music, captions, transitions, B-roll
- Optimized for TikTok, Instagram Reels, YouTube Shorts

#### Pricing
| Plan | Price | Output |
|------|-------|--------|
| Free | $0 | ~2 videos/mo, watermarked |
| Starter | $19/mo | ~20 videos/mo |
| Pro | $39/mo | More credits, premium features |
| Enterprise | Custom | AdMax, unlimited production, API |

---

### 6.2 Arcads

| Attribute | Details |
|-----------|---------|
| **Focus** | AI UGC-style video ads |

#### Key Features
- Text scripts to video ads with realistic AI actors
- 300+ actors (diverse age, gender, settings)
- **Speech-to-Speech:** Upload voice recording, AI maps tone/cadence onto actor
- **Bulk Creation:** See one script with dozens of different actors simultaneously

#### Pricing
| Plan | Price | Videos |
|------|-------|--------|
| Starter | $110/mo | 10 videos/mo |
| Creator | $220/mo | 20 videos/mo |
| Custom | Contact | High volume + API |

---

### 6.3 Waymark

| Attribute | Details |
|-----------|---------|
| **Founded** | Detroit, MI |
| **Funding** | $6.88M total |
| **Recognition** | Financial Times fastest-growing companies |
| **Partners** | E.W. Scripps (61 TV stations), Comcast Advertising, Spectrum Reach |

#### Key Features
- **Broadcast-ready AI commercials:** Scan business website, auto-generate complete TV/CTV/digital ad
- Branded visuals, tailored script, natural AI voiceover
- Compatible with TV, CTV, and digital specifications
- Update scenes, swap footage, alternate voices and translations

#### Pricing
| Plan | Price |
|------|-------|
| Digital | $25/mo (annual) -- unlimited videos, one brand |
| Pro | $125/mo (annual) -- multiple brands |
| Team/Enterprise | Custom |

---

### 6.4 Oxolo

| Attribute | Details |
|-----------|---------|
| **Focus** | AI e-commerce video creation |

#### Key Features
- Auto-generate scripts from product descriptions
- AI actors with human-like emotion
- 80+ languages, 300+ voice options
- Brand customization (logos, fonts)
- Direct distribution to YouTube, Shopify, social media
- HD quality, credit-based system (1 credit = 1 minute)

#### Pricing
| Plan | Price | Credits |
|------|-------|---------|
| Free | $0 | 15 |
| Basic | $24.99/mo | 300 |
| Business | $149/mo | 2,400 |
| Enterprise | Custom | Custom |

---

### 6.5 Pencil (by Brandtech Group)

| Attribute | Details |
|-----------|---------|
| **Company** | The Brandtech Group |
| **Focus** | Enterprise GenAI ad creation platform |
| **Partners** | BCG, Google Cloud Marketplace |

#### Key Features
- **Multi-Model Orchestration:** Access OpenAI, Google, Adobe, Runway, Bria, Getty through single interface
- Generate text, image, and video ads across YouTube, Google, Meta, TikTok, LinkedIn
- **Performance Prediction:** AI predicts ad creative performance using historical data
- **Brand Governance:** Lock fonts, colors, tone, claims -- all AI stays on-brand
- **AI Agents:** Specialized agents for briefs, production tasks, optimizations
- Adobe Firefly Services integration
- Veo 3, Gemini, Imagen 4 model support

#### Pricing
Enterprise-focused, custom pricing. Available on Google Cloud Marketplace.

---

### 6.6 Gan.AI

| Attribute | Details |
|-----------|---------|
| **Focus** | Personalized video at scale |

#### Key Features
- Digital clone creation for hyper-personalized videos
- SaaS Studio Platform
- Integrations: Salesforce, HubSpot, Zapier
- Complete video creation suite (eliminates multi-tool needs)
- Analytics and distribution tracking

---

### 6.7 Rephrase.ai (Acquired by Adobe, Nov 2023)

| Attribute | Details |
|-----------|---------|
| **Status** | Acquired by Adobe |
| **Integration** | Adobe Premiere Pro, Adobe Express |

#### Features (post-acquisition)
- Type dialogue in Premiere Pro, photorealistic avatar speaks it
- Generate personalized video ads from spreadsheets via Adobe Express
- A/B testing video variants
- Educational and corporate training video generation

---

### 6.8 Typeframes

| Attribute | Details |
|-----------|---------|
| **Focus** | Product demo and launch videos |
| **Note** | Also known as Revid.ai |

#### Key Features
- Transform text/website content into videos
- AI Script & Hook Generation for viral content
- 50+ AI voices, multiple accents and languages
- Auto Captions & Subtitles
- Auto-Clipped Content extraction
- Smooth transitions, feature highlights, motion graphics

#### Pricing
Starting at $24/mo, with free trial available.

---

## 7. AI Film / Long-form / Creative Video Products

### 7.1 Higgsfield AI

| Attribute | Details |
|-----------|---------|
| **Founded** | By ex-Snap executive |
| **Valuation** | $1.3B (Jan 2026) |
| **Total Funding** | $130M Series A (led by Accel, AI Capital Partners, Menlo Ventures) |
| **ARR** | $200M run rate (doubled from $100M in ~2 months) |
| **Users** | 15M+, creating 4.5M video generations/day |
| **User Base** | 85% social media marketers |

#### Key Products
- **Web Studio:** Full dashboard -- drag images, choose camera presets, adjust parameters, real-time preview
- **Diffuse (Mobile App):** Social interface for turning selfies into personal video clips
- B2C and B2B consumption-based credit model
- ~$30 for video generation that previously cost ~$10,000

#### Notable Users
Madonna, Will Smith have used Higgsfield for AI video content.

---

### 7.2 Kaiber

| Attribute | Details |
|-----------|---------|
| **Focus** | AI video for music, creative, and artistic content |

#### Key Features
- **Flipbook Mode:** Frame-by-frame animations for abstract, dreamlike visuals
- **Transform Tool:** Upload videos, apply artistic styles via text prompts
- **Audioreactivity:** AI visuals that sync to beat, rhythm, and energy of uploaded songs
- **Storyboard:** Map sequences with individual prompts per scene

#### Pricing
| Plan | Price | Credits |
|------|-------|---------|
| Explorer | $5/mo | 300, up to 1-min videos |
| Creator | $29/mo | 1,400 |
| Pro | $149/mo | 7,500 |
| Free | $0 | 50 |

---

### 7.3 Neural Frames

| Attribute | Details |
|-----------|---------|
| **Focus** | AI music video generation |

#### Key Features
- **Deep 8-Stem Audio-Reactivity:** Music drives every visual element
- Multiple creation modes: Autopilot, Frame-by-Frame editor, Text-to-Video editor
- Smoother, more artistic transitions with dream-like effects
- Optimized for music videos and trippy/psychedelic visuals

---

### 7.4 Fliki

| Attribute | Details |
|-----------|---------|
| **Focus** | Text-to-video with AI avatars and voices |

#### Key Features
- 2,000+ realistic AI voices in 80+ languages
- Voice cloning from 2 minutes of audio
- AI auto-selects visuals from 10M+ stock assets
- Scene-based video structure generation
- AI avatars with lip-sync

#### Pricing
| Plan | Price | Minutes |
|------|-------|---------|
| Free | $0 | 5 min/mo, 720p, watermark |
| Standard | $28/mo | 180 min/mo, 1080p |
| Premium | $88/mo | 600 min/mo, full features |
| Enterprise | Custom | Custom |

---

### 7.5 Steve AI

| Attribute | Details |
|-----------|---------|
| **Latest Version** | Steve AI 3.0 (Aug 2025) |
| **Focus** | Faceless content creation |

#### Key Features
- 7+ video output styles: Animated, Generative AI, Live
- Massive asset library (visuals, videos, music, animated avatars)
- 4K output quality
- Designed for faceless content creators

#### Pricing
| Plan | Price |
|------|-------|
| Free | $0 |
| Basic | $15-20/mo |
| Starter | $45/mo |
| Pro | $60/mo |

---

### 7.6 Lumen5

| Attribute | Details |
|-----------|---------|
| **Focus** | Business/brand social video from text |

#### Key Features
- AI turns text into scene-based video with auto-selected visuals
- Editable templates for brand consistency
- Auto caption synchronization
- AI-generated voiceovers and script composer
- Up to 500M stock assets (Professional plan)

#### Pricing
| Plan | Price | Features |
|------|-------|----------|
| Community (Free) | $0 | 5 videos/mo |
| Basic | $29/mo | No watermark, AI voiceover |
| Starter | $79/mo | 1080p, 50M+ stock |
| Professional | $199/mo | Custom watermark, 500M+ stock |

---

### 7.7 LTX Studio (Lightricks)

| Attribute | Details |
|-----------|---------|
| **Company** | Lightricks (Israel) |
| **Launched** | February 2024 |
| **Model** | LTX-2 (open-source, Oct 2025) |
| **Focus** | Storytelling-first AI video production |

#### Key Features
- All-in-one creative studio for AI video production
- Cinematic control with planning, generating, and iterating tools
- Storyboard-first approach
- Integration with LTX-2 open-source model
- NVIDIA RTX acceleration for 4K generation

---

## 8. AI Sports / News Video Products

### 8.1 WSC Sports

| Attribute | Details |
|-----------|---------|
| **Focus** | AI-powered sports highlights and content |
| **Customers** | NBA, ESPN, YouTubeTV, LaLiga, 650+ sports organizations |
| **Performance** | 8M+ video clips via AI in H1 2025 (52% YoY surge) |
| **Recent Acquisition** | Partnerbrite (sponsorship activation layer) |

#### Key Features
- Real-time analysis of live sports broadcasts
- Automatic identification of key moments using machine learning
- Unlimited highlight combinations distributed across platforms immediately
- Generative AI for automated recaps and personalized highlights
- No additional staff needed for content scaling
- **Flywheel Strategy (Feb 2026):** Vision for future-proofing sports media toward 2030

#### Pricing
Enterprise only, custom pricing.

---

### 8.2 Wochit

| Attribute | Details |
|-----------|---------|
| **Focus** | AI video creation for news/media publishers |
| **Customers** | Hearst Magazines, Gannett, AOL, Yahoo!, Axel Springer, Burda, Gruppo Espresso |

#### Key Features
- AI-powered storyboarding, transcription, visual editing automation
- Access to millions of licensed assets (Getty Images, AP)
- Drag-and-drop editor with transitions, overlays, effects
- Brand kit integration (fonts, logos, colors)
- Collaboration tools for team workflows
- Auto voiceover and subtitles (multilingual)
- Pre-designed templates for social media, news, promos
- Direct publishing to YouTube, Facebook, Twitter, CMS

#### Pricing
Custom pricing based on organization size and content volume. Demo-based sales process.

---

### 8.3 Wibbitz (Now part of Vimeo)

| Attribute | Details |
|-----------|---------|
| **Status** | Acquired by / integrated with Vimeo |
| **Focus** | AI video for publishers and enterprise |
| **Notable Customers** | AT&T, American Express, Bloomberg, USA Today, Reuters |

#### Key Features
- Patented text-to-video technology
- Turn text-based news articles into video
- Automatic video summarization
- Browser-based editing (crop, trim, merge, compress)
- AI-powered effects and music
- Enterprise-grade at scale

#### Impact Metrics
- 30% reduction in production costs
- 25% increase in engagement, 15% increase in conversions reported by e-commerce users

---

## 9. Enterprise / B2B Video Platforms

### 9.1 Synthesia for Enterprise

See [Section 4.2](#42-synthesia) above. Key enterprise differentiators:
- 90% of Fortune 100 as customers
- SOC 2 and GDPR compliance
- SSO integration
- Video Agents for interactive training (2026)
- Unlimited video minutes
- 1-click translation to 80+ languages

---

### 9.2 Vidyard AI

| Attribute | Details |
|-----------|---------|
| **Focus** | AI video for sales teams |

#### Key Features
- **AI Avatars:** Generate personalized videos in 25+ languages
- **Video Agent:** Automatically trigger contextual videos based on buyer actions and CRM data
- Deep viewer heatmaps and analytics
- Merge-tag personalization
- Branded video hubs
- 50+ CRM/sequencing integrations
- Enterprise-grade compliance

#### Pricing
Enterprise-focused with custom pricing. Best for sales organizations due to CRM integration and ROI attribution.

---

### 9.3 Loom AI (Atlassian)

| Attribute | Details |
|-----------|---------|
| **Status** | Acquired by Atlassian |
| **Focus** | Async video messaging for enterprise |

#### Key AI Features
- Auto-generated video summaries and chapters
- AI-powered transcription
- Deep Confluence and Jira integration
- Focus on "knowledge velocity" -- helping engineering, product, and design teams share context
- Improved admin controls and enterprise SSO post-acquisition

---

### 9.4 mmhmm

| Attribute | Details |
|-----------|---------|
| **Focus** | Video presentations with virtual camera |

#### Key Features
- Combine webcam feed with presentations (text, images, screen, slides)
- Virtual camera integration with Zoom, Teams, Meet, Webex, YouTube, Twitch
- Record, edit, and share presentation videos
- Chapter editing, multiple presenters
- AI-assisted content refinement
- In-app chat and collaboration

#### Pricing
Starting at $10/user/month, free trial available.

---

### 9.5 Riverside.fm AI

| Attribute | Details |
|-----------|---------|
| **Focus** | AI-powered recording, editing, and distribution |

#### Key AI Features
- **Magic Clips:** AI identifies key moments and creates shareable clips
- **Magic Audio:** One-click audio optimization (noise, echo, levels)
- Automated transcription
- AI lip-sync for natural edits
- Translation and dubbing in 30+ languages
- Studio-quality remote recording

#### Pricing
| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | Basic |
| Standard | $19/mo (annual) | Core features |
| Pro | $29/mo (annual) | 4K, 15hr transcription |
| Teams | $24/user/mo (annual) | Shared workspaces |
| Business | Custom | SSO, SLAs |

---

## 10. Emerging Startups & Agentic Video (2024-2026)

### The Agentic Video Creation Paradigm

By 2025-2026, the industry has moved toward **multi-agent architectures** for video production, where several specialized AI agents work in tandem under a higher-level "director" agent, mimicking a real film crew:
- **Screenwriter Agent:** Script generation and refinement
- **Director Agent:** Scene planning, camera angles, mood
- **Animator/Generator Agent:** Actual video synthesis
- **Editor Agent:** Assembly, transitions, pacing, audio

The user provides a concept, and the system autonomously handles scriptwriting, storyboarding, scene generation, and final editing end-to-end.

### YC-Backed Agentic Video Startups (2025-2026)

> Y Combinator's Spring 2025 batch dedicated over 50% of its 144-company cohort to agentic AI, with 70+ AI companies across 18 categories.

**Absurd**
- AI brand and performance ads at scale
- Multi-agent orchestration layer
- Customers: Replit, Brex, Whop
- Production-quality videos in 72 hours

**Claybird**
- Studio-quality video ads in under 72 hours
- AI agents using single-image NeRFs and fine-tuned image editing models
- Customers: Coca-Cola, Walmart

**Koyal**
- Agentic AI Filmmaking Platform
- Script or audio to personalized, visually compelling stories

**Cardboard**
- Agentic video editor for growth/marketing teams
- Input: footage + goal; Output: strong first cut in minutes

### Other Notable Agentic Approaches

**O-mega.ai**
- Guide/resource hub for agentic video creation
- Documents the multi-agent production paradigm

**Twelve Labs**
- "Video Intelligence is Going Agentic"
- Video understanding + action-taking agents
- Foundation models for video comprehension

**Vimeo "Agentic Video"**
- Announced plans for agentic video features
- LLM-based agents that understand and act on video content across workflows

### Key Platforms Using Multi-Agent Approaches

| Platform | Agentic Feature | Description |
|----------|----------------|-------------|
| HeyGen | Video Agent | Single-prompt to complete video |
| Synthesia | Video Agents (2026) | Interactive training simulations |
| OpusClip | Agent Opus | End-to-end short-form creation |
| D-ID | AI Agents 2.0 | Real-time conversational AI |
| Pencil | Specialized Agents | Briefs, production, optimization |
| Hailuo/MiniMax | Media Agent | Multi-modal creation agent |
| TapNow | Tapflow | Multi-model orchestration via visual workflow |

---

## 11. Market Segmentation & Revenue Models

### Key Market Segments

| Segment | Size/Growth | Key Players | Typical Buyer |
|---------|-------------|-------------|---------------|
| **Marketing/Advertising** | Largest segment | Creatify, Arcads, Pencil, HeyGen, Higgsfield | CMOs, performance marketers |
| **Enterprise Training** | Fast-growing | Synthesia, Colossyan, Elai.io | L&D teams, HR |
| **Social Media Content** | High volume | CapCut, Opus Clip, Captions | Creators, social teams |
| **E-commerce** | Product-focused | TapNow, Oxolo, Creatify | E-commerce managers |
| **Entertainment/Film** | Emerging | Runway, Pika, Kling, Luma | Filmmakers, studios |
| **Sports Media** | Specialized | WSC Sports | Sports leagues, broadcasters |
| **News/Publishing** | Specialized | Wochit, Wibbitz | Publishers, newsrooms |
| **Sales Enablement** | Growing | Vidyard, Tavus, Gan.AI | Sales teams |

### Revenue Models

| Model | Description | Examples |
|-------|-------------|---------|
| **SaaS Subscription** | Monthly/annual tiers with feature gating | Synthesia, HeyGen, Descript |
| **Credits/Tokens** | Pay-per-generation using platform currency | Runway, Pika, Kling, TapNow |
| **Per-Minute Pricing** | Pay for output duration | D-ID, Colossyan, Fliki |
| **Freemium + Pro** | Free tier with paid upgrades | CapCut, Luma, Captions |
| **API/Per-Second** | Developer-focused, pay-per-use | Runway API, Google Veo API, Kling API |
| **Enterprise License** | Custom contracts, unlimited usage | Synthesia Enterprise, Waymark, Pencil |
| **Consumption-Based** | Credits purchased as needed | Higgsfield, AKOOL |

### Competitive Dynamics Summary (Feb 2026)

**Highest-Valued Companies:**
1. Runway -- $5.3B
2. Luma AI -- $4.0B
3. Synthesia -- $4.0B
4. MiniMax/Hailuo -- $6.5B (post-IPO)
5. Higgsfield -- $1.3B

**Highest Revenue (ARR):**
1. Kling (Kuaishou) -- $240M ARR (Dec 2025)
2. Higgsfield -- $200M ARR run rate
3. HeyGen -- $95M ARR (Sep 2025)

**Most Users:**
1. Kling -- 60M+ creators
2. Higgsfield -- 15M+ users
3. Captions -- 10M+ creators
4. Opus Clip -- 10M+ users

**Key Trend:** The market is rapidly consolidating around platforms that offer **multi-model orchestration** and **agentic workflows** rather than single-capability tools. The winners are those that can coordinate multiple AI capabilities (generation, editing, avatar, voice, music) into seamless end-to-end production pipelines.

---

## Appendix: Quick Reference -- All Companies

| Company | Category | Founded | Funding | Valuation | Key Product |
|---------|----------|---------|---------|-----------|-------------|
| Runway | Video Gen | 2018 | $860M | $5.3B | Gen-4.5, Aleph, Act-Two |
| Pika Labs | Video Gen | 2023 | $135M | ~$900M | Pika 2.5, Pikaffects |
| Kling (Kuaishou) | Video Gen | 2024 (product) | Public co. | $41B (parent) | Kling 2.6 |
| Luma AI | Video Gen | 2021 | $1.07B | $4.0B | Ray2, Dream Machine |
| MiniMax/Hailuo | Video Gen | 2022 | IPO ($538M) | $6.5B | Hailuo 2.3 |
| Shengshu/Vidu | Video Gen | - | - | - | Vidu Q2 |
| ByteDance/Jimeng | Video Gen | - | Public co. | - | Seedance 2.0 |
| OpenAI/Sora | Video Gen | 2015 | $30B+ | $300B+ | Sora 2 |
| Google/Veo | Video Gen | - | Public co. | - | Veo 3.1 |
| Higgsfield | Video Gen | 2024 | $130M | $1.3B | Web Studio, Diffuse |
| HeyGen | Avatar | 2020 | $74M | $500M | Video Agent, Avatar IV |
| Synthesia | Avatar | 2017 | ~$380M | $4.0B | AI Avatars, Video Agents |
| D-ID | Avatar | 2017 | $48M | - | AI Agents 2.0 |
| Colossyan | Avatar | 2020 | $22M | - | Enterprise training |
| Elai.io | Avatar | - | - | - | Interactive video |
| Tavus | Avatar | ~2020 | $24.1M | - | CVI, digital twins |
| AKOOL | Avatar | - | - | - | Enterprise video suite |
| Captions | Avatar/Edit | - | $100M | $500M | AI Twins, editing |
| Hour One | Avatar | - | - | - | Video Wizard |
| TapNow | Orchestration | - | - | - | Tapflow, multi-model |
| Descript | Editing | 2017 | $101M | $550M | Overdub, text editing |
| CapCut | Editing | - | ByteDance | - | Free AI editor |
| Opus Clip | Editing | ~2022 | $50M | $215M | Agent Opus |
| Pictory | Editing | - | - | - | Blog-to-video |
| InVideo | Editing | - | - | - | Sora 2/Veo 3.1 integration |
| Filmora | Editing | - | Public (Wondershare) | - | AI Mate, Veo 3 |
| Adobe Premiere | Editing | - | Public | - | Firefly Video |
| DaVinci Resolve | Editing | - | Private (BMD) | - | Neural Engine |
| Creatify | Ads | - | - | - | URL-to-video |
| Arcads | Ads | - | - | - | UGC-style AI ads |
| Waymark | Ads | - | $6.88M | - | Broadcast AI commercials |
| Oxolo | Ads | - | - | - | E-commerce video |
| Pencil | Ads | - | Brandtech Group | - | Multi-model ad orchestration |
| Gan.AI | Ads | - | - | - | Personalized video |
| Typeframes | Ads | - | - | - | Product demos |
| WSC Sports | Sports | - | - | - | AI sports highlights |
| Wochit | News | - | - | - | Publisher video creation |
| Wibbitz | News | - | Vimeo | - | Text-to-video for publishers |
| Vidyard | Enterprise | - | - | - | AI sales video |
| Loom | Enterprise | - | Atlassian | - | Async video messaging |
| mmhmm | Enterprise | - | - | - | Video presentations |
| Riverside.fm | Enterprise | - | - | - | AI recording/editing |
| LTX Studio | Creative | 2024 | Lightricks | - | Storytelling-first AI video |
| Fliki | Creative | - | - | - | Text-to-video + voices |
| Steve AI | Creative | - | - | - | Faceless content |
| Lumen5 | Creative | - | - | - | Business social video |
| Kaiber | Creative | - | - | - | Music/art video AI |
| Neural Frames | Creative | - | - | - | AI music video |

---

*This document covers the commercial product landscape as of February 2026. The AI video market is evolving rapidly, with new products, features, and funding rounds announced weekly. Valuations and pricing are subject to change.*
