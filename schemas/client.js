import address  from "./address"

export default {
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
      title: "Address",
      name: "address",
      type: "reference",
      to: [{ type: "address" }]
    }
  ]
}
