#include "DHT.h"
#include "ArduinoJson.h"

#define DHTPIN 6 
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
int soilMoist = 0;
int soilPin = A0;
int soilPower = 7;
DynamicJsonBuffer jsonBuffer;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  dht.begin();
  
}
/*  
 * This loop reads soil moisture, ambient temperature, and relative humidity
 * every four hours.
 * Values are written to serial and then processed elsewhere.
 */
void loop() {

  float soilM = (float)readSoil();
  float hum = dht.readHumidity();
  float temp = dht.readTemperature();

  JsonObject& root = jsonBuffer.createObject();
  root["soil moisture"] = soilM;
  root["temperature"] = temp;
  root["humidity"] = hum;

  root.printTo(Serial);
  Serial.println("");
  delay(3000);
   
}

/* 
 * This function reads the soil moisture when it is called, and maps the resulting moisture value to
 * a scale from 0 to 100.   
 * 
 */
int readSoil()
{
    digitalWrite(soilPower, HIGH);
    delay(1000);
    int soilMoist = analogRead(soilPin);
    digitalWrite(soilPower, LOW);
    return map(soilMoist, 0, 820, 0, 100);  
}
