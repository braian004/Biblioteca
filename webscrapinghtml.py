from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Especificar la ubicación del msedgedriver.exe
service = Service(r'C:\Users\Tito\Desktop\PROYECTOS\BIBLIOTECA\msedgedriver.exe')  # Especificar el path correcto
driver = webdriver.Edge(service=service)

# Ingresar URL
url = 'https://drive.google.com/drive/u/1/folders/1jC7XtcninLzTyqauk2dK2DPRko_elzVS'
driver.get(url)

# Usar espera explícita para esperar que los elementos estén completamente cargados
try:
    # Esperar hasta que la imagen esté visible (usando XPath)
    image_element = WebDriverWait(driver, 16).until(
        EC.presence_of_element_located((By.XPATH, '//img[@class="image cover"]'))
    )
    
    # Extraer la URL de la imagen
    image_url = image_element.get_attribute('src')

    # Mostrar la URL de la imagen
    print('URL de la imagen:', image_url)

except Exception as e:
    print("Error durante el web scraping:", e)

# Cerrar el navegador
driver.quit()
