from fastapi import FastAPI
from routers import analyze

# Create FastAPI app instance
app = FastAPI(
    title="Summit Backend",
    description="Handles AI stock analysis requests",
    version="1.0.0"
)

# Include API routes from /routers/analyze.py
app.include_router(analyze.router)