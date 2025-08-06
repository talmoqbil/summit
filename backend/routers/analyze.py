from fastapi import APIRouter, HTTPException
from models.schema import StockRequest, StockResponse
from services.stock_service import fetch_stock_data

# Define a router to organize endpoints
router = APIRouter(prefix="/api/analyze", tags=["Analyze"])

@router.post("/", response_model=StockResponse)
def analyze_stock(req: StockRequest):
    """
    Accepts a stock ticker (e.g., AAPL), fetches financial data,
    and returns an AI-powered analysis (placeholder for now).
    """
    try:
        data = fetch_stock_data(req.symbol)
        return StockResponse(
            symbol=req.symbol,
            message="This is a placeholder analysis.",
            raw_data=data
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))