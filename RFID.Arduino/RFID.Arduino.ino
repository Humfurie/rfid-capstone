/*
 * ----------------------------------------------------------------------
 * Example program showing how to read new NUID from a PICC to serial.
 * ----------------------------------------------------------------------
 * https://circuits4you.com
 * 
 * RC522 Interfacing with NodeMCU
 * 
 Typical pin layout used:
 * ---------------------------------------------------------------------
 *             MFRC522      Arduino       Arduino   Arduino    Arduino          Arduino
 *             Reader/PCD   Uno/101       Mega      Nano v3    Leonardo/Micro   Pro Micro
 * Signal      Pin          Pin           Pin       Pin        Pin              Pin
 * ----------------------------------------------------------------------
 * RST/Reset   RST          9             5         D9         RESET/ICSP-5     RST
 * SPI SS      SDA(SS)      10            53        D10        10               10
 * SPI MOSI    MOSI         11 / ICSP-4   51        D11        ICSP-4           16
 * SPI MISO    MISO         12 / ICSP-1   50        D12        ICSP-1           14
 * SPI SCK     SCK          13 / ICSP-3   52        D13        ICSP-3           15
 */

#include <SPI.h>
#include <MFRC522.h>

constexpr uint8_t RST_PIN = 9;  // Configurable, see typical pin layout above
constexpr uint8_t SS_PIN = 10;  // Configurable, see typical pin layout above

MFRC522 rfid(SS_PIN, RST_PIN);  // Instance of the class

MFRC522::MIFARE_Key key;

// Init array that will store new NUID
byte nuidPICC[4];

void setup() {
  Serial.begin(9600);
  SPI.begin();      // Init SPI bus
  rfid.PCD_Init();  // Init MFRC522

  for (byte i = 0; i < 6; i++) {
    key.keyByte[i] = 0xFF;
  }

  Serial.println(F("This code scan the MIFARE Classsic NUID."));
  Serial.print(F("Using the following key:"));
  printHex(key.keyByte, MFRC522::MF_KEY_SIZE);
}

void loop() {
  int sensorValue = analogRead(A0);
  // Look for new cards
  if (!rfid.PICC_IsNewCardPresent()) return;

  // Verify if the NUID has been readed
  if (!rfid.PICC_ReadCardSerial())
    return;

  Serial.print(F("PICC type: "));
  MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
  Serial.println(rfid.PICC_GetTypeName(piccType));

  // Check is the PICC of Classic MIFARE type
  // if (piccType != MFRC522::PICC_TYPE_MIFARE_MINI &&
  //   piccType != MFRC522::PICC_TYPE_MIFARE_1K &&
  //   piccType != MFRC522::PICC_TYPE_MIFARE_4K) {
  //   Serial.println(F("Your tag is not of type MIFARE Classic."));
  //   return;
  // }

  // if (rfid.uid.uidByte[0] != nuidPICC[0] ||
  //   rfid.uid.uidByte[1] != nuidPICC[1] ||
  //   rfid.uid.uidByte[2] != nuidPICC[2] ||
  //   rfid.uid.uidByte[3] != nuidPICC[3] ) {
  //   Serial.println(F("A new card has been detected."));
  //   Serial.println(rfid.uid.uidByte[0]);

  // Store NUID into nuidPICC array
  for (byte i = 0; i < 4; i++) {
    nuidPICC[i] = rfid.uid.uidByte[i];
  }

  Serial.println(F("The NUID tag is:"));
  Serial.print(F("In hex: "));
  printHex(rfid.uid.uidByte, rfid.uid.size);
  Serial.println();
  Serial.print(F("In dec: "));
  printDec(rfid.uid.uidByte, rfid.uid.size);
  Serial.println();
  // }
  // else Serial.println(F("Card read previously."));

  // Halt PICC
  rfid.PICC_HaltA();

  // Stop encryption on PCD
  rfid.PCD_StopCrypto1();
  //  int num = (rfid.uid.uidByte, rfid.uid.size);
  //  Serial.println(F("thus the number: "));
  //  Serial.println(num);

  Serial.write(sensorValue);
}


/**
 * Helper routine to dump a byte array as hex values to Serial. 
 */
void printHex(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], HEX);
  }
}

/**
 * Helper routine to dump a byte array as dec values to Serial.
 */
void printDec(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    // Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], DEC);
  }
}
