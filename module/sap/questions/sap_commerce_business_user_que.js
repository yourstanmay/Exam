/**
 * SAP Commerce Business User Exam
 * Description: Contains questions and answers for the SAP Commerce Business User assessment
 */

// Use window scope to avoid conflicts with other files
window.examName = "SAP Commerce Business User";
window.examCode = "sap_commerce_business_user";

window.questions = [
  {
    number: 1,
    question:
      "You want to feature a page on your storefront that can only be viewed by a special user group. What SAP Commerce user interface do you use to do this?",
    options: [
      "BackOffice Adaptive Search Perspective",
      "SmartEdit",
      "BackOffice Sales Organization Perspective",
      "BackOffice Product Cockpit",
    ],
    multiselect: false,
  },
  {
    number: 2,
    question: "What version(s) of OCC is activated by default?",
    options: ["v1", "v2", "either V1 or V2", "none of the above"],
    multiselect: false,
  },
  {
    number: 3,
    question:
      "You synchronize a media item stored in Hybris from a Staged version to an Online Version. What happens? (Choose 2 that apply)",
    options: [
      "Both Staged and Online Media items will refer to the same image file on the file system",
      "The values of the attribute of the source item in the Staged catalog are copied to the target item in the Online catalog",
      "The Staged and Online media items will refer to two different image files on the filesystem",
      "The different formats of the Staged media item image will be automatically synchronized to the Online catalog version",
    ],
    multiselect: true,
  },
  {
    number: 4,
    question:
      "Choose the macro definition for '$catalogversion' used in the below ImpEx header: INSERT_UPDATE Car;code=[unique=true]:name[lang=en]:unit(code);$catalogVersion",
    options: [
      "catalog Version(catalog(id), version)[unique=true]",
      "catalog Version(catalogVersion(id))[unique=true]",
    ],
    multiselect: false,
  },
  {
    number: 5,
    question: "Which statement is TRUE about the build framework?",
    options: [
      "It compiles extension in a pre-defined order",
      "It generates and compiles sources from items.xml files",
      "Every ant targets compile the source files",
      "It is runnable only from your platform folder",
    ],
    multiselect: false,
  },
  {
    number: 6,
    question:
      "Your apparel store currently offers color and price range facets. Which attributes would also be appropriate for Solr faceting? (Choose 2 that apply)",
    options: ["Summary", "Brand", "Size", "Approval status"],
    multiselect: true,
  },
  {
    number: 7,
    question: "Which JOIN clauses are supported in a FlexibleSearch statement?",
    options: [
      "LEFT JOIN and JOIN",
      "LEFT JOIN and RIGHT JOIN",
      "RIGHT JOIN and JOIN",
      "INNER JOINs",
    ],
    multiselect: false,
  },
  {
    number: 8,
    question:
      "Which user interfaces can be used to change prices? (Choose 2 that apply)",
    options: [
      "Backoffice Product Cockpit",
      "Backoffice Administration Cockpit",
      "SmartEdit",
      "Backoffice Customer Support Cockpit",
    ],
    multiselect: true,
  },
  {
    number: 9,
    question:
      "A customer wants to extend the functionality of the SAP Commerce Accelerator without touching its core code base. What solution do you suggest?",
    options: ["AddOn", "Java library", "Recipe", "localextensions.xml"],
    multiselect: false,
  },
  {
    number: 10,
    question: "Choose the right definition for the modulegen ant task",
    options: [
      "Generate sets of dependent extensions to quickly start new projects or create new applications",
      "Generate a single dependent extension to quickly start new projects or create new applications",
      "Generate new extensions based on existing templates",
      "Generate new empty extensions",
    ],
    multiselect: false,
  },
  {
    number: 11,
    question:
      "What happens when you roll back to a saved version of a page in SmartEdit? (Choose 2 answers that apply)",
    options: [
      "You will NOT be able to edit the recovered version.",
      "You will be able to edit the version you have recovered.",
      "Current work will be saved automatically.",
      "You will have to save your current work otherwise it will be lost.",
    ],
    multiselect: true,
  },
  {
    number: 12,
    question:
      "You have been asked to import some data using ImpEx scripts that create user interface components on a storefront. What tool would you use to execute the ImpEx scripts?",
    options: [
      "Product Cockpit",
      "Order Fulfillment Cockpit",
      "Hybris Administration Console",
      "SmartEdit",
    ],
    multiselect: false,
  },
  {
    number: 13,
    question:
      "Which restriction type is NOT available out-of-the-box for page components?",
    options: [
      "Category Restriction",
      "Time Restriction",
      "IP Address Restriction",
      "Usergroup Restriction",
    ],
    multiselect: false,
  },
  {
    number: 14,
    question:
      "Which user interfaces can be used to change prices? (Choose 2 that apply)",
    options: [
      "Backoffice Product Cockpit",
      "Backoffice Administration Cockpit",
      "SmartEdit",
      "Backoffice Customer Support Cockpit",
    ],
    multiselect: true,
  },
  {
    number: 15,
    question:
      "What actions can you perform using the Advanced Edit mode of SmartEdit? (Choose 2 correct options)",
    options: [
      "Move the homepage to trash",
      "Edit the content of shared slots",
      "Convert shared content slots to non-shared content slot",
      "Create base products and variants",
    ],
    multiselect: true,
  },
  {
    number: 16,
    question:
      "When 2 promotions (promotion engine) have the same priority how does SAP Commerce order them?",
    options: [
      "alphabetically",
      "can't be determined",
      "date of creation",
      "aid",
    ],
    multiselect: false,
  },
  {
    number: 17,
    question:
      "You want to implement an automated CronJob to be executed every day at midnight. What steps do you take to achieve this? (Choose 2 correct answers)",
    options: [
      "Run an ant runcronjob command on the console.",
      "Set up a CronJob Trigger through Backoffice or ImpEx",
      "Set up a CronJob Trigger in the local.properties file.",
      "Create a ServiceLayerJob and register it as a Spring bean.",
    ],
    multiselect: true,
  },
  {
    number: 18,
    question:
      "What can you directly do in the BackOffice Administration Cockpit? (Choose 2 correct options)",
    options: [
      "View all constraints in the system",
      "Create a constraint method",
      "Reload constraints into the validation engine",
      "Create a new constraint type",
    ],
    multiselect: true,
  },
  {
    number: 19,
    question:
      "You are asked to propose an automated high-performance solution for updating the products on a retail store's web site. You are also told that the product portfolio is only updated atthe beginning of the month. What would you propose for this requirement?",
    options: ["Workflows", "Cron jobs", "RESTful web services", "ImpEx"],
    multiselect: false,
  },
  {
    number: 20,
    question: "Where can partners download SAP Commerce?",
    options: [
      "From the SAP Support Portal",
      "From the SAP Wiki",
      "From the SAP Community Network (SCN)",
      "From the SAP GitHub",
    ],
    multiselect: false,
  },
  {
    number: 21,
    question:
      "Where can you configure the Availability to Promise formulas in SAP Commerce Cloud?",
    options: [
      "In the Backoffice Administration Cockpit",
      "In the Backoffice Customer Support Cockpit",
      "In the Backoffice Adaptive Search Perspective",
      "In the Backoffice Order Fulfillment Cockpit",
    ],
    multiselect: false,
  },
  {
    number: 22,
    question: "Which statement is WRONG about extensions ?",
    options: [
      "they have to be inside the bin folder",
      "they need to have a dependency to yempty",
      "they can be written using Groovy",
      "they are always automatically loaded",
    ],
    multiselect: false,
  },
  {
    number: 23,
    question:
      "Which checkout scenarios are supported out-of-the-box in the SAP Commerce, B2C accelerator? (Choose 2 correct options)",
    options: [
      "Express checkout",
      "Guided selling checkout",
      "Guest checkout",
      "One-click checkout",
    ],
    multiselect: true,
  },
  {
    number: 24,
    question:
      "What is the difference between boost rules and promoting items? (Choose 2 correct answers)",
    options: [
      "Boost rules are defined globally while promoted items are category aware",
      "Boosting an item priorizes it more than promoting an item does",
      "Boost rules are attribute-focused while promoted items are product-focused",
      "Promoting an item prioritizes it more than the boost rules do",
    ],
    multiselect: true,
  },
  {
    number: 25,
    question:
      "You need to have region-specific prices in the cart calculation. What customization would be the easiest to implement?",
    options: [
      "Create region-specific UserPriceGroups",
      "Inject a new region attribute into PriceRow",
      "Create a region-specific CalculationService",
      "Create a region-specific PriceFactory",
    ],
    multiselect: false,
  }
];
