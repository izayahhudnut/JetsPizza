import psycopg2

dispensaries = [
    {
        "name": "Good Day Farm Dispensary St. Louis CWE",
        "url": "https://gooddayfarmdispensary.com/good-day-farm-st-louis-cwe/",
        "hours": "Sunday to Saturday: 9 AM – 8 PM",
        "address": "20 S Euclid Ave, St. Louis, MO 63108",
        "coordinates": "38.639561, -90.262062"
    },
    {
        "name": "SWADE Dispensary Delmar",
        "url": "https://swadecannabis.com/delmar",
        "hours": "Sun-Thu: 9 AM – 8 PM, Fri-Sat: 9 AM – 10 PM",
        "address": "6166 Delmar Blvd, St. Louis, MO 63112",
        "coordinates": "38.65507, -90.29846"
    },
    {
        "name": "Luxury Leaf Marijuana Dispensary",
        "url": "https://www.luxuryleafstl.com/?utm_source=terrayn_gbp&utm_medium=organic&utm_campaign=st_louis",
        "hours": "Sunday: 9 AM – 6 PM, Mon-Sat: 8 AM – 8 PM",
        "address": "1463a S Vandeventer Ave, St. Louis, MO 63110",
        "coordinates": "38.62398, -90.25407"
    },
    {
        "name": "CBD Kratom CWE",
        "url": "https://shopcbdkratom.com/",
        "hours": "Monday to Saturday: 8 AM – 10 PM",
        "address": "115 N Euclid Ave B, St. Louis, MO 63108",
        "coordinates": "38.64246, -90.26216"
    },
    {
        "name": "Blue Sage Cannabis Deli",
        "url": "https://bluesagecanna.com/",
        "hours": "Sunday: 9 AM – 8 PM, Mon-Sat: 8 AM – 8 PM",
        "address": "1015 McCausland Ave, St. Louis, MO 63117",
        "coordinates": "38.63242, -90.305168"
    },
    {
        "name": "Root 66 Dogtown",
        "url": "https://www.root66cannabis.com/",
        "hours": "Daily: 8 AM – 8 PM",
        "address": "6660 Manchester Ave, St. Louis, MO 63139",
        "coordinates": "38.618601, -90.302115"
    },
    {
        "name": "Bloc Dispensary Richmond Heights",
        "url": "http://www.blocdispensary.com/",
        "hours": "Daily: 8 AM – 8 PM",
        "address": "1026 S Brentwood Blvd, Richmond Heights, MO 63117",
        "coordinates": "38.6368155, -90.3457825"
    },
    {
        "name": "Greenlight Marijuana Dispensary Rock Hill",
        "url": "https://greenlightdispensary.com/rock-hill/?utm_source=terrayn_gbp&utm_medium=organic&utm_campaign=rock_hill",
        "hours": "Sun-Thu: 9 AM – 9 PM, Fri: 8 AM – 10 PM, Sat: 8 AM – 10 PM",
        "address": "9800 Manchester Rd, St. Louis, MO 63119",
        "coordinates": "38.606988, -90.373003"
    },
    {
        "name": "3Fifteen Primo Cannabis",
        "url": "https://3fifteenprimo.com/stores/st-louis/",
        "hours": "Sunday to Saturday: 9 AM – 8 PM",
        "address": "5501 Chippewa St, St. Louis, MO 63109",
        "coordinates": "38.592624, -90.285978"
    },
    {
        "name": "Star Buds",
        "url": "https://st-louis.starbudsmo.com/stores/Star-Buds-St-Louis?_gl=1*9j958k*_ga*NjIyMDMzNDYwLjE3MTI1MjUyODQ.*_ga_PLTF24JY8P*MTcxMjUyNTI4NC4xLjAuMTcxMjUyNTI4NC42MC4wLjA.",
        "hours": "Daily: 8 AM – 10 PM",
        "address": "7555 Olive Blvd, St. Louis, MO 63130",
        "coordinates": "38.6720215, -90.3340479"
    }
]
def insert_dispensary_data(conn, dispensary):
    with conn.cursor() as cur:
        cur.execute("""
            INSERT INTO dispensaries (name, url, hours, address, coordinates)
            VALUES (%s, %s, %s, %s, %s);
        """, (dispensary['name'], dispensary['url'], dispensary['hours'], dispensary['address'], dispensary['coordinates']))
        conn.commit()

def main():
    # Connect to the Neon database
    connection_string = "postgresql://Saint%20Louis%20CBD_owner:sE9LfUCQ8jYI@ep-patient-glitter-a5smczga.us-east-2.aws.neon.tech/dispensary?sslmode=require"
    conn = psycopg2.connect(connection_string)

    # Insert each dispensary data
    for dispensary in dispensaries:
        insert_dispensary_data(conn, dispensary)

    # Close the connection
    conn.close()

if __name__ == "__main__":
    main()