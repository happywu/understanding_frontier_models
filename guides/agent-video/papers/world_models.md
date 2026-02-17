# Interactive World Models and Playable Environments

## Overview

Interactive world models represent a convergence of video generation and reinforcement learning, where generative models learn to simulate environments that respond to user actions. These systems can be "played" -- users provide inputs (keyboard, mouse, text) and the model generates the next frame in real time, creating interactive experiences without traditional game engines or physics simulators. This paradigm has implications for game prototyping, robotic simulation, autonomous driving, and general-purpose world understanding.

---

## Key Systems

### 1. Genie Series (Google DeepMind, 2024-2026)

#### Genie 1 (February 2024)

**Paper:** "Genie: Generative Interactive Environments"
**Authors:** Google DeepMind

**Technical Approach:**
The foundational work demonstrated learning controllable 2D platformer-style environments from unlabeled internet videos. Genie 1 introduced the concept of learning action-conditioned world models from passive video data without action labels, using a latent action model to discover control dimensions.

- **Resolution:** 256x256
- **Training data:** Unlabeled internet videos of 2D platformers
- **Key innovation:** Unsupervised action discovery from video

#### Genie 2 (December 2024)

**Blog Post:** [deepmind.google/blog/genie-2](https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/)

**Technical Approach:**
A large-scale foundation world model that generates action-controllable, playable 3D environments from a single prompt image. Key advances over Genie 1:

- **3D environments** with different perspective support (first-person, isometric views)
- **Keyboard and mouse input** -- playable by humans or AI agents
- **Consistency:** Generates consistent worlds for up to 60 seconds (majority 10-20s)
- **Diversity:** Generates an endless variety of environments
- **Applications:** Training and evaluating embodied AI agents

**Strengths:** Foundation model approach; diverse 3D environments; human-playable.
**Limitations:** Limited to ~1 minute of consistent generation; visual artifacts accumulate.

#### Genie 3 (August 2025, Public Preview January 2026)

**Blog Post:** [deepmind.google/blog/genie-3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/)
**Product:** [Project Genie](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/) via Google Labs

**Technical Approach:**
The first world model to enable real-time interaction while significantly improving consistency and realism:

- **Real-time generation** at 24 FPS
- **Resolution:** 720p
- **Consistency:** Retains environmental coherence for several minutes of continuous navigation
- **Text-to-world:** Generates dynamic worlds from text prompts (no seed image required)
- **Modification:** Generated worlds can be explored, then modified to create variations

**Access:** Available through Google Labs as Project Genie, rolled out in late January 2026 in the US for Google One AI Ultra subscribers.

**Strengths:** Real-time; text-prompted; multi-minute consistency; publicly accessible.
**Limitations:** Still limited in duration; available only in limited access; physics approximation rather than simulation.

---

### 2. DIAMOND (NeurIPS 2024 Spotlight)

