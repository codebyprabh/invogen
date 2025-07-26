import PizZip from "pizzip"; // Used to unzip the .docx file
import Docxtemplater from "docxtemplater"; // Library to replace placeholders in docx
// import { saveAs } from "file-saver"; // To trigger download of the generated file

// Helper function to format today's date as DD/MM/YYYY (for Australian format)
const formatDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};
const formatInputDate = (input: string) => {
  const date = new Date(input);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Expected structure of invoice data passed from the form
interface InvoiceData {
  name: string;
  address: string;
  abn: string;
  phone: string;
  to: string;
  invoiceNum: string;
  description: string;
  weekDue: string;
  weekEnding: string;
  hours: number;
  payrate: number;
  accountName: string;
  accountNumber: string;
  bsb: string;
  gst: boolean;
}

// Main function to generate the invoice
export async function generateInvoice(
  templatePath: string,
  formData: InvoiceData
) {
  // Step 1: Fetch the .docx file from the template path
  const response = await fetch(templatePath);
  const blob = await response.blob();

  // Step 2: Read the blob into binary format
  const arrayBuffer = await blob.arrayBuffer();
  const zip = new PizZip(arrayBuffer);

  // Step 3: Load the template into docxtemplater
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Step 4: Perform calculations for totals
  const rawSubtotal = formData.hours * formData.payrate;
  const subtotal = rawSubtotal.toFixed(2); // base pay
  const gstAmount = formData.gst ? (parseFloat(subtotal) * 0.1).toFixed(2) : "N/A"; // GST 10% or N/A
  const total = formData.gst
    ? (parseFloat(subtotal) * 1.1).toFixed(2)
    : subtotal; // Total with or without GST

  // Step 5: Prepare the data object with keys matching the placeholders in the .docx
  const invoiceData = {
    name: formData.name,
    address: formData.address,
    abn: formData.abn,
    phone: formData.phone,
    to: formData.to,
    invoiceNum: formData.invoiceNum,
    date: formatDate(), // today’s date
    description: formData.description,
    weekDue: formatInputDate(formData.weekDue),
    weekEnding: formatInputDate(formData.weekEnding),
    hours: formData.hours.toFixed(2),
    payrate: formData.payrate.toFixed(2),
    gstAmount,
    totalPay: subtotal,
    finalTotal: total,
    accountName: formData.accountName,
    accountNumber: formData.accountNumber,
    bsb: formData.bsb,
  };
  console.log("Final data to fill in template:", invoiceData);

  // Step 6: Inject the data into the template
  doc.setData(invoiceData);

  try {
    // Step 7: Compile and render the final document
    doc.render();
  } catch (error) {
    console.error("Error rendering template:", error);
    return;
  }

  // Step 8: Generate the final .docx and trigger download
  const output = doc.getZip().generate({
    type: "blob",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });

  return {
    blob: output,
    fileName: `${formData.invoiceNum}.docx`,
  };
}
