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
        question: "When you define a new SolrIndexProperty for a product facet, what can be configured with regard to appearance and behavior?",
        options: ["Image matching based on colors", "Multiselect with AND or OR relations", "Product prices for multi currency indexing", "Multiple values from each indexed object"],
        multiselect: true
    },
    {
        number: 2,
        question: "What are the advantages of using keyword redirection within Search and Navigation?",
        options: ["Customers can be redirected directly to a URL specified by the vendor", "Keywords specify synonyms that redirect to standard catalog terms", "Keywords make Solr searches more efficient", "Keywords redirects can be easily configured using the Backoffice"],
        multiselect: true
    },
    {
        number: 3,
        question: "Which of the following order splitting strategies are provided in the SAP Commerce basecommerce extension?",
        options: ["SplitByWarehouse", "SplitByNamedDeliveryDate", "splitByOrderDate", "splitByAvailableCount"],
        multiselect: true
    },
    {
        number: 4,
        question: "Why would you create an addOn extension?",
        options: ["To extend the Accelerator functionality without modifying the delivered business functionality", "To extend an existing type in the SAP Commerce System", "To add new user interface components into the Accelerator code", "To add a new type into the SAP Commerce system"],
        multiselect: false
    },
    {
        number: 5,
        question: "How is a page typically loaded from a specific accelerator URL?",
        options: ["A controller method is defined from the URL using the RequestMapping annotation. This then returns the name of the page.", "The path to the page is directly referenced by the URL.", "A Façade method is determined from the URL using the naming convention. This then retrieves the name of the page from the database.", "The path to the page is determined from a singleton that knows the location of the page based, on the static mapping from URL to page name."],
        multiselect: false
    },
    {
        number: 6,
        question: "Which interface do you re-implement to select different PriceRows for cart calculation?",
        options: ["FindPriceStratergy", "CommerceCartService", "CalculationService", "Europe1PriceFactory"],
        multiselect: false
    },
    {
        number: 7,
        question: "Which one of the following ImpEx headers can be used to configure user rights for catalog versions?",
        options: ["INSERT_UPDATE SearchRestriction", "INSERT_UPDATE BTGSegment", "$START_USERRIGHTS", "INSERT_UPDATE CatalogVersion"],
        multiselect: false
    },
    {
        number: 8,
        question: "What happens when you synchronize a media item stored in Hybris from a Staged version to an Online Version?",
        options: ["Both Staged and Online Media items will refer to the same image file on the file system.", "The values of the attribute of the source item in the Staged catalog are copied to the target item in the Online catalog", "The Staged and Online media items will refer to two different image files on the filesystem", "The different formats of the Staged media item image will be automatically synchronized to the Online catalog version"],
        multiselect: true
    },
    {
        number: 9,
        question: "How can you start a business process in SAP Commerce?",
        options: ["Invoke the appropriate method of the BusinessProcessService from a script in the hAC scripting console to start the business process.", "Invoke the appropriate method of the BusinessProcessService from Java code to start the business process", "Use the hMC Business Process section to start the business process", "Use the Backoffice Business Process section to start the business process"],
        multiselect: true
    },
    {
        number: 10,
        question: "How can a view of a widget be defined?",
        options: ["As a *.zul file", "In Java", "As a velocity template", "As a *.jsp file"],
        multiselect: true
    },
    {
        number: 11,
        question: "What do you need to provide to define the data that is to be loaded into solr index?",
        options: ["An impex script for full load", "A flexible search query for a full load", "A flexible search query for an incremental update", "A solr configuration file"],
        multiselect: true
    },
    {
        number: 12,
        question: "When are consignments created for an order?",
        options: ["When an administrator approves the order", "After the order is placed and before it is sourced successfully", "When the user adds items to the cart", "After the order is placed and after it is sourced successfully"],
        multiselect: false
    },
    {
        number: 13,
        question: "You are asked to define a new business process. What steps do you perform?",
        options: ["Define the actions as Spring beans", "List the actions in a process xml file", "Create actions in java code", "Define action as new item type"],
        multiselect: true
    },
    {
        number: 14,
        question: "What is the difference between CMS page restriction and search restriction?",
        options: ["Search restrictions are applied automatically in the FlexibleSearch. CMS restriction must be involved explicitly for the frontend", "CMS page restrictions are transformed into search restrictions at runtime", "CMS page restriction are catalog version aware. Search restrictions are not catalog version aware", "All applicable search restrictions are applied from the current context. There can be only one CMS page restrictions for a page"],
        multiselect: true
    },
    {
        number: 15,
        question: "In which implementation is the JSR 303 standard used?",
        options: ["Backoffice validation", "Backoffice permission management", "Backoffice SSO(Single sign on)", "Backoffice Dynamic forms"],
        multiselect: false
    },
    {
        number: 16,
        question: "What are Addons specifically designed to allow an SAP Commerce developer to do?",
        options: ["Extend the Accelerator storefront", "Extend the backoffice", "Import sample data by convention", "Provide a new web application"],
        multiselect: true
    },
    {
        number: 17,
        question: "What is the recommended way to deploy Solr in a production environment?",
        options: ["As one master server and multiple slave servers", "As a cluster of co-equal master servers", "As a standalone server", "As embedded with the hybris server"],
        multiselect: false
    },
    {
        number: 18,
        question: "What can you do in the browser area in the WCMS page view perspective?",
        options: ["Edit pages and page components", "Add restriction on a page", "Synchronize a page", "Synchronize complete content catalogs"],
        multiselect: true
    },
    {
        number: 19,
        question: "What can you configure in a widget definition (definition.xml) file?",
        options: ["The available virtual sockets", "The view file", "The business logic of the widget via a bean shell script", "The default values for widget settings"],
        multiselect: true
    },
    {
        number: 20,
        question: "You need to have region-specific prices in the cart calculation. What customization would be the easiest to implement?",
        options: ["Create a region-specific PriceFactory", "Create a region-specific CalculationService", "Create region-specific UserPriceGroups", "Inject a new region attribute into PriceRow"],
        multiselect: false
    },
    {
        number: 21,
        question: "Which methods can you use to create a new Omni Commerce Connect(OCC) web service?",
        options: ["Use ant extgen to create an AddOn extension using acceleratoraddon as the template", "Use ant extgen to create an AddOn extension using yoccaddon as the template", "Use ant extgen to create a new extension using ycommercewebservices as the template", "Use ant modulegen to create a new extension using yacceleratorstorefront as the template"],
        multiselect: true
    },
    {
        number: 22,
        question: "What is the best practice to add a new parameter to an existing method of CommerceCartService?",
        options: ["Add a new property to CommerceCartParameter in a beans.xml file", "Extend the default strategy called by the method to handle the new parameter", "Overload the existing method of CommerceCartService by adding the new parameter", "Extend the default implementation of the method in order to handle the new parameter"],
        multiselect: true
    },
    {
        number: 23,
        question: "What is included in a CMS page template?",
        options: ["Content slot names", "Velocity template", "Zul page templates", "Component controllers"],
        multiselect: true
    },
    {
        number: 24,
        question: "When a customer places an order using the default order management system, at which stage does the fulfillment process send the notification that the order is placed?",
        options: ["After the order has been completely sourced", "At the first stage of the fulfillment process", "After the order has been fraud checked", "After the payment has been processed"],
        multiselect: false
    },
    {
        number: 25,
        question: "What are the advantages of using classification attributes?",
        options: ["Changes can be made without loss of classification attributes data", "Rebuilding and redeployment are not required.", "Classification attributes can be applied to any type", "Business users can create or modify classification attributes using the backoffice"],
        multiselect: true
    }
]; 