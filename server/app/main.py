import os
from dotenv import load_dotenv
load_dotenv() 
from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import httpx
import json
import base64

app = FastAPI()

origins = [
    os.environ.get('URL_FRONTEND')
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v1/welcome")
async def read_repo():
    return { "data":{"description": "This full-stack application integrates Next.js for the frontend, FastAPI for the backend, and Traefik as the dynamic routing and reverse proxy server. ","title": "This is a  traefik demo"}, "status": 200}