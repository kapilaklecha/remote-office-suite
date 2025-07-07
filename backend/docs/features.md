# 🔧 Core MVP Features

A complete breakdown of the main features required for MVP delivery.

---

## 1. 🔐 Authentication & User Management

- Register / login with email & password
- Password hashing with bcrypt
- JWT-based token system
- Role-based access: user / admin
- Token expiration logic

---

## 2. 📓 Notes Module

- Create, edit, delete personal notes
- Markdown support with syntax highlighting
- Save to MongoDB
- Optional tags for filtering

---

## 3. 💬 Real-Time Chat

- Join public rooms (e.g., #general, #devops)
- Send/receive messages using WebSocket
- Reconnect logic for unstable networks
- Store chat logs in MongoDB

---

## 4. 📁 File Upload

- Upload images, PDFs, docs
- Store using MongoDB GridFS or file system
- Scan files using external Java microservice
- Limit by file size and type

---

## 5. 🖥️ Remote Shell Access

- Admin users can run shell commands from browser
- Stream output in real-time using TCP/WebSocket
- Log every command executed
- Prevent dangerous commands (e.g., `rm -rf /`)

---

## 6. 🌐 Server Monitoring (Uptime + Ping)

- Add/remove servers to monitor
- Ping IP or domain every X seconds
- Store response time, status, timestamp
- Display uptime % and live status dashboard

---

## (Optional Future)

- Collaborative real-time editing
- AI summaries of notes and chat
- Scheduled command execution
- OAuth login via Google/GitHub
