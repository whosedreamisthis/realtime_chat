# 💬 Private Chat

A secure, private, self-destructing chat room application built with **Next.js 16**, **Elysia**, and **Upstash**. Messages are delivered in real-time and rooms automatically expire after a set duration.

## ✨ Features

- **🔒 Secure Room Creation**: Generate unique, private chat rooms with nanoid.
- **⚡ Real-time Messaging**: Instant message delivery powered by [Upstash Realtime](https://upstash.com/docs/realtime).
- **⏳ Self-Destructing Rooms**: Rooms and all associated data automatically expire after 10 minutes (configurable).
- **💣 Manual Destruction**: Instantly destroy a room and its history with a single click.
- **📜 Message History**: Persistent history for the duration of the room's life.
- **🔗 Easy Sharing**: Quick-copy room links to invite participants.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, React 19)
- **API Engine**: [Elysia](https://elysiajs.com/) (running on Next.js API routes)
- **Real-time**: [@upstash/realtime](https://upstash.com/docs/realtime)
- **Database/Cache**: [Upstash Redis](https://upstash.com/docs/redis)
- **State Management**: [TanStack Query v5](https://tanstack.com/query)
- **Validation**: [Zod](https://zod.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

## 🚀 Getting Started

### 1. Prerequisites

- An [Upstash](https://upstash.com/) account (Redis and Realtime).

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
UPSTASH_REDIS_REST_URL=your_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
UPSTASH_REALTIME_TOKEN=your_realtime_token
```

### 3. Installation

```bash
npm install
```

### 4. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📡 API Endpoints (Elysia)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/room/create` | `POST` | Create a new chat room |
| `/api/room/ttl` | `GET` | Get room time-to-live |
| `/api/room` | `DELETE` | Destroy a room |
| `/api/messages` | `POST` | Send a message |
| `/api/messages` | `GET` | Get all messages in a room |

## 📂 Project Structure

```text
src/
├── app/
│   ├── api/[[...slugs]]/    # Elysia API routes implementation
│   ├── room/[roomId]/       # Dynamic chat room route
│   └── page.tsx             # Application landing page
├── components/              # Shared UI components
├── hooks/                   # Custom React hooks (use-username, etc.)
├── lib/                     # Client initializations (Redis, Realtime)
└── types/                   # TypeScript definitions
```

## 🎓 Credits

This project was built following the tutorial: **[Build a Complete Real-Time Chat with Next.js 16, Redis, Tailwind (2025)](https://www.youtube.com/watch?v=D8CLV-MRH0k)**.

## 📄 License

This project is licensed under the MIT License.
