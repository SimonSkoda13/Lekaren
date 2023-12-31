import React from "react";
import { HeaderContactItem } from "@/app/components/Layout/Header/components/HeaderContactItem";
import { Clock, MapPin, Phone } from "lucide-react";

export interface HeaderContactItemsProps {}

export const HeaderContactItems = (props: HeaderContactItemsProps) => {
  const {} = props;
  return (
    <div className={"flex items-center gap-8 text-sm"}>
      <HeaderContactItem
        className={"hidden lg:flex"}
        icon={Clock}
        text={
          <>
            <span>{"Po - Ne"}</span>
            <span className={"text-primary-500 ml-1"}>{"9:00 - 21:00"}</span>
          </>
        }
      />
      <HeaderContactItem
        icon={Phone}
        text={
          <>
            <span>{"+421 910 545 251"}</span>
          </>
        }
        href={"tel:+421910545251"}
      />
      <HeaderContactItem
        className={"hidden lg:flex"}
        icon={MapPin}
        text={"Na Troskách 26, Banská Bystrica"}
        href={"https://goo.gl/maps/gNL57JXBzbidbdaA7"}
      />
    </div>
  );
};
