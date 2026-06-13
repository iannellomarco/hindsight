# Hindsight

A private memory app for macOS. Hindsight keeps a quiet daybook of your work:
it captures your screen on a gentle cadence, reads it on-device, and writes
back a narrative of your day; it records meetings with on-device
transcription; and it builds a personal second brain you can ask questions of.
Everything runs locally by default — nothing leaves your Mac unless you
connect a cloud model and explicitly consent.

- **Download:** see [Releases](../../releases).
- **Website:** https://iannellomarco.github.io/hindsight/
- **Requirements:** macOS 14.2 or later, Apple Silicon.

## What it does

- **Day Journal** — periodic screenshots, on-device OCR, an AI narrative of
  your day, and an end-of-day review you can chat with.
- **Meetings** — microphone + system audio, transcribed on-device; live
  preview, post-meeting summaries, and chat over the transcript.
- **Second Brain** — a cross-day knowledge graph and recall.

## Privacy

Capture, OCR, transcription, and embeddings run on-device. Cloud AI is
optional, off by default, and gated: nothing leaves your Mac through any
feature without a provider configured and your consent, and prompts are
redacted before they are sent.

## Source & license

Hindsight is source-available, not open source: the source is published at
[hindsight-public](https://github.com/iannellomarco/hindsight-public) under
the PolyForm Strict License. Redistribution, forks, derivative works, and
commercial use require prior written authorization. This repository hosts the
release builds, the website, and the update feed.
