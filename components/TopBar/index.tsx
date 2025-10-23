import Image from "next/image";
import React from "react";

export interface TopBarProps {
  title?: string;
  className?: string;
}

const AccountCreationTopBar: React.FC<TopBarProps> = ({
  title = "MyJunuvo",
  className = "",
}) => (
  <header
    className={`flex gap-5 items-center p-5 border-b border-gray-200 bg-primary ${className}`}
  >
    <div>
      <Image
        src={"/images/logo.svg"}
        alt="Auth Background"
        width={150}
        height={42}
        priority
        className=""
        title={title}
      />
    </div>
  </header>
);

export default AccountCreationTopBar;
