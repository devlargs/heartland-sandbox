// current keys
// pkapi_cert_BB1jAqse6tawxLQe8Y
// skapi_cert_MUc0AgA9xWEAs748jQVSV2v1rJuJmAc-SDLWQz--uA

const secretApiKey = "skapi_cert_MUc0AgA9xWEAs748jQVSV2v1rJuJmAc-SDLWQz--uA";
const { Address, CreditCardData, ServicesConfig, ServicesContainer } = require('globalpayments-api');

const config = new ServicesConfig();
config.secretApiKey = secretApiKey;
config.developerId = "000000";
config.versionNumber = "0000";
config.serviceUrl = "https://cert.api2.heartlandportico.com";
ServicesContainer.configure(config);

const card = new CreditCardData();
card.number = "2223000010005780";
card.expMonth = "12";
card.expYear = "2019";
card.cvn = "900";
card.token = "supt_w8PEMRENTE4tqqt4UFNGGELC";

// const address = new Address();
// address.code = "12345";

async function test () {
  const response = await card.charge(400)
   .withCurrency("USD")
  //  .withAddress(address)
   .execute();

   console.log(response);
}
 
test();

// const card = new CreditCardData();
// card.number = "4263970000005262";
// card.expMonth = "12";
// card.expYear = "2025";
// card.cvn = "123";

// card.charge(129.99).withCurrency("EUR")
// .withCurrency("EUR")
// .execute()
// .then((response) => {
//   const result = response.responseCode;
//   const message = response.responseMessage;
// })
// .catch((e) => {
//   console.log("putangina nyo")
//   console.log(e);
// });
