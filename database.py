import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="avapark"
)

cursor = db.cursor()

for nummer in range(1, 205):
    spot_id = f"{nummer:03d}"

    if nummer % 3 == 0:
        status = "upptagen"
    else:
        status = "ledig"

    cursor.execute(
        "INSERT IGNORE INTO parking_spots (spot_id, status) VALUES (%s, %s)",
        (spot_id, status)
    )

db.commit()
cursor.close()
db.close()