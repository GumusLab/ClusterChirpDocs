---
id: docker
title: Running Clusterchirp with Docker
sidebar_position: 6
---

# Running Clusterchirp with Docker

This guide explains how to run Clusterchirp locally using Docker, including chatbot setup using your own API keys.

---

# What is Docker?

Docker lets you run applications inside isolated environments called containers.  
Instead of manually installing every dependency, you download a prebuilt image and run it with a single command.

---

# Prerequisites

Before starting, make sure you have:

- Docker Desktop installed
- Docker currently running
- An internet connection to download the image

You can verify Docker is installed correctly by running:

```bash
docker --version
```

You should see output similar to:

```bash
Docker version 28.x.x
```

---

# Pull the Clusterchirp Docker Image

Download the latest Clusterchirp image from Docker Hub:

```bash
docker pull YOUR_DOCKER_IMAGE
```

Example:

```bash
docker pull username/clusterchirp:latest
```

This downloads the prebuilt Clusterchirp environment to your computer.

---

# API Keys for Chatbot Features

Clusterchirp’s chatbot functionality requires your own API keys.

The application does **not** provide keys automatically.

## Create a `.env` File

Create a file named `.env` in the same folder where you plan to run Docker.

Example:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

If multiple providers are supported:

```env
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
GOOGLE_API_KEY=your_google_api_key_here
```

Replace the placeholder values with your actual API keys.

---

# Important Security Note

Never:

- Upload your `.env` file publicly
- Commit API keys to GitHub
- Share your API keys with others

Your `.env` file should remain local to your machine.

---

# Running Clusterchirp

Run the Docker container:

```bash
docker run --env-file .env -p 8501:8501 YOUR_DOCKER_IMAGE
```

Example:

```bash
docker run --env-file .env -p 8501:8501 username/clusterchirp:latest
```

## What the Command Means

| Part | Meaning |
|---|---|
| `docker run` | Starts a container |
| `--env-file .env` | Loads API keys from `.env` |
| `-p 8501:8501` | Connects the app to your browser |
| `YOUR_DOCKER_IMAGE` | The Clusterchirp Docker image |

---

# Open the Application

Once the container starts, open:

```text
http://localhost:8501
```

in your browser.

---

# Running Without Chatbot Features

You can still run Clusterchirp without API keys:

```bash
docker run -p 8501:8501 YOUR_DOCKER_IMAGE
```

Some AI/chatbot functionality may be disabled.

---

# Stopping the Container

List currently running containers:

```bash
docker ps
```

Stop a container:

```bash
docker stop CONTAINER_ID
```

Example:

```bash
docker stop a1b2c3d4e5f6
```

---

# Updating Clusterchirp

Pull the newest version of the image:

```bash
docker pull YOUR_DOCKER_IMAGE
```

Then rerun the container.

---

# Common Issues

## Docker Is Not Running

Make sure Docker Desktop is open and running.

---

## Port Already in Use

If port `8501` is already occupied:

```bash
docker run --env-file .env -p 8502:8501 YOUR_DOCKER_IMAGE
```

Then open:

```text
http://localhost:8502
```

---

## Invalid API Key

Check that:

- Your API key is correct
- The `.env` file exists
- Variable names match exactly
- You restarted the container after editing `.env`

---

## Container Immediately Stops

Check container logs:

```bash
docker logs CONTAINER_ID
```

---

## Cannot Connect to Docker Daemon

Usually means Docker Desktop is not running.

Start Docker Desktop and try again.

---

# Useful Docker Commands

## View Running Containers

```bash
docker ps
```

## View All Containers

```bash
docker ps -a
```

## Remove a Container

```bash
docker rm CONTAINER_ID
```

## Remove an Image

```bash
docker rmi YOUR_DOCKER_IMAGE
```

---

# Example Full Workflow

```bash
# Pull image
docker pull username/clusterchirp:latest

# Create .env file
touch .env

# Run Clusterchirp
docker run --env-file .env -p 8501:8501 username/clusterchirp:latest

# Open in browser
http://localhost:8501
```

---

# Notes

- Docker containers are isolated from your main system.
- Your API keys stay local if stored in `.env`.
- Updating Clusterchirp usually only requires pulling the newest image.
- Restart the container whenever you change environment variables.
- The first startup may take slightly longer while Docker initializes the container.