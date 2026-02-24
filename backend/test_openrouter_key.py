import asyncio
import httpx
from app.config import OPENROUTER_API_KEY

async def test_api_key():
    print(f"Testing OpenRouter API with key: {OPENROUTER_API_KEY[:40]}...")
    print("=" * 60)
    
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://portfolio-lakshita.vercel.app",
        "X-Title": "AI Portfolio Assistant"
    }
    
    payload = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Say hello"}
        ],
        "temperature": 0.7,
        "max_tokens": 50
    }
    
    try:
        async with httpx.AsyncClient(timeout=30.0) as client:
            print("\n📤 Sending request to OpenRouter API...")
            response = await client.post(
                "https://openrouter.ai/api/v1/chat/completions",
                json=payload,
                headers=headers
            )
            
            print(f"\n✅ Status Code: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                message = data["choices"][0]["message"]["content"]
                print(f"\n🎉 SUCCESS! API is working!")
                print(f"\n📝 Response: {message}")
                print(f"\n✨ API Key is VALID and WORKING!")
                return True
            else:
                print(f"\n❌ Error {response.status_code}")
                print(f"Response: {response.text[:500]}")
                return False
    except Exception as e:
        print(f"\n❌ Error: {type(e).__name__}: {e}")
        return False

if __name__ == "__main__":
    result = asyncio.run(test_api_key())
    exit(0 if result else 1)
