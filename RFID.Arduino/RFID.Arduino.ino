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

  Serial.println(F("RFID Scanner Ready"));
  Serial.println(F("Waiting for cards..."));
}

void loop() {
  // Look for new cards
  if (!rfid.PICC_IsNewCardPresent()) return;

  // Verify if the NUID has been read
  if (!rfid.PICC_ReadCardSerial())
    return;

  // Send ONLY the decimal UID to serial (clean format for backend)
  printDec(rfid.uid.uidByte, rfid.uid.size);
  Serial.println();  // Send newline to mark end of UID

  // Halt PICC
  rfid.PICC_HaltA();

  // Stop encryption on PCD
  rfid.PCD_StopCrypto1();

  // Small delay to prevent multiple reads
  delay(1000);
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
