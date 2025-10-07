import os
import serial
import json
import psycopg2
import time

try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    pass

SERIAL_PORT = os.getenv("SERIAL_PORT")
BAUD_RATE = int(os.getenv("BAUD_RATE"))

DB_CONFIG = {
    "host": os.getenv("PGHOST"),
    "port": os.getenv("PGPORT"),
    "dbname": os.getenv("PGDATABASE"),
    "user": os.getenv("PGUSER"),
    "password": os.getenv("PGPS"),
}

# PostgreSQL 연결
conn = psycopg2.connect(**DB_CONFIG)
cursor = conn.cursor()

# 시리얼 포트 열기
ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5)


try:
    while True:
        # print("Serial port open")
        line = ser.readline().decode("utf-8").strip()
        print(ser)

        if line:
            try:
                data = json.loads(line)
                # print(data)
                light_value = data

                # PostgreSQL에 데이터 삽입
                cursor.execute(
                    "INSERT INTO light_sensor (light_value, insert_date) VALUES (%s, now())",
                    (light_value,)
                )
                conn.commit()

                # print(f"Saved: {light_value}")
                # 10분 대기 (600)
                # 1분 대기 (60)
                time.sleep(60)


            except json.JSONDecodeError:
                print("Invalid data format:", line)

except KeyboardInterrupt:
    print("Stopping...")
    ser.close()
    cursor.close()
    conn.close()