**Paper:** "Diffusion for World Modeling: Visual Details Matter in Atari"
**ArXiv:** [2405.12399](https://arxiv.org/abs/2405.12399) (May 2024)
**Code:** [github.com/eloialonso/diamond](https://github.com/eloialonso/diamond)
**Project Page:** [diamond-wm.github.io](https://diamond-wm.github.io/)
**Authors:** Eloi Alonso et al.

**Technical Approach:**
DIAMOND (DIffusion As a Model Of eNvironment Dreams) challenges the dominant paradigm of using discrete latent representations for world modeling. Instead, it uses diffusion models directly, arguing that compression into discrete tokens loses visual details critical for RL:

1. **World Model:** A diffusion model is trained to predict the next frame conditioned on past frames and actions
2. **Agent Training:** An RL agent is trained entirely within the diffusion world model (in "dreams")
3. **Key insight:** Visual details preserved by diffusion lead to better agent performance compared to discrete-token world models

**Key Results:**
- **Atari 100k:** Mean human-normalized score of 1.46 (46% better than human) -- new best for agents trained in world models on 100k frames
- **CS:GO:** Trained to simulate Counter-Strike: Global Offensive; playable at ~10 FPS on RTX 3090; trained in 12 days on RTX 4090
- **Playable world models** released publicly

**Strengths:** Superior visual quality over discrete approaches; strong RL performance; playable models released.
**Limitations:** Slower generation than token-based models; computationally intensive training; limited to observed environments.

---

### 3. Oasis (Decart AI, October 2024)

**Project Page:** [oasis-model.github.io](https://oasis-model.github.io/)
**Company:** Decart AI (in collaboration with Etched)
**Code:** 500M parameter model weights and code publicly available

**Technical Approach:**
Oasis generates real-time, playable Minecraft-like worlds using next-frame prediction. Trained on millions of hours of Minecraft gameplay footage, it takes keyboard and mouse inputs and generates frames in real time:

- **Architecture:** Transformer-based next-frame prediction model
- **Speed:** 20 FPS real-time generation (each frame generated in ~0.04 seconds, 100x faster than typical state-of-the-art models)
- **Training data:** Millions of hours of Minecraft gameplay footage
- **Hardware optimization:** Optimized for Etched Sohu Transformer ASIC

**Emergent Understanding:**
Oasis demonstrates understanding of complex game mechanics: building, lighting physics, inventory management, and object interactions -- all learned purely from video observation.

**Key Results:**
- First real-time playable AI-generated game environment
- 500M parameter model weights and code released publicly
- Larger model available as playable demo

**Strengths:** Real-time; learned complex game mechanics; open weights available.
**Limitations:** No persistent memory (scenery and inventory change unpredictably); lacks traditional code/rules engine; consistency degrades over time.

---

### 4. NVIDIA Cosmos (January 2025)

**Paper:** "Cosmos World Foundation Model Platform for Physical AI"
**ArXiv:** [2501.03575](https://arxiv.org/abs/2501.03575) (January 2025)
**Platform:** [nvidia.com/en-us/ai/cosmos/](https://www.nvidia.com/en-us/ai/cosmos/)
**Code:** [github.com/nvidia-cosmos](https://github.com/nvidia-cosmos)
**License:** Open-weight with permissive license

**Technical Approach:**
A family of world foundation models designed for Physical AI development. Cosmos models predict physics-aware future states of virtual environments:

- **Cosmos-Predict1:** General-purpose world foundation models for fine-tuning into customized world models
- **Cosmos-Predict2.5:** Specialized for predicting future world states in video form
- **Cosmos-Transfer2.5:** Produces world simulations conditioned on multiple spatial control inputs
- **Multimodal Input:** Text, image, video, and movement data
- **Physics-Awareness:** Accurately models spatial relationships and physical interactions

**Key Milestones:**
- January 2025 (CES): Initial announcement
- March 2025: Major release with reasoning models for physical AI
- CoRL 2025: Updates for generating diverse training data for physical AI at scale

**Target Applications:**
- Autonomous driving simulation and data generation
- Robotic manipulation training
- Industrial automation
- Synthetic data generation for physical AI

**Strengths:** Physics-grounded; open-weight; enterprise-grade; multiple model variants; strong ecosystem.
**Limitations:** Primarily designed for Physical AI (robotics/driving) rather than entertainment; requires significant compute.

---

### 5. GameNGen (August 2024)

**Paper:** "Diffusion Models Are Real-Time Game Engines"
**ArXiv:** [2408.14837](https://arxiv.org/abs/2408.14837) (August 2024)
**Venue:** ICLR 2025 (Poster)
**Project Page:** [gamengen.github.io](https://gamengen.github.io/)
**Authors:** Google Research

**Technical Approach:**
The first game engine powered entirely by a neural model, demonstrated on DOOM. Two-phase training:

1. **RL Agent Phase:** An RL agent learns to play DOOM; gameplay sessions are recorded
2. **Diffusion Training Phase:** A diffusion model learns to generate the next frame conditioned on past frames and the RL agent's actions

**Key Results:**
- **Speed:** 20 FPS on a single TPU
- **Quality:** Next-frame PSNR of 29.4 (comparable to lossy JPEG compression)
- **Human evaluation:** Raters perform only slightly better than random chance at distinguishing real DOOM clips from generated ones
- **Stability:** Remains stable over multi-minute play sessions even after 5 minutes of autoregressive generation

**Strengths:** Demonstrates neural game engines are feasible; high visual quality; stable over long sessions.
**Limitations:** Requires RL agent to generate training data; limited to single game; no world modification.

---

### 6. UniSim (ICLR 2024)

**Paper:** "Learning Interactive Real-World Simulators"
**ArXiv:** [2310.06114](https://arxiv.org/abs/2310.06114) (October 2023)
**Project Page:** [universal-simulator.github.io](https://universal-simulator.github.io/)

**Technical Approach:**
UniSim is a universal simulator of real-world interaction learned through generative modeling. It unifies diverse data sources (images, robotics data, navigation data) into a single action-conditioned video generation model:

- **Universal action interface:** Handles motor controls, language descriptions, and camera motions
- **Data fusion:** Combines object-rich image data, densely-sampled robotics actions, and diverse navigation movements
- **Variable-length prediction:** Predicts the next set of observation frames given past observations and action input

**Applications:**
- Training high-level vision-language planners (zero-shot real-world transfer)
- Training low-level RL policies (zero-shot real-world transfer)
- Bridging simulation and reality

**Strengths:** Universal action interface; diverse data fusion; real-world transfer demonstrated.
**Limitations:** Resolution and visual quality below specialized models; action space may not cover all interaction types.

---

## Key Challenges

### 1. Real-Time Generation
| System | FPS | Hardware | Duration |
|--------|-----|----------|----------|
| Genie 3 | 24 | Cloud | Minutes |
| Oasis | 20 | Etched Sohu ASIC | Unlimited (with drift) |
| GameNGen | 20 | Single TPU | Minutes |
| DIAMOND | ~10 | RTX 3090 | Unlimited (with drift) |
| Cosmos | N/A (offline) | Multi-GPU | Variable |

Real-time generation requires architectural innovations (causal attention, KV caching) and hardware optimization. The latency budget of ~40-50ms per frame severely constrains model size and denoising steps.

### 2. Consistency and Coherence
All systems face drift over time -- small errors accumulate, leading to visual artifacts, geometry violations, and loss of scene coherence. Current approaches:
- **Genie 3:** Multi-minute consistency through improved architecture
- **GameNGen:** Augmentation-based stability over 5+ minutes
- **Oasis:** Accepted inconsistency as a trade-off for real-time generation
- **DIAMOND:** Frame conditioning with history

### 3. Physics Grounding
Most systems learn approximate physics from video observation rather than explicit simulation:
- **Cosmos:** Explicitly targets physics-aware generation for Physical AI
- **UniSim:** Learns physics through diverse action-conditioned data
- **Others:** Approximate physics via statistical patterns in training data

### 4. Memory and Persistence
Without explicit memory mechanisms, generated worlds lack persistent state -- objects may appear/disappear, inventories change randomly. Solutions being explored include external memory banks, state tracking modules, and hybrid neural-symbolic approaches.

---

## Applications

1. **Game Prototyping:** Rapid generation of playable game concepts from text descriptions
2. **Robotic Simulation:** Training manipulation and navigation policies in learned simulators (UniSim, Cosmos)
3. **Autonomous Driving:** Generating diverse driving scenarios for perception and planning training (Cosmos)
4. **Creative Tools:** Artists exploring interactive worlds from imagination
5. **Education:** Interactive historical environments, scientific simulations
6. **Evaluation:** Testing embodied AI agents in diverse generated environments (Genie 2/3)

---

## Open Problems and Future Directions

1. **Hour-Scale Consistency:** Generating worlds that remain coherent for hours, not minutes.
2. **Multi-User Interaction:** Shared world models where multiple agents or humans interact simultaneously.
3. **Compositional World Building:** Combining learned environment elements (terrain, objects, physics) modularly.
4. **Explicit Physics Integration:** Hybrid approaches that combine learned generation with explicit physics engines.
5. **Controllable Complexity:** Adjusting world complexity, physics fidelity, and visual quality based on compute budget.
6. **Transfer to Real World:** Using world models trained on synthetic data to improve real-world AI systems.
7. **Benchmarking:** Standardized benchmarks for evaluating world model quality, consistency, and interactivity (WorldSimBench is an early effort).
8. **Ethical Considerations:** Generated worlds that are indistinguishable from reality raise concerns about misinformation and manipulation.
