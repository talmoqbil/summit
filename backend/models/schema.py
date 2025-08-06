from pydantic import BaseModel

# Input schema for POST request
class StockRequest(BaseModel):
    symbol: str  # e.g., "AAPL"

# Output schema for response
class StockResponse(BaseModel):
    symbol: str
    message: str
    raw_data: dict  # raw data fetched from external API