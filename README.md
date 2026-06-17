# ResearchX -  AI POWERED RESEARCH

## Project Overview

**ResearchX** is a full-stack project where i have used AI Ingegration . You can generate and download a  detailed Research of the given topic within a sigle click . 

![alt text](/README_ASSETS/image1.png)
## Motivation
One or two month earlier i was learning Python Programming and Gen-AI in python and for the sake learning AI integration I have made a CLI project , where you enter a research topic and AI generates the research and save it into a local Folder . Then I joined Hackclub Horizons , And while learning the rules and regulation before shipping a project , It mentioned we need a Web Playable version with a live link , as My initial version was based in CLI. So i need to convert in to WebPlayable , For that I Wrapped my project into an API so My frontend can communicate with backend and , Hence it become a web playable . And It's working good .

## What is it and what can it do ? 

It's just a Research tool which is powered by AI that : 
- Accepts a research topic 
![alt text](/README_ASSETS/image2.png)
- Searches the web in real-time for the given topic 
- Gathers all the website links for **scraping** from the web search 
- Uses Beautiful Soup to extract / scrape all websites content
- Uses LLM (OpenAI) to synthesize and make a Report by feeding the extracted Content


### Internal Features 
#### One click Report Generator 
- User submits one research topic , backend gives them back the complete research , No any complexity for the user's 
#### Multi Agent Orchestration 
- Backend Uses multiple agents to perform /  generate the report . 



# My backend has 2 Agents , each for 2 tasks . 
## Search Agent   
- This agent performs webSearch for the {research topic} ,  It has access [web_search] tool .
![alt text](/README_ASSETS/image3.png)

## Reader Agent 
- This agent goes inside each websites that were returned by the Search Agent and scrapes their content . It has access to [scrape_url] tool .

![alt text](/README_ASSETS/image4.png)


# The Actual Flow : 

-  User Give a topic to research about  : 
- Backend Uses it's agents in this order and finally it writes the report and sends back to the user via frontend : )  
![alt text](/README_ASSETS/image5.png)


## Tech Used

### Backend 
- **Runtime**: Python3
- **Framework**: FastAPI
- **AI/LLM**: OpenAI (GPT models)
- **Web Search**: Tavily API

### Frontend
- **Framework**: React 19
- **Routing**: React Router v7
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **UI**: Custom components with Tailwind

### AI Uses
- **chatGPT and Claude** -> I used them just for understanding logics which were unclear to me and for designing some of the frontend components
