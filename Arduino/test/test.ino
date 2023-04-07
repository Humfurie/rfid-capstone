

int cave = 11;
int lever = A0;

void setup()
{
  pinMode(cave, OUTPUT);
  pinMode(lever, INPUT);

}
void loop()
{
  int analogValue = analogRead(lever);
  int war = map(analogValue, 0, 1023, 0, 255);
  digitalWrite(cave, war);
  delay(100);

}
