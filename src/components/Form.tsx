import React, { useState } from "react";
import thumb from "../assets/marketplace-thumb.png";

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
  const [gst, setGst] = useState(true);

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Get Started...</h2>
      <form className="w-full max-w-3xl   ">
        <div className="bg-neutral-100 border-0 rounded-md py-8 px-6 grid grid-cols-1 md:grid-cols-2 gap-2">
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

          <div className="flex items-center m-4">
            <label className="font-semibold w-24" htmlFor="template">
              Template:
            </label>
            <a href="/marketplace" id="template">
              <img
                className="cursor-pointer w-38 h-auto transition-transform duration-200 hover:scale-105"
                src={thumb}
                alt="Choose Template"
              />
            </a>
          </div>

          <div className="flex items-center m-4">
            <label className="font-semibold w-24" htmlFor="gst">
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
        <div className="flex justify-center">
          <button
            className="mt-6 bg-amber-400 text-white font-semibold py-2 px-6 rounded hover:bg-yellow-400 transition cursor-pointer"
            type="submit"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
