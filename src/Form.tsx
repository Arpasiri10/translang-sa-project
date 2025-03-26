import React, { useState } from 'react';

const Form = () => {
    const [documentName, setDocumentName] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [pageFrom, setPageFrom] = useState('');
    const [pageTo, setPageTo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [languageFrom, setLanguageFrom] = useState<string[]>([]);
    const [languageTo, setLanguageTo] = useState<string[]>([]);
    const [budgetFrom, setBudgetFrom] = useState('');
    const [budgetTo, setBudgetTo] = useState('');
    const [unlimitedBudget, setUnlimitedBudget] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const uploadedFiles = Array.from(e.target.files);
            if (uploadedFiles.length + files.length <= 3) {
                setFiles([...files, ...uploadedFiles]);
            } else {
                alert('You can upload a maximum of 3 files.');
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            documentName,
            documentType,
            pageFrom,
            pageTo,
            startDate,
            endDate,
            files,
            languageFrom,
            languageTo,
            budgetFrom,
            budgetTo,
            unlimitedBudget,
            paymentMethod,
        });
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Translation Request Form</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Document Name</label>
                    <input
                        type="text"
                        value={documentName}
                        onChange={(e) => setDocumentName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Document Type</label>
                    <select
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Document Type</option>
                        <option value="PDF">PDF</option>
                        <option value="Word">Word</option>
                    </select>
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Page From</label>
                        <input
                            type="number"
                            value={pageFrom}
                            onChange={(e) => setPageFrom(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Page To</label>
                        <input
                            type="number"
                            value={pageTo}
                            onChange={(e) => setPageTo(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Start Date</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">End Date</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Upload Files (3 maximum)</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mt-2">
                        {files.map((file, index) => (
                            <div key={index} className="text-gray-600">{file.name}</div>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Language From</label>
                    <select
                        multiple
                        value={languageFrom}
                        onChange={(e) => setLanguageFrom(Array.from(e.target.selectedOptions, option => option.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Language To</label>
                    <select
                        multiple
                        value={languageTo}
                        onChange={(e) => setLanguageTo(Array.from(e.target.selectedOptions, option => option.value))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                    </select>
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Budget From</label>
                        <input
                            type="number"
                            value={budgetFrom}
                            onChange={(e) => setBudgetFrom(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Budget To</label>
                        <input
                            type="number"
                            value={budgetTo}
                            onChange={(e) => setBudgetTo(e.target.value)}
                            disabled={unlimitedBudget}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    checked={unlimitedBudget}
                                    onChange={(e) => setUnlimitedBudget(e.target.checked)}
                                    className="form-checkbox"
                                />
                                <span className="ml-2 text-gray-600">Unlimited</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Payment Method</label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;