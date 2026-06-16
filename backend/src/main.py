from fastapi import FastAPI
from Pipeline.research_service_pipeline import run_research_pipeline
from pydantic import BaseModel, Field


class GenerateReport(BaseModel):
    topic: str = Field(..., min_length=3)


app = FastAPI(description="An API to generate research on Any given topic")


@app.post("/api/generate-report")
def generate_report(request_body: GenerateReport):
    topic = request_body.topic
    output_path = run_research_pipeline(topic=topic)
    #  Send this file as a response so user can download it : )
    return output_path


# if __name__ == "__main__":
#     topic = input("\n Enter a research topic : ")
#     run_research_pipeline(topic)
