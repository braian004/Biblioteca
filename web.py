from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.edge.service import Service

# Configuración de Selenium
service = Service(r'C:\Users\Tito\Desktop\PROYECTOS\BIBLIOTECA\msedgedriver.exe')
options = webdriver.EdgeOptions()
driver = webdriver.Edge(service=service, options=options)

# URL del libro
url = "https://es.z-lib.gs/book/5451386/310399/fundamentos-de-sql.html?dsource=recommend"

# Cargar la página
driver.get(url)

try:
    # Esperar al elemento del enlace de descarga
    download_link_element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'addDownloadedBook'))
    )
    # Extraer el enlace de descarga más reciente
    download_link = download_link_element.get_attribute('href')
    print(f"Enlace dinámico extraído: {download_link}")
except Exception as e:
    print(f"Error al obtener el enlace de descarga: {e}")
finally:
    input("Presiona Enter para salir y cerrar el navegador...")
    driver.quit()


# es.z-lib.gs/dl/5451386/289594?dsource=recommend