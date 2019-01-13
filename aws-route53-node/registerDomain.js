var data = {
  domainName : "voicelms.com",
  company : undefined,
  firstName : "Steve",
  LastName : "Tingiris",
  address1 : "10110 Downey Lane",
  address2 : undefined,
  city : "Tampa",
  state : "FL",
  zip : "33626",
  country : "US",
  email : "steve@tingiris.com",
  contactType : "PERSON",
  phone : "+1.8133060000",
  fax : undefined,
  extraParams : []
};

var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

var route53domains = new AWS.Route53Domains({apiVersion: '2014-05-15'});

// NOTE: The following options are possible for ContactType and the Name value for ExtraParams
// ContactType: PERSON | COMPANY | ASSOCIATION | PUBLIC_BODY | RESELLER
// ExtraParams Name: DUNS_NUMBER | BRAND_NUMBER | BIRTH_DEPARTMENT | BIRTH_DATE_IN_YYYY_MM_DD | BIRTH_COUNTRY | BIRTH_CITY | DOCUMENT_NUMBER | AU_ID_NUMBER | AU_ID_TYPE | CA_LEGAL_TYPE | CA_BUSINESS_ENTITY_TYPE | ES_IDENTIFICATION | ES_IDENTIFICATION_TYPE | ES_LEGAL_FORM | FI_BUSINESS_NUMBER | FI_ID_NUMBER | IT_PIN | RU_PASSPORT_DATA | SE_ID_NUMBER | SG_ID_NUMBER | VAT_NUMBER

    // ExtraParams: [
    //   {
    //     Name: DUNS_NUMBER | BRAND_NUMBER | BIRTH_DEPARTMENT | BIRTH_DATE_IN_YYYY_MM_DD | BIRTH_COUNTRY | BIRTH_CITY | DOCUMENT_NUMBER | AU_ID_NUMBER | AU_ID_TYPE | CA_LEGAL_TYPE | CA_BUSINESS_ENTITY_TYPE | ES_IDENTIFICATION | ES_IDENTIFICATION_TYPE | ES_LEGAL_FORM | FI_BUSINESS_NUMBER | FI_ID_NUMBER | IT_PIN | RU_PASSPORT_DATA | SE_ID_NUMBER | SG_ID_NUMBER | VAT_NUMBER, /* required */
    //     Value: 'STRING_VALUE' /* required */
    //   },
    //   /* more items */
    // ],

var params = {
  AdminContact: { /* required */
    AddressLine1: data.address1,
    AddressLine2: data.address2,
    City: data.city,
    ContactType: data.contactType,
    CountryCode: data.country,
    Email: data.email,
    ExtraParams: data.extraParams,
    Fax: data.fax,
    FirstName: data.firstName,
    LastName: data.LastName,
    OrganizationName: data.company,
    PhoneNumber: data.phone,
    State: data.state,
    ZipCode: data.zip
  },
  DomainName: data.domainName, /* required */
  DurationInYears: 1, /* required */
  RegistrantContact: { /* required */
    AddressLine1: data.address1,
    AddressLine2: data.address2,
    City: data.city,
    ContactType: data.contactType,
    CountryCode: data.country,
    Email: data.email,
    ExtraParams: data.extraParams,
    Fax: data.fax,
    FirstName: data.firstName,
    LastName: data.LastName,
    OrganizationName: data.company,
    PhoneNumber: data.phone,
    State: data.state,
    ZipCode: data.zip
  },
  TechContact: { /* required */
    AddressLine1: data.address1,
    AddressLine2: data.address2,
    City: data.city,
    ContactType: data.contactType,
    CountryCode: data.country,
    Email: data.email,
    ExtraParams: data.extraParams,
    Fax: data.fax,
    FirstName: data.firstName,
    LastName: data.LastName,
    OrganizationName: data.company,
    PhoneNumber: data.phone,
    State: data.state,
    ZipCode: data.zip
  },
  AutoRenew: false,
  IdnLangCode: '',
  PrivacyProtectAdminContact: true,
  PrivacyProtectRegistrantContact: true,
  PrivacyProtectTechContact: true
};

route53domains.registerDomain(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
