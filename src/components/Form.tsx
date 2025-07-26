import React, { useState } from "react";
import thumb from "../assets/marketplace-thumb.png";
import MarketPlace from "./Modals/MarketplaceModal";

import mktlogo from "../assets/marketplace-logo.png";
import { generateInvoice } from "../utils/generateInvoice";
import InvoiceSuccess from "./InvoiceSuccess";

const InvoiceForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [to, setTo] = useState("");
  const [abn, setAbn] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [invoiceNum, setInvoiceNum] = useState("");
  const [hours, setHours] = useState("");
  const [payrate, setPayrate] = useState("");
  const [weekDue, setWeekDue] = useState("");
  const [weekEnding, setWeekEnding] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bsb, setBsb] = useState("");
  const [gst, setGst] = useState(true);

  const [showSuccess, setShowSuccess] = useState(false);
  const [generatedFile, setGeneratedFile] = useState<Blob | null>(null);
  const [generatedFileName, setGeneratedFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedTemplate) {
      alert("Please select a template first.");
      return;
    }

    const formData = {
      name,
      address,
      abn,
      phone,
      to,
      invoiceNum,
      description,
      weekDue,
      weekEnding,
      hours: parseFloat(hours),
      payrate: parseFloat(payrate),
      accountName,
      accountNumber,
      bsb,
      gst,
    };

    const result = await generateInvoice(selectedTemplate.file, formData);

    setShowSuccess(true); // Show success screen

      // Optional: reset form fields after short delay
      setTimeout(() => {
        resetForm(); // clear state
      }, 500); // delay clearing for smoother transition

      if (result) {
      setGeneratedFile(result.blob);
      setGeneratedFileName(result.fileName);
      setShowSuccess(true);
    }
    };
    const resetForm = () => {
      setName("");
      setAddress("");
      setTo("");
      setAbn("");
      setPhone("");
      setDescription("");
      setInvoiceNum("");
      setHours("");
      setPayrate("");
      setWeekDue("");
      setWeekEnding("");
      setAccountName("");
      setAccountNumber("");
      setBsb("");
      setGst(true);
      setSelectedTemplate(null);
  };
  

  // MODALS
  const [isMarketModalOpen, setIsMarketModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    file: string;
  } | null>(null);

  return (
    <div className="flex flex-col items-center px-4 py-6">
      {!showSuccess ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Get Started...</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-3xl   ">
            <div className="bg-neutral-100/25 shadow rounded-md py-8 px-6 grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* LEFT COLUMN */}
              <div>
                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="name">
                    Name:
                  </label>
                  <input
                    className=" ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="address">
                    Address:
                  </label>
                  <input
                    className=" ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="e.g. 123 St, Melbourne, VIC 3000"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="to">
                    To:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="to"
                    name="to"
                    type="text"
                    placeholder="e.g. ABC Pty Ltd, 456 George St, Sydney"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="abn">
                    ABN:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="abn"
                    name="abn"
                    type="text"
                    placeholder="e.g. 12 345 678 901"
                    value={abn}
                    onChange={(e) => setAbn(e.target.value)}
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="phone">
                    Phone:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g. +61 412 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="description">
                    Description:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="description"
                    name="description"
                    type="text"
                    placeholder="e.g. Web development services"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              {/* RIGHT COLUMN */}
              <div>
                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="invoiceNum">
                    Invoice Number:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="invoiceNum"
                    name="invoiceNum"
                    type="text"
                    placeholder="e.g. INV-001"
                    required
                    value={invoiceNum}
                    onChange={(e) => setInvoiceNum(e.target.value)}
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="hours">
                    Hours:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="hours"
                    name="hours"
                    type="number"
                    min={0}
                    step="0.01"
                    placeholder="e.g. 40"
                    required
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="payrate">
                    Payrate:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="payrate"
                    name="payrate"
                    type="number"
                    min={0}
                    step="0.01"
                    placeholder="e.g. $35"
                    required
                    value={payrate}
                    onChange={(e) => setPayrate(e.target.value)}
                  />
                </div>
                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="weekDue">
                    Week Due:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="weekDue"
                    name="weekDue"
                    type="date"
                    required
                    value={weekDue}
                    onChange={(e) => setWeekDue(e.target.value)}
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="weekEnding">
                    Week Ending:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="weekEnding"
                    name="weekEnding"
                    type="date"
                    required
                    value={weekEnding}
                    onChange={(e) => setWeekEnding(e.target.value)}
                  />
                </div>
              </div>
              {/* SECOND ROW */}
              <div>
                <h2 className="text-lg font-bold">Payable To:</h2>
                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="accountName">
                    Bank Name:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="accountName"
                    name="accountName"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                  />
                </div>
                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="accountNumber">
                    Account No:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="accountNumber"
                    name="accountNumber"
                    type="text"
                    placeholder="e.g. 11000000"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>

                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="bsb">
                    BSB:
                  </label>
                  <input
                    className="ml-4 color-grey text-grey flex-1 border-b-2 text-sm focus:outline-none focus:ring-0"
                    id="bsb"
                    name="bsb"
                    type="text"
                    placeholder="e.g. 00001"
                    value={bsb}
                    onChange={(e) => setBsb(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center m-4">
                  <label className="font-semibold w-24" htmlFor="template">
                    Template:
                  </label>
                  {selectedTemplate ? (
                    <>
                      <span className="text-sm text-gray-600 font-medium">
                        {selectedTemplate.title}
                      </span>
                      <img
                        id="template"
                        className="cursor-pointer w-9 ml-6 h-auto transition-transform duration-200 hover:scale-105"
                        src={mktlogo}
                        alt="Choose Template"
                        onClick={() => setIsMarketModalOpen(true)}
                      />
                    </>
                  ) : (
                    <img
                      id="template"
                      className="cursor-pointer w-38 h-auto transition-transform duration-200 hover:scale-105"
                      src={thumb}
                      alt="Choose Template"
                      onClick={() => setIsMarketModalOpen(true)}
                    />
                  )}
                </div>
                <div className="flex items-center m-4">
                  <label className="font-semibold w-28" htmlFor="gst">
                    Include GST?
                  </label>
                  <input
                    className="cursor-pointer ml-4 color-grey text-grey"
                    id="gst"
                    name="gst"
                    type="checkbox"
                    checked={gst}
                    onChange={(e) => setGst(e.target.checked)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="mt-6 bg-amber-400 text-white font-semibold py-2 px-6 rounded hover:bg-yellow-400 transition cursor-pointer"
                type="submit"
              >
                Generate
              </button>
            </div>
          </form>
          {isMarketModalOpen && (
            <MarketPlace
              onClose={() => setIsMarketModalOpen(false)}
              onTemplateSelect={(template) => {
                setSelectedTemplate(template);
                setIsMarketModalOpen(false);
              }}
            />
          )}
        </>
      ) : (
        <InvoiceSuccess
          onGenerateAgain={() => {
            setShowSuccess(false);
            resetForm();
          }}
          fileBlob={generatedFile}
          fileName={generatedFileName}
        />
      )}
    </div>
  );
};

export default InvoiceForm;
