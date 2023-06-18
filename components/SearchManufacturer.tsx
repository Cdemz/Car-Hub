"use client";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerprops } from "@/types";
import React from "react";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerprops) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              alt=""
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
