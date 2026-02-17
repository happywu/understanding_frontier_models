# LLM-Powered Video Understanding and Analysis

## Overview

LLM-powered video understanding agents use Large Language Models as central reasoning engines that coordinate multiple vision-language tools to comprehend, analyze, and answer questions about video content. Rather than processing entire videos through a single multimodal model (which is limited by context length and computational cost), these agents iteratively and selectively access video content, using tools for frame selection, object detection, OCR, ASR, and visual description. This tool-augmented, agentic approach is particularly effective for long-form video understanding.

---

## Key Systems

### 1. VideoAgent: LLM as Agent for Long-Form Video Understanding (2024)

**Paper:** "VideoAgent: Long-form Video Understanding with Large Language Model as Agent"
**ArXiv:** [2403.10517](https://arxiv.org/abs/2403.10517) (March 2024)
**Venue:** ECCV 2024
**Project Page:** [wxh1996.github.io/VideoAgent-Website/](https://wxh1996.github.io/VideoAgent-Website/)

**Technical Approach:**
VideoAgent uses an LLM as a central agent that iteratively identifies and compiles crucial information to answer questions about long videos. The agent:

1. **Plans** what information is needed to answer a query
2. **Selects** which frames to examine (typically only 8-9 frames from long videos)
3. **Invokes** vision-language foundation models as tools to extract visual information from selected frames
4. **Reasons** over gathered information to produce an answer
5. **Iterates** if the gathered information is insufficient

**Key Results:**
- **EgoSchema benchmark:** 54.1% zero-shot accuracy (with only 8.4 frames on average)
- **NExT-QA benchmark:** 71.3% zero-shot accuracy (with only 8.2 frames on average)
- Dramatically reduces computation by processing <1% of frames

**Strengths:** Extremely frame-efficient; zero-shot; iterative information gathering; uses LLM reasoning.
**Limitations:** Accuracy depends on frame selection quality; may miss information in unselected frames.

---

### 2. VideoAgent: Memory-Augmented Multimodal Agent (2024)

**Paper:** "VideoAgent: A Memory-augmented Multimodal Agent for Video Understanding"
**ArXiv:** [2403.11481](https://arxiv.org/abs/2403.11481) (March 2024)
**Venue:** ECCV 2024

**Technical Approach:**
A separate system (same name, different paper) that reconciles multiple foundation models through a unified memory mechanism:

1. **Structured Memory Construction:** Builds two types of memory from the video:
   - **Temporal event descriptions:** Generic descriptions of what happens over time
   - **Object-centric tracking states:** Tracks specific objects and their states across the video
2. **Tool-Augmented Reasoning:** Given a query, employs tools including:
   - Video segment localization
   - Object memory querying
   - Visual foundation model invocation
3. **Interactive Task Solving:** Iteratively queries memory and tools to answer complex questions

**Key Results:**
- Average increase of 6.6% on NExT-QA and 26.0% on EgoSchema over baselines
- Closes the gap between open-sourced models and private models (Gemini 1.5 Pro)

**Strengths:** Structured memory reduces redundant computation; object-centric tracking enables fine-grained queries; strong benchmark performance.
**Limitations:** Memory construction is a preprocessing step that adds overhead; memory quality affects downstream performance.

---

### 3. VideoAgent2: Uncertainty-Aware CoT (2025)

**Paper:** "VideoAgent2: Enhancing the LLM-Based Agent System for Long-Form Video Understanding by Uncertainty-Aware CoT"
**ArXiv:** [2504.04471](https://arxiv.org/abs/2504.04471) (April 2025)

**Technical Approach:**
Addresses critical limitations of existing video agent systems through uncertainty-aware Chain-of-Thought reasoning:

1. **Plan-Adjust Mode:** The LLM incrementally plans and adapts its information-gathering strategy, gathering information from coarse to fine-grained
2. **Uncertainty Estimation:** Heuristic uncertainty estimation for both the LLM and external tools, allowing the system to know when it needs more information
3. **Adaptive Strategy:** Adjusts tool use and frame selection based on confidence levels

**Key Results:**
- Outperforms VideoAgent by an average of 13.1%
- State-of-the-art among agent-based methods on EgoSchema, NExT-QA, and IntentQA

**Strengths:** Uncertainty awareness prevents premature answers; adaptive strategy; strong improvements over VideoAgent.
**Limitations:** Uncertainty estimation is heuristic rather than principled; additional computational overhead.

---

### 4. VideoDeepResearch: Agentic Tool Using for Long Videos (2025)

**Paper:** "VideoDeepResearch: Long Video Understanding With Agentic Tool Using"
**ArXiv:** [2506.10821](https://arxiv.org/abs/2506.10821) (June 2025)

**Technical Approach:**
Uses a text-only large reasoning model (LRM) combined with a modular multi-modal toolkit:

- **Multimodal Retrievers:** Find relevant video segments based on text queries
- **Visual Perceivers:** Extract detailed information from identified segments
- **Reasoning Model:** Formulates problem-solving strategies through reasoning, selectively accessing video content via tool use

**Key Results:**
- Surpasses previous SOTA by 9.6% on MLVU (test), 6.6% on LVBench, and 3.9% on LongVideoBench
- Demonstrates that a text-only reasoning model + tools can outperform end-to-end multimodal models

**Strengths:** Modular toolkit approach; text-only LRM avoids multimodal training; strong benchmark results.
**Limitations:** Relies on toolkit quality; may miss visual information not captured by perceiver tools.

---

### 5. LongVideoAgent: Multi-Agent Reasoning (2025)

**Paper:** "LongVideoAgent: Multi-Agent Reasoning with Long Videos"
**ArXiv:** [2512.20618](https://arxiv.org/abs/2512.20618) (December 2025)

**Technical Approach:**
A multi-agent framework where a master LLM coordinates specialized sub-agents:

1. **Master Agent:** Coordinates reasoning and final answer generation; trained with reinforcement learning for concise, correct, and efficient cooperation
2. **Grounding Agent:** Localizes question-relevant video segments
3. **Vision Agent:** Extracts targeted textual observations from located segments

**Key Innovation:** Reinforcement learning training of the master agent encourages efficient multi-agent cooperation -- minimizing unnecessary tool calls while maintaining accuracy.

**Strengths:** RL-optimized coordination; efficient multi-agent cooperation; specialized agents for grounding and perception.
**Limitations:** RL training requires reward engineering; coordination overhead.

---

### 6. OmAgent: Multi-modal Agent for Complex Video Understanding (2024)

**Paper:** "OmAgent: A Multi-modal Agent Framework for Complex Video Understanding with Task Divide-and-Conquer"
**ArXiv:** [2406.16620](https://arxiv.org/abs/2406.16620) (June 2024)

**Technical Approach:**
The first complex video understanding framework integrating multimodal RAG and generalist AI agent:

1. **Video2RAG Preprocessor:** Extracts and stores generalized information from video into a retrievable knowledge base
2. **Rewinder Tool:** An autonomously selectable tool that allows the AI agent to "rewind" and re-examine specific video portions
3. **Task Divide-and-Conquer:** Complex questions are decomposed into manageable sub-tasks

**Strengths:** RAG integration for efficient retrieval; autonomous rewinding; handles complex queries.
**Limitations:** Preprocessing overhead; RAG index quality affects downstream performance.

---

### 7. Video-RAG: Retrieval-Augmented Long Video Comprehension (2024)

**Paper:** "Video-RAG: Visually-aligned Retrieval-Augmented Long Video Comprehension"
**ArXiv:** [2411.13093](https://arxiv.org/abs/2411.13093) (November 2024)

**Technical Approach:**
Integrates with any LVLM by replacing extended visual tokens with auxiliary texts extracted using multiple foundation models:

- **OCR:** Extracts on-screen text from video frames
- **ASR (Automatic Speech Recognition):** Transcribes spoken audio
- **Object Detection:** Identifies and describes objects in frames
- **RAG Filtering:** Filters auxiliary texts for relevance to user queries in text embedding space

**Key Innovation:** By converting multimodal information to text, any text-capable LLM can reason about video content without multimodal training.

**Strengths:** Works with any LVLM; leverages multiple information modalities; RAG filtering reduces noise.
**Limitations:** Information loss in modality conversion; depends on quality of OCR/ASR/detection tools.

---

### 8. Focus: Efficient Keyframe Selection (2025)

**Paper:** "Focus: Efficient Keyframe Selection for Long Video Understanding"
**ArXiv:** [2510.27280](https://arxiv.org/abs/2510.27280) (October 2025)

**Technical Approach:**
Addresses the fundamental challenge of choosing which frames to analyze in long videos. Unlike single-pass keyframe selection methods, Focus uses iterative refinement:

- Selects frames based on visual diversity or query relevance
- Allows recovery from poor initial frame choices through re-selection
- Preserves semantics while staying within token limits

**Strengths:** Iterative frame selection; recovers from poor initial choices; query-aware.
**Limitations:** Multiple passes increase latency.

---

## Tool-Augmented Video Understanding

Modern video understanding agents integrate multiple specialized tools:

| Tool Category | Examples | Purpose |
|--------------|---------|---------|
| **OCR** | PaddleOCR, Tesseract, Mistral OCR | Extract on-screen text (subtitles, signs, documents) |
| **ASR** | Whisper, Google Speech-to-Text | Transcribe spoken content |
| **Object Detection** | YOLO, GroundingDINO, SAM | Identify and localize objects |
| **Action Recognition** | SlowFast, VideoMAE | Classify actions and activities |
| **Face Recognition** | ArcFace, InsightFace | Identify and track people |
| **Captioning** | BLIP-2, LLaVA, InternVL | Generate textual descriptions of frames |
| **Temporal Grounding** | Moment-DETR, QD-DETR | Localize temporal segments matching text queries |
| **Tracking** | ByteTrack, SAM 2 | Track objects across frames |

---

## How Agents Decompose Complex Video Questions

**Example Query:** "What did the person in the red shirt do after picking up the box, and was anyone watching?"

**Agent Decomposition:**
```
1. Frame Selection: Sample frames across video, identify temporal range
2. Person Detection: Find person wearing red shirt across frames
3. Object Detection: Locate "box" in frames; find frame where person picks it up
4. Temporal Grounding: Identify the temporal window after "picking up the box"
5. Action Recognition: Classify what the person does in the subsequent frames
6. Scene Analysis: Check for other people in the scene; determine if they're watching
7. Reasoning: Synthesize findings into coherent answer
```

This decomposition is planned and executed by the LLM agent, which decides which tools to call, in what order, and how to interpret results.

---

## Comparison of Approaches

| System | Agent Type | Frame Efficiency | Key Innovation | Benchmark Leader |
|--------|-----------|-----------------|----------------|-----------------|
| VideoAgent (ECCV) | Single LLM + tools | ~8 frames | Iterative selection | EgoSchema (2024) |
| VideoAgent (Memory) | Memory-augmented | Variable | Structured memory | NExT-QA improvement |
| VideoAgent2 | Uncertainty-aware | Adaptive | Uncertainty estimation | 13.1% over VideoAgent |
| VideoDeepResearch | Text-only LRM + toolkit | Selective | No multimodal training | MLVU, LVBench SOTA |
| LongVideoAgent | Multi-agent (RL) | RL-optimized | RL-trained coordination | Efficient cooperation |
| OmAgent | RAG + agent | RAG-retrieved | Video2RAG + Rewinder | Complex queries |
| Video-RAG | Tool pipeline | All frames (text) | OCR+ASR+Detection | LVLM-agnostic |

---

## Open Problems and Future Directions

1. **Streaming Video Understanding:** Agents that can understand live/streaming video in real-time, maintaining state as new content arrives.

2. **Multi-Video Reasoning:** Agents that can reason across multiple videos simultaneously (e.g., "compare the cooking techniques in these two videos").

3. **Temporal Precision:** Improving agents' ability to reason about precise temporal relationships (before, during, after, simultaneously).

4. **Causal and Counterfactual Reasoning:** Understanding not just what happened but why, and what might have happened differently.

5. **Grounded Generation:** Using video understanding to inform video generation -- "generate a continuation of this video" or "regenerate this scene with different lighting."

6. **Audio-Visual Reasoning:** Better integration of audio understanding (dialogue, music, ambient sounds) with visual analysis.

7. **Efficiency at Scale:** Processing hour-long or day-long video streams efficiently without excessive compute or storage.

8. **Hallucination Reduction:** Video understanding agents can hallucinate details not present in the video. Grounding mechanisms and uncertainty-aware approaches (VideoAgent2) help but do not fully solve this.

9. **Privacy-Preserving Analysis:** Analyzing video content without storing or transmitting raw frames -- critical for surveillance, medical, and sensitive applications.

10. **Standardized Agent Evaluation:** Current benchmarks (EgoSchema, NExT-QA, MLVU) test final accuracy but not agent efficiency, tool usage patterns, or reasoning quality.
