# nextJs_fastapi_traefik

This full-stack application integrates Next.js for the frontend, FastAPI for the backend, and Traefik as the dynamic routing and reverse proxy server. 

## Branch

-  Boilerplate

## Installation

```bash
cp client/.env.EXAMPLE client/.env
cp server/app/.env.EXAMPLE server/app/.env
```

## Run 

```bash
cd  server
python -m venv venv &&  . venv/bin/activate && pip install -r requirements.txt && fastapi dev app/main.py

cd client
npm i 
npm run dev
```