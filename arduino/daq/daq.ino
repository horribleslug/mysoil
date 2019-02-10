/*
 * This daq program is based on the official guides (by the manufacturers) of each of the sensors
 * as well as the ArduinoJson library.
 */

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
  Serial.begin(9600);
  dht.begin();
  delay(2000);
  
}
/*  
 * This loop reads soil moisture, ambient temperature, and relative humidity
 * once per day. Note that time between readings is customizable!
 * Values are written to serial and then processed elsewhere.
 * DynamicJsonBuffer necessitates that the device be restarted every ~50 days or so (assuming readings
 * of once a day.)
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

  //this is the time taken between subsequent readings.
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
