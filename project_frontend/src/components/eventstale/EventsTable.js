import React from 'react';

function EventsTable(props) {
    return (
        <div>            
            <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
            <table class="min-w-full">
            <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
            Events
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
            Fees
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
            Starting Date
            </th>
            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
            Duration
            </th>
            <th scope="col" class="relative py-3 px-6">
            <span class="sr-only">Edit</span>
            </th>
            </tr>
            </thead>
            <tbody>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Digital Teaching Techniques
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            750 INR +GST
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            16th June
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                        5 days
            </td>
            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Internship 2022
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            1990 INR +GST
            </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            10th Sept
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            14 Days
            </td>
            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Salesforce
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            6300 INR +GST
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            5th Oct
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            45 Days
            </td>
            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ICTSET
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            INR +GST
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            2022
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            Days
            </td>
            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            </tr>

            <tr class="bg-white dark:bg-gray-800">
            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Techathlon
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            INR +GST
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            2022
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
            Days
            </td>
            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default EventsTable;