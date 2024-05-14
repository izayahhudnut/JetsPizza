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

delete_old_products('GOOD DAY FARM CWE')
