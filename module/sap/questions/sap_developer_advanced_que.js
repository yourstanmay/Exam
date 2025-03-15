/**
 * SAP Commerce Developer Advanced Exam Questions
 * File: sap_developer_advanced_que.js
 * Description: Contains questions for the SAP Commerce Developer Advanced certification exam
 */

// Use window scope to avoid conflicts with other files
window.examName = "SAP Commerce Developer Advanced";
window.examCode = "sap_developer_advanced";

window.questions = [
  {
    number: 1,
    question:
      "Which one of the following design patterns provides a single, simplified interface to a complex and interdependent model?",
    options: [
      "Strategy Objects",
      "Model View Controller or the Front-end Layer",
      "SAP Hybris Service Layer",
      "Façade Layer",
    ],
    multiselect: false,
  },
  {
    number: 2,
    question:
      "For the following query to be imported successfully what changes need to be done ? [Choose 2 correct options] </br>$productCatalog=apparelProductCatalog</br>$productCatalogName=Apparel Product Catalog</br>INSERT_UPDATE ApparelProduct;code;$catalogVersion;unit(code);supercategories(code,$catalogVersion)</br>:300441142 ;; pieces;Blue Tomato,caps",
    options: [
      "add a macro for catalog version",
      "change the attribute header INSERT_UPDATE to INSERT_UNIQUE",
      "mark code with [unique=true]",
      "use the type Product instead of ApparelProduct",
    ],
    multiselect: true,
  },
  {
    number: 3,
    question:
      "What is the default cardinality while defining an attribute in an itemtype?",
    options: [
      "One-to-many relation",
      "One-to-one relation",
      "Many-to-one relation",
      "All of the above",
    ],
    multiselect: false,
  },
  {
    number: 4,
    question:
      "What happens when you use a deployment tag in the items.xml? [Choose 3 correct options]",
    options: [
      "1:many relations are defined on a column",
      "Many:many relations are defined as a table",
      "1:many relations are stored in the links table",
      "1:many relationships have an order column when ordered=true",
      "1:many relations are binary objects",
    ],
    multiselect: true,
  },
  {
    number: 5,
    question:
      '<pre><code>&lt;itemtype code="Product" extends="GenericItem" jaloclass="de.hybris.platform.jalo.product.Product" autocreate="true" generate="true"&gt;\n' +
      '  &lt;deployment table="Products" typecode="1" propertytable="ProductProps"/&gt;\n' +
      "  &lt;attributes&gt;\n" +
      '    &lt;attribute autocreate="true" qualifier="expiryDate" type="java.lang.Long" generate="true"&gt;\n' +
      '      &lt;persistence type="dynamic" attributeHandler="defaultExpiryDateHandler"/&gt;\n' +
      '      &lt;modifiers read="true" write="false" search="false" optional="true"/&gt;\n' +
      "    &lt;/attribute&gt;\n" +
      "  &lt;/attributes&gt;\n" +
      "&lt;/itemtype&gt;\n" +
      "\n" +
      '&lt;itemtype code="MyProduct" extends="Product" autocreate="true" generate="true"&gt;\n' +
      '  &lt;deployment table="MyProduct" typecode="12345"/&gt;\n' +
      "  &lt;attributes&gt;\n" +
      '    &lt;attribute autocreate="true" qualifier="expiryDate" redeclare="true" type="java.lang.Long" generate="true"&gt;\n' +
      '      &lt;persistence type="dynamic" attributeHandler="customExpiryDateHandler"/&gt;\n' +
      '      &lt;modifiers read="true" write="false" search="false" optional="true"/&gt;\n' +
      "    &lt;/attribute&gt;\n" +
      "  &lt;/attributes&gt;\n" +
      "&lt;/itemtype&gt;</code></pre>" +
      "MyProduct extends Product. Dynamic attribute handler is changed to customExpiryDateHandler. Which of the following is TRUE?",
    options: [
      "Redeclaring an attribute handler has no impact. DefaultExpiryDateHandler is considered here.",
      "You can only redeclare modifiers (read/write) of an attribute or make an attribute unique.",
      "Throws cannot override attribute handler exception.",
      "You can redeclare an attribute handler using redeclare.",
    ],
    multiselect: false,
  },
  {
    number: 6,
    question:
      "Which among the following file is responsible for calling the Platform build for performing actual action.",
    options: [
      "extensioninfo.xsd",
      "platformhome.properties",
      "build.xml",
      "extensioninfo.xml",
    ],
    multiselect: false,
  },
  {
    number: 7,
    question:
      "The basic element that a SAP Hybris installation must consist of is:",
    options: [
      "platform_only",
      "Commerce module",
      "Content module",
      "Orders module",
      "Channel module",
    ],
    multiselect: false,
  },
  {
    number: 8,
    question: "What service should be used to save a model?",
    options: [
      "persistenceService",
      "jaloService",
      "serviceLayerService",
      "modelService",
    ],
    multiselect: false,
  },
  {
    number: 9,
    question:
      "Determine the validity of the below the FlexibleSearchQuery and choose the best possible answer:</br>select {p.description[fr]:o} from {Product as p} where {p:pk} in</br>( « select {p:pk} from {product as p} where {p:code} like'%0%' }} )",
    options: [
      "no",
      "yes if we delete :o",
      "yes if we delete the whole where statement",
      "yes",
    ],
    multiselect: false,
  },
  {
    number: 10,
    question:
      "Riya created an impex file with the name assignments-projectdata.impex under the correct folder hierarchy to enable Convention over Configuration style of import. <br> She happened to modify this file. What is the next task she needs to do in order to apply the changes made in the impex file?",
    options: [
      "Run ant all",
      "Run ant clean all",
      "Run updatesystem",
      "Do nothing. Impex files are imported automatically for the ones who follow Convention over Configuration style of import",
    ],
    multiselect: false,
  },
  {
    number: 11,
    question:
      "In the SAP ecosystem where are enumeration types stored? [Choose 2 correct options]",
    options: [
      "Non-dynamic enumerations are stored in a solr index",
      "Dynamic enumerations are stored in the database",
      "Dynamic enumerations are stored in property files",
      "Non-dynamic enumerations are stored as Enumeration classes",
    ],
    multiselect: true,
  },
  {
    number: 12,
    question:
      "Where are the model classes and data transfer objects created and stored whenever we build the system?",
    options: [
      "In the custom extension folder.",
      "Inside platform folder of your custom extension.",
      "Inside the config folder.",
      "None of the options.",
    ],
    multiselect: false,
  },
  {
    number: 13,
    question:
      "How is the primary key (PK) for a hybris item created? – [Choose 2 correct options]",
    options: [
      "It is generated from a counter and the type code of the item.",
      "It is automatically generated and assigned.",
      "It is generated from the hybris license.",
      "It is created manually by setting it in a model of the item prior to saving the item.",
    ],
    multiselect: true,
  },
  {
    number: 14,
    question: "Properties defined in ____ file has the most precedence.",
    options: [
      "project.properties of extension",
      "project.properties of platform",
      "local.properties",
      "Depends on the Order extension in local.properties",
    ],
    multiselect: false,
  },
  {
    number: 15,
    question:
      "Which attribute enables you to add attributes to the hybris Models without saving the attribute in table.",
    options: ["Jalo", "Dynamic", "Pesistance", "CMP"],
    multiselect: false,
  },
  {
    number: 16,
    question: "Which tag allows us to create composed types?",
    options: [
      "<atomictypes></atomictypes>",
      "<collectiontypes></collectiontypes>",
      "<itemtypes></itemtypes>",
      "<composedtypes></composedtypes>",
    ],
    multiselect: false,
  },
  {
    number: 17,
    question: "A recipe can help you perform which of the following tasks?",
    options: [
      "Install a required accelerator",
      "Initialize a required accelerator",
      "Start the hybris server",
      "Clean and build the server changes",
    ],
    multiselect: false,
  },
  {
    number: 18,
    question: "Select the existing Impex header mode.",
    options: ["INSERTED", "UPDATE_INSERT", "REMOVE", "DELETE"],
    multiselect: false,
  },
  {
    number: 19,
    question:
      "What statements are TRUE about the SAP Hybris server? [Choose 3 correct options]",
    options: [
      "based on Apache Tomcat",
      "recommended for production",
      "compatible with EJB",
      "can be started from the command line",
    ],
    multiselect: true,
  },
  {
    number: 20,
    question:
      "What are the various ways in which events can be created in SAP Commerce? [Choose 2 correct options]",
    options: [
      "by creating DTO in beans.xml",
      "by creating item in items.xml",
      "by creating template in impex",
      "by creating bean in package",
    ],
    multiselect: true,
  },
  {
    number: 21,
    question:
      '<pre><code>&lt;itemtype code="Customer" extends="User" \n' +
      'jaloclass="de.hybris.platform.jalo.user.Customer" autocreate="true" generate="true"&gt;\n' +
      "&lt;/itemtype&gt;</code></pre>" +
      "Observe the above code snippet and choose the right statement from below?",
    options: [
      "Deployment table 'customers' created automatically.",
      "Instances of 'Customer' saved in Deployment table of 'User'.",
      "Throws exception.",
      "Instances of 'Customer' saved in Deployment table of 'GenericItem'.",
    ],
    multiselect: false,
  },
  {
    number: 22,
    question:
      "Which of the following are TRUE about the service layer in SAP Commerce? (Choose 3 correct options)",
    options: [
      "Facades orchestrates Converters",
      "Facades orchestrates Services",
      "Services orchestrates Strategies",
      "Facades orchestrates strategies",
    ],
    multiselect: true,
  },
  {
    number: 23,
    question: "________ is called before a model is saved to the database.",
    options: [
      "LoadInterceptor",
      "InitDefaultInterceptor",
      "PrepareInterceptor",
      "ValidateInterceptor",
    ],
    multiselect: false,
  },
  {
    number: 24,
    question:
      "The platform is restarted without running ant all. Which of the following changes will still reflect on the platform? [Choose 2 correct options]",
    options: [
      "Definition of a new item type in the items.xml file for an extension.",
      "Removal of an extension from the localextensions.xml file.",
      "Addition of a spring bean definition.",
      "Changes to database properties in the local.properties file.",
    ],
    multiselect: true,
  },
  {
    number: 25,
    question:
      "Which of the following statements are TRUE about Cronjobs? [Choose 3 correct options]",
    options: [
      "Cronjobs are abortable only if isAboratable() method is implemented",
      "Cronjobs can be started from backoffice",
      "Cronjobs can be started from flexible search query",
      "Cronjobs can be run manually using ant runcronjob",
    ],
    multiselect: true,
  },
];
