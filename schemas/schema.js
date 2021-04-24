// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Address",
      name: "address",
      type: "object",
      fields: [
        {
          title: "Street Address",
          name: "streetAddress",
          type: "string"
        },
        {
          title: "Line 2",
          name: "streetAddressLine2",
          type: "string"
        },
        {
          title: "City",
          name: "city",
          type: "string"
        },
        {
          title: "State",
          name: "state",
          type: "string"
        },
        {
          title: "Zip Code",
          name: "zipCode",
          type: "string"
        }
      ]
    },
    {
      title: "Client",
      name: "client",
      type: "document",
      fields: [
        {
          title: "First Name",
          name: "firstName",
          type: "string"
        },
        {
          title: "Last Name",
          name: "lastName",
          type: "string"
        },
        {
          name: "email",
          title: "Email Address",
          type: "string",
          fieldset: "contactInfo"
        },
        {
          name: "phone",
          title: "Phone Number",
          type: "string",
          fieldset: "contactInfo"
        },
        {
          title: "Address",
          name: "address",
          type: "address"
        },
        {
          name: "jobs",
          title: "Jobs",
          type: "array",
          of: [{ type: "job" }]
        }
      ],
      fieldsets: [
        {
          name: "contactInfo",
          title: "Contact Information"
        }
      ]
    },
    {
      name: "job",
      title: "Job",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string"
        },
        {
          name: "description",
          title: "Description",
          type: "string"
        },
        {
          name: "hourlyRate",
          title: "Hourly Rate (dollars)",
          type: "number"
        },
        {
          name: "notes",
          title: "Notes",
          type: "text"
        },
        {
          name: "supplies",
          title: "Supply List",
          type: "array",
          of: [{ type: "supply" }]
        },
        {
          name: "labor",
          title: "Labor",
          type: "array",
          of: [{ type: "jobTime" }]
        },
        {
          name: "done",
          title: "Completed",
          type: "boolean"
        },
        {
          name: "completionDate",
          title: "Completion Date",
          type: "date"
        }
      ]
    },
    {
      name: "supply",
      title: "Supply",
      type: "object",
      fields: [
        {
          name: "Name",
          title: "Name",
          type: "string"
        },
        {
          name: "details",
          title: "Details",
          type: "string"
        },
        {
          name: "cost",
          title: "Cost",
          type: "number"
        },
        {
          name: "datePurchased",
          title: "Date Purchased",
          type: "date"
        },
        {
          name: "locationPurchased",
          title: "Location Purchased",
          type: "string"
        },
        {
          name: "receipt",
          title: "Receipt",
          type: "image"
        }
      ]
    },
    {
      name: "jobTime",
      title: "Time",
      type: "object",
      fields: [
        {
          name: "date",
          title: "Date",
          type: "date"
        },
        {
          name: "amount",
          title: "Hours",
          type: "number"
        },
        {
          name: "notes",
          title: "Notes",
          type: "text"
        }
      ]
    }
  ]),
})
