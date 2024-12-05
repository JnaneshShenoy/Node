import csv
import json

# Hardcoded CSV data as a string for now
csv_data = """
Time,Name,Type,Source
07:26,Padmambikaa,"Express, UC",Mangalore
07:30,Vishal,Express,Mangalore
07:32,Reshma,Hybrid,Udupi
07:35,Navadurga Prasad,Express,Shivmogga
07:51,Srilaxmi,Local,Kateel
08:03,Kusuma,Express,Mangalore
08:08,Milan,Local,Udupi
08:10,Vishal,Express,Mangalore
08:22,Mercy,Local,Mangalore
08:36,Navadurga Prasad,Express,Mangalore
08:37,Keerthi,Local,Udupi
08:41,Navadurga Prasad,Express,Mangalore
09:17,Sangam,Local,Udupi
09:20,Laxmi Ganesh,Express,Mangalore
09:49,Padmambikaa,Express,Mangalore
09:51,Naveen,Local,Udupi
09:56,Naveen,Local,Udupi
10:08,P.M Travels,Local,Udupi
10:17,Padmambikaa,Express,Mangalore
10:28,Padmambikaa,"Express, UC",Mangalore
10:30,Jeevan,"Local, UC",Manchakal
10:55,Shree Padma,"Local, UC",Udupi via Kapu
11:01,Padmambikaa,"Express, UC",Mangalore
11:10,Rajarajeshwari,"Express, UC",Mangalore
11:17,Naveen,"Local, UC",Udupi
11:33,Vishal,Express,Mangalore
11:39,Kanthi,Local,Udupi
11:51,Kanthi,Local,Udupi
12:03,Shahil,Local,Udupi via Padubidri
12:05,Vishal,Express,Mangalore
12:11,Vishal,Express,Mangalore
12:11,Christa Jyothi,Local,Udupi
12:14,Nandini,Local,Mangalore
12:16,Vishal,Express,Mangalore
12:24,Navadurga Prasad,Express,Mangalore
12:36,Vishal,"Express, UC",Mangalore
12:43,Sangam,Local,Mulki
12:44,Bharathi,Express,Padubidri
12:50,Bharathi,Express,Udupi
12:52,Navadurga Prasad,Express,Mangalore
01:03,Vishal,Express,Mangalore
01:10,Milan,Local,Udupi
01:16,Sangam,Local,Udupi
01:20,Keerthi,Fast Service - Local,Udupi
01:23,Laxmi Ganesh,Express,Mangalore
01:35,Reshma,Express,Mangalore
01:43,Christa Jyothi,Local,Udupi
01:49,Padmambikaa,Express,Mangalore
02:06,Pranam,Local,Kateel
02:08,Padmambikaa,"Express, UC",Mangalore
02:15,Sangam,Local,Udupi
02:25,Rashmi Travels,Local,Kateel
02:36,Naveen,Local,Udupi
02:38,Vishal,"Express, UC",Mangalore
02:51,Padmambikaa,Express,Mangalore
02:52,Christa Kiran,Express,Mangalore
03:06,Naveen,Local,Udupi
03:09,Padmambikaa,Express,Mangalore
03:23,Naveen,Local,Udupi
03:25,Vishal,Express,Mangalore
03:28,Ayra,Express,Mangalore
03:32,Shree Padma,"Local, UC",Udupi via Kapu
03:40,Sangam,Local,Udupi
03:43,Vishal,"Express, UC",Mangalore
03:55,Shree Annapoorneshwari,Express,Mangalore
04:08,Mercy,Express,Mangalore
04:12,Navadurga Prasad,Express,Mangalore
04:21,Kanthi,Local,Udupi
04:26,Vishal,Express,Mangalore
04:40,Vishal,Express,Mangalore
04:44,Sangam,Local,Udupi
04:46,Vishal,Express,Mangalore
04:58,Bharathi,Express,Udupi
04:59,Vishal,Express,Mangalore
05:07,Pranam,Local,Kateel
05:40,Sangam,"Local, UC",Udupi
05:39,"Rajarajeshwari ","Express, UC",Mangalore
05:49,"Keerthi ","Local, UC",Udupi
05:51,Laxmi Ganesh,"Express, UC",Mangalore
06:05,Star,"Local, UC",Udupi
06:37,Star,"Express, UC",Udupi
"""

# Initialize an empty list to hold bus data
json_data = []

# Use csv.DictReader to read the CSV data
reader = csv.DictReader(csv_data.strip().splitlines())

# Loop through the CSV rows, taking only the first two rows for now
for i, row in enumerate(reader):
   #  if i == 2:  # Stop after the first 2 rows
   #      break
    bus_entry = {
        "type": row["Type"].split(",")[0].strip().lower(),  # Extract only "express" or "local" from type
        "busName": row["Name"],
        "busTiming": row["Time"],
        "destination": "Karkala"
    }
    json_data.append(bus_entry)

# Write the JSON data to a file
json_file_path = 'karkala.json'
with open(json_file_path, mode='w') as jsonfile:
    json.dump(json_data, jsonfile, indent=2)

print(f"Data has been successfully written to {json_file_path}")
