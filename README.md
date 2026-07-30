<img width="1920" height="2965" alt="image" src="https://github.com/user-attachments/assets/2a024bbb-8557-43cc-a420-509447c3c2a7" />
# 🧠 Memory Bridge

> **AI-Powered Digital Memory Companion for Alzheimer's and Dementia Care**

Memory Bridge is an AI-powered memory preservation platform designed to help individuals with Alzheimer's disease and other cognitive impairments preserve, organize, and revisit their life memories. The platform transforms photos, audio recordings, and personal stories into meaningful digital memories using modern AI technologies.

Built with a scalable microservice architecture, Memory Bridge combines a React frontend, Express.js backend, FastAPI-based AI services, PostgreSQL, Prisma ORM, Redis caching, and Google Gemini to provide an intelligent and personalized memory assistance experience.

---

# ✨ Features

## 👤 Authentication & User Management

- Secure JWT Authentication
- Refresh Token Support
- Password Encryption using bcrypt
- Forgot Password via Email
- Protected Routes
- Role-Based Access Control

---

## 📚 Memory Management

Users can:

- Create Memories
- Edit Memories
- Delete Memories
- Organize Memories into Collections
- Categorize Memories
- Search Memories
- Upload Images
- Upload Audio Memories

---

## 🎙️ Audio Memory Processing

Memory Bridge supports voice-based memory creation.

Pipeline:

Audio Recording

↓

Speech Transcription

↓

AI Processing

↓

Memory Generation

↓

Storage in Database

---

## 🤖 AI-Powered Features

Using **Google Gemini**, the platform automatically:

- Generates structured memories
- Summarizes experiences
- Creates emotional descriptions
- Extracts important events
- Generates life stories
- Provides intelligent chat assistance

---

## 💬 AI Chat Assistant

The platform includes an AI companion capable of:

- Answering questions about stored memories
- Helping users recall events
- Providing conversational support
- Understanding memory context
- Maintaining chat sessions

---

## 📖 Story Generation

Multiple memories can be transformed into coherent life stories.

Features include:

- Story Generation
- Story Storage
- Story Playback
- AI-generated Narratives

---

## 🌍 Life Insights

The application generates personalized life summaries by analyzing user memories.

Insights include:

- Major Life Events
- Frequently Mentioned People
- Important Locations
- Personal Interests
- Emotional Timeline
- Memory Highlights

---

## 📊 Dashboard Analytics

Interactive dashboard showing:

- Total Memories
- Collections
- Stories Created
- Recent Activity
- AI Insights

---

## ⚡ Performance Optimizations

- Redis Caching (Upstash)
- Cache Invalidation
- API Compression
- Helmet Security
- Rate Limiting
- Optimized Database Queries

---

# 🏗️ System Architecture

```
                React Frontend
                      │
                      ▼
             Express.js Backend
                      │
      ┌───────────────┼───────────────┐
      │               │               │
      ▼               ▼               ▼
 PostgreSQL       FastAPI AI      Cloudinary
   Prisma          Services        Storage
      │               │
      └──────► Google Gemini ◄──────┘
```

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite
- React Router
- Zustand
- React Hook Form
- Tailwind CSS
- Axios
- Recharts

---

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt
- Cookie Parser
- Multer
- Cloudinary
- Nodemailer

---

## AI Services

- FastAPI
- Google Gemini
- OpenAI Whisper
- PyTorch

---

## Database

- PostgreSQL
- Prisma ORM

---

## Caching

- Upstash Redis

---

## Deployment

Frontend

- Vercel

Backend

- Render

AI Service

- FastAPI Deployment

Database

- PostgreSQL

---

# 📂 Project Structure

```
Memory_Bridge
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── hooks
│   └── assets
│
├── backend
│   ├── prisma
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── middleware
│   │   ├── services
│   │   ├── config
│   │   └── utils
│   └── sql
│
└── ml_service
    ├── routers
    ├── services
    ├── utils
    └── models
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Madhurtandon1/Memory_Bridge.git

cd Memory_Bridge
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## AI Service

```bash
cd ml_service

pip install -r requirements.txt

uvicorn app:app --reload
```

---

# 🔐 Environment Variables

## Backend

```env
PORT=

DATABASE_URL=

JWT_SECRET=

JWT_REFRESH_SECRET=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

GEMINI_API_KEY=

REDIS_URL=

EMAIL_USER=

EMAIL_PASSWORD=
```

---

# 📡 API Modules

### Authentication

- Register
- Login
- Logout
- Refresh Token
- Forgot Password

### Memories

- Create Memory
- Update Memory
- Delete Memory
- Search Memories
- Upload Audio

### Collections

- Create Collection
- Manage Collections

### Stories

- Generate Story
- Save Story
- Retrieve Stories

### AI Chat

- Chat with Memory Assistant
- Conversation History

### Life Insights

- Generate Personalized Insights

---

# 🔒 Security Features

- JWT Authentication
- Refresh Tokens
- Password Hashing
- Secure Cookies
- Helmet
- CORS Protection
- Rate Limiting
- Environment Variable Management

---

# 📈 Future Improvements

- Face Recognition
- Family Collaboration
- Memory Timeline Visualization
- Calendar Integration
- Mobile Application
- Multi-language Support
- Emotion Detection
- Voice Cloning
- Reminder Scheduling

---

# 👨‍💻 Author

**Madhur Tandon**

Birla Institute of Technology, Mesra

GitHub: https://github.com/Madhurtandon1

---

# 📜 License

This project is intended for educational and research purposes.
