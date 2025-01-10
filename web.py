import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Ruta del perfil de navegador de Edge
user_profile = r"C:\Users\Tito\AppData\Local\Microsoft\Edge\User Data"

# Configuración de Selenium
service = Service(r'msedgedriver.exe')
options = webdriver.EdgeOptions()
options.add_argument(f"user-data-dir={user_profile}")
options.add_argument("profile-directory=Default")  # Cambiar si usas otro perfil, como "Profile 1"

# Inicializar WebDriver
driver = webdriver.Edge(service=service, options=options)

# URL de la carpeta en Google Drive
url = "https://drive.google.com/drive/u/1/folders/1jC7XtcninLzTyqauk2dK2DPRko_elzVS"
driver.get(url)

try:
    # Esperar que la página cargue completamente
    WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'a-s-T'))  # Asegurarse de estar dentro de la carpeta de Drive
    )
    print("Sesión cargada correctamente. Accediendo al contenido de la carpeta...")

    # Realizar web scraping: Extraer los textos o enlaces
    files = driver.find_elements(By.CLASS_NAME, 'Q5txwe')  # Cambiar si el selector de archivos difiere
    for file in files:
        print(f"Archivo encontrado: {file.text}")

    # Simular clic en un botón (como hacer un archivo público)
    # Si el botón está visible
    make_public_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//button[@aria-label="Compartir"]'))  # Cambiar según el selector
    )
    make_public_button.click()

    # Esperar que cargue la ventana de compartir y seleccionar "Hacer público"
    public_option = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[text()="Cualquier persona con el enlace"]'))
    )
    public_option.click()
    print("Archivo configurado como público con éxito.")

except Exception as e:
    print(f"Error: {e}")
finally:
    # Cerrar navegador
    driver.quit()