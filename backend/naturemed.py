import requests
import psycopg2


def delete_old_products(dispensary_name):
    # Connection string for the PostgreSQL database
    connection_string = "postgresql://Saint%20Louis%20CBD_owner:sE9LfUCQ8jYI@ep-patient-glitter-a5smczga.us-east-2.aws.neon.tech/Saint%20Louis%20CBD?sslmode=require"
    conn = psycopg2.connect(connection_string)
    cursor = conn.cursor()

    # Delete all products associated with the specified dispensary
    cursor.execute("""
        DELETE FROM products
        WHERE dispensary = %s;
    """, (dispensary_name,))

    conn.commit()  # Commit the changes
    cursor.close()  # Close cursor
    conn.close()  # Close connection

def insert_products(products):
    connection_string = "postgresql://Saint%20Louis%20CBD_owner:sE9LfUCQ8jYI@ep-patient-glitter-a5smczga.us-east-2.aws.neon.tech/Saint%20Louis%20CBD?sslmode=require"
    conn = psycopg2.connect(connection_string)
    cursor = conn.cursor()
    for product in products:
        print("Inserting product:", product)  # Print each product
        if product['Dispensary'] == 'Nature Med Dispensary':
            cursor.execute("""
                INSERT INTO products (product_name, strain_type, brand_name, cbd, price, dispensary, image, sales)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT (product_name) DO UPDATE SET
                strain_type = EXCLUDED.strain_type,
                brand_name = EXCLUDED.brand_name,
                cbd = EXCLUDED.cbd,
                image = EXCLUDED.image,
                price = EXCLUDED.price,
                dispensary = EXCLUDED.dispensary,
                sales = EXCLUDED.sales
            """, (
                product['Product Name'],
                product['Strain Type'],
                product['Brand Name'],
                product['cbd'],
                product['Price'],
                product['Dispensary'],
                product['Image'],
                product['sales'],

            ))
    conn.commit()
    cursor.close()
    conn.close()



proxy_url = "http://{username}:{password}@{proxy_host}:{proxy_port}"
username = "brd-customer-hl_de823550-zone-residential_proxy1"
password = "vpnvpgdej1tj"
proxy_host = "brd.superproxy.io"
proxy_port = "22225"

proxies = {
    "http": proxy_url.format(username=username, password=password, proxy_host=proxy_host, proxy_port=proxy_port),
    "https": proxy_url.format(username=username, password=password, proxy_host=proxy_host, proxy_port=proxy_port)
}

url = "https://dutchie.com/graphql?operationName=FilteredProducts&variables=%7B%22includeEnterpriseSpecials%22%3Afalse%2C%22includeCannabinoids%22%3Atrue%2C%22productsFilter%22%3A%7B%22dispensaryId%22%3A%225fdbd193eff50d4b6016c420%22%2C%22pricingType%22%3A%22rec%22%2C%22strainTypes%22%3A%5B%5D%2C%22subcategories%22%3A%5B%5D%2C%22Status%22%3A%22Active%22%2C%22types%22%3A%5B%22CBD%22%5D%2C%22useCache%22%3Afalse%2C%22sortDirection%22%3A1%2C%22sortBy%22%3A%22brand%22%2C%22isDefaultSort%22%3Atrue%2C%22bypassOnlineThresholds%22%3Afalse%2C%22isKioskMenu%22%3Afalse%2C%22removeProductsBelowOptionThresholds%22%3Atrue%7D%2C%22page%22%3A0%2C%22perPage%22%3A50%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f11219bcda57a977362ddbf34b4b5fa0815fe066914181a5012e1127f01de712%22%7D%7D"


headers = {
   'Accept': '*/*',
   'Content-Type': 'application/json',
   'Referer': 'https://dutchie.com/embedded-menu/nature-med-st-louis/products/cbd',
   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
   'X-Dutchie-Session': 'session=eyJpZCI6ImVkNTZmYWM1LTQ2YWYtNDI4Ni1hMTg0LWI0MzY2YjM4ZThlZCIsImV4cGlyZXMiOjE3MTI4OTA5NDI1Nzh9;session_sig=6JcdQSTuMROvvfTDRU3yZg3iJMU',
}


response = requests.get(url, headers=headers, proxies=proxies, verify='/Users/izayahhudnut/Documents/Budtenders/thegreenest/backend/ca.crt')


new_products = []
if response.status_code == 200:
   data = response.json()
   products = data['data']['filteredProducts']['products']
   for product in products:
       cbd_content = product['CBDContent']['range'][0] if product['CBDContent'] and product['CBDContent']['range'] else ""
       sales_data =  product['recSpecialPrices'][0]  if product['recSpecialPrices'] else ""
       new_products.append({
           'Product Name': product['Name'],
           'Strain Type': product['strainType'],
           'Brand Name': product['brand']['name'],
           'cbd': cbd_content,
           'Price': product['Prices'][0] if product['Prices'] else "N/A",
           'Dispensary': 'Nature Med Dispensary',
            'Image': product['Image'],
            'sales': sales_data

       })


delete_old_products('Nature Med Dispensary')
insert_products(new_products)
