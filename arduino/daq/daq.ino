#include <ArduinoJson.h>
#include <SoftwareSerial.h>

const int capacity = JSON_OBJECT_SIZE(3);
StaticJsonBuffer<capacity> jb;
int soilPin = A0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  
  
}

void loop() {
// This loop reads soil moisture, ambient temperature, and relative humidity
// every four hours.
// Values are written to serial and then processed elsewhere.

  soil_moisture = readSoil();
  temperature = readTemp();
  rhum = readHumid();
  delay(14400000);
   
}

/* This function reads the soil moisture when it is called, and maps the resulting moisture value to
   
   */
int readSoil()
{
    digitalWrite(soilPower, HIGH);
    delay(10);//wait 10 milliseconds 
    int soilMoist = analogRead(soilPin);
    digitalWrite(soilPower, LOW);
    return map(soilMoist, 0, 880, 0, 100);  
}

int readTemp()
{
  digitalWrite(tempPow, HIGH);
  delay(10);
  int temperature = analogRead(tempPin);
  digitalWrite(tempPow, LOW);
  return temperature;
}

int readHumid()
{
  digitalWrite(H
}
