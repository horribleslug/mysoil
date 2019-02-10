#include "DHT.h"

#define DHTPIN 6 
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
int soilMoist = 0;
int soilPin = A0;
int soilPower = 7;

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
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  Serial.println(soilM);
  Serial.println(h);
  Serial.println(t);
  delay(1000);
   
}

/* 
 * This function reads the soil moisture when it is called, and maps the resulting moisture value to
 * a scale from 0 to 100.   
 * 
 * AS OF 11:50 PM: Note that 0 corresponds to dry air, and 100 corresponds to just water. Further calibration is needed and
 * is not done in the arduino, but rather after the data is sent to the webapp.
 */
int readSoil()
{
    digitalWrite(soilPower, HIGH);
    delay(1000);
    int soilMoist = analogRead(soilPin);
    digitalWrite(soilPower, LOW);
    return map(soilMoist, 0, 820, 0, 100);  
}
