//this is to test soil hunmidity / roughly calibrate the soil sensor

int val = 0; //value for storing moisture value 
int soilPin = A0;//Declare a variable for the soil moisture sensor 
int soilPower = 7;//Variable for Soil moisture Power

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);   // open serial over USB

  pinMode(soilPower, OUTPUT);//Set D7 as an OUTPUT
  digitalWrite(soilPower, LOW);//Set to LOW so no power is flowing through the sensor
}

void loop() {
  Serial.print("Soil Moisture = ");    
  //get soil moisture value from the function below and print it
  Serial.println(readSoil());

  //This 1 second timefrme is used so you can test the sensor and see it change in real-time.
  //For in-plant applications, you will want to take readings much less frequently.
  delay(1000);//take a reading every second
}

int readSoil()
{
    digitalWrite(soilPower, HIGH);
    delay(10);//wait 10 milliseconds 
    int soilMoist = analogRead(soilPin);
    digitalWrite(soilPower, LOW);
    return map(soilMoist, 0, 820, 0, 100);  
}
