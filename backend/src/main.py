from fastapi import FastAPI
from Pipeline.research_service_pipeline import run_research_pipeline
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import FileResponse
import os


class GenerateReport(BaseModel):
    topic: str = Field(..., min_length=3)


app = FastAPI(description="An API to generate research on Any given topic")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("CLIENT_URL")],  # tighten this in production
    allow_methods=["POST"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "working!"}


@app.post("/api/generate-report")
def generate_report(request_body: GenerateReport):
    topic = request_body.topic

    #  Send topic and report as a response so user can view it and can fownload it using frontend : )
    return run_research_pipeline(topic=topic)


# if __name__ == "__main__":
#     topic = input("\n Enter a research topic : ")
#     run_research_pipeline(topic)
