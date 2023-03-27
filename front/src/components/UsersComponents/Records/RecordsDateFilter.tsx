import { useState } from 'react';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';

export default function RecordsDateFilter() {
  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  return (

    <div>
      <form action="">
        <DateRangePicker
          // label="Book hotel"
          placeholder="Pick dates range"
          value={value}
          onChange={setValue}
        />
        <button type="submit"

          className="absolute top-0 right-0 p-1.5 text-md font-medium text-black bg-powderblue-shades10% rounded-r-lg border border-powderblue-shades10% hover:bg-powderblue-shades20% focus:ring-4 focus:outline-none focus:ring-powderblue-shades20%  ">
          Filter
        </button>

      </form>

    </div>
  );
}