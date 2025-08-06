import yfinance as yf
from backend.models.schema import StockResponse

def get_stock_data(ticker: str) -> StockResponse:
    """
    Fetches real-time stock data using Yahoo Finance (via yfinance)
    """
    stock = yf.Ticker(ticker)
    info = stock.info

    # Extract relevant fields (some may be None, so we use .get())
    return StockResponse(
        ticker=ticker.upper(),
        current_price=info.get("currentPrice"),
        pe_ratio=info.get("trailingPE"),
        market_cap=info.get("marketCap"),
        fifty_two_week_high=info.get("fiftyTwoWeekHigh"),
        fifty_two_week_low=info.get("fiftyTwoWeekLow"),
        dividend_yield=info.get("dividendYield"),
        forward_pe=info.get("forwardPE"),
        recommendation=info.get("recommendationKey")
    )
