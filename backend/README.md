# AI-Powered Multi-Agent Research System - Backend

## Overview

This is the backend service for the **AI-Powered Multi-Agent Research System**, a sophisticated research automation platform that leverages AI agents and LangChain to perform comprehensive web research and information gathering.

### Key Features

- **Multi-Agent Architecture**: Coordinated AI agents for specialized research tasks
- **LangChain Integration**: Advanced language model capabilities and tool orchestration
- **Tavily Search Integration**: Real-time web search capabilities
- **OpenAI Integration**: State-of-the-art language models for analysis
- **Modular Design**: Organized into Agents, Configs, Pipeline, and Tools modules
- **Rich CLI Output**: Enhanced terminal display for research results

---

## Prerequisites

Before getting started, ensure you have the following:

- **Python 3.11 or higher** - The project requires Python 3.11+
- **uv Package Manager** - Fast and reliable Python package manager (recommended over pip)
- **Git** - For version control (optional, if cloning from repository)
- **API Keys** - Tavily API key and OpenAI API key

---

## Setup Instructions

### Step 1: Install Python

#### Windows

1. Download Python 3.11+ from [python.org](https://www.python.org/downloads/)
2. Run the installer
3. **Important**: Check "Add Python to PATH" during installation
4. Verify installation:
   ```bash
   python --version
   ```

#### macOS

```bash
brew install python@3.11
```

#### Linux (Ubuntu/Debian)

```bash
sudo apt-get update
sudo apt-get install python3.11 python3.11-venv
```

---

### Step 2: Install uv Package Manager

uv is a faster alternative to pip for managing Python dependencies.

#### All Platforms

```bash
# Using pip
pip install uv

# Or using pipx (recommended)
pipx install uv
```

Verify installation:

```bash
uv --version
```

---

### Step 3: Clone or Navigate to Project

```bash
# If cloning from repository
git clone <repository-url>
cd backend

# Or if already in the project directory
cd backend
```

---

### Step 4: Create Virtual Environment

Creating a virtual environment keeps your project dependencies isolated from your system Python.

```bash
# Using uv
uv venv

# Or using native Python venv
python -m venv venv
```

#### Activate Virtual Environment

**Windows (Command Prompt)**:

```bash
venv\Scripts\activate
```

**Windows (PowerShell)**:

```bash
venv\Scripts\Activate.ps1
```

**macOS/Linux**:

```bash
source venv/bin/activate
```

You should see `(venv)` prefix in your terminal after activation.

---

### Step 5: Install Dependencies

```bash
# Using uv (faster)
uv pip install -e .

# Or using pip
pip install -e .
```

This installs all required dependencies specified in `pyproject.toml`:

- beautifulsoup4 (Web scraping)
- langchain & langchain-core (AI agent framework)
- langchain-openai (OpenAI integration)
- langchain-tavily (Tavily search integration)
- langchain-community (Community tools)
- python-dotenv (Environment variable management)
- rich (Enhanced terminal output)

---

### Step 6: Configure Environment Variables

1. **Create `.env` file from template**:

   ```bash
   # Copy the example environment file
   copy .env.example .env          # Windows
   cp .env.example .env            # macOS/Linux
   ```

2. **Fill in your API Keys**:

   Open `.env` in your text editor and add:

   ```env
   # Tavily API Key - Get from https://tavily.com/
   TAVILY_API_KEY=your_tavily_api_key_here

   # OpenAI API Key - Get from https://platform.openai.com/api-keys
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Get Your API Keys**:
   - **Tavily API**: Sign up at [tavily.com](https://tavily.com) and generate an API key
   - **OpenAI API**: Sign up at [platform.openai.com](https://platform.openai.com) and create an API key

---

### Step 7: Verify Setup

Test that everything is configured correctly:

```bash
# Check Python version
python --version

# Check virtual environment is active (should show venv path)
which python  # macOS/Linux
where python  # Windows

# Check installed packages
pip list
```

---

### Step 8: Run the Application

```bash
# Run the main application
python src/main.py
```

If successful, you should see the application start and begin processing research requests.

---

## Project Structure

```
backend/
├── src/
│   ├── Agents/              # AI agent implementations
│   ├── Configs/             # Configuration files
│   ├── Pipeline/            # Research pipeline orchestration
│   ├── Tools/               # Tool definitions and utilities
│   └── main.py             # Application entry point
├── pyproject.toml          # Project dependencies and metadata
├── .env.example            # Example environment variables
├── .python-version         # Python version specification (3.11)
├── uv.lock                 # Dependency lock file (uv)
└── README.md              # This file
```

---

## Troubleshooting

### Virtual Environment Issues

**Problem**: `python: command not found` after activation

```bash
# Solution: Reinstall Python and ensure it's in PATH
# Windows: Run Python installer again, check "Add Python to PATH"
# macOS: brew install python@3.11
# Linux: sudo apt-get install python3.11
```

### Dependency Installation Issues

**Problem**: `ModuleNotFoundError` when running application

```bash
# Solution: Ensure all dependencies are installed
uv pip install -e .
# Or
pip install -e .
```

### Missing API Keys

**Problem**: `APIKeyNotFound` or authentication errors

```bash
# Solution: Verify .env file exists and has correct keys
cat .env  # macOS/Linux
type .env  # Windows

# Make sure TAVILY_API_KEY and OPENAI_API_KEY are set
```

### UV Installation Issues

**Problem**: `uv: command not found`

```bash
# Solution: Install uv using pip
pip install uv
# Then verify
uv --version
```

---

## Development Workflow

### Running in Development Mode

```bash
# Activate virtual environment
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate     # Windows

# Run application
python src/main.py
```

### Deactivating Virtual Environment

When finished, deactivate the virtual environment:

```bash
deactivate
```

---

## Additional Commands

```bash
# Update dependencies
uv pip install --upgrade -e .

# View installed packages
pip list

# Create a requirements.txt
pip freeze > requirements.txt

# Install from requirements.txt
pip install -r requirements.txt
```

---

## Support & Documentation

- **LangChain Documentation**: https://python.langchain.com/
- **Tavily Search API**: https://tavily.com/docs
- **OpenAI API Reference**: https://platform.openai.com/docs/api-reference

---

## License

[Add your license information here]

---

**Last Updated**: 2026-05-14
