from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
driver=webdriver.Chrome()
try:
    driver.get("https://www.google.com")
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("https://cmrcet.ac.in/")
    search_box.send_keys(Keys.RETURN)
    time.sleep(20)
finally:
    driver.quit()

#python -m venv myenv
#myenv\Scripts\activate
