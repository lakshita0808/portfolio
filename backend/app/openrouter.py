import httpx
from .config import OPENROUTER_API_KEY

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

async def call_openrouter(messages):
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://portfolio-lakshita.vercel.app",
        "X-Title": "AI Portfolio Assistant"
    }

    payload = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 500
    }

    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(OPENROUTER_URL, json=payload, headers=headers)
            
            print(f"[OpenRouter] Status: {response.status_code}")
            print(f"[OpenRouter] API Key: {OPENROUTER_API_KEY[:20]}...")
            
            if response.status_code == 200:
                data = response.json()
                if "choices" in data and len(data["choices"]) > 0:
                    return data["choices"][0]["message"]["content"]
                else:
                    return "I couldn't process that request. Please try again."
            else:
                print(f"[OpenRouter] Error {response.status_code}")
                print(f"[OpenRouter] Response: {response.text}")
                response.raise_for_status()
                
    except httpx.TimeoutException as e:
        print(f"[OpenRouter] Timeout Error: {e}")
        raise
    except httpx.HTTPError as e:
        print(f"[OpenRouter] HTTP Error: {e}")
        raise
    except Exception as e:
        print(f"[OpenRouter] Error: {type(e).__name__}: {e}")
        raise